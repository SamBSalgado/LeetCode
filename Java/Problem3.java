import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int actualmax = 0;
        int start = 0;
        Map<Character, Integer> characterMaps = new HashMap<>();

        for (int end = 0; end < s.length(); end++) {
            char current = s.charAt(end);

            if (characterMaps.containsKey(current)) {
                int newindex = characterMaps.get(current);
                if (newindex >= start) {
                    start = newindex + 1;
                }
            }
            characterMaps.put(current, end);

            actualmax = Math.max(actualmax, end - start + 1);
        }

        return actualmax;
    }
}