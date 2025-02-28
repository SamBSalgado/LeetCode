/*
10. REGULAR EXPRESSION MATCHING
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Go to LeetCode and look for the problem #10. Read the examples for a better understanding.
*/

function isMatch(s: string, p: string): boolean {
  let lastCharacter: string = '';
  let flag: boolean = true; //indica si el caracter es o no es coincidente

  for (let index = 0; index < s.length; index++) {
    if (!flag) {
      return flag; //termina el proceso en false
    }

    if (p[index] === "." && p[index+1] === "*") { //condicion unica para p = .* debido a que ese patron siempre será correcto
      return true;
    }
      
    if (p[index] === "." || s[index] === p[index]) { //si el index de p es "." ó ambos inputs coinciden
      lastCharacter = p[index]; //guarda el index actual de p
      flag = true; //es valido
    } else if (p[index] === "*" && lastCharacter === s[index]) { //evalúa si el string actual de "s" coincide con el anterior de p = *
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
};