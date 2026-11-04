/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FitnessNavbar } from './components/FitnessNavbar';
import { FitnessHero } from './components/FitnessHero';
import { GymDirectory } from './components/GymDirectory';
import { WorkoutCoach } from './components/WorkoutCoach';
import { BeninNutrition } from './components/BeninNutrition';
import { CoachesDirectory } from './components/CoachesDirectory';
import { FitnessFooter } from './components/FitnessFooter';
import { GymCompareModal } from './components/GymCompareModal';

export default function App() {
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([
    'elite-fitness-cotonou',
    'calavi-gold-gym',
  ]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const handleToggleCompare = (gymId: string) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(gymId)) {
        return prev.filter((id) => id !== gymId);
      }
      if (prev.length >= 3) {
        alert("Vous pouvez comparer jusqu'à 3 salles simultanément.");
        return prev;
      }
      return [...prev, gymId];
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Navbar */}
      <FitnessNavbar
        onOpenCalculator={() => scrollToSection('programmes-timer')}
        compareCount={selectedForCompare.length}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <FitnessHero
          onExploreGyms={() => scrollToSection('salles-de-gym')}
          onExploreWorkout={() => scrollToSection('programmes-timer')}
        />

        {/* Gym Locator & Directory */}
        <GymDirectory
          selectedForCompare={selectedForCompare}
          onToggleCompare={handleToggleCompare}
          onOpenCompare={() => setIsCompareOpen(true)}
        />

        {/* Workout Coach, Diagnostic & Interactive Live Timer */}
        <WorkoutCoach />

        {/* Local Benin Nutrition & Plate Builder */}
        <BeninNutrition />

        {/* Certified Personal Coaches Directory */}
        <CoachesDirectory />

      </main>

      {/* Footer */}
      <FitnessFooter />

      {/* Gym Side-by-Side Comparison Modal */}
      <GymCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        selectedIds={selectedForCompare}
        onRemoveGym={(id) => setSelectedForCompare((prev) => prev.filter((x) => x !== id))}
        onClearAll={() => setSelectedForCompare([])}
      />

    </div>
  );
}
