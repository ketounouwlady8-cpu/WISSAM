import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  // ÉLECTROPORTATIF & SANS FIL
  {
    id: 'id8508',
    name: 'Perceuse à Percussion 850W 13mm',
    code: 'ID8508',
    price: 19800,
    originalPrice: 24500,
    category: 'electroportatif',
    power: '850W',
    voltage: '220-240V',
    description: 'Perceuse à percussion professionnelle compacte et robuste. Idéale pour maçonnerie, béton, métal et bois. Mandrin métallique 13mm.',
    features: [
      'Puissance moteur : 850W',
      'Mandrin à clé 13mm haute précision',
      'Vitesse variable avec variateur réversible',
      'Fonction percussion & perçage standard',
      'Poignée auxiliaire ergonomique avec butée de profondeur'
    ],
    inStock: true,
    isPromo: true,
    tag: 'Promo Flash',
    warrantyMonths: 12,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'id211008',
    name: 'Perceuse à Percussion Lourde 1100W 16mm',
    code: 'ID211008',
    price: 45000,
    category: 'electroportatif',
    power: '1100W',
    voltage: '220-240V',
    description: 'Modèle industriel à carter d’engrenage en aluminium moulé. 2 vitesses mécaniques pour un couple maximal sur gros chantiers.',
    features: [
      'Puissance : 1100W continu',
      'Capacité mandrin : 16mm renforcé',
      'Boîte de vitesses mécanique à 2 rapports',
      'Carter d’engrenage métallique ultra-robuste',
      'Débrayage de sécurité anti-blocage'
    ],
    inStock: true,
    warrantyMonths: 12,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'cagli2211532',
    name: 'Meuleuse d\'Angle Sans Fil 20V Brushless 115mm (5Ah)',
    code: 'CAGLI2211532',
    price: 89700,
    category: 'sans-fil-20v',
    voltage: '20V',
    power: 'Moteur Brushless sans balais',
    description: 'Meuleuse 20V sans charbon ultra performante avec batterie haute capacité 5.0Ah. Liberté totale de mouvement sur vos chantiers.',
    features: [
      'Moteur sans balais (Brushless) durable et puissant',
      'Disque diamètre 115mm',
      'Batterie Lithium-Ion 20V 5.0Ah incluse avec chargeur rapide',
      'Système de protection contre les surcharges et redémarrages',
      'Poignée anti-vibration 2 positions'
    ],
    inStock: true,
    tag: 'Best-Seller 20V',
    warrantyMonths: 12,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'cagli207625',
    name: 'Mini-Meuleuse Compacte 20V 76mm',
    code: 'CAGLI207625',
    price: 39700,
    category: 'sans-fil-20v',
    voltage: '20V',
    power: 'P20S Multi-usage',
    description: 'Mini-tronçonneuse meuleuse de précision ultra-légère. Idéale pour carrelage, PVC, tôles fines, plomberie et électricité.',
    features: [
      'Disque de coupe 76mm (3 pouces)',
      'Design compact utilisable à une main',
      'Protection réglable sans outil',
      'Compatible avec toutes les batteries INGCO 20V P20S',
      'Livré avec 4 disques de coupe métal et carbure'
    ],
    inStock: true,
    warrantyMonths: 6,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'rh10508',
    name: 'Marteau Perforateur Piqueur SDS+ 1050W',
    code: 'RH10508',
    price: 44700,
    originalPrice: 52000,
    category: 'electroportatif',
    power: '1050W',
    voltage: '220-240V',
    description: 'Marteau perforateur piqueur avec système SDS-Plus. Force de frappe 4.5 Joules. Idéal pour percement et démolition légère.',
    features: [
      'Moteur cuivre 1050W',
      'Force d\'impact : 4.5 Joules',
      '3 modes : perçage, perforation et burinage',
      'Système anti-vibration actif',
      'Livré avec burins et mèches SDS+ en mallette rigide'
    ],
    inStock: true,
    isPromo: true,
    tag: 'Promo Spéciale',
    warrantyMonths: 12,
    image: '/src/assets/images/welding_heavy_equipment_1793626803500.jpg'
  },
  {
    id: 'hkthp11151',
    name: 'Coffret Complet Perceuse à Percussion + 115 Pièces',
    code: 'HKTHP11151',
    price: 36900,
    originalPrice: 42000,
    category: 'coffrets-main',
    power: 'Perceuse 680W incluse',
    description: 'Le coffret référence des pros et artisans du Bénin ! Une perceuse à percussion robuste livrée avec 115 accessoires indispensables.',
    features: [
      'Perceuse à percussion 680W 13mm INGCO',
      'Marteau de mécanicien, pince universelle, clé à molette',
      'Mètre ruban 3m, niveau à bulle, cutter pro',
      'Assortiment complet de mèches (béton, bois, métal)',
      'Coffret thermomoulé résistant aux chocs'
    ],
    inStock: true,
    isPromo: true,
    tag: 'N°1 Des Ventes',
    warrantyMonths: 12,
    image: '/src/assets/images/toolkits_cases_mechanic_1793626803568.jpg'
  },
  {
    id: 'hktac011182',
    name: 'Coffret d\'Outillage & Mèches Pro 118 Pièces',
    code: 'HKTAC011182',
    price: 19900,
    category: 'coffrets-main',
    description: 'Boîte d\'embouts, mèches titane, douilles et accessoires universels pour perceuses et visseuses.',
    features: [
      '118 accessoires de précision chrome vanadium',
      'Mèches hélicoïdales HSS au titane pour métal',
      'Mèches maçonnerie pointe carbure',
      'Mèches plates et vrilles pour bois',
      'Porte-embout magnétique et guide profondeur'
    ],
    inStock: true,
    warrantyMonths: 6,
    image: '/src/assets/images/toolkits_cases_mechanic_1793626803568.jpg'
  },
  {
    id: 'cosli23042',
    name: 'Pack Combo 2 Pcs 12V (Perceuse + Torche)',
    code: 'COSLI23042',
    price: 15900,
    category: 'sans-fil-20v',
    voltage: '12V',
    description: 'Pack économique polyvalent pour bricolage, montage de meubles et travaux électriques en atelier.',
    features: [
      'Perceuse sans fil 12V avec couple 20Nm',
      'Lampe torche LED haute intensité 12V',
      'Batterie lithium-ion 1.5Ah incluse',
      'Chargeur secteur et embouts de vissage'
    ],
    inStock: true,
    tag: 'Éco-Budget',
    warrantyMonths: 6,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'cosli22121',
    name: 'Pack Combo 4 Pcs 12V Multi-Modules',
    code: 'COSLI22121',
    price: 18200,
    category: 'sans-fil-20v',
    voltage: '12V',
    description: 'Ensemble 4 modules pratiques 12V avec batterie commune et accessoires interchangeables.',
    features: [
      '4 modules fonctionnels pour atelier',
      'Batterie Li-ion 12V longue autonomie',
      'Charge rapide et compacité exemplaire'
    ],
    inStock: true,
    warrantyMonths: 6,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'cos23095',
    name: 'Pack Combinaison Soudure Inverter 160A + Équipements EPI',
    code: 'COS23095',
    price: 89500,
    originalPrice: 99000,
    category: 'soudure-plomberie',
    power: '160 Ampères',
    voltage: '220-240V',
    description: 'Solution complète pour serruriers, chaudronniers et soudeurs. Onduleur IGBT 160A avec masque automatique et accessoires.',
    features: [
      'Poste à souder onduleur technologie IGBT 160A',
      'Amorçage Hot Start & fonction Anti-Stick',
      'Masque de soudure cagoule automatique auto-obscurcissante',
      'Câble porte-électrode, pince de masse et brosse marteau',
      'Gants de soudure croûte de cuir offerts'
    ],
    inStock: true,
    tag: 'Pack Soudure Pro',
    warrantyMonths: 12,
    image: '/src/assets/images/welding_heavy_equipment_1793626803500.jpg'
  },
  {
    id: 'ingmma16015',
    name: 'Poste à Souder Inverter MMA 160A Compact',
    code: 'ING-MMA16015',
    price: 68000,
    category: 'soudure-plomberie',
    power: '160A IGBT',
    voltage: '220V',
    description: 'Poste à souder électronique haute fréquence portable. Excellente stabilité de l\'arc même sur tension instable.',
    features: [
      'Courant de sortie : 10 - 160A continu',
      'Technologie d\'onduleur IGBT dernière génération',
      'Écran d\'affichage numérique des ampères',
      'Poids plume transportable à l\'épaule'
    ],
    inStock: true,
    warrantyMonths: 12,
    image: '/src/assets/images/welding_heavy_equipment_1793626803500.jpg'
  },
  {
    id: 'ptwt215002',
    name: 'Machine à Souder les Tubes PPR (Polyfusion)',
    code: 'PTWT215002',
    price: 24500,
    category: 'soudure-plomberie',
    power: '800W / 1500W',
    voltage: '220V',
    description: 'Appareil professionnel pour plombiers pour le raccordement thermique de tuyaux PPR de 20mm à 63mm.',
    features: [
      'Double puissance de chauffe commutable',
      'Thermostat réglable précis de 0 à 300°C',
      'Douilles de soudage avec revêtement Téflon anti-adhésif',
      'Support d\'établi stable et mallette métallique'
    ],
    inStock: true,
    warrantyMonths: 6,
    image: '/src/assets/images/welding_heavy_equipment_1793626803500.jpg'
  },
  {
    id: 'hg2000581',
    name: 'Décapeur Thermique Professionnel 2000W',
    code: 'HG2000581',
    price: 35100,
    category: 'electroportatif',
    power: '2000W',
    voltage: '220-240V',
    description: 'Pistolet à air chaud pour décapage de peintures, thermoformage, soudure plastique et dégel de canalisations.',
    features: [
      'Puissance 2000W avec 3 paliers de température (50°C / 380°C / 570°C)',
      'Débit d\'air réglable jusqu\'à 500 L/min',
      'Buses en acier inoxydable interchangeables incluses',
      'Position verticale sécurisée pour travail en stationnaire'
    ],
    inStock: true,
    warrantyMonths: 6,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'spg3508',
    name: 'Station de Peinture Électrique HVLP 450W',
    code: 'SPG3508',
    price: 14900,
    originalPrice: 19500,
    category: 'batiment-nettoyage',
    power: '450W HVLP',
    voltage: '220V',
    description: 'Pistolet pulvérisateur électrique haute pression basse dilution pour murs, grilles, portes et carrosseries.',
    features: [
      'Buse laiton 2.5mm résistante aux solvants',
      'Réservoir grande capacité 800ml',
      'Jet réglable : rond, horizontal ou vertical',
      'Nettoyage démontable rapide en 1 clic'
    ],
    inStock: true,
    isPromo: true,
    tag: 'Promo Peinture',
    warrantyMonths: 6,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'ghpw2003',
    name: 'Nettoyeur Haute Pression Thermique Essence 6HP (3100 PSI / 214 Bar)',
    code: 'GHPW2003',
    price: 258700,
    category: 'batiment-nettoyage',
    power: 'Moteur Essence 6.0 HP',
    description: 'Le monstre du nettoyage autonome au Bénin ! Idéal pour lavages auto pro, cours, engins BTP, façades et sols industriels.',
    features: [
      'Moteur thermique 4 temps 6.0 HP OHV ultra-puissant',
      'Pression max : 3100 PSI (214 Bars) réels',
      'Débit d\'eau : 8.7 Litres/minute',
      'Pompe axiale avec culasse en laiton forgé',
      'Châssis tubulaire acier avec roues tout-terrain increvables',
      '5 buses à raccord rapide (0°, 15°, 25°, 40° et savon)'
    ],
    inStock: true,
    tag: 'Haute Puissance',
    warrantyMonths: 12,
    image: '/src/assets/images/hero_showroom_tools_1793626802422.jpg'
  },
  {
    id: 'hpwr18008',
    name: 'Nettoyeur Haute Pression Électrique 1800W',
    code: 'HPWR18008',
    price: 65000,
    category: 'batiment-nettoyage',
    power: '1800W',
    voltage: '220V',
    description: 'Nettoyeur haute pression compact avec système Total Stop. Idéal pour véhicules, terrasses et façades.',
    features: [
      'Pression max : 150 Bars',
      'Système Total Stop : arrêt auto dès relâchement de la gâchette',
      'Enrouleur de flexible et support de lance intégré',
      'Bouteille de détergent moussant comprise'
    ],
    inStock: true,
    warrantyMonths: 12,
    image: '/src/assets/images/hero_showroom_tools_1793626802422.jpg'
  },
  {
    id: 'aac1408',
    name: 'Compresseur d\'Air Portable 12V Tout Métal',
    code: 'AAC1408',
    price: 15500,
    category: 'batiment-nettoyage',
    power: '12V Allume-cigare / Pinces batterie',
    description: 'Compresseur de secours robuste en cylindre métal pour gonflage rapide de pneus 4x4, berlines, motos et ballons.',
    features: [
      'Débit d\'air : 35 L/min',
      'Pression max : 140 PSI (10 Bar)',
      'Manomètre de précision intégré',
      'Câble long 3m avec adaptateurs universels'
    ],
    inStock: true,
    warrantyMonths: 6,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'hlrl30051',
    name: 'Niveau Laser Rotatif Automatique Professionnel de Chantier',
    code: 'HLRL30051',
    price: 395900,
    category: 'batiment-nettoyage',
    power: 'Batterie rechargeable & secteur',
    description: 'Instrument géodésique de très haute précision pour nivellement BTP, fondations, carrelage, faux plafonds et terrassements.',
    features: [
      'Portée jusqu\'à 500m avec cellule de détection fournie',
      'Auto-nivellement électronique automatique horizontal et vertical',
      'Faisceau laser rouge haute visibilité à rotation 360°',
      'Télécommande sans fil et trépied réglable renforcé',
      'Norme d\'étanchéité chantier IP54 poussière et pluie'
    ],
    inStock: true,
    tag: 'Matériel BTP de Pointe',
    warrantyMonths: 12,
    image: '/src/assets/images/hero_showroom_tools_1793626802422.jpg'
  },
  {
    id: 'fbli20011',
    name: 'Batterie Lithium-Ion 20V 2.0Ah P20S',
    code: 'FBLI20011',
    price: 12900,
    category: 'sans-fil-20v',
    voltage: '20V',
    description: 'Batterie officielle INGCO P20S. Compatible avec plus de 580 outils de la gamme INGCO 20V.',
    features: [
      'Capacité 2.0 Ampères-heures réels',
      'Indicateur LED de niveau de charge 3 barres',
      'Pas d\'effet mémoire ni d\'auto-décharge',
      'Boîtier résistant aux chutes d\'atelier'
    ],
    inStock: true,
    tag: 'Écosystème 20V',
    warrantyMonths: 6,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'fbli2030',
    name: 'Batterie Lithium-Ion 20V 3.0Ah Haute Endurance',
    code: 'FBLI2030',
    price: 18900,
    category: 'sans-fil-20v',
    voltage: '20V',
    description: 'Batterie renforcée 3.0Ah pour utilisation prolongée sur meuleuses, scies et perforateurs 20V.',
    features: [
      'Capacité 3.0Ah pour +50% d\'autonomie',
      'Cellules lithium de haute qualité garanties',
      'Compatibilité totale gamme P20S'
    ],
    inStock: true,
    warrantyMonths: 6,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'cmli2001',
    name: 'Outil Multifonctions Oscillateur Sans Fil 20V (Nu)',
    code: 'CMLI2001',
    price: 20300,
    category: 'sans-fil-20v',
    voltage: '20V',
    description: 'L\'outil indispensable pour les coupes rasantes, découpes plongeantes dans le bois, plâtre, ponçage de coins et joints.',
    features: [
      'Angle d\'oscillation : 3.2°',
      'Variateur de 5000 à 20000 osc/min',
      'Système de changement de lame universel sans clé',
      'Livré avec patin de ponçage, feuilles abrasives et lame plongeante'
    ],
    inStock: true,
    warrantyMonths: 6,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'csli1652',
    name: 'Scie Circulaire Sans Fil 20V 165mm (Machine Nue)',
    code: 'CSLI1652',
    price: 38500,
    category: 'sans-fil-20v',
    voltage: '20V',
    description: 'Scie circulaire sans fil puissante pour charpentiers et menuisiers. Lame 165mm incluse.',
    features: [
      'Lame 165mm 24 dents carbure',
      'Profondeur de coupe max : 55mm à 90° et 38mm à 45°',
      'Semelle aluminium avec repères de coupe gradués',
      'Frein moteur électronique instantané'
    ],
    inStock: true,
    warrantyMonths: 12,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'acn50401',
    name: 'Cloueuse-Agrafeuse Pneumatique 2 en 1',
    code: 'ACN50401',
    price: 22000,
    category: 'batiment-nettoyage',
    power: 'Pression 4-7 Bar',
    description: 'Pistolet pneumatique combiné pour clous de finition Ga18 (15-50mm) et agrafes (16-40mm). Pour menuiserie et tapisserie.',
    features: [
      'Magasin aluminium 100 clous ou agrafes',
      'Échappement d\'air orientable à 360°',
      'Embout caoutchouc pour ne pas marquer les bois tendres'
    ],
    inStock: true,
    warrantyMonths: 6,
    image: '/src/assets/images/toolkits_cases_mechanic_1793626803568.jpg'
  },
  {
    id: 'wuc01150',
    name: 'Uniforme de Travail Chantier Renforcé (XXL-4XL)',
    code: 'WUC01150',
    price: 4450,
    category: 'epi-securite',
    description: 'Combinaison de travail haute résistance anti-déchirure avec poches multiples pour artisans et ouvriers.',
    features: [
      'Tissu polycoton respirant 240g/m² haute résistance',
      'Coutures triplées aux points de tension',
      'Poches mètre, téléphone, stylos et genouillères',
      'Fermeture éclair renforcée double curseur'
    ],
    inStock: true,
    tag: 'EPI Éco',
    warrantyMonths: 3,
    image: '/src/assets/images/toolkits_cases_mechanic_1793626803568.jpg'
  },
  {
    id: 'js800281',
    name: 'Scie Sauteuse Pendulaire 800W avec Laser',
    code: 'JS80028-1',
    price: 29000,
    category: 'electroportatif',
    power: '800W',
    voltage: '220V',
    description: 'Scie sauteuse puissante avec mouvement pendulaire 4 positions pour coupes rapides et propres dans bois et métal.',
    features: [
      'Moteur 800W avec variateur de vitesse 800-3000 cpm',
      'Guide laser rouge intégré pour une coupe droite parfaite',
      'Changement de lame rapide SDS sans outil',
      'Capacité de coupe bois 80mm / métal 10mm'
    ],
    inStock: true,
    warrantyMonths: 12,
    image: '/src/assets/images/cordless_power_tools_1793626802893.jpg'
  },
  {
    id: 'hkthp11111',
    name: 'Caisse à Outils Complète 111 Pièces en Valise',
    code: 'HKTHP11111',
    price: 34500,
    category: 'coffrets-main',
    description: 'Valise d\'outils mécanique et bâtiment 111 pièces complète avec perceuse 650W et accessoires complets.',
    features: [
      '111 outils de haute qualité forgés',
      'Perceuse à percussion 650W incluse',
      'Pinces, tournevis testeur, douilles 1/4" et 1/2"',
      'Valise de transport avec loquets métalliques'
    ],
    inStock: true,
    warrantyMonths: 12,
    image: '/src/assets/images/toolkits_cases_mechanic_1793626803568.jpg'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'Tout le Catalogue' },
  { id: 'electroportatif', label: 'Électroportatif' },
  { id: 'sans-fil-20v', label: 'Gamme 20V P20S' },
  { id: 'coffrets-main', label: 'Coffrets & Outillage' },
  { id: 'soudure-plomberie', label: 'Soudure & Plomberie' },
  { id: 'batiment-nettoyage', label: 'Bâtiment & Nettoyeurs HP' },
  { id: 'epi-securite', label: 'EPI & Protection' },
] as const;

export const COMPANY_CONTACTS = {
  commercialPhone: '+229 01 97 14 44 44',
  commercialPhoneRaw: '2290197144444',
  savPhone: '+229 01 97 30 44 44',
  savPhoneRaw: '2290197304444',
  directorPhone: '+229 01 97 97 10 15',
  directorPhoneRaw: '2290197971015',
  officePhoneSecondary: '+229 01 67 80 06 00',
  landline: '+229 01 21 36 37 57',
  email: 'ingco.benin@hotmail.com',
  addressMain: 'Abomey-Calavi, à côté de NSIA Banque, en face de la Polyclinique Coopérative (avant la mairie en venant de Cotonou)',
  addressSecondary: 'Après le Carrefour Kpota, avant Diamond Bank en allant à Zopa, BP 815 Parakou / Abomey-Calavi',
  warehouseCode: 'Dépôt Sté Wissam - INGCO (F954+4J5), Abomey-Calavi',
  hours: 'Lundi au Samedi : 08h00 - 17h30',
  googleRating: 4.3,
  googleReviewsCount: 207,
  wissamRating: 4.1,
  wissamReviewsCount: 255
};

export const REVIEWS = [
  {
    name: 'Moussa Agossou',
    role: 'Artisan Menuisier & Poseur BTP',
    city: 'Abomey-Calavi',
    rating: 5,
    date: 'Il y a 3 semaines',
    comment: 'J\'ai pris le coffret perceuse 115 pièces HKTHP11151 et la meuleuse 20V brushless chez Wissam. Matériel hyper endurant sur chantier, et surtout les charbons et pièces de rechange sont toujours en stock chez eux.'
  },
  {
    name: 'Aristide Houndété',
    role: 'Entrepreneur BTP & Génie Civil',
    city: 'Cotonou / Akpakpa',
    rating: 5,
    date: 'Il y a 1 mois',
    comment: 'Distributeur officiel le plus sérieux du Bénin. Le nettoyeur essence 6HP GHPW2003 tourne sans faillir sur nos chantiers de voirie. Commande passée par WhatsApp et livraison reçue le jour même.'
  },
  {
    name: 'Roland Tossou',
    role: 'Atelier de Métallerie & Soudure',
    city: 'Godomey / Calavi',
    rating: 5,
    date: 'Il y a 2 mois',
    comment: 'Le pack soudure 160A avec masque automatique à 89 500 FCFA est imbattable en rapport qualité/prix. En plus le showroom en face de la polyclinique NSIA est très spacieux et bien rangé.'
  }
];
