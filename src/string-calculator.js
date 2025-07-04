function escapeRegex(s) {
return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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

        if(numbers[0]==="/" && numbers[1]==="/" && numbers[2]==="["){
            const index = numbers.indexOf("]\n"); 
            let delimeters = numbers.slice(3, index+1);
            let str="";
            while(delimeters.indexOf("]") !== -1){
                let last= delimeters.indexOf("]");
                let current = delimeters.slice(0, last);
                str += escapeRegex(current) + "|";
                delimeters = delimeters.slice(last+2);
            }
            str = str.slice(0, -1);
            delm = new RegExp(str);
            numbers = numbers.slice(index+2); 
        }

        if(numbers[0]==="/" && numbers[1]==="/" && numbers[2]==="["){
            const index = numbers.indexOf("]\n"); 
            delm = numbers.slice(3, index);
            numbers = numbers.slice(index+2); 
        }
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