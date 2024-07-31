import { useState } from "react";

export default function StartButton(props: { actions: { añosExpe: () => void; SituacionActual: () => void; ramaEmprendimiento: () => void; }; }) {

    const [botonClickeado, setBotonClickeado] = useState(false);

    const handleClick = (action: { (): void; (): void; (): void; (): void; }) => {
        if (!botonClickeado) {
            // Ejecutar la acción asociada al botón
            action();
            // Desactivar todos los botones
            setBotonClickeado(true);
        }
    };

    const añosExpe = () => {
        props.actions.añosExpe();
    };

    const ramaFormacion = () => {
        props.actions.SituacionActual();
    };

    const ramaEmprendimiento = () => {
        props.actions.ramaEmprendimiento();
    };

    const getButtonClassName = () => {
        return botonClickeado ? "start-btn disabled" : "start-btn";
    };

    return (
        <div>
            <button
                className={getButtonClassName()}
                onClick={() => handleClick(añosExpe)}
                disabled={botonClickeado}
            >
                ¿Estás buscando empleo?
            </button>
            <button
                className={getButtonClassName()}
                onClick={() => handleClick(ramaFormacion)}
                disabled={botonClickeado}
            >
                ¿Estás buscando formación?
            </button>
            <button
                className={getButtonClassName()}
                onClick={() => handleClick(ramaEmprendimiento)}
                disabled={botonClickeado}
            >
                ¿Quieres emprender?
            </button>
        </div>
    );
}
