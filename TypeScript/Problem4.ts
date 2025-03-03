/*
10. REGULAR EXPRESSION MATCHING
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Go to LeetCode and look for the problem #10. Read the examples for a better understanding.
*/

function isMatch(s: string, p: string): boolean {
  const dp: boolean[][] = Array(s.length + 1).fill(null).map(() => Array(p.length + 1).fill(false));  //crea matriz en false
  dp[0][0] = true; //true porque las cadenas al inicio coinciden al estar vacias

  for (let j = 2; j <= p.length; j += 2) { //maneja patrones como "a*" o ".*" al inicio
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  //compara cada caracter de la cadena con el patron
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === '.') { //si coinciden exactamente o es "."
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') { //en caso de encontrar "*"
        dp[i][j] = dp[i][j - 2]; //opcion 1: no se usa el caracter previo

        if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j] || dp[i - 1][j]; //opcion 2: se usa el carácter previo si coincide con el actual de s
        }
      }
    }
  }

  return dp[s.length][p.length]; //se comparan las cadenas
}