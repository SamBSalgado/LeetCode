import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Solution {
    public boolean isMatch(String s, String p) {
        Pattern pattern = Pattern.compile("^" + p + "$");
        Matcher matcher = pattern.matcher(s);
        return matcher.matches();

    }
}