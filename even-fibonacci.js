function fiboFind(){ //n will be max val
    var count1 = 0
    var count2 = 1;
    var sum = 0;
    
    while(count2 < 4000000){
        if (count2 % 2 === 0){
            sum += count2
        }
        var temp = count2;
        count2 = count2 + count1;
        count1 = temp
    }
    return sum    
}
