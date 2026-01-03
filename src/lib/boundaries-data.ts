export interface Boundary {
  key: string;
  label: string;
  labelEn: string;
  labelEs: string;
  icon: string;
  idealFrequency: {
    min: number;
    max: number;
  };
  description: string;
  descriptionEn: string;
  descriptionEs: string;
}

export const boundaries: Boundary[] = [
  {
    key: 'no-messages-late',
    label: 'Ne pas répondre aux messages après une certaine heure',
    labelEn: 'Not responding to messages after a certain hour',
    labelEs: 'No responder mensajes después de cierta hora',
    icon: '🌙',
    idealFrequency: { min: 2, max: 4 },
    description: 'Limite très accessible et protectrice du repos',
    descriptionEn: 'Very accessible limit that protects rest',
    descriptionEs: 'Límite muy accesible que protege el descanso'
  },
  {
    key: 'cut-negative-conversations',
    label: 'Couper court aux conversations trop négatives',
    labelEn: 'Cut short overly negative conversations',
    labelEs: 'Cortar conversaciones demasiado negativas',
    icon: '🚫',
    idealFrequency: { min: 1, max: 2 },
    description: 'Même une seule fois est déjà une vraie victoire émotionnelle',
    descriptionEn: 'Even once is already a real emotional victory',
    descriptionEs: 'Incluso una vez ya es una verdadera victoria emocional'
  },
  {
    key: 'say-no-invitation',
    label: 'Dire non à une invitation sans culpabiliser',
    labelEn: 'Say no to an invitation without guilt',
    labelEs: 'Decir no a una invitación sin culpa',
    icon: '🙅‍♀️',
    idealFrequency: { min: 1, max: 1 },
    description: 'Limite puissante, mais énergétiquement coûteuse',
    descriptionEn: 'Powerful limit, but energetically costly',
    descriptionEs: 'Límite poderoso, pero energéticamente costoso'
  },
  {
    key: 'limit-invasive-person',
    label: 'Limiter le contact avec une personne envahissante',
    labelEn: 'Limit contact with an invasive person',
    labelEs: 'Limitar contacto con persona invasiva',
    icon: '🛡️',
    idealFrequency: { min: 1, max: 3 },
    description: 'Moins répondre, écourter, espacer',
    descriptionEn: 'Respond less, shorten, space out',
    descriptionEs: 'Responder menos, acortar, espaciar'
  },
  {
    key: 'refuse-sensitive-topic',
    label: 'Refuser de parler d\'un sujet sensible',
    labelEn: 'Refuse to talk about a sensitive topic',
    labelEs: 'Negarse a hablar de un tema sensible',
    icon: '🤐',
    idealFrequency: { min: 0, max: 1 },
    description: 'Rare, mais très protecteur émotionnellement',
    descriptionEn: 'Rare, but very emotionally protective',
    descriptionEs: 'Raro, pero muy protector emocionalmente'
  },
  {
    key: 'ask-time-to-think',
    label: 'Demander du temps pour réfléchir avant de répondre',
    labelEn: 'Ask for time to think before responding',
    labelEs: 'Pedir tiempo para pensar antes de responder',
    icon: '⏰',
    idealFrequency: { min: 1, max: 2 },
    description: 'Excellente limite pour éviter les décisions impulsives',
    descriptionEn: 'Excellent limit to avoid impulsive decisions',
    descriptionEs: 'Excelente límite para evitar decisiones impulsivas'
  },
  {
    key: 'say-no-uncomfortable-favor',
    label: 'Dire non à une faveur qui te met dans l\'inconfort',
    labelEn: 'Say no to a favor that makes you uncomfortable',
    labelEs: 'Decir no a un favor que te incomoda',
    icon: '💪',
    idealFrequency: { min: 1, max: 1 },
    description: 'Même une seule fois suffit pour renforcer l\'estime de soi',
    descriptionEn: 'Even once is enough to strengthen self-esteem',
    descriptionEs: 'Incluso una vez es suficiente para fortalecer la autoestima'
  },
  {
    key: 'protect-personal-time',
    label: 'Protéger ton temps personnel',
    labelEn: 'Protect your personal time',
    labelEs: 'Proteger tu tiempo personal',
    icon: '⏳',
    idealFrequency: { min: 2, max: 3 },
    description: 'Essentiel pour préserver ton énergie',
    descriptionEn: 'Essential to preserve your energy',
    descriptionEs: 'Esencial para preservar tu energía'
  }
];

export function getBoundaryLabel(key: string, language: 'fr' | 'en' | 'es'): string {
  const boundary = boundaries.find(b => b.key === key);
  if (!boundary) return key;
  
  switch (language) {
    case 'en':
      return boundary.labelEn;
    case 'es':
      return boundary.labelEs;
    default:
      return boundary.label;
  }
}

export function getBoundaryDescription(key: string, language: 'fr' | 'en' | 'es'): string {
  const boundary = boundaries.find(b => b.key === key);
  if (!boundary) return '';
  
  switch (language) {
    case 'en':
      return boundary.descriptionEn;
    case 'es':
      return boundary.descriptionEs;
    default:
      return boundary.description;
  }
}

