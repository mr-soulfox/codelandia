import { useRef } from "react"

export function useDebounce(fn: any, delay: number) {
    const timeoutRef = useRef(null)

    function debouncedFn(...params: any) {
        window.clearTimeout(timeoutRef.current)

        timeoutRef.current = window.setTimeout(() => {
            fn(...params)

        }, delay)
    }

    return debouncedFn

}