//string functions project
function revers(str) {
   rev = "";
    i = str.length-1;
    while(i>=0){
        rev = rev + str[i];
        i = i-1;
    }
    return rev;
}
function uppercase(str) {
   res=str.toUpperCase();
   return res;
}
function palindrome(str) {
   rev="";
   i=str.length-1;
   while(i>=0){
       rev=rev+str[i];
       i=i-1;
    }
    if(rev==str){
        return "is a palindrome";
    }
    else{
        return "is not a palindrome";
    }
}