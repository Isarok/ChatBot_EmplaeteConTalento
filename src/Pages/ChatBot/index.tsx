import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../../Components/config";
import ActionProvider from "../../Components/ActionProvaider";
import MessageParser from "../../Components/MessageParser";
import { ChatStateProvider } from "../../Components/ChatStateProvider";
import "./style.css";
import { useState } from "react";


function ChatBot() {
    const [chatState, setChatState] = useState({ messages: [], HTMLString: "" });

    //setChatState(this.messages, this.HTMLString);

    return (
        <ChatStateProvider value={{ chatState, setChatState }}>
            <div className="ChatBot">
                <Chatbot
                    headerText="Orientador Virtual de Empléate con Talento"
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </div>
        </ChatStateProvider>
    );
}

export default ChatBot;