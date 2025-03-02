class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if not p:
            return not s  # In case it is empty

        # Check first match
        first_match = bool(s) and (s[0] == p[0] or p[0] == '.')

        # Handle '*' both Zero or More occurences
        if len(p) > 1 and p[1] == '*':
            return (self.isMatch(s, p[2:])) or (first_match and self.isMatch(s[1:], p))
        
        # Regular case: move to the next character
        return first_match and self.isMatch(s[1:], p[1:])