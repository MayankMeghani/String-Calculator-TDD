const StringCalculator = require("../src/string-calculator");

test("testing with empty string",()=>{
    const calc = new StringCalculator();
    expect(calc.Add("")).toBe(0);
});

test("returing self when one number is given",()=>{
    const calc = new StringCalculator();
    expect(calc.Add("1")).toBe(1);
    expect(calc.Add("2")).toBe(2);
})

test("return sum when two numbers are given",()=>{
    const calc = new StringCalculator();
    expect(calc.Add("1,2")).toBe(3);
    expect(calc.Add("30,4")).toBe(34);
})

test("returning sum with any amount of numbers",()=>{
    const calc = new StringCalculator();
    expect(calc.Add("11,12,13")).toBe(36);
    expect(calc.Add("5,5,5,5")).toBe(20);
})