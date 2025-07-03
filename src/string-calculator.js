class StringCalculator{
    Add(numbers){
        if(numbers==="")return 0;
        if(numbers.length===1) return Number(numbers);
        const nums= numbers.split(",");
        if(nums.length===2){
            return Number(nums[0]) + Number(nums[1]);
        }
        return 0;
    }
}

module.exports = StringCalculator;