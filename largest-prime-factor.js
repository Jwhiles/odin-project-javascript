function primeFactor(number, limit){
    var result = 0;
    
    for(var count = 1; count < limit; count++){
        if(number % count === 0){
            result = count;
        }
    }
    return result    
}

console.log(primeFactor(600851475143, 10000))