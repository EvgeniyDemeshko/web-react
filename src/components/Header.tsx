import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
    onNavigate?: (to: string) => void;
}

export default function Header({onNavigate}: HeaderProps) {
    const { theme, toggleTheme } = useTheme();

    function go(e: React.MouseEvent<HTMLAnchorElement>, to: string) {
        e.preventDefault();
        onNavigate?.(to);
    }

    return (
        <header className="header">
            <div className="header__inner">
                <h1 style={{margin: 0, color: 'var(--brand)'}}>Лабораторна робота № 10</h1>
            </div>
            <nav className="nav" aria-label="Головна навігація">
                <a className="nav__link" href="#" onClick={(e) => go(e, 'home')}>Головна</a>
                <a className="nav__link" href="#" onClick={(e) => go(e, 'about')}>Про нас</a>
                <a className="nav__link" href="#" onClick={(e) => go(e, 'contacts')}>Контакти</a>
                <div className="flex ml-auto gap-0.5">
                    <button
                        type="button"
                        className="nav__link nav__link--cta"
                        onClick={toggleTheme}
                        title="Перемикач теми"
                    >
                        {theme === 'light' ? 'Темна' : 'Світла'}
                    </button>
                </div>
            </nav>
        </header>
    )
}