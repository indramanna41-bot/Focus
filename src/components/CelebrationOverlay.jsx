import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper Star Component
const Star = ({ className, delay }) => (
    <motion.svg
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: [0, 1.2, 1], rotate: [0, 90, 180] }}
        transition={{ delay, duration: 0.5 }}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`star-icon ${className}`}
    >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </motion.svg>
);

const CelebrationOverlay = ({ isVisible, onComplete }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onComplete, 2000); // Disappear after 2 seconds
            return () => clearTimeout(timer);
        }
    }, [isVisible, onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="celebration-overlay"
                >
                    {/* Backdrop blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="celebration-backdrop"
                    />

                    {/* Main Content */}
                    <motion.div
                        initial={{ scale: 0.5, y: 50 }}
                        animate={{
                            scale: 1,
                            y: 0,
                            rotate: [0, -5, 5, 0]
                        }}
                        exit={{ scale: 0.8, opacity: 0, y: -50 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="celebration-content"
                    >
                        {/* Glow Effect behind text */}
                        <div className="celebration-glow" />

                        {/* Text */}
                        <h2 className="celebration-text">
                            Good Job!
                        </h2>

                        {/* Sparkles/Stars */}
                        <Star className="star-yellow" delay={0.1} />
                        <Star className="star-cyan" delay={0.2} />
                        <Star className="star-pink" delay={0.3} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CelebrationOverlay;
