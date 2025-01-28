import React, { useState, useEffect } from 'react';
import { useAIModel } from '../hooks/useAIModel';

const Editor: React.FC = () => {
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const { fetchSuggestions } = useAIModel();

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    useEffect(() => {
        const fetch = async () => {
            const newSuggestions = await fetchSuggestions(text);
            setSuggestions(newSuggestions);
        };

        if (text) {
            fetch();
        } else {
            setSuggestions([]);
        }
    }, [text, fetchSuggestions]);

    return (
        <div className="editor">
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Write your report here..."
            />
            {suggestions.length > 0 && (
                <div className="suggestions">
                    <h3>Suggestions:</h3>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Editor;