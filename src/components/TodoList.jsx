import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="empty-state"
            >
                <p>No tasks yet</p>
            </motion.div>
        );
    }

    return (
        <ul className="todo-list">
            <AnimatePresence initial={false} mode='popLayout'>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </AnimatePresence>
        </ul>
    );
};

export default TodoList;
