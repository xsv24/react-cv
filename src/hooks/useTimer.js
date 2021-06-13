import { useState, useEffect } from "react";

export default function useTimer(delay, maxIterations = 1) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const ref = count < maxIterations && setTimeout(() => setCount(count + 1), delay);

        return () => ref && clearTimeout(ref);
    });

    return count;
}
