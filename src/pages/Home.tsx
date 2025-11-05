import { useState } from 'react'
import {NEWS} from '../data/news'
import Toggle from '../components/Toggle'
import CardGrid from '../components/CardGrid'

export default function Home() {
    const [compact, setCompact] = useState(false)
    const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        gap: '1rem',
        flexWrap: 'wrap'
    } as const;
    return (
        <>
            <div style={styles}>
                <h2 style={{margin: 0}}>Головна</h2>

                <Toggle 
                    pressed={compact} 
                    onToggle={setCompact} 
                    onlabel="Compact: увімкнено" 
                    offlabel="Compact: вимкнено"
                />
            </div>
            <CardGrid items={NEWS} compact={compact}/>
        </>
    )
}