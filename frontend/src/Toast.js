import React, { useEffect, useState } from 'react';

const Toast = ({ message, show, onClose }) => {
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(onClose, 300); // Additional timeout for the fade-out duration
            }, 2000); // 2000 milliseconds = 2 seconds

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    const toastClasses = `fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`;

    if (!show) return null;

    return (
        <div className={toastClasses}>
            {message}
            <button onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }} className="text-lg ml-4">✕</button>
        </div>
    );
};

export default Toast;