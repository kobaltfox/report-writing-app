import { useState, useEffect } from 'react';
import fetchSuggestions from '../services/huggingFaceAPI';

const useAIModel = (inputText: string) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (inputText) {
            setLoading(true);
            fetchSuggestions(inputText)
                .then((data) => {
                    setSuggestions(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, [inputText]);

    return { suggestions, loading, error };
};

export default useAIModel;