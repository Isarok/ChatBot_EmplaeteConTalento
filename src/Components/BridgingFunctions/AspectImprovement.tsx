import { useState, useEffect } from "react";

export default function AspectImprovement(props: { actions: { AyudaOrientador: () => void; AspectoMejorar: unknown; }; }) {
    const [despedidaEjecutada, setDespedidaEjecutada] = useState(false);

    useEffect(() => {
        if (!despedidaEjecutada) {
            const timeoutId = setTimeout(() => {
                props.actions.AyudaOrientador();
                setDespedidaEjecutada(true); // Marcar que Despedida se ha ejecutado
            }, 1600);

            // Limpiar el temporizador al desmontar el componente para evitar ejecuciones adicionales
            return () => clearTimeout(timeoutId);
        }
    }, [despedidaEjecutada, props.actions.AspectoMejorar]);

    const handleClick = (url: string | URL | undefined) => {
        // Abrir la URL en una nueva pestaña
        window.open(url, "_blank");
    };

    const handleButtonClick = (url: string) => {
        handleClick(url); // Llamar a handleClick para abrir la URL en una nueva pestaña
        // Puedes agregar más lógica aquí si es necesario
    };

    const getButtonClassName = () => {
        return despedidaEjecutada ? "start-btn disabled" : "start-btn";
    };

    return (
        <div>
            <button
                onClick={() =>
                    handleButtonClick(
                        "https://www.empleatecontalento.es/como-elaborar-buen-curriculum/"
                    )
                }
                className={getButtonClassName()}
            >
                Mi Currículum
            </button>

            <button
                onClick={() =>
                    handleButtonClick(
                        "https://www.empleatecontalento.es/como-redactar-carta-presentacion/"
                    )
                }
                className={getButtonClassName()}
            >
                Mi Carta de Presentación
            </button>

            <button
                onClick={() =>
                    handleButtonClick(
                        "https://www.empleatecontalento.es/buscar-trabajo-linkedin/"
                    )
                }
                className={getButtonClassName()}
            >
                En el uso de LinkedIn
            </button>

            <button
                onClick={() =>
                    handleButtonClick(
                        "https://www.empleatecontalento.es/entrevista-trabajo/"
                    )
                }
                className={getButtonClassName()}
            >
                En las Entrevistas
            </button>
        </div>
    );
}