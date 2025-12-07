import { useState, useEffect, ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion' // Added AnimatePresence
import './ImageModalZoom.scss'

// Prop types definition
interface ImageModalZoomProps {
    children: ReactNode
    src: string
    loading?: 'lazy' | 'eager' // Optional loading prop with specific values
}

const ImageModalZoom = ({
    children,
    src,
    loading = 'lazy',
}: ImageModalZoomProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        // Prevent scroll when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto' // Re-enable scroll when modal is closed
        }

        // Cleanup function to reset overflow style
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <>
            {/* Trigger to open the modal (click on image or picture) */}
            <div className="modal-zoom__img-container" onClick={toggleModal}>
                {children}
            </div>

            {/* Modal with zoom functionality */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`modal-zoom__overlay ${
                            isOpen ? 'active' : ''
                        }`}
                        onClick={toggleModal} // Close when clicking outside the modal content
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }} // Customize duration as needed
                    >
                        <motion.div
                            className="modal-zoom__content"
                            onClick={(e: React.MouseEvent) =>
                                e.stopPropagation()
                            } // Prevent closing when clicking inside the modal content
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }} // Zoom effect transition
                        >
                            <div
                                className="modal-zoom__img-wrapper"
                                onClick={toggleModal}
                            >
                                <img src={src} alt="Zoomed Image" />
                                {/* Optionally, keep the close icon */}
                                <div className="modal-zoom__close-icon">
                                    <XMarkIcon onClick={toggleModal} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ImageModalZoom
