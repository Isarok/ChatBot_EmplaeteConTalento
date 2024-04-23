import Emprendimiento from '../../assets/emprendimiento.png';

// Interfaz para las categorías
interface CategoryData {
  [key: string]: string;
}

// Interfaz para las preguntas
interface Question {
  id: number;
  question: string;
  category: string;
  five_answer: string;
  four_answer: string;
  three_answer: string;
  two_answer: string;
  one_answer: string;
 // Propiedad opcional para mantener compatibilidad con QuestionData
}

// Imágenes para cada categoría
export const imgs: string[] = [Emprendimiento];

// Definición de las categorías
export const categories: CategoryData = {
  emprendimiento: 'Emprendimiento',
};

// Definición de preguntas para la categoría "Emprendimiento"
export const questions: Question[] = [
	{
		id: 1,
		question: '¿Cómo manejas las críticas y retroalimentaciones negativas?',
		category: categories.emprendimiento,
		five_answer: 'Las veo como oportunidades para aprender y mejorar.',
		four_answer: 'Aunque me duelen, trato de tomarlas de manera constructiva.',
		three_answer: 'A veces me cuesta manejar críticas y retroalimentaciones negativas, pero trato de no dejar que me afecten.',
		two_answer: 'Suelo sentirme frustrado/a o enojado/a ante las críticas y retroalimentaciones negativas.',
		one_answer: 'Ignoro las críticas y retroalimentaciones negativas y no las tomo en cuenta para mejorar.',
	},
	{
		id: 2,
		question: '¿Cómo describirías tu nivel de pasión y vocación por tu área de trabajo?',
		category: categories.emprendimiento,
		five_answer: 'Muy apasionado/a y comprometido/a, siempre estoy buscando nuevas formas de ser creativo/a e innovador/a.',
		four_answer: 'Bastante apasionado/a, aunque a veces necesito inspiración para mantener mi creatividad.',
		three_answer: 'Tengo interés en mi área de trabajo, pero no siempre encuentro la motivación para ser creativo/a e innovador/a.',
		two_answer: 'No siento mucha pasión ni vocación por mi área de trabajo.',
		one_answer: 'No tengo interés en mi área de trabajo y no busco ser creativo/a ni innovador/a.',
	},
	{
		id: 3,
		question: '¿Qué tan perseverante y tenaz eres cuando te enfrentas a desafíos?',
		category: categories.emprendimiento,
		five_answer: 'Muy perseverante, no me rindo fácilmente y siempre busco soluciones.',
		four_answer: 'Bastante perseverante, aunque a veces me cuesta mantenerme motivado/a.',
		three_answer: 'A veces me desanimo frente a los desafíos, pero siempre intento seguir adelante.',
		two_answer: 'No suelo ser perseverante, me rindo fácilmente ante los obstáculos.',
		one_answer: 'Me resulta difícil mantener la perseverancia y la tenacidad frente a los desafíos.',
	},
	{
		id: 4,
		question: '¿Cómo sueles manejar los momentos de incertidumbre y dificultades?',
		category: categories.emprendimiento,
		five_answer: 'Mantengo una mentalidad positiva y confío en mi capacidad para superar cualquier obstáculo.',
		four_answer: 'Aunque a veces me siento preocupado/a, trato de mantener una actitud optimista y proactiva.',
		three_answer: 'Me cuesta mantener una mentalidad positiva frente a la incertidumbre y las dificultades.',
		two_answer: 'Suelo preocuparme mucho y tengo dificultades para ver el lado positivo de las cosas.',
		one_answer: 'Me resulta imposible mantener una mentalidad positiva frente a las dificultades.',
	},
	{
		id: 5,
		question: '¿Cómo tomas decisiones importantes?',
		category: categories.emprendimiento,
		five_answer: 'Con determinación y confianza en mis habilidades para resolver problemas.',
		four_answer: 'Después de analizar cuidadosamente todas las opciones disponibles.',
		three_answer: 'A veces me cuesta tomar decisiones importantes, pero confío en mi instinto.',
		two_answer: 'Evito tomar decisiones importantes y prefiero dejarlas en manos de otros.',
		one_answer: 'Suelo tomar decisiones impulsivas sin considerar todas las opciones.',
	},
	{
		id: 6,
		question: '¿Cuánto tiempo dedicas a aprender nuevas habilidades o conocimientos relevantes?',
		category: categories.emprendimiento,
		five_answer: 'Dedico tiempo semanalmente a aprender cosas nuevas.',
		four_answer: 'Intento aprender cosas nuevas cuando tengo la oportunidad.',
		three_answer: 'Solo aprendo cuando es necesario para resolver un problema específico o hacer algo.',
		two_answer: 'No suelo buscar oportunidades de aprendizaje.',
		one_answer: 'No me interesa aprender cosas nuevas.',
	},
	{
		id: 7,
		question: '¿Cómo calificarías tu capacidad para gestionar tu tiempo, planificar y organizar tus actividades?',
		category: categories.emprendimiento,
		five_answer: 'Muy buena, siempre tengo un plan claro y me organizo eficientemente.',
		four_answer: 'Buena, aunque a veces me cuesta mantenerme organizado/a.',
		three_answer: 'Regular, suelo tener dificultades para planificar y organizar mis tareas.',
		two_answer: 'Pobre, siempre me siento desorganizado/a y desbordado/a.',
		one_answer: 'Muy pobre, no tengo ningún sistema de planificación ni organización.',
	},
	{
		id: 8,
		question: '¿Cómo te desenvuelves en situaciones de comunicación, tanto verbal como no verbal, en el ámbito profesional?',
		category: categories.emprendimiento,
		five_answer: 'Excelentemente, tengo habilidades de comunicación destacadas y me relaciono bien con los demás.',
		four_answer: 'Buena, aunque a veces me cuesta expresarme claramente.',
		three_answer: 'Regular, a veces me siento incómodo/a en situaciones sociales.',
		two_answer: 'Pobre, tengo dificultades para comunicarme efectivamente y relacionarme con los demás.',
		one_answer: 'Muy pobre, me resulta casi imposible relacionarme con los demás.',
	},
	{
		id: 9,
		question: '¿Cómo te desenvuelves en situaciones de negociación y persuasión?',
		category: categories.emprendimiento,
		five_answer: 'Excelentemente, suelo lograr los resultados deseados en las negociaciones.',
		four_answer: 'Bien, aunque a veces me cuesta convencer a los demás.',
		three_answer: 'Regular, no siempre logro persuadir a los demás según mis objetivos.',
		two_answer: 'Pobre, me resulta difícil negociar y persuadir a otros.',
		one_answer: 'Muy pobre, no tengo habilidades de negociación ni persuasión.',
	},
	{
		id: 10,
		question: '¿Te consideras un buen líder?',
		category: categories.emprendimiento,
		five_answer: 'Sí, tengo habilidades de liderazgo sólidas y sé cómo motivar al equipo.',
		four_answer: 'En general, sí, aunque a veces me cuesta encontrar el equilibrio entre liderar y colaborar.',
		three_answer: 'Normal, aunque a veces me cuesta tomar decisiones difíciles como líder.',
		two_answer: 'No, tengo dificultades para liderar.',
		one_answer: 'No me interesa ser líder.',
	},
	{
		id: 11,
		question: '¿Cómo describirías tu capacidad para trabajar en equipo?',
		category: categories.emprendimiento,
		five_answer: 'Excelente, sé cómo colaborar efectivamente con otros para alcanzar objetivos comunes.',
		four_answer: 'Buena, aunque a veces me cuesta trabajar en equipo debido a diferencias de opinión.',
		three_answer: 'Regular, a veces me cuesta comunicarme y colaborar con otros.',
		two_answer: 'Pobre, tengo dificultades para trabajar en equipo y suelo preferir trabajar solo/a.',
		one_answer: 'Muy pobre, no me gusta trabajar en equipo y evito hacerlo siempre que es posible.',
	},
	{
		id: 12,
		question: '¿Cómo te relacionas con tu entorno profesional?',
		category: categories.emprendimiento,
		five_answer: 'Mantengo relaciones sólidas y constructivas con otros profesionales y empresas.',
		four_answer: 'En general, me relaciono bien con mi entorno profesional, aunque a veces tengo conflictos.',
		three_answer: 'Normal, aunque a veces me cuesta establecer y mantener relaciones profesionales.',
		two_answer: 'Tengo dificultades para relacionarme con otros en mi entorno profesional.',
		one_answer: 'No me interesa relacionarme con mi entorno profesional.',
	},
	{
		id: 13,
		question: '¿Qué tan importante crees que es entender las necesidades y emociones de los demás en el ámbito profesional?',
		category: categories.emprendimiento,
		five_answer: 'Muy importante, la empatía es fundamental para el éxito.',
		four_answer: 'Importante, aunque a veces me cuesta ponerme en el lugar de los demás.',
		three_answer: 'A veces me preocupo más por mis propias necesidades.',
		two_answer: 'No tan importante, creo que lo importante es enfocarse en alcanzar objetivos.',
		one_answer: 'No creo que sea importante entender las necesidades y emociones de los demás.',
	},
	{
		id: 14,
		question: '¿Cómo describirías tu capacidad para practicar la escucha activa?',
		category: categories.emprendimiento,
		five_answer: 'Excelente, siempre presto atención y soy receptivo a las ideas de los demás.',
		four_answer: 'Buena, aunque a veces me cuesta mantener la concentración durante las conversaciones.',
		three_answer: 'Regular, a veces me distraigo durante las conversaciones.',
		two_answer: 'Pobre, suelo interrumpir a las personas o perder el hilo de la conversación.',
		one_answer: 'Muy pobre, no suelo prestar atención a lo que dicen los demás.'
	},
	{
		id: 15,
		question: '¿Cómo te consideras en términos de adaptabilidad y flexibilidad en entornos profesionales cambiantes?',
		category: categories.emprendimiento,
		five_answer: 'Muy adaptable, me siento cómodo/a ajustándome a nuevas situaciones y desafíos.',
		four_answer: 'Bastante adaptable, aunque a veces me cuesta adaptarme rápidamente a los cambios.',
		three_answer: 'A veces me cuesta adaptarme a cambios inesperados, pero trato de hacerlo lo mejor posible.',
		two_answer: 'Tengo dificultades para adaptarme a nuevas situaciones y cambios en el entorno profesional.',
		one_answer: 'Me resulta imposible adaptarme a cambios y prefiero la estabilidad.'
	},


];
