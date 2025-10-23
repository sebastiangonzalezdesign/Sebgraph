import React, { useRef, useEffect, useState } from 'react'
import './Video.scss'

interface VideoProps {
    src: string
    poster?: string
    className?: string
    autoPlay?: boolean
    muted?: boolean
    loop?: boolean
    controls?: boolean
    playsInline?: boolean
    preload?: 'none' | 'metadata' | 'auto'
    loading?: 'lazy' | 'eager'
    width?: string | number
    height?: string | number
    alt?: string
}

const Video: React.FC<VideoProps> = ({
    src,
    poster,
    className = '',
    autoPlay = true,
    muted = true,
    loop = true,
    controls = false,
    playsInline = true,
    preload = 'metadata',
    loading = 'lazy',
    width,
    height,
    alt = 'Video demonstration',
}) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video || !src) return

        // Intersection Observer for lazy loading
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true)
                        observer.unobserve(video)
                    }
                })
            },
            {
                rootMargin: '50px', // Start loading 50px before video enters viewport
            }
        )

        observer.observe(video)

        return () => {
            observer.disconnect()
        }
    }, [src])

    useEffect(() => {
        const video = videoRef.current
        if (!video || !src) return

        const handleLoadedData = () => {
            setIsLoaded(true)
            setHasError(false)

            // Ensure video plays and loops when loaded
            if (autoPlay && isInView && muted) {
                video.play().catch((error) => {
                    console.log('Autoplay prevented:', error)
                })
            }
        }

        const handleError = (e: Event) => {
            console.error('Video failed to load:', src, e)
            setHasError(true)
            setIsLoaded(false)
        }

        const handleCanPlay = () => {
            setIsLoaded(true)

            // Try to play when video can play
            if (autoPlay && isInView && muted) {
                video.play().catch((error) => {
                    console.log('Autoplay prevented:', error)
                })
            }
        }

        const handleEnded = () => {
            // Ensure loop works by manually restarting
            if (loop) {
                video.currentTime = 0
                video.play().catch((error) => {
                    console.log('Loop replay prevented:', error)
                })
            }
        }

        video.addEventListener('loadeddata', handleLoadedData)
        video.addEventListener('canplay', handleCanPlay)
        video.addEventListener('error', handleError)
        video.addEventListener('ended', handleEnded)

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData)
            video.removeEventListener('canplay', handleCanPlay)
            video.removeEventListener('error', handleError)
            video.removeEventListener('ended', handleEnded)
        }
    }, [src, autoPlay, isInView, muted, loop])

    // Effect to handle when video comes into view
    useEffect(() => {
        const video = videoRef.current
        if (!video || !isInView || !autoPlay || !muted) return

        // Try to play when video comes into view
        const tryToPlay = () => {
            if (video.readyState >= 2) {
                // HAVE_CURRENT_DATA or higher
                video.play().catch((error) => {
                    console.log('Autoplay prevented when in view:', error)
                })
            }
        }

        tryToPlay()
    }, [isInView, autoPlay, muted])

    // Don't render anything if no src is provided
    if (!src) {
        return null
    }
    // Detect headless / prerender environment (Puppeteer/Playwright usually set webdriver)
    const isHeadless =
        typeof navigator !== 'undefined' &&
        // navigator.webdriver is a common flag for headless browsers
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Boolean((navigator as any).webdriver)

    // If running in a headless prerenderer, avoid loading remote video files
    // which often fail in the headless environment and produce noisy console errors.
    if (isHeadless) {
        if (poster) {
            return (
                <div className={`video-container ${className}`}>
                    <img
                        src={poster}
                        alt={alt}
                        width={width}
                        height={height}
                        style={{
                            width: width || '100%',
                            height: height || 'auto',
                        }}
                    />
                </div>
            )
        }

        // Render a non-loading placeholder when no poster is available.
        return (
            <div className={`video-container ${className}`}>
                <div className="video-placeholder">
                    <div className="video-spinner"></div>
                </div>
            </div>
        )
    }

    return (
        <div className={`video-container ${className}`}>
            <video
                ref={videoRef}
                className={`video ${
                    isLoaded ? 'video--loaded' : 'video--loading'
                }`}
                src={src}
                poster={poster}
                autoPlay={autoPlay && muted}
                muted={muted}
                loop={loop}
                controls={controls}
                playsInline={playsInline}
                preload={preload}
                width={width}
                height={height}
                aria-label={alt}
                style={{
                    width: width || '100%',
                    height: height || 'auto',
                }}
            >
                Your browser does not support the video tag.
            </video>
            {!isLoaded && !hasError && (
                <div className="video-placeholder">
                    <div className="video-spinner"></div>
                </div>
            )}
            {hasError && (
                <div className="video-error">
                    <p>Failed to load video</p>
                </div>
            )}
        </div>
    )
}

export default Video
