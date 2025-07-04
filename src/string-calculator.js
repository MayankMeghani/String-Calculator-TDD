class StringCalculator{
    Add(numbers){
        if(numbers==="")return 0;
        let delm = /,|\n/;
        if(numbers[0]==="/" && numbers[1]==="/" && numbers[3]==="\n"){
            delm = numbers[2];
            numbers = numbers.slice(4); 
        }
        
        const nums = numbers.split(delm).map(Number);

        const negatives = nums.filter(n => n < 0);
        if(negatives.length > 0){
            const numbers = negatives.join(",");
            throw new Error("negatives not allowed: " + numbers);
        }
        
        let sum = 0;
        nums.forEach(n => {
            sum += n;
        });
        return sum;
         
    }
}

module.exports = StringCalculator;