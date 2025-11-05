export interface NewsItem {
    id: string;
    title: string;
    excerpt: string;
    img: string;
    date: string;
}

export interface ToggleProps {
    pressed: boolean;
    onToggle: (value: boolean) => void;
    onlabel?: string;
    offlabel?: string;
}

export interface CardProps {
    item: NewsItem;
}

export interface CardGridProps {
    items: NewsItem[];
    compact?: boolean;
}

export interface User {
    id: string | number;
    name: string;
    email: string;
    phone: string;
    company?: {
        name: string;
        catchPhrase: string;
    };
}