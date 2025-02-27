class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        unrepeated = []
        counter = 0
        score = 0
        for letter in s:            
            if letter in unrepeated:
                unrepeated = []
                counter = 0
            else:
                unrepeated.append(letter)
                counter += 1
            if counter > score:
                score = counter
    
        return score