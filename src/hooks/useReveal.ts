import {useEffect} from 'react'

export const useReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        }, {threshold: 0.1})

        const hiddenElements = document.querySelectorAll('.reveal')
        hiddenElements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}