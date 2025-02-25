import java.util.Arrays;

class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
     int[] mergeArray = new int[nums1.length + nums2.length];
     double median = 0.0;

     System.arraycopy(nums1, 0, mergeArray, 0, nums1.length);
     System.arraycopy(nums2, 0, mergeArray, nums1.length, nums2.length);
     
     Arrays.sort(mergeArray);
     if (mergeArray.length % 2 == 0) {
         int mid = mergeArray.length / 2;
         median = (mergeArray[mid - 1] + mergeArray[mid]) / 2.0;
     } else {
         median = mergeArray[mergeArray.length / 2];
     }
     return median;

 }
}
