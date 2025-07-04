class StringCalculator{
    Add(numbers){
        if(numbers==="")return 0;
        let delm = /,|\n/;
        if(numbers[0]==="/" && numbers[1]==="/" && numbers[3]==="\n"){
            delm = numbers[2];
            numbers = numbers.slice(4); 
        }
        
        const nums = numbers.split(delm).map(Number);
        let sum = 0;
        nums.forEach(n => {    
            if(n<0){
                throw new Error("negatives not allowed: " + n);
            }
            sum += n;
        });
        return sum;
         
    }
}

module.exports = StringCalculator;