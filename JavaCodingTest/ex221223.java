package JavaCodingTest;

public class ex221223 {
    
    /* 배열 뒤집기 
    정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. 
    num_list의 원소의 순서를 거꾸로 뒤집은 배열을 
    return하도록 solution 함수를 완성해주세요.*/
    class Solution1{
        public int[] solution(int[] num_list){
            int[] answer = new int[num_list.length];
            int num = answer.length-1;
            for(int i=0;i<num_list.length;i++){
                    answer[num-i] = num_list[i];
            }
            return answer;
        }
    }

    /* 삼각형의 완성조건 (1)
    선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
    가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
    삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
    세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 
    return하도록 solution 함수를 완성해주세요. */
    class Solution2 {
        public int solution(int[] sides) {
            int answer = 1;
            
            int num = (sides[0]+sides[1]+sides[2]);
            for(int i =0 ; i<3; i++){
                if(sides[i]*2>=num){
                    answer=2;
                }
            }
            
            return answer;
        }
    }

    /* 분수의 덧셈 
    첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 
    두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 
    매개변수로 주어집니다. 
    두 분수를 더한 값을 기약 분수로 나타냈을 때 
    분자와 분모를 순서대로 담은 배열을 return 하도록 
    solution 함수를 완성해보세요.*/
    class Solution3 {
        public int[] solution(int denum1, int num1, int denum2, int num2) {
            int num3 = num1*num2;
            int denum3 = (denum1*num2)+(denum2*num1);
            // num3을 만들 때 num1 * num2를 해서 num3에 두 수의 겹치는 약수가 생길 수 있다
            // 그래서 아래의 for문을 2번 실행시켜주었다
            for(int k=0; k<2;k++){
                for(int i = 1; i<=num3 ; i++){
                    if(num3 % i == 0){
                        for(int j = 1; j<=denum3; j++){
                            if(denum3 % j == 0){
                                if(i==j){
                                    num3 /= i;
                                    denum3 /= i;
                                }
                            }
                        }
                    }
                }
            }
            int[] answer = {denum3,num3};
            return answer;
        }
    }

    /*피자 나눠 먹기 (1) 
    머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
    피자를 나눠먹을 사람의 수 n이 주어질 때, 
    모든 사람이 피자를 한 조각 이상 먹기 위해 
    필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.*/
    class Solution4 {
        public int solution(int n) {
            int pizza_num  = 0;
            while(pizza_num*7<n){
                    pizza_num++;
                }
            return pizza_num ;
        }
    }

    /* 배열 원소 길이 
    문자열 배열 strlist가 매개변수로 주어집니다. 
    strlist 각 원소의 길이를 담은 배열을 retrun하도록 
    solution 함수를 완성해주세요.*/
    class Solution5 {
        public int[] solution(String[] strlist) {
            int[] answer = new int [strlist.length];
            for(int i =0 ; i<answer.length;i++){
                String item = strlist[i];
                answer[i] = item.length();
            }
            return answer;
        }
    }

    /* 피자 나눠 먹기 (3)
     * 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다.
     * 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 
     * 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 
     * 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 
     * 하도록 solution 함수를 완성해보세요. 
     */
    class Solution6 {
        public int solution(int slice, int n) {
            int pizza_num = 0;
            int pizza_slice_num = pizza_num*slice;
            while(pizza_slice_num<n){
                pizza_num++;
                pizza_slice_num = pizza_num*slice;
            }
            return pizza_num;
        }
    }

    /* 문자열 뒤집기 문자열 
    my_string이 매개변수로 주어집니다. 
    my_string을 거꾸로 뒤집은 문자열을 return하도록 
    solution 함수를 완성해주세요. */
    class Solution {
        public String solution(String my_string) {
            String answer = "";
            int my_length = my_string.length();
            for(int i=my_length-1; i>=0;i++){
                String word = my_string.substring(i,i+1);
                answer+=word;
            }
            return answer;
        }
    }

}

