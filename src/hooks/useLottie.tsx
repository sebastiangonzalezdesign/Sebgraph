import { useEffect, useRef, useState } from 'react'

export const useLottie = (animationData: any, autoplay = true) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (!containerRef.current) return

        // Use Intersection Observer to only load when visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!containerRef.current || !animationData || !isVisible) return

        let animation: any = null

        // Dynamically import lottie only when visible
        import('lottie-web').then((lottie) => {
            if (containerRef.current) {
                animation = lottie.default.loadAnimation({
                    container: containerRef.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay,
                    animationData,
                })
            }
        })

        return () => {
            if (animation) {
                animation.destroy()
            }
        }
    }, [animationData, autoplay, isVisible])

    return containerRef
}
