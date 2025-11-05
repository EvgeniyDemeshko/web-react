import { ToggleProps } from '../types';

export default function Toggle({ pressed, onToggle, onlabel = 'Compact ON', offlabel = 'Compact OFF' }: ToggleProps) {
    return (
        <div className="toggle">
            <span>{pressed ? offlabel : onlabel}</span>
            <button
                type="button" 
                className="toggle__btn"
                onClick={() => onToggle(!pressed)}
            >
                Перемкнути
            </button>
        </div>
    )
}