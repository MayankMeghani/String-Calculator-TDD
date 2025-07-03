const StringCalculator = require("../src/string-calculator");

test("testing with empty string",()=>{
    const calc = new StringCalculator();
    expect(calc.Add("")).toBe(0);
});