import { useState } from "react";

export default function HelpGuidanceCounsellor(props: { actions: { Redes: () => void; SiNoCorreo: () => void; }; }) {
    const [botonClickeado, setBotonClickeado] = useState(false);

    const handleClick = (url: string | URL | null | undefined, action: { (): void; (): void; (): void; }) => {
        if (!botonClickeado) {
            // Ejecutar la acción asociada al botón
            if (action) {
                action();
            }
            // Abrir la URL en una nueva pestaña si la URL está definida
            if (url) {
                window.open(url, "_blank");
            }
            // Desactivar todos los botones después de un clic
            setBotonClickeado(true);
        }
    };

    const Despedida = () => {
        props.actions.Redes();
        props.actions.SiNoCorreo();
    };

    const getButtonClassName = () => {
        return botonClickeado ? "start-btn disabled" : "start-btn";
    };

    return (
        <div>
            <button
                onClick={() =>
                    handleClick(
                        "https://www.empleatecontalento.es/orientacion-coaching-profesional-para-buscar-empleo/",
                        Despedida
                    )
                }
                disabled={botonClickeado}
                className={getButtonClassName()}
            >
                Sí
            </button>

            <button
                onClick={() => handleClick(null, Despedida)}
                disabled={botonClickeado}
                className={getButtonClassName()}
            >
                No
            </button>
        </div>
    );
}
