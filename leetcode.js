//1
var twoSum = function(nums, target) {
    for (var i = 0; i< nums.length; i++) {
        var difference = target - nums[i];
        for (var j = i +1; j<nums.length; j++) {
            if (nums[j] == difference)
                return [i,j];
        }
    }
};

//9
var isPalindrome = function(x) {
    var str  = x.toString();
    for(var i = 0;i <= str.length -1;i++){
        if(str[i] != str[str.length - 1 - i]){
            return false;
        }
        }
        return true
 };

//13
var romanToInt = function(s) {
    let o = {
            'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
        },
        n = 0;
    for(let i = 0,length = s.length; i < length; i++){
        const temp = o[s[i]]
        if( i < length - 1 &&  temp < o[s[i+1]] ){
            n -= temp
        }else{
            n += temp
        }
    }
    return n
};

//20
var isValid = function (s) {
    while (s.length) {
        var temp = s;
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        if (s == temp) return false
    }
    return true;
};

//58, use split() to split spaces and then filter items that are not spaces
const lengthOfLastWord = s => {
    const arr = s.split(' ').filter(item => item != '');
    return arr[arr.length - 1].length;
};
