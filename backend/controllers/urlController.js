import axios from 'axios';
import { countWordFrequency } from '../utils/wordFrequencyCounter.js';

export const analyzeUrl = async (req,res) =>{
    const { url } = req.body;
    try {
        const { data } = await axios.get(url);
        const frequencies = countWordFrequency(data);
        res.status(200).json(frequencies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to analyze URL content' });
    }
};