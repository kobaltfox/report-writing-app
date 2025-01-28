import React, { useState, useEffect } from 'react';
import useAIModel from '../hooks/useAIModel';


const Editor: React.FC = () => {
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const { suggestions: newSuggestions, loading, error } = useAIModel(text);

    useEffect(() => {
        const fetch = async () => {
            if (!loading && !error) {
                setSuggestions(newSuggestions);
            }
        };
        fetch();
    }, [text, newSuggestions, loading, error]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

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