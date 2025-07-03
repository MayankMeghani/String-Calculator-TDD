class StringCalculator{
    Add(numbers){
        if(numbers==="")return 0;
        if(numbers.length===1) return Number(numbers);
        return 0;
    }
}

module.exports = StringCalculator;