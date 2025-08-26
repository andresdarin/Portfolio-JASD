import { useState, useEffect } from "react"
import "./ScrollToTop.css"

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (!isVisible) return null

    return (
        <button
            className="scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    )
}

export default ScrollToTop
