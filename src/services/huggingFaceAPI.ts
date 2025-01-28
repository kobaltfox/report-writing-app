import axios from 'axios';

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/coedit-large';
const API_TOKEN = 'sk-svcacct-DqH_wvBOWueMfSRRYpx9w9mFAUYcrSDzTjJRcO0JmvIieUtzuSWqETvMB0_qrufsex5qT3BlbkFJICnCCilRAtB2Qt4mdW0OWAjNEE1HWkA2o6LauDN2VfepbDdq43i-hgGBFQoCGqTnuNEA';

export const analyzeText = async (text: string) => {
    try {
        const response = await axios.post(
            HUGGING_FACE_API_URL,
            { inputs: text },
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error analyzing text:', error);
        throw error;
    }
};