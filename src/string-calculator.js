class StringCalculator{
    Add(numbers){
        if(numbers==="")return 0;
        if(numbers.length===1) return Number(numbers);
        const nums= numbers.split(",").map(Number);
        let sum = 0;
        nums.forEach(n => {    
            sum += n;
        });
        return sum;
    }
}

module.exports = StringCalculator;