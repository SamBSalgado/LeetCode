/*
3. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
Given a string s, find the length of the longest substring without duplicate characters.
Go to LeetCode and look for the problem #3, and read the instructions for a better understanding.
*/

function lengthOfLongestSubstring(s: string): number {
  let characterIndexList: Map<string, number> = new Map(); //aqui se almacenan los strings con su valor
  let maxLength: number = 0; //maxima longitud histórica
  let left: number = 0; //limite izquierdo indica a partir de dónde no hay caracteres repetidos

  for (let index = 0; index < s.length; index++) {
    if (characterIndexList.has(s[index])) { //si el caracter ya existe en map
      left = Math.max(left, characterIndexList.get(s[index])+1); //mueve left delante de la posicion repetida
    }

    characterIndexList.set(s[index], index); //agrega el caracter al map. En caso de ya existir, actualiza su valor
    maxLength = Math.max(maxLength, index - left + 1); //evalua qué valor es mayor: la longitud maxima registrada o la actual respecto a left
  }

  return maxLength;
};