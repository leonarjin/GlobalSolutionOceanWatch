import React, { useEffect } from 'react';

interface LoadScriptProps {
    url: string;
    onLoad: () => void;
}

const LoadScript: React.FC<LoadScriptProps> = ({ url, onLoad }) => {
    useEffect(() => {
        const existingScript = document.querySelector(`script[src="${url}"]`);
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            script.defer = true;
            script.onload = () => onLoad();
            document.head.appendChild(script);
            return () => {
                document.head.removeChild(script);
            };
        } else {
            onLoad();
        }
    }, [url, onLoad]);

    return null;
};

export default LoadScript;
