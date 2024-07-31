import { useState, useEffect } from "react";

export default function PresentSituation(props: { actions: { DeseasMasAyudaFormacion: () => void; AspectoMejorar: unknown; }; }) {
    const [despedidaEjecutada, setDespedidaEjecutada] = useState(false);

    useEffect(() => {
        if (!despedidaEjecutada) {
            // Establecer un temporizador para ejecutar las funciones después de 1000 milisegundos (1 segundo) al montar el componente
            const timeoutId = setTimeout(() => {
                props.actions.DeseasMasAyudaFormacion(); // Ejecutar Despedida solo una vez
                setDespedidaEjecutada(true); // Marcar que Despedida se ha ejecutado
            }, 1700);

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
                        "https://www.empleatecontalento.es/cursos-gratuitos-desempleados/"
                    )
                }
                className={getButtonClassName()}
            >
                Desempleado
            </button>

            <button
                onClick={() =>
                    handleButtonClick(
                        "https://www.empleatecontalento.es/cursos-gratuitos-trabajadores-autonomos/"
                    )
                }
                className={getButtonClassName()}
            >
                Trabajando
            </button>

            <button
                onClick={() =>
                    handleButtonClick(
                        "https://www.empleatecontalento.es/cursos-gratuitos-emprendedores/"
                    )
                }
                className={getButtonClassName()}
            >
                Emprendiendo
            </button>

            <button
                onClick={() =>
                    handleButtonClick(
                        "https://www.empleatecontalento.es/cursos-gratuitos-jovenes-garantia-juvenil/"
                    )
                }
                className={getButtonClassName()}
            >
                Menor de 35 años
            </button>
        </div>
    );
}
