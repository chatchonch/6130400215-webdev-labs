var result = [];
var summation = 0;
var j = 0;
var input = prompt('Enter an integer (a negative integer to quit):');
var number = Number(input);
if (number < 0){
    alert(' The average is 0, the minimum is 0, and the maximum is 0. ');
} else if (number >= 0) {
        result.push(number);
    inner : while (true) {    
        var input = prompt('Enter an integer (a negative integer to quit):');
        var number = Number(input);
        if (number < 0) {
            break inner;
                
         } else if (number >= 0){
            result.push(number);
            ++j;
        } 
    }
    for(let i = 0;i < result.length; i++) {
        summation += result[i];
    }
    var average = summation/result.length;
    average = average.toFixed(2);
    alert('For the list '+ result +', the average is '+ average +', the minimum is '+ Math.min.apply(null,result) +', and the maximum is '+ Math.max.apply(null,result))
}

    
