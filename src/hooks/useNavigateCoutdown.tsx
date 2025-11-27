import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, NavigateOptions } from "react-router";

export function useNavigateCountdown() {
    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startCountdown = useCallback(
        (seconds: number, to: string, options: NavigateOptions = {}) => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }

            setSecondsLeft(seconds);

            timerRef.current = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev <= 1) {
                        if (timerRef.current) {
                            clearInterval(timerRef.current);
                        }
                        timerRef.current = null;
                        navigate(to, options);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        },
        [navigate]
    );

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    return { secondsLeft, startCountdown,};
}