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