/*
4. MEDIAN OF TWO SORTED ARAYS

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Go to LeetCode and look for the problem #4, and read the examples for a better understanding.
*/

//                         +-------------------------------- NOTA: FALTA VER SI CUMPLE CON 0(log(m+n)).--------------------------------+

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let mergedArray = [...nums1, ...nums2].sort((a,b) => a-b); //junta los arrays y los ordena numéricamente de forma ascendente
    let n = mergedArray.length;

    if (n % 2 === 0) { //si length es par:
        return (mergedArray[n/2-1] + mergedArray[n/2])/2; //divide entre 2 la suma del extremo derecho de la primera mitad y el extremo izquierdo de la segunda mitad
    } else { //si length es impar
        return mergedArray[Math.floor(n/2)]; //divide entre 2 el length y lo redondea hacia abajo
    }
};

console.log(findMedianSortedArrays([1,2], [3]));
console.log(findMedianSortedArrays([1,2], [3,4]));