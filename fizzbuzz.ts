// Juan Suria
//FizzBuzz assignment, count 1-1000 anf for every number that is divisible by 3, display fizz. For every number that is divisible by 5, display buzz. If it is divisibly by both, display fizzbuzz.

function fizzbuzz (){
    for (let i =1; i <= 1000; i++ ){
        if(i %15 ==0 ){
            console.log("fizzbuzz")
        } else if (i % 3 ==0){
            console.log("fizz")
        } else if (i %5 ==0){
            console.log("buzz")
        }else {
            console.log(i);
        }
    }
    
    
}
fizzbuzz();