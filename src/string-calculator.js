class StringCalculator{
    Add(numbers){
        if(numbers==="")return 0;
        if(numbers[0]==="/" && numbers[1]==="/" && numbers[3]==="\n"){
            const delm = numbers[2];
            numbers = numbers.slice(4); 
            const nums = numbers.split(delm).map(Number);
            let sum = 0;
            nums.forEach(n => {    
                sum += n;
            });
            return sum;

        }else{

            const nums = numbers.split(/,|\n/).map(Number);
            let sum = 0;
            nums.forEach(n => {    
                sum += n;
            });
            return sum;
        }
        return 0; 
    }
}

module.exports = StringCalculator;