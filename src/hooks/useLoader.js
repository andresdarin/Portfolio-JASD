// src/hooks/useLoader.js
import { useState, useEffect } from 'react'

export function useLoader(timeout = 2000) {
    const [loading, setLoading] = useState(true)

    // Apagar loader después de X milisegundos
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), timeout)
        return () => clearTimeout(timer)
    }, [timeout])

    // Bloquear/desbloquear scroll mientras carga
    useEffect(() => {
        document.body.style.overflow = loading ? 'hidden' : ''
    }, [loading])

    return loading
}
