import React from 'react';
import { motion } from 'framer-motion';
import { Check, Trash2 } from 'lucide-react';

const Confetti = () => {
    const particles = Array.from({ length: 12 });
    return (
        <div className="absolute-center">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: [1, 0],
                        scale: [0, 1.5],
                        x: Math.cos(i * 30 * (Math.PI / 180)) * 25,
                        y: Math.sin(i * 30 * (Math.PI / 180)) * 25,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="confetti-particle"
                />
            ))}
        </div>
    );
};

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <motion.li
            layout
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
            <button
                onClick={() => onToggle(todo.id)}
                className={`check-btn ${todo.completed ? 'checked' : ''}`}
            >
                {todo.completed && (
                    <>
                        <Check size={14} color="white" strokeWidth={3} className="relative-z10" />
                        <Confetti />
                    </>
                )}
            </button>

            <span
                className="todo-text"
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                className="delete-btn"
                aria-label="Delete task"
            >
                <Trash2 size={18} />
            </button>
        </motion.li>
    );
};

export default TodoItem;
