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

test("returning sum when new line between numbers ",()=>{
    const calc = new StringCalculator();
    expect(calc.Add("1\n2,3")).toBe(6);
    expect(calc.Add("6\n8\n7")).toBe(21);
})

test("returning sum when new line between numbers ",()=>{
    const calc = new StringCalculator();
    expect(calc.Add("//;\n1;2")).toBe(3);
    expect(calc.Add("1\n2,3")).toBe(6);
})

test("returning exception for negative number ",()=>{
    const calc = new StringCalculator();
    expect(()=>calc.Add("1,-2,3")).toThrow("negatives not allowed: -2");
    expect(()=>calc.Add("4,9,3,-5")).toThrow("negatives not allowed: -5");
})

test("returning exception for multiple negative numbers",()=>{
    const calc = new StringCalculator();
    expect(()=>calc.Add("1,-2,-3")).toThrow("negatives not allowed: -2,-3");
    expect(()=>calc.Add("4,9,-3,-5")).toThrow("negatives not allowed: -3,-5");
})

test("ruturning count of Add() function call",()=>{
    const calc = new StringCalculator();
    expect(calc.getCalledCount()).toBe(0);
    calc.Add("1,2");
    expect(calc.getCalledCount()).toBe(1);
})
