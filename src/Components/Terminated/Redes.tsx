
export default function Redes(_props: any) {
    const handleClick = (url: string | URL | undefined) => {
        // Abrir la URL en una nueva pestaña al hacer clic en el botón
        window.open(url, "_blank");
    };

    return (
        <div>
            <a
                href="https://www.whatsapp.com/channel/0029Va9lm9x2v1InvYQD9N20"
                onClick={(e) => {
                    e.preventDefault();
                    handleClick(e.currentTarget.href);
                }}
                className="button-link"
            >
                <button className="end-btn">WhatsApp</button>
            </a>

            <a
                href="https://t.me/empleatecontalento"
                onClick={(e) => {
                    e.preventDefault();
                    handleClick(e.currentTarget.href);
                }}
                className="button-link"
            >
                <button className="end-btn">Telegram</button>
            </a>

            <a
                href="https://www.linkedin.com/company/empleatecontalento/"
                onClick={(e) => {
                    e.preventDefault();
                    handleClick(e.currentTarget.href);
                }}
                className="button-link"
            >
                <button className="end-btn">LinkedIn</button>
            </a>

            <a
                href="https://www.instagram.com/empleatecontalento/"
                onClick={(e) => {
                    e.preventDefault();
                    handleClick(e.currentTarget.href);
                }}
                className="button-link"
            >
                <button className="end-btn">Instagram</button>
            </a>

            <a
                href="https://www.tiktok.com/@empleatecontalento"
                onClick={(e) => {
                    e.preventDefault();
                    handleClick(e.currentTarget.href);
                }}
                className="button-link"
            >
                <button className="end-btn">TikTok</button>
            </a>
        </div>
    );
}