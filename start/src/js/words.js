import dictionary from './dictionary';
//random word from the dictionary
export const getWord = () => dictionary[Math.floor(Math.random() * dictionary.length)];
/* 
function checks if the word is in the dictionary
*/
export const isInDictionary = (str) => dictionary.includes(str);

