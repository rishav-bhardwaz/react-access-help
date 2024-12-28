import { useEffect } from "react";
export function useAccessibleFocus(ref, condition) {
    useEffect(function () {
        if (condition && ref.current) {
            ref.current.focus();
        }
    }, [condition, ref]);
}
