import Card from './Card'
import { CardGridProps } from '../types';

export default function CardGrid({ items, compact = false }: CardGridProps) {
    const cls = compact ? 'card-grid card-grid--compact' : 'cards'
    return (
        <>
            <h2 className="main__title"></h2>
            <div className={cls}>
                {items.map(it => <Card key={it.id} item={it} />)}
            </div>
        </>
    )
}