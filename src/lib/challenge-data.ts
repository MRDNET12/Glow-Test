import { Language } from './translations';
import { challengeDaysFr, bonusAffirmationsFr, softLifeTipsFr, checklistsDataFr, softLifeGuideFr, bonusSectionsFr, fiftyThingsAloneFr } from './challenge-data-fr';
import { challengeDaysEn, bonusAffirmationsEn, softLifeTipsEn, checklistsDataEn, softLifeGuideEn, bonusSectionsEn, fiftyThingsAloneEn } from './challenge-data-en';

export interface ChallengeDay {
  day: number;
  week: number;
  weekTitle: string;
  weekObjective: string;
  title: string;
  content: string;
  affirmation: string;
  actions: {
    beauty: string;
    mental: string;
    lifestyle: string;
  };
}

interface PetitsSuccesTracking {
  weeklyCount: number;
  history: string[];
  encouragementThreshold: number;
  encouragementMessage: string;
  inputField: string;
}

interface QuestionSoirTracking {
  monthlyCount: number;
  history: string[];
  inputField: string;
}

interface LimitesPaixTracking {
  weeklyCounts: {
    'No responder mensajes después de cierta hora': number;
    'Cortar conversaciones demasiado negativas': number;
    'Rehusar prestar algo si no te sientes cómoda': number;
    'Decir no a una invitación sin culpa': number;
    'Limitar el contacto con una persona invasiva': number;
    'Rehusar hablar de un tema sensible': number;
    'Pedir tiempo para pensar antes de responder': number;
    'Decir no a un favor que te incomoda': number;
  };
  encouragementThreshold: number;
  encouragementMessage: string;
  inputField: string;
}

interface BonusSectionTracking {
  petitsSucces?: PetitsSuccesTracking;
  questionSoir?: QuestionSoirTracking;
  limitesPaix?: LimitesPaixTracking;
}

export const challengeDays: ChallengeDay[] = [
  // Semana 1
  {
    day: 1,
    week: 1,
    weekTitle: "Reinicio y Limpieza de vida",
    weekObjective: "Hacer espacio, aliviar la mente, comenzar de nuevo con buenas bases.",
    title: "Gran Reinicio",
    content: "Hoy presionas \"reinicio\". Tómate unos minutos para respirar, anclarte y establecer la intención de elegirte.",
    affirmation: "Me estoy convirtiendo en una versión más ligera y más alineada de mí misma.",
    actions: {
      beauty: "Haz una doble limpieza del rostro e hidrata profundamente.",
      mental: "Escribe todo lo que te pesa en este momento. Sin filtro.",
      lifestyle: "Organiza tu espacio principal (escritorio, cama, sala)."
    }
  },
  {
    day: 2,
    week: 1,
    weekTitle: "Reinicio y Limpieza de vida",
    weekObjective: "Hacer espacio, aliviar la mente, comenzar de nuevo con buenas bases.",
    title: "Hidratación interior y exterior",
    content: "El brillo comienza desde adentro.",
    affirmation: "Alimento mi cuerpo, mi espíritu y mi energía.",
    actions: {
      beauty: "Aplica una crema hidratante o una mascarilla hidratante.",
      mental: "Tómate 5 minutos para respirar profundamente.",
      lifestyle: "Bebe al menos 6 vasos de agua hoy y comienza tu rastreador de hidratación."
    }
  },
  {
    day: 3,
    week: 1,
    weekTitle: "Reinicio y Limpieza de vida",
    weekObjective: "Hacer espacio, aliviar la mente, comenzar de nuevo con buenas bases.",
    title: "Desintoxicación digital",
    content: "Lo que consumes influye en tu estado de ánimo.",
    affirmation: "Elijo lo que nutre mi paz.",
    actions: {
      beauty: "Haz una mascarilla facial o un cuidado rápido.",
      mental: "Crea una lista de reproducción \"solo buenas vibraciones\".",
      lifestyle: "Elimina las aplicaciones, fotos y cuentas que no te aportan nada."
    }
  },
  {
    day: 4,
    week: 1,
    weekTitle: "Reinicio y Limpieza de vida",
    weekObjective: "Hacer espacio, aliviar la mente, comenzar de nuevo con buenas bases.",
    title: "Organización rápida y suave",
    content: "Una vida organizada crea una mente en paz.",
    affirmation: "Me estoy convirtiendo en una mujer alineada, organizada y serena.",
    actions: {
      beauty: "Haz una rutina minimalista (limpieza + hidratación).",
      mental: "Escribe 10 afirmaciones de confianza.",
      lifestyle: "Planifica tu semana (máximo 3 prioridades)."
    }
  },
  {
    day: 5,
    week: 1,
    weekTitle: "Reinicio y Limpieza de vida",
    weekObjective: "Hacer espacio, aliviar la mente, comenzar de nuevo con buenas bases.",
    title: "Cuerpo y Energía",
    content: "La energía del cuerpo influye en tu brillo.",
    affirmation: "Cuido mi cuerpo con ternura.",
    actions: {
      beauty: "Exfolia suavemente tu cuerpo e hidrata.",
      mental: "Practica 1 minuto de respiración profunda.",
      lifestyle: "Camina 10 a 15 minutos."
    }
  },
  {
    day: 6,
    week: 1,
    weekTitle: "Reinicio y Limpieza de vida",
    weekObjective: "Hacer espacio, aliviar la mente, comenzar de nuevo con buenas bases.",
    title: "Desintoxicación emocional",
    content: "Tiempo de soltar.",
    affirmation: "Me libero de lo que ya no me sirve.",
    actions: {
      beauty: "Haz una rutina de autocuidado relajante.",
      mental: "Escribe una carta (que no leerás) sobre lo que necesitas liberar.",
      lifestyle: "Desordena un cajón o una pequeña zona."
    }
  },
  {
    day: 7,
    week: 1,
    weekTitle: "Reinicio y Limpieza de vida",
    weekObjective: "Hacer espacio, aliviar la mente, comenzar de nuevo con buenas bases.",
    title: "Resumen Semana 1",
    content: "¿Cómo te sientes? ¿Qué ha cambiado? ¿Qué pequeño paso te hizo bien?",
    affirmation: "Estoy orgullosa de cuidarme.",
    actions: {
      beauty: "Haz un cuidado que te haga feliz.",
      mental: "Anota tus logros de la semana.",
      lifestyle: "Prepara una intención para la próxima semana."
    }
  },
  // Semana 2
  {
    day: 8,
    week: 2,
    weekTitle: "Belleza y Autocuidado",
    weekObjective: "Establecer una rutina simple, efectiva y femenina.",
    title: "Estabiliza tu rutina de cuidado de la piel",
    content: "Hoy definimos una rutina de cuidado de la piel simple y efectiva.",
    affirmation: "Brillo naturalmente.",
    actions: {
      beauty: "Define una rutina simple mañana/noche (3 pasos).",
      mental: "Respira y céntrate 2 minutos.",
      lifestyle: "Anota tus productos favoritos."
    }
  },
  {
    day: 9,
    week: 2,
    weekTitle: "Belleza y Autocuidado",
    weekObjective: "Establecer una rutina simple, efectiva y femenina.",
    title: "Cuidado profundo del cabello",
    content: "Tu cabello también merece cuidados profundos.",
    affirmation: "Me trato como una reina.",
    actions: {
      beauty: "Haz una mascarilla nutritiva o un baño de aceite.",
      mental: "Tómate un momento sin pantalla.",
      lifestyle: "Organiza tus productos para el cabello / accesorios."
    }
  },
  {
    day: 10,
    week: 2,
    weekTitle: "Belleza y Autocuidado",
    weekObjective: "Establecer una rutina simple, efectiva y femenina.",
    title: "Rutina \"Mujer Fatale\" minimalista",
    content: "El maquillaje minimalista puede ser muy impactante.",
    affirmation: "Soy elegante y segura.",
    actions: {
      beauty: "Maquillaje ligero pero impactante (brillo, rímel, resplandor).",
      mental: "Adopta una postura confiada.",
      lifestyle: "Elige un atuendo donde te sientas magnífica."
    }
  },
  {
    day: 11,
    week: 2,
    weekTitle: "Belleza y Autocuidado",
    weekObjective: "Establecer una rutina simple, efectiva y femenina.",
    title: "Look fresco en 5 minutos",
    content: "Un look rápido no significa descuidado.",
    affirmation: "Merezco sentirme hermosa todos los días.",
    actions: {
      beauty: "Tez fresca, cabello peinado simplemente.",
      mental: "Escribe 3 cosas que te amas.",
      lifestyle: "Refresca tu bolsa / organiza el interior."
    }
  },
  {
    day: 12,
    week: 2,
    weekTitle: "Belleza y Autocuidado",
    weekObjective: "Establecer una rutina simple, efectiva y femenina.",
    title: "Postura y elegancia",
    content: "La elegancia comienza con la postura.",
    affirmation: "Camino con confianza y gracia.",
    actions: {
      beauty: "Un cuidado rápido.",
      mental: "Respira con el pecho abierto.",
      lifestyle: "Practica 3 minutos de postura elegante (espalda recta, hombros abiertos)."
    }
  },
  {
    day: 13,
    week: 2,
    weekTitle: "Belleza y Autocuidado",
    weekObjective: "Establecer una rutina simple, efectiva y femenina.",
    title: "Autocuidado de manos y pies",
    content: "Los detalles marcan la diferencia.",
    affirmation: "Cuido los detalles que me hacen sentir bien.",
    actions: {
      beauty: "Corta, lima, hidrata, pinta si quieres.",
      mental: "Ralentiza tu día 10 minutos.",
      lifestyle: "Crea un ritual de autocuidado semanal."
    }
  },
  {
    day: 14,
    week: 2,
    weekTitle: "Belleza y Autocuidado",
    weekObjective: "Establecer una rutina simple, efectiva y femenina.",
    title: "Resumen Semana 2",
    content: "¿Qué cambios ves en belleza? ¿Qué ritual te hace más bien?",
    affirmation: "Invierto en mi bienestar.",
    actions: {
      beauty: "Haz tu ritual de cuidado de la piel favorito.",
      mental: "Anota los cambios que observas.",
      lifestyle: "Prepara tus productos para la próxima semana."
    }
  },
  // Semana 3
  {
    day: 15,
    week: 3,
    weekTitle: "Mentalidad y Confianza",
    weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
    title: "Tablero de Visión Femenino",
    content: "Visualiza la mujer que quieres ser.",
    affirmation: "Me estoy convirtiendo en la mujer que visualizo.",
    actions: {
      beauty: "Un cuidado rápido.",
      mental: "Crea un tablero de visión (Canva o papel).",
      lifestyle: "Cuélgalo en algún lugar."
    }
  },
  {
    day: 16,
    week: 3,
    weekTitle: "Mentalidad y Confianza",
    weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
    title: "Afirmaciones poderosas",
    content: "Las palabras tienen poder creador.",
    affirmation: "Soy capaz, digna y confiada.",
    actions: {
      beauty: "Tu rutina habitual.",
      mental: "Escribe 20 afirmaciones poderosas.",
      lifestyle: "Léelas en voz alta."
    }
  },
  {
    day: 17,
    week: 3,
    weekTitle: "Mentalidad y Confianza",
    weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
    title: "Diario \"Mujer Confiada\"",
    content: "¿Qué haría la versión confiada de ti?",
    affirmation: "Elijo la confianza.",
    actions: {
      beauty: "Cuidado relajante.",
      mental: "Escribe lo que haría la versión confiada de ti.",
      lifestyle: "Aplica una microacción inmediatamente."
    }
  },
  {
    day: 18,
    week: 3,
    weekTitle: "Mentalidad y Confianza",
    weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
    title: "Detén los pensamientos negativos",
    content: "Transforma tus pensamientos negativos en positivos.",
    affirmation: "Mis pensamientos crean mi realidad, elijo lo positivo.",
    actions: {
      beauty: "Rutina rápida.",
      mental: "Anota tus pensamientos negativos y transfórmalos.",
      lifestyle: "Haz un mini ritual de anclaje (vela, té...)."
    }
  },
  {
    day: 19,
    week: 3,
    weekTitle: "Mentalidad y Confianza",
    weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
    title: "Rutina matinal suave",
    content: "Comienza el día con ternura e intención.",
    affirmation: "Me despierto con ternura e intención.",
    actions: {
      beauty: "Refresca tu rostro.",
      mental: "Elige 3 cosas que te entusiasmen para el día.",
      lifestyle: "Organiza tu mañana a tu ritmo."
    }
  },
  {
    day: 20,
    week: 3,
    weekTitle: "Mentalidad y Confianza",
    weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
    title: "Pequeños placeres cotidianos",
    content: "La felicidad está en las cosas pequeñas.",
    affirmation: "Merezco disfrutar cada momento.",
    actions: {
      beauty: "Un gesto de belleza simple.",
      mental: "Lista 10 pequeños placeres fáciles.",
      lifestyle: "Realiza al menos 2 hoy."
    }
  },
  {
    day: 21,
    week: 3,
    weekTitle: "Mentalidad y Confianza",
    weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
    title: "Resumen Semana 3",
    content: "¿Cómo evoluciona tu mentalidad? ¿Qué pensamiento te sostuvo esta semana?",
    affirmation: "Me estoy volviendo mentalmente más fuerte cada día.",
    actions: {
      beauty: "Haz un cuidado que te haga feliz.",
      mental: "Anota tus progresos mentales.",
      lifestyle: "Prepara una intención para la próxima semana."
    }
  },
  // Semana 4
  {
    day: 22,
    week: 4,
    weekTitle: "Estilo de vida, Hábitos y Energía femenina",
    weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
    title: "Rutina nocturna Glow",
    content: "Las noches sagradas preparan hermosas mañanas.",
    affirmation: "Mis noches son un momento sagrado para mí.",
    actions: {
      beauty: "Desmaquillante profundo + hidratación.",
      mental: "Gratitud por 3 cosas.",
      lifestyle: "Prepara tu día de mañana."
    }
  },
  {
    day: 23,
    week: 4,
    weekTitle: "Estilo de vida, Hábitos y Energía femenina",
    weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
    title: "Preparación de comidas simple",
    content: "Una alimentación simple y saludable nutre el cuerpo y el espíritu.",
    affirmation: "Alimento mi cuerpo con amor y simplicidad.",
    actions: {
      beauty: "Cuidado express.",
      mental: "Simplifica tus comidas.",
      lifestyle: "Prepara 1 o 2 recetas simples para la semana."
    }
  },
  {
    day: 24,
    week: 4,
    weekTitle: "Estilo de vida, Hábitos y Energía femenina",
    weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
    title: "Guardarropa Glow Up",
    content: "Usa ropa que te haga sentir bien.",
    affirmation: "Merezco sentirme bien con lo que uso.",
    actions: {
      beauty: "Perfume + look limpio.",
      mental: "Escribe cómo quieres sentirte en tu ropa.",
      lifestyle: "Haz una mini limpieza y mantén las piezas que te favorecen."
    }
  },
  {
    day: 25,
    week: 4,
    weekTitle: "Estilo de vida, Hábitos y Energía femenina",
    weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
    title: "Espacio de belleza organizado",
    content: "Un espacio organizado crea energía fluida.",
    affirmation: "Creo un espacio que apoya mi feminidad.",
    actions: {
      beauty: "Organiza tus productos.",
      mental: "Elimina lo que no usas.",
      lifestyle: "Crea una esquina de belleza agradable."
    }
  },
  {
    day: 26,
    week: 4,
    weekTitle: "Estilo de vida, Hábitos y Energía femenina",
    weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
    title: "Hidratación máxima",
    content: "La hidratación es la clave del brillo natural.",
    affirmation: "Me cuido a mí misma con consistencia.",
    actions: {
      beauty: "Mascarilla hidratante.",
      mental: "Verifica tu nivel de energía.",
      lifestyle: "Completa tu rastreador de hidratación."
    }
  },
  {
    day: 27,
    week: 4,
    weekTitle: "Estilo de vida, Hábitos y Energía femenina",
    weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
    title: "Día Soft Life",
    content: "La vida suave es elegir la ternura.",
    affirmation: "Merezco calma, ternura y belleza.",
    actions: {
      beauty: "Un gesto que te haga sentir bien.",
      mental: "Ralentiza tu ritmo.",
      lifestyle: "Haz 3 actividades que te calmen (vela, música suave, baño...)."
    }
  },
  {
    day: 28,
    week: 4,
    weekTitle: "Estilo de vida, Hábitos y Energía femenina",
    weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
    title: "Glow Up Social",
    content: "Rodéate de personas positivas.",
    affirmation: "Cultivo relaciones hermosas y enriquecedoras.",
    actions: {
      beauty: "Una rutina simple.",
      mental: "Contacta a una persona que te haga bien.",
      lifestyle: "Planifica una salida o un momento agradable."
    }
  },
  {
    day: 29,
    week: 4,
    weekTitle: "Estilo de vida, Hábitos y Energía femenina",
    weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
    title: "Prepara el próximo mes",
    content: "Continúa tu viaje hacia la mejor versión de ti misma.",
    affirmation: "Me preparo para la siguiente etapa de mi evolución.",
    actions: {
      beauty: "Cuidado rápido.",
      mental: "Establece 3 objetivos para el próximo mes.",
      lifestyle: "Planifica tus rutinas."
    }
  },
  {
    day: 30,
    week: 4,
    weekTitle: "Estilo de vida, Hábitos y Energía femenina",
    weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
    title: "Resumen final y celebración",
    content: "¡Lo lograste! ✨ ¿Cómo te sientes? ¿Qué cambió más? ¿Cuál es tu mejor progreso?",
    affirmation: "Estoy orgullosa de mí. Esto es solo el comienzo.",
    actions: {
      beauty: "Haz un cuidado especial para celebrar.",
      mental: "Anota tus logros del mes.",
      lifestyle: "¡Celebra tu progreso!"
    }
  }
];

export const bonusAffirmations = [
  "Merezco felicidad y amor",
  "Soy suficiente, exactamente como soy",
  "Brillo de confianza y gracia",
  "Atraigo experiencias positivas",
  "Merezco ser tratada con respeto",
  "Soy capaz de realizar mis sueños",
  "Mi valor no depende de la opinión de otros",
  "Me estoy convirtiendo en la mejor versión de mí misma",
  "Merezco amar y ser amada",
  "Elijo la alegría cada día",
  "Soy fuerte, resiliente y hermosa",
  "Confío en mi intuición",
  "Merezco el éxito que deseo",
  "Soy una mujer digna de respeto",
  "Abrazo mi feminidad única",
  "Creo mi propia realidad",
  "Estoy rodeada de amor y positividad",
  "Merezco una vida llena de ternura",
  "Soy una obra maestra en evolución",
  "Elijo liberarme de las dudas"
];

export const softLifeTips = [
  "Tómate 5 minutos cada mañana para estirarte suavemente",
  "Enciende una vela durante tu rutina nocturna",
  "Escucha una lista de reproducción tranquila durante tu viaje",
  "Prepara tu atuendo la noche anterior",
  "Bebe una taza de té o café sin pantalla",
  "Escribe 3 gratitudes cada mañana",
  "Crea un rincón cómodo para leer o meditar",
  "Usa toallas suaves y perfumadas",
  "Agrega flores frescas a tu espacio",
  "Practica la respiración profunda cuando estés estresada"
];

// Listas de verificación detalladas
export const checklistsData = [
  {
    id: 'morning-routine',
    title: 'Rutina Matinal',
    icon: '☀️',
    description: 'Comienza tu día con intención y ternura',
    items: [
      { text: 'Bebe un gran vaso de agua con limón', checked: false },
      { text: 'Estiramientos suaves durante 5 minutos', checked: false },
      { text: 'Meditación o respiración profunda (3-5 min)', checked: false },
      { text: 'Rutina completa de cuidado de la piel', checked: false },
      { text: 'Desayuno nutritivo y equilibrado', checked: false },
      { text: 'Escribe 3 gratitudes del día', checked: false },
      { text: 'Afirmación positiva frente al espejo', checked: false },
      { text: 'Planifica las 3 prioridades del día', checked: false }
    ]
  },
  {
    id: 'evening-routine',
    title: 'Rutina Nocturna',
    icon: '🌙',
    description: 'Termina tu día con belleza y prepara un sueño reparador',
    items: [
      { text: 'Organiza tu espacio (máximo 15 min)', checked: false },
      { text: 'Prepara el atuendo de mañana', checked: false },
      { text: 'Doble limpieza del rostro', checked: false },
      { text: 'Rutina completa de cuidado de la piel nocturna', checked: false },
      { text: 'Diario: anota 3 momentos positivos', checked: false },
      { text: 'Lectura inspiradora (10-15 min)', checked: false },
      { text: 'Té relajante o leche dorada', checked: false },
      { text: 'Apaga las pantallas 30 min antes de dormir', checked: false },
      { text: 'Meditación o música suave', checked: false }
    ]
  },
  {
    id: 'weekly-selfcare',
    title: 'Autocuidado Semanal',
    icon: '💆‍♀️',
    description: 'Cuídate cada semana con estos rituales',
    items: [
      { text: 'Mascarilla facial hidratante o purificante', checked: false },
      { text: 'Exfoliante corporal en la ducha', checked: false },
      { text: 'Cuidado del cabello (mascarilla o aceite)', checked: false },
      { text: 'Manicura/pedicura casera', checked: false },
      { text: 'Baño relajante con sales o aceites', checked: false },
      { text: 'Sesión de yoga o estiramiento (30 min)', checked: false },
      { text: 'Ordena tu espacio', checked: false },
      { text: 'Prepara comidas saludables para la semana', checked: false },
      { text: 'Momento creativo (dibujo, escritura, música)', checked: false },
      { text: 'Llama a alguien cercano que te haga bien', checked: false }
    ]
  },
  {
    id: 'monthly-goals',
    title: 'Objetivos Mensuales',
    icon: '🎯',
    description: 'Establece y alcanza tus objetivos mensuales',
    items: [
      { text: 'Define 3 objetivos principales del mes', checked: false },
      { text: 'Crea un tablero de visión para el mes', checked: false },
      { text: 'Planifica los pasos concretos', checked: false },
      { text: 'Bloquea tiempo en tu agenda', checked: false },
      { text: 'Identifica los obstáculos potenciales', checked: false },
      { text: 'Celebra las victorias de la semana', checked: false },
      { text: 'Ajusta la estrategia si es necesario', checked: false },
      { text: 'Haz un resumen de progreso', checked: false },
      { text: 'Recompénsate por tus esfuerzos', checked: false },
      { text: 'Prepara las intenciones del próximo mes', checked: false }
    ]
  }
];

// Mini-Guía Soft Life en 5 pasos
export const softLifeGuide = {
  title: 'Mini-Guía Soft Life',
  subtitle: 'Crea una vida suave, alineada y plena en 5 pasos',
  steps: [
    {
      number: 1,
      title: 'Ralentiza y Respira',
      icon: '🌸',
      description: 'La vida suave comienza por ralentizar el ritmo',
      content: 'Aprende a decir no a las cosas que no te sirven. Crea momentos de pausa en tu día: 5 minutos de respiración profunda por la mañana, un descanso de té sin pantalla por la tarde, 10 minutos de meditación por la noche. La ternura comienza cuando dejas de correr.',
      tips: [
        'Bloquea "citas contigo misma" en tu agenda',
        'Practica la respiración 4-7-8 (inhala 4s, retén 7s, exhala 8s)',
        'Crea una lista de reproducción "slow living" para tus momentos tranquilos'
      ]
    },
    {
      number: 2,
      title: 'Crea un Espacio Sagrado',
      icon: '🕯️',
      description: 'Tu entorno influye en tu energía',
      content: 'Transforma tu espacio en un santuario. Desordena, agrega velas perfumadas, plantas, texturas suaves. Elige colores relajantes (beige, blanco roto, rosa pálido). Tu espacio debe hacerte sentir en paz apenas entres.',
      tips: [
        'Regla del 3: mantén solo lo que es hermoso, útil o significativo',
        'Agrega flores frescas cada semana',
        'Invierte en toallas y sábanas hermosas y suaves',
        'Crea una esquina de lectura/meditación acogedora'
      ]
    },
    {
      number: 3,
      title: 'Alimenta Tu Cuerpo con Amor',
      icon: '🥗',
      description: 'La vida suave pasa por cuidar tu templo',
      content: 'Come alimentos que te hagan bien, no solo lo que es rápido. Prepara tus comidas con intención. Hidrátate. Mueve tu cuerpo con ternura (yoga, caminata, danza). Duerme lo suficiente. Tu cuerpo merece ser tratado como una reina.',
      tips: [
        'Prepara "comidas estéticas" que alimenten cuerpo y alma',
        'Bebe agua en un vaso bonito o una botella linda',
        'Haz del deporte una celebración, no un castigo',
        'Crea una rutina de cuidado de la piel que te encante'
      ]
    },
    {
      number: 4,
      title: 'Protege Tu Energía',
      icon: '✨',
      description: 'Elige conscientemente lo que consumes',
      content: 'Ordena tus relaciones, tu feed de Instagram, tus conversaciones. Rodéate de personas que te eleven. Consume contenido inspirador. Limita las noticias negativas. Aprende a establecer límites saludables. Tu energía es valiosa.',
      tips: [
        'Deja de seguir todo lo que no te inspira o te hace sentir mal',
        'Crea listas de reproducción que eleven tu ánimo',
        'Practica decir "no" sin culpa',
        'Rodéate de personas que celebren tu crecimiento'
      ]
    },
    {
      number: 5,
      title: 'Cultiva la Gratitud y la Alegría',
      icon: '💖',
      description: 'La vida suave es un estado mental',
      content: 'Celebra las pequeñas victorias. Escribe tus gratitudes diarias. Encuentra belleza en lo ordinario. Ríe a menudo. Sé amable contigo misma. La vida suave no es perfecta, es intencional y llena de momentos preciosos.',
      tips: [
        'Mantén un diario de gratitud (3 cosas por día)',
        'Celebra tus progresos, incluso los más pequeños',
        'Crea rituales que te hagan sonreír',
        'Practica la autocompasión como lo harías con tu mejor amiga'
      ]
    }
  ]
};

// Secciones Bonus adicionales
export const bonusSections = [
  {
    id: 'petits-succes',
    title: 'La lista de pequeños éxitos',
    icon: '🏆',
    color: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    iconColor: 'text-green-600 dark:text-green-400',
    duration: '2 a 4 minutos',
    description: 'Celebra tus victorias diarias',
    content: {
      intro: 'Duración: 2 a 4 minutos',
      steps: [
        'Anota tres pequeños logros realizados esta semana (incluso los mínimos).',
        'Describe por qué estos logros son importantes para ti.',
        'Relee esta lista cada mañana para recordarte que eres capaz.'
      ],
      why: 'La autovaloración ayuda a fortalecer la confianza y reducir el sentimiento de fracaso.',
      examples: [],
      tracking: {
        weeklyCount: 0,
        history: [],
        encouragementThreshold: 3,
        encouragementMessage: "On ne se connaît pas, mais ta joie est contagieuse : je suis très heureux pour toi et je fête avec toi ! 🥂",
        inputField: ""
      }
    }
  },
  {
    id: 'question-soir',
    title: 'La pregunta de la noche',
    icon: '🌙',
    color: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
    duration: '30 segundos',
    description: 'Escucha tu intuición profunda',
    content: {
      intro: '« Si mi corazón ya lo supiera, ¿cuál sería su respuesta? »',
      subtitle: 'Ritual (30 segundos):',
      steps: [
        'Piensa en tu bloqueo.',
        'Haz la pregunta.',
        'Anota la primera palabra que viene.'
      ],
      why: 'Al despertar, nos sentimos más claros, el corazón ya lo sabe.',
      examples: [
        { question: '¿Debo dejar este trabajo?', answer: 'Libertad' },
        { question: '¿Esta amistad me conviene?', answer: 'Agotada' }
      ],
      tracking: {
        monthlyCount: 0,
        history: [],
        inputField: ""
      }
    }
  },
  {
    id: 'limites-paix',
    title: '8 límites para preservar tu paz interior',
    icon: '🛡️',
    color: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
    iconColor: 'text-pink-600 dark:text-pink-400',
    duration: 'Para practicar diariamente',
    description: 'Protege tu energía y bienestar',
    content: {
      intro: 'Aprende a establecer límites saludables para preservar tu paz interior.',
      steps: [
        'No responder mensajes después de cierta hora',
        'Cortar conversaciones demasiado negativas',
        'Rehusar prestar algo si no te sientes cómoda',
        'Decir no a una invitación sin culpa',
        'Limitar el contacto con una persona invasiva',
        'Rehusar hablar de un tema sensible',
        'Pedir tiempo para pensar antes de responder',
        'Decir no a un favor que te incomoda'
      ],
      why: 'Establecer límites no es egoísta, es esencial para tu bienestar mental y emocional.',
      examples: [],
      tracking: {
        weeklyCounts: {
          'No responder mensajes después de cierta hora': 0,
          'Cortar conversaciones demasiado negativas': 0,
          'Rehusar prestar algo si no te sientes cómoda': 0,
          'Decir no a una invitación sin culpa': 0,
          'Limitar el contacto con una persona invasiva': 0,
          'Rehusar hablar de un tema sensible': 0,
          'Pedir tiempo para pensar antes de responder': 0,
          'Decir no a un favor que te incomoda': 0
        },
        encouragementThreshold: 3,
        encouragementMessage: "ton engagement envers tes limites est une vraie victoire. Continue : ta paix intérieure te remercie, et moi je fête avec toi",
        inputField: ""
      }
    }
  },
  {
    id: '50-choses-seule',
    title: '50 cosas para hacer sola',
    icon: '💫',
    color: 'from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    duration: 'Lista de deseos personal',
    description: 'Disfruta de momentos preciosos contigo misma',
    content: {
      intro: 'Descubre el placer de tu propia compañía con estas 50 actividades enriquecedoras.',
      steps: [],
      why: 'Pasar tiempo sola fortalece la independencia, la confianza en ti misma y te permite conocerte mejor.',
      examples: []
    }
  }
];

// 50 cosas para hacer sola
export const fiftyThingsAlone = [
  'Ir a tomar un café en un lugar acogedor',
  'Hacer una larga caminata en la naturaleza',
  'Probar un nuevo restaurante en solitario',
  'Mantener un diario de gratitud',
  'Leer una novela en un parque o café',
  'Regalarte un ramo de flores',
  'Probar un nuevo hobby creativo (pintura, collage, crochet...)',
  'Organizar y reorganizar una esquina de tu casa',
  'Hacer una sesión de yoga o estiramiento',
  'Ver una película o serie que te haga bien',
  'Meditar 5 a 10 minutos',
  'Hacer una sesión de afirmaciones positivas frente al espejo',
  'Hacer una caminata sin teléfono',
  'Cocinar un plato que adores',
  'Hacer un tablero de visión',
  'Aprender algo en YouTube (tutorial de belleza, DIY, cultura...)',
  'Ir al museo sola',
  'Tomar un baño relajante',
  'Hacer una lista de tus objetivos del mes',
  'Mantener un diario de emociones o pensamientos',
  'Visitar una librería y comprarte un libro',
  'Ir al cine sola',
  'Tomar una siesta reparadora',
  'Ordenar y renovar tu guardarropa',
  'Escribir una carta a tu "yo futuro"',
  'Probar una nueva actividad deportiva',
  'Explorar un nuevo barrio de la ciudad',
  'Hacerte un cuidado de belleza casero (mascarilla, exfoliante...)',
  'Ir a la playa / al lago si es posible',
  'Hacer un rompecabezas o juego de lógica',
  'Escuchar un podcast inspirador',
  'Crear un cuaderno de recuerdos o fotos',
  'Hacerte un brunch casero',
  'Ir a una sala de té para relajarte',
  'Tomarte tiempo para soñar y no hacer nada',
  'Ir a un taller o clase (cocina, danza, arte...)',
  'Probar un nuevo peinado o rutina de belleza',
  'Hacer una caminata por el mercado local',
  'Ver la puesta de sol',
  'Crear una lista de tus valores personales',
  'Beber chocolate caliente bajo una manta',
  'Ir de compras sola',
  'Ir a una biblioteca y hojear revistas',
  'Intentar un desafío creativo (30 días de dibujos, escritura...)',
  'Organizar una "cita en solitario" (restaurante, actividad, caminata)',
  'Escribir un poema o una pequeña historia',
  'Despertarte temprano para disfrutar de la calma de la mañana',
  'Escribir en un diario durante 5 minutos en un lugar tranquilo',
  'Ordenar tus redes sociales',
  'Planificar un mini viaje o una salida en solitario'
];

// Function to get localized data based on language
export function getLocalizedChallengeDays(language: Language): ChallengeDay[] {
  switch (language) {
    case 'fr':
      return challengeDaysFr;
    case 'en':
      return challengeDaysEn;
    case 'es':
    default:
      return challengeDays;
  }
}

export function getLocalizedBonusAffirmations(language: Language): string[] {
  switch (language) {
    case 'fr':
      return bonusAffirmationsFr;
    case 'en':
      return bonusAffirmationsEn;
    case 'es':
    default:
      return bonusAffirmations;
  }
}

export function getLocalizedSoftLifeTips(language: Language): string[] {
  switch (language) {
    case 'fr':
      return softLifeTipsFr;
    case 'en':
      return softLifeTipsEn;
    case 'es':
    default:
      return softLifeTips;
  }
}

export function getLocalizedChecklistsData(language: Language) {
  switch (language) {
    case 'fr':
      return checklistsDataFr;
    case 'en':
      return checklistsDataEn;
    case 'es':
    default:
      return checklistsData;
  }
}

export function getLocalizedSoftLifeGuide(language: Language) {
  switch (language) {
    case 'fr':
      return softLifeGuideFr;
    case 'en':
      return softLifeGuideEn;
    case 'es':
    default:
      return softLifeGuide;
  }
}

export function getLocalizedBonusSections(language: Language) {
  switch (language) {
    case 'fr':
      return bonusSectionsFr;
    case 'en':
      return bonusSectionsEn;
    case 'es':
    default:
      return bonusSections;
  }
}

export function getLocalizedFiftyThingsAlone(language: Language): string[] {
  switch (language) {
    case 'fr':
      return fiftyThingsAloneFr;
    case 'en':
      return fiftyThingsAloneEn;
    case 'es':
    default:
      return fiftyThingsAlone;
  }
}

// Function to update tracking and check for encouragement
export function updateBonusTracking(sectionId: string, action: string, count: number = 1): { showEncouragement: boolean; message: string } {
  const section = bonusSections.find(section => section.id === sectionId);
  if (!section) {
    return { showEncouragement: false, message: '' };
  }

  const tracking = section.content.tracking;
  if (!tracking) {
    return { showEncouragement: false, message: '' };
  }

  if (sectionId === 'petits-succes') {
    const petitsSuccesTracking = tracking as PetitsSuccesTracking;
    petitsSuccesTracking.weeklyCount += count;
    if (petitsSuccesTracking.weeklyCount >= petitsSuccesTracking.encouragementThreshold) {
      return { showEncouragement: true, message: petitsSuccesTracking.encouragementMessage };
    }
  } else if (sectionId === 'question-soir') {
    const questionSoirTracking = tracking as QuestionSoirTracking;
    questionSoirTracking.monthlyCount += count;
  } else if (sectionId === 'limites-paix') {
    const limitesPaixTracking = tracking as LimitesPaixTracking;
    if (action in limitesPaixTracking.weeklyCounts) {
      limitesPaixTracking.weeklyCounts[action] += count;
      const totalLimits = Object.values(limitesPaixTracking.weeklyCounts).reduce((a: number, b: number) => a + b, 0);
      if (totalLimits >= limitesPaixTracking.encouragementThreshold) {
        return { showEncouragement: true, message: limitesPaixTracking.encouragementMessage };
      }
    }
  }

  return { showEncouragement: false, message: '' };
}
