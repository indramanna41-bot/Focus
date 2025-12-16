import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="app-layout"
        >
            <header className="app-header">
                <h1 className="app-title">
                    Focus
                </h1>
                <p className="app-subtitle">
                    What are your priorities today?
                </p>
            </header>
            <main className="app-main">
                {children}
            </main>
        </motion.div>
    );
};

export default Layout;
