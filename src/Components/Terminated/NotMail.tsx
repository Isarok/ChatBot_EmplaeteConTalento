import { useState } from "react";

export default function NotMail(props: { actions: { SendEmail: () => void; Final2: () => void; }; }) {
    const [botonClickeado, setBotonClickeado] = useState(false);

    const handleClick = (action: { (): void; (): void; (): void; }) => {
        if (!botonClickeado) {
            // Ejecutar la acción asociada al botón
            action();
            // Desactivar todos los botones
            setBotonClickeado(true);
        }
    };

    const correoSi = () => {
        props.actions.SendEmail();
    };

    const correoNo = () => {
        props.actions.Final2();
    };

    const getButtonClassName = () => {
        return botonClickeado ? "start-btn disabled" : "start-btn";
    };
    return (
        <div>
            <button
                className={getButtonClassName()}
                onClick={() => handleClick(correoSi)}
                disabled={botonClickeado}
            >
                SI
            </button>
            <button
                className={getButtonClassName()}
                onClick={() => handleClick(correoNo)}
                disabled={botonClickeado}
            >
                NO
            </button>
        </div>
    );
}