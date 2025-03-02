class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_index = {}
        left = 0
        max_length = 0  

        for right in range(len(s)):  
            if s[right] in char_index:  # If the character has been seen before, move left pointer
                left = max(left, char_index[s[right]] + 1)  

            char_index[s[right]] = right  # Store or update character index
            max_length = max(max_length, right - left + 1)  

        return max_length