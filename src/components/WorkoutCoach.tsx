import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Check, Sparkles, Flame, Activity, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { WORKOUT_PROGRAMS } from '../data/fitnessData';
import { WorkoutProgram, Exercise } from '../types/fitness';

export const WorkoutCoach: React.FC = () => {
  // Calculator state
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(26);
  const [weightKg, setWeightKg] = useState<number>(72);
  const [heightCm, setHeightCm] = useState<number>(178);
  const [activity, setActivity] = useState<'sedentary' | 'moderate' | 'very_active'>('moderate');
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'fitness'>('fat_loss');

  // Workout state
  const [selectedProgram, setSelectedProgram] = useState<WorkoutProgram>(WORKOUT_PROGRAMS[0]);
  const [completedSets, setCompletedSets] = useState<{ [key: string]: boolean }>({});

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState<number>(45);
  const [timerMax, setTimerMax] = useState<number>(45);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<'work' | 'rest'>('work');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const intervalRef = useRef<any>(null);

  // Audio beep using Web Audio API
  const playBeep = (freq = 600, duration = 0.15) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // AudioContext unavailable
    }
  };

  // Timer countdown effect
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            playBeep(880, 0.3); // High completion beep
            setIsRunning(false);
            return 0;
          }
          if (prev <= 4) {
            playBeep(440, 0.08); // Warning countdown beeps
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, soundEnabled]);

  const startPresetTimer = (seconds: number, mode: 'work' | 'rest') => {
    setTimerMax(seconds);
    setTimerSeconds(seconds);
    setTimerMode(mode);
    setIsRunning(true);
  };

  const toggleSetComplete = (exerciseId: string, setIndex: number) => {
    const key = `${exerciseId}-${setIndex}`;
    setCompletedSets((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Metabolic calculations
  const heightM = heightCm / 100;
  const bmi = +(weightKg / (heightM * heightM)).toFixed(1);
  
  // Mifflin-St Jeor formula for BMR
  let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + (gender === 'male' ? 5 : -161);
  const activityMultiplier = activity === 'sedentary' ? 1.2 : activity === 'moderate' ? 1.55 : 1.725;
  const tdee = Math.round(bmr * activityMultiplier);
  
  const targetCalories =
    goal === 'fat_loss'
      ? Math.round(tdee - 450)
      : goal === 'muscle_gain'
      ? Math.round(tdee + 350)
      : tdee;

  // Recommended macronutrients
  const proteinGrams = Math.round(weightKg * (goal === 'muscle_gain' ? 2.0 : 1.8));
  const fatGrams = Math.round((targetCalories * 0.25) / 9);
  const carbsGrams = Math.round((targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4);

  // Progress percentage in workout
  const totalSetsCount = selectedProgram.exercises.reduce((acc, ex) => acc + ex.sets, 0);
  const finishedSetsCount = Object.values(completedSets).filter(Boolean).length;
  const progressPercent = Math.min(100, Math.round((finishedSetsCount / (totalSetsCount || 1)) * 100));

  return (
    <section id="programmes-timer" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-700 mb-2">
            <span>Coaching Interactif & Chronomètre</span>
            <span aria-hidden="true">·</span>
            <span>Séances Complètes</span>
            <span aria-hidden="true">·</span>
            <span>Suivi des Séries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight [text-wrap:balance]">
            Calculez vos besoins et entraînez-vous avec le timer vocal en temps réel.
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Obtenez votre diagnostic de forme, sélectionnez votre programme (maison ou salle de gym) et suivez votre séance série par série avec les temps de repos chronométrés.
          </p>
        </div>

        {/* 2-Column Module: Left = Metabolic Diagnostic, Right = Interactive Workout + Timer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Calculator Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2 text-slate-950 font-bold">
                <Activity className="w-5 h-5 text-emerald-600" />
                <span>Mon Bilan Métabolique</span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Calcul instantané
              </span>
            </div>

            {/* Inputs */}
            <div className="space-y-4 text-xs">
              
              {/* Gender */}
              <div>
                <label className="block font-semibold text-slate-600 mb-1.5">Sexe</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2 rounded-lg font-bold border transition-all cursor-pointer ${
                      gender === 'male'
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    Homme
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2 rounded-lg font-bold border transition-all cursor-pointer ${
                      gender === 'female'
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    Femme
                  </button>
                </div>
              </div>

              {/* Weight & Height */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-600 mb-1">Poids (kg)</label>
                  <input
                    type="number"
                    min="35"
                    max="180"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Math.max(35, Number(e.target.value)))}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 font-bold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-600 mb-1">Taille (cm)</label>
                  <input
                    type="number"
                    min="120"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Math.max(120, Number(e.target.value)))}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 font-bold text-slate-900"
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block font-semibold text-slate-600 mb-1">Âge (ans)</label>
                <input
                  type="number"
                  min="14"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Math.max(14, Number(e.target.value)))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 font-bold text-slate-900"
                />
              </div>

              {/* Goal */}
              <div>
                <label className="block font-semibold text-slate-600 mb-1.5">Objectif Principal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 font-bold text-slate-900"
                >
                  <option value="fat_loss">Perte de graisse & Ventre plat</option>
                  <option value="muscle_gain">Prise de masse musculaire</option>
                  <option value="fitness">Remise en forme & Maintien</option>
                </select>
              </div>

            </div>

            {/* Diagnostic Results Box */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 font-bold block">Votre IMC :</span>
                  <div className="text-xl font-black text-slate-950 font-mono tabular-nums">
                    {bmi} <span className="text-xs font-normal text-slate-600">({bmi < 18.5 ? 'Mince' : bmi < 25 ? 'Normal' : 'Surpoids léger'})</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 font-bold block">Cible Journalière :</span>
                  <div className="text-xl font-black text-emerald-700 font-display tabular-nums">
                    {targetCalories.toLocaleString('fr-FR')} <span className="text-xs">kcal</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-200/60 grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="bg-white p-2 rounded-lg shadow-2xs">
                  <span className="text-slate-500 block">Protéines</span>
                  <strong className="text-slate-900 font-mono">{proteinGrams}g</strong>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-2xs">
                  <span className="text-slate-500 block">Glucides</span>
                  <strong className="text-slate-900 font-mono">{carbsGrams}g</strong>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-2xs">
                  <span className="text-slate-500 block">Lipides</span>
                  <strong className="text-slate-900 font-mono">{fatGrams}g</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Workout & Active Countdown Timer */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Active Countdown Timer Header Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-5">
                {/* Circular timer indicator */}
                <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-mono font-black text-2xl border-2 transition-colors ${
                  timerMode === 'work'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-500'
                    : 'bg-amber-50 text-amber-700 border-amber-500'
                }`}>
                  <span className="tabular-nums leading-none">{timerSeconds}s</span>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-wider mt-1 text-slate-500">
                    {timerMode === 'work' ? 'Effort' : 'Repos'}
                  </span>
                </div>

                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                    Chronomètre d'Entraînement Actif
                  </div>
                  <div className="text-base font-bold text-slate-950 mt-0.5">
                    {isRunning ? 'Chrono en cours...' : 'Prêt pour la série'}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => startPresetTimer(30, 'rest')}
                      className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                    >
                      30s repos
                    </button>
                    <button
                      onClick={() => startPresetTimer(60, 'rest')}
                      className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                    >
                      60s repos
                    </button>
                    <button
                      onClick={() => startPresetTimer(45, 'work')}
                      className="px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold cursor-pointer"
                    >
                      45s gainage/HIIT
                    </button>
                  </div>
                </div>
              </div>

              {/* Timer Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className={`p-3 rounded-xl font-bold flex items-center gap-2 text-xs transition-transform active:scale-95 cursor-pointer shadow-xs ${
                    isRunning
                      ? 'bg-amber-500 hover:bg-amber-600 text-white'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  <span>{isRunning ? 'Pause' : 'Démarrer'}</span>
                </button>

                <button
                  onClick={() => {
                    setIsRunning(false);
                    setTimerSeconds(timerMax);
                  }}
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  title="Réinitialiser"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-3 rounded-xl border cursor-pointer ${
                    soundEnabled ? 'bg-slate-100 text-emerald-700 border-slate-200' : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}
                  title={soundEnabled ? 'Bip sonore actif' : 'Son coupé'}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Workout Routine Selector Tabs */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Programme d'Exercices Guidé
                  </span>
                  <h3 className="text-lg font-bold text-slate-950">
                    {selectedProgram.title}
                  </h3>
                </div>

                {/* Routine switcher buttons */}
                <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {WORKOUT_PROGRAMS.map((prog) => (
                    <button
                      key={prog.id}
                      onClick={() => {
                        setSelectedProgram(prog);
                        setCompletedSets({});
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                        selectedProgram.id === prog.id
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {prog.level} · {prog.durationMin} min
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                  <span>Progression de la séance</span>
                  <span className="font-mono font-bold text-emerald-700">{progressPercent}% terminé</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Exercises List */}
              <div className="space-y-4">
                {selectedProgram.exercises.map((exercise, index) => (
                  <div
                    key={exercise.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center font-mono">
                          {index + 1}
                        </span>
                        <h4 className="text-sm font-bold text-slate-950">
                          {exercise.name}
                        </h4>
                      </div>
                      <div className="text-xs font-semibold text-emerald-800 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 self-start sm:self-auto">
                        {exercise.targetMuscle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {exercise.instructions}
                    </p>

                    <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/60 text-[11px] text-amber-900 mb-3 font-medium">
                      💡 <strong>Conseil coach :</strong> {exercise.tip}
                    </div>

                    {/* Interactive Sets Checklist */}
                    <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-slate-500 mr-1">Séries :</span>
                        {[...Array(exercise.sets)].map((_, sIdx) => {
                          const isDone = !!completedSets[`${exercise.id}-${sIdx}`];
                          return (
                            <button
                              key={sIdx}
                              onClick={() => toggleSetComplete(exercise.id, sIdx)}
                              className={`w-7 h-7 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer flex items-center justify-center ${
                                isDone
                                  ? 'bg-emerald-600 text-white shadow-xs'
                                  : 'bg-white text-slate-700 border border-slate-300 hover:border-emerald-500'
                              }`}
                              title={isDone ? 'Série validée' : 'Cliquer pour valider'}
                            >
                              {isDone ? <Check className="w-3.5 h-3.5" /> : `S${sIdx + 1}`}
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-800">{exercise.reps}</span>
                        <button
                          onClick={() => startPresetTimer(exercise.restSeconds, 'rest')}
                          className="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-emerald-700 border border-slate-200 font-bold text-[11px] cursor-pointer shadow-2xs"
                        >
                          Lancer repos ({exercise.restSeconds}s)
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
