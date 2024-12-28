import { useEffect } from "react";

export function useAccessibleFocus(ref: React.RefObject<HTMLElement>, condition: boolean) {
  useEffect(() => {
    if (condition && ref.current) {
      ref.current.focus();
    }
  }, [condition, ref]);
}
