import { useState, useEffect } from 'react';
import { fetchSuggestions } from '../services/huggingFaceAPI';

const useAIModel = (inputText) => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (inputText) {
            setLoading(true);
            fetchSuggestions(inputText)
                .then((data) => {
                    setSuggestions(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                });
        } else {
            setSuggestions([]);
        }
    }, [inputText]);

    return { suggestions, loading, error };
};

export default useAIModel;