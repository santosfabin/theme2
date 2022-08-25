import { useState, useEffect } from 'react'

export function usePersustedState(key: string, initialState: any) {
    const [state, setState] = useState(initialState)
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
    return [state, setState]
}