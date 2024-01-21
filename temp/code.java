import java.util.HashSet;

public class code {
    public static void main(String args[]){
        System.out.println(lengthOfLongestSubstring("dvdf"));
    }

    public static int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int max = 0;
        int n = s.length();
        if(n==0 || n==1) return n;
        int left = 0;
        int right = 0;
        
        while(right<n){
            Character x = s.charAt(right);
            if(set.contains(x)){
                max = Math.max(max, (right-left));
                while(set.contains(x)){
                    Character toRemove = s.charAt(left++);
                    set.remove(toRemove);
                }
            }
            set.add(x);
            right++;
        }
        return max;
    }
}
