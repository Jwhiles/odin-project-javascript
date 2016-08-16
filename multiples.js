function multiples(n){
    var result = 0
    
    for(var count = 1; count < n; count++){
        if(count % 3 === 0 || count % 5 === 0){
            result += count
        }
    }
    return result
}