import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "../Components/Avatar";
import BotonInicio from "../Components/StartButton";
import ButtonYearsExp from "../Components/EmploymentBranch/ButtonYearsExp";
import ButtonYearsExpLessLinks from "../Components/EmploymentBranch/ButtonYearsExpLessLinks";
import ButtonYearsExpeMore from "../Components/EmploymentBranch/ButtonYearsExpeMore";
import Redes from "../Components/Terminated/Redes";
import NotMail from "../Components/Terminated/NotMail";
import AspectImprovement from "../Components/BridgingFunctions/AspectImprovement";
import HelpGuidanceCounsellor from "../Components/BridgingFunctions/HelpGuidanceCounsellor";
import DoYouWishMoreHelp from "../Components/EmploymentBranch/DoYouWishMoreHelp";
import PresentSituation from "../Components/TrainingBranch/PresentSituation";
import DoYouWichMoreHelpTraining from "../Components/TrainingBranch/DoYouWichMoreHelpTraining";
import MoreTrainig from "../Components/TrainingBranch/MoreTrainig";
import EntrepreneurshipLinks from "../Components/EntrepreneurshipBranch/EntrepreneurshipLinks";

const startbotn = document.querySelectorAll(".start-btn");

startbotn.forEach((boton) => {
    boton.addEventListener("click", function (this: HTMLElement) {
        this.classList.add("active"); // Añadir clase "active" al elemento cliqueado
    });
});

const config = {
    botName: "Consejero Virtual",
    initialMessages: [
        createChatBotMessage(
            `Hola, bienvenid@ a Empléate con Talento. Soy tu orientador virtual y puedo ayudarte a encontrar los mejores contenidos en función de tus necesidades, solo tienes que escojer una de las siguientes opciones.`,
            {
                widget: "BotonInicio",
            }
        ),
    ],

    customComponents: {
        botAvatar: (props: any) => <Avatar {...props} />,
    },

    state: {
        gist: "",
        infoBox: "",
    },

    widgets: [
        //RAMA EMPLEO
        {
            widgetName: "BotonInicio",
            widgetFunc: (props: any) => <BotonInicio {...props} />,
        },
        {
            widgetName: "BotonAñosExpe",
            widgetFunc: (props: any) => <ButtonYearsExp {...props} />,
        },
        {
            widgetName: "BotonAñosExpeMenosEnlaces",
            widgetFunc: (props: any) => <ButtonYearsExpLessLinks {...props} />,
        },
        {
            widgetName: "BotonAñosExpeMasEnlaces",
            widgetFunc: (props: any) => <ButtonYearsExpeMore {...props} />,
        },

        //RAMA FORMACION
        {
            widgetName: "SituacionActual",
            widgetFunc: (props: any) => <PresentSituation {...props} />,
        },
        {
            widgetName: "DeseasMasAyudaFormacion",
            widgetFunc: (props: any) => <DoYouWichMoreHelpTraining {...props} />,
        },
        {
            widgetName: "MasFormacion",
            widgetFunc: (props: any) => <MoreTrainig {...props} />,
        },

        //RAMA EMPRENDIMIENTO
        {
            widgetName: "EnlacesEmprendimiento",
            widgetFunc: (props: any) => <EntrepreneurshipLinks {...props} />,
        },

        //funcion puente, conector entre eventos
        {
            widgetName: "DeseasMasAyuda",
            widgetFunc: (props: any) => <DoYouWishMoreHelp {...props} />,
        },

        //ayuda orientador
        {
            widgetName: "AyudaOrientador",
            widgetFunc: (props: any) => <HelpGuidanceCounsellor {...props} />,
        },

        //widgets lo que se mejora
        {
            widgetName: "AspectoMejorar",
            widgetFunc: (props: any) => <AspectImprovement {...props} />,
        },

        //widgets generales
        {
            widgetName: "Redes",
            widgetFunc: (props: any) => <Redes {...props} />,
        },
        {
            widgetName: "SiNoCorreo",
            widgetFunc: (props: any) => <NotMail {...props} />,
        },
    ],
};

export default config;