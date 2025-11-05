import { useEffect, useState } from 'react';

interface UseFetchEmployeesResult<T> {
    data: T | null;
    loading: boolean;
    error: string;
}

export function useFetchEmployees<T = unknown>(url: string): UseFetchEmployeesResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const ctrl = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError('');

                const res = await fetch(url, { signal: ctrl.signal });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const ct = res.headers.get('Content-Type') || '';
                if (!ct.includes('application/json')) throw new Error('Unexpected content type');
                
                const json = await res.json() as T;
                setData(json);
            } catch (err) {
                if (err instanceof Error && err.name !== 'AbortError') {
                    setError(err.message || 'Request failed');
                }
            } finally {
                setLoading(false);
            }
        })();

        return () => ctrl.abort();
    }, [url]);

    return { data, loading, error };
}