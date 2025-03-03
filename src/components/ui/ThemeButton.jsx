import { useEffect, useState } from "react";

const ThemeButton = () => {

    const [theme, setTheme] = useState(false);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme ? 'light' : '');

        return () => {
            document.body.removeAttribute('data-theme');
        }
    }, [theme]);

    const ThemeChange = () => {
        setTheme(!theme);
        setStatus(!status);
    }

    return (
        <div className="btn-container">
            <span>{status ? 'Dark' : 'Light'} Mode</span>
            <div>
                <input
                    type="checkbox"
                    id="themeChange"
                    onClick={ThemeChange}
                />
                <label className="btn-toggle" htmlFor="themeChange" title="Theme change" data-testid="toggle-button"></label>
            </div>
        </div>
    );
};

export default ThemeButton;