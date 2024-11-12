export const countWordFrequency = (text) =>{
    const words = text.match(/\b\w+\b/g);
    const frequencyMap = {};

    words.forEach((word) =>{
        word = word.toLowerCase();
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    })
    return Object.entries(frequencyMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([word, count]) => ({ word, count }));
};