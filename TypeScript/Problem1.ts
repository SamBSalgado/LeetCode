/*
4. MEDIAN OF TWO SORTED ARAYS

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Go to LeetCode and look for the problem #4, and read the examples for a better understanding.
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  const medianIndex = Math.floor(totalLength / 2);

  let i = 0;
  let j = 0;
  let current = 0;
  let previous = 0;

  for (let k = 0; k <= medianIndex; k++) { // itera hasta alcanzar ell índice del elemento medio
    previous = current; // guarda el valor actual en previous
    if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) { // compara los elementos de los arrays y selecciona el menor
      current = nums1[i]; // asigna el index de nums1 a current
      i++; // y avanza el index i
    } else {
      current = nums2[j]; // asigna el valor de nums2 a current
      j++; // y avanza index j
    }
  }

  return isEven ? (previous + current) / 2 : current; // si isEven resulta true, devuelve la division
                                                      // entre 2 de la suma de previous y current.
                                                      // Si isEven es false, devuelve current.
};