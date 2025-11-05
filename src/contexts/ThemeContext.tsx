import { createContext, useContext, useMemo, useState, ReactNode } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
    initial?: Theme;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children, initial = "light" }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(initial);
    const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
    
    return (
        <div data-theme={theme} className="app-theme-root">
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextType {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme повинна використовуватись всередині ThemeProvider");
    return ctx;
}