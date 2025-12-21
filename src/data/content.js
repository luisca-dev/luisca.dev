export const content = {
  en: {
    log: "console.log('Hello, world! I\\'m Luisca.');",
    keys: {
      name: "name",
      alias: "alias",
      role: "role",
      status: "status",
      hobbies: "hobbies",
      passions: "passions",
      colors: "colors"
    },
    roleValue: "Senior Software Engineer",
    statusValue: "Building awesome things",
    colorsLabels: ["Red", "Black", "White"],
    hobbiesLabels: ["Soccer", "Video Games"],
    passionsLabels: ["Faith", "AI", "Cars", "Food"],
    contactBtn: "Contact",
    email: "hi@luisca.dev",
    footer: "Made with ♥ and code.",
    noHelloLink: "protocol/no-hello",
    
    // Contenido No-Hello EN
    noHelloTitle: "please-dont-say-hello.md",
    noHelloIntro: "The basic premise is simple: Don't just say 'Hello' and wait for a reply. Say 'Hello' and ask your question in the same message.",
    
    problemTitle: "1. The Problem: Unnecessary Interruption",
    problemBody: "When you send just 'Hello', you force the other person to drop what they're doing just to acknowledge your presence, without knowing if it's urgent or trivial. This creates slow, inefficient conversations.",
    problemLabel: "Inefficient Scenario",
    problemChat: [
      { u: "You", m: "Hello.", t: "09:00" },
      { u: "Colleague", m: "Hi, what's up?", t: "09:15" },
      { u: "You", m: "Do you have a moment?", t: "09:16" },
      { u: "Colleague", m: "Yes, tell me.", t: "09:25" },
      { u: "You", m: "The app isn't loading.", t: "09:26" }
    ],
    problemResult: "Result: 25 minutes have passed and you still don't have an answer/solution.",

    solutionTitle: "2. The Solution: The 'No Hello' Approach",
    solutionBody: "Compress the interaction so the other person has all the context needed to answer you as soon as they read the message, even if it's hours later.",
    solutionLabel: "Efficient Scenario",
    solutionChat: [
      { u: "You", m: "Hi Luisca, the app isn't loading, could you check what's happening?", t: "09:00" },
      { u: "Colleague", m: "Sure, checking it now.", t: "09:15" }
    ],
    solutionResult: "Result: You get a useful response from the very first interaction.",

    noteTitle: "Important Note on Courtesy",
    noteBody: "'No Hello' doesn't mean being rude or skipping the greeting. It means not using the greeting as 'bait' to get attention before speaking. Always greet, but attach the greeting to the content.",
    
    backBtn: "cd .."
  },
  es: {
    log: "console.log('Hola, mundo! Soy Luisca.');",
    keys: {
      name: "nombre",
      alias: "alias",
      role: "rol",
      status: "estado",
      hobbies: "pasatiempos",
      passions: "pasiones",
      colors: "colores"
    },
    roleValue: "Senior Software Engineer",
    statusValue: "Creando cosas increíbles",
    colorsLabels: ["Rojo", "Negro", "Blanco"],
    hobbiesLabels: ["Fútbol", "Videojuegos"],
    passionsLabels: ["Fe", "IA", "Autos", "Comida"],
    contactBtn: "Contactar",
    email: "hola@luisca.dev",
    footer: "Hecho con ♥ y código.",
    noHelloLink: "protocolo/no-hello",

    // Contenido No-Hello ES
    noHelloTitle: "por-favor-no-digas-hola.md",
    noHelloIntro: "La premisa básica es: No digas simplemente 'Hola' y esperes una respuesta. Di 'Hola' y haz tu pregunta en el mismo mensaje.",
    
    problemTitle: "1. El Problema: La interrupción innecesaria",
    problemBody: "Cuando envías solo un 'Hola', obligas a la otra persona a dejar lo que está haciendo solo para reconocer tu presencia, sin saber si es urgente o trivial. Esto crea una conversación lenta e ineficiente.",
    problemLabel: "Escenario Ineficiente",
    problemChat: [
      { u: "Tú", m: "Hola.", t: "09:00" },
      { u: "Colega", m: "Hola, ¿qué tal?", t: "09:15" },
      { u: "Tú", m: "¿Tienes un momento?", t: "09:16" },
      { u: "Colega", m: "Sí, dime.", t: "09:25" },
      { u: "Tú", m: "La app no carga.", t: "09:26" }
    ],
    problemResult: "Resultado: Han pasado 25 minutos y aún no tienes una respuesta/solución.",

    solutionTitle: "2. La Solución: El enfoque 'No Hello'",
    solutionBody: "La idea es comprimir la interacción para que la otra persona tenga todo el contexto necesario para responderte en cuanto lea el mensaje, incluso si es horas después.",
    solutionLabel: "Escenario Eficiente",
    solutionChat: [
      { u: "Tú", m: "Hola Luisca, la app no carga, ¿podrías revisar qué sucede?", t: "09:00" },
      { u: "Colega", m: "Claro, ahora lo reviso.", t: "09:15" }
    ],
    solutionResult: "Resultado: Obtienes una respuesta útil desde la 1ra interacción.",

    noteTitle: "Nota Importante sobre la Cortesía",
    noteBody: "\"No Hello\" no significa ser grosero ni dejar de saludar. Significa no usar el saludo como un \"cebo\" para obtener atención antes de hablar. Siempre se debe saludar, pero el saludo debe ir pegado al contenido.",

    backBtn: "cd .."
  }
};
