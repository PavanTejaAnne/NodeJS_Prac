function average1(score){
    var sum = 0;
    for(var i = 0; i< score.length; i++){
        sum += score[i];
    }
    console.log(Math.round(sum/score.length));
}

function average2(point){
    var total = 0;
    
    point.forEach(function(p){
        total += p;
    });
    
    return Math.round(total/point.length)
}

var set0 = [10,20,30,40];
average1(set0);

var set1 = [1,43,23,56,34,66,121,90];
average1(set1);

var set2 = [10,20,30,40];
console.log(average2(set2));

var set3 = [1,43,23,56,34,66,121,90];
console.log(average2(set3));