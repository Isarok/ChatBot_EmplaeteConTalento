import { useState } from "react";

export default function DoYouWichMoreHelpTraining(props: { actions: { MasFormacion: () => void; Redes: () => void; SiNoCorreo: () => void; }; }) {
    const [botonClickeado, setBotonClickeado] = useState(false);

    const handleClick = (action: { (): void; (): void; (): void; }) => {
        if (!botonClickeado) {
            // Ejecutar la acción asociada al botón
            action();
            // Desactivar todos los botones
            setBotonClickeado(true);
        }
    };

    const MasayudaSi = () => {
        props.actions.MasFormacion();
    };

    const MasayudaNo = () => {
        props.actions.Redes();
        props.actions.SiNoCorreo();
    };

    const getButtonClassName = () => {
        return botonClickeado ? "start-btn disabled" : "start-btn";
    };

    return (
        <div>
            <button
                className={getButtonClassName()}
                onClick={() => handleClick(MasayudaSi)}
                disabled={botonClickeado}
            >
                SI
            </button>
            <button
                className={getButtonClassName()}
                onClick={() => handleClick(MasayudaNo)}
                disabled={botonClickeado}
            >
                NO
            </button>
        </div>
    );
}