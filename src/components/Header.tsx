import { toggleTheme } from '@/features/theme/themeSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';

export default function Header() {
    const mode = useSelector((state: any) => state.theme.mode );
    const dispatch = useDispatch(); 

    useEffect(() => {document.documentElement.dataset.theme = mode;}, [mode]);

    const baseClass = "nav__link";

    function getNavLinkClass({isActive, isPending}: {isActive: boolean, isPending: boolean}) {
        let classes = baseClass;
        if (isPending) {
            classes += " nav__link--pending";
        }
        if (isActive) {
            classes += " nav__link--active";
        }
        return classes;
    }

    return (
        <header className="header">
            <div className="header__inner">
                <h1 style={{margin: 0, color: 'var(--brand)'}}>Лабораторна робота № 13</h1>
            </div>
            <nav className="nav" aria-label="Головна навігація">
                <NavLink to="/" end className={getNavLinkClass}>Головна</NavLink>
                <NavLink to="/about" className={getNavLinkClass}>Про нас</NavLink>
                <NavLink to="/contacts" className={getNavLinkClass}>Контакти</NavLink>
                <div className="flex ml-auto gap-0.5">
                    <button
                        type="button"
                        className="nav__link nav__link--cta"
                        onClick={() => dispatch(toggleTheme())}
                        title="Перемикач теми"
                    >
                        {mode === 'light' ? 'Темна' : 'Світла'}
                    </button>
                </div>
            </nav>
        </header>
    )
}