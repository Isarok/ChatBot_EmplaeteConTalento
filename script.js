const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const checkboxContent1 = document.querySelector("#checkbox1");
const checkboxContent2 = document.querySelector("#checkbox2");

let userMessage = null; // Variable to store user's message
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const arrayStrings = ['Como has elegido menos de dos años te doy esta url www.sadsa.com', 'Como has elegido mas de dos años te doy esta url www.dsadsadsadda.com', 'Como has elegido entre dos y dos mil te doy esta url www.dsadsadsa.com'];

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const messageInput = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;
}

const generateResponse = (chatElement, userMessage) => {
    const messageElement = chatElement.querySelector("p");
    let response = "";

    // Aquí puedes definir las respuestas predeterminadas basadas en el mensaje del usuario
    switch(userMessage.toLowerCase()) {
        case "empleo":
        case "hi":
            response = "Muy bien visita estos enlaces para empleo";
            break;
        case "mas de 2 años":
            response = "Muy bien visita estos enlaces";
            break;
        case "menos de 2 años":
            response = "Lo siento no tengo nada para ti";
            break;
        default:
            response = "I'm sorry, I didn't quite understand that.";
            break;
    }

    // Establecer la respuesta en el elemento de mensaje
    messageElement.textContent = response;

    // Desplazar hasta la parte inferior del chatbox
    chatbox.scrollTo(0, chatbox.scrollHeight);
}


const handleChat = () => {
    const userMessage = chatInput.value.trim(); // Obtener el mensaje del usuario y eliminar espacios en blanco adicionales
    if (!userMessage) return;

    // Limpiar el textarea de entrada y establecer su altura predeterminada
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Añadir el mensaje del usuario al chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Mostrar el mensaje "Pensando..." mientras se espera la respuesta
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi, userMessage); // Pasar el mensaje del usuario a la función generateResponse
    }, 600);
}


chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});
function showButtons(buttonsId) {
    // Oculta todos los conjuntos de botones
    const allButtonsContainers = document.querySelectorAll('.button-container');
    allButtonsContainers.forEach(container => {
      container.classList.add('hidden');
    });

    // Muestra el conjunto de botones correspondiente al botón presionado
    const buttonsToShow = document.getElementById(buttonsId);
    if (buttonsToShow) {
      buttonsToShow.classList.remove('hidden');
    }
  }

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


arrayStrings.forEach(element => {
    console.log(element)
});