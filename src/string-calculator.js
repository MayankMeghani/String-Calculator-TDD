class StringCalculator{
    constructor(){
        this.count = 0;
    }

    getCalledCount(){
        return this.count;
    }

    Add(numbers){
        this.count++;
        if(numbers==="")return 0;
        let delm = /,|\n/;
        if(numbers[0]==="/" && numbers[1]==="/" && numbers[3]==="\n"){
            delm = numbers[2];
            numbers = numbers.slice(4); 
        }
        
        const nums = numbers.split(delm).map(Number);

        const negatives = nums.filter(n => n < 0);
        if(negatives.length > 0){
            throw new Error("negatives not allowed: " + negatives.join(","));
        }
        
        let sum = nums.filter(n => n <= 1000).reduce((a, b) => a + b,0);

        return sum;
         
    }
}

module.exports = StringCalculator;