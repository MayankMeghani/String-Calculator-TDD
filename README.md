# String Calculator – Incyubyte TDD Assessment

This project is an implementation of the **String Calculator Kata** using **Test-Driven Development (TDD)**.  
It was developed as part of the **Incyubyte TDD Assessment** to demonstrate incremental feature development guided by tests.

---

## Technologies Used

- JavaScript
- Jest – testing framework

---

## Features & Test Coverage

Each feature was implemented after writing its corresponding failing test case (Red → Green → Refactor).  
The following cases are tested and verified in `string-calculator.test.js`:

| Test Description | Example Input | Expected Output |
|------------------|---------------|------------------|
| Return 0 for empty string | `""` | `0` |
| Return number itself when one number is given | `"1"` | `1` |
| Return sum of two numbers | `"1,2"` | `3` |
| Return sum of multiple numbers | `"11,12,13"` | `36` |
| Support newline `\n` as a delimiter | `"1\n2,3"` | `6` |
| Support custom single-character delimiter | `"//;\n1;2"` | `3` |
| Throw exception for a single negative | `"1,-2"` | `negatives not allowed: -2` |
| Throw exception for multiple negatives | `"1,-2,-3"` | `negatives not allowed: -2,-3` |
| Count how many times `Add()` was called | `Add("1,2")` | `1` |
| Ignore numbers greater than 1000 | `"2,1001"` | `2` |
| Support multi-character delimiter | `"//[***]\n1***2***3"` | `6` |
| Support multiple single-character delimiters | `"//[*][%]\n1*2%3"` | `6` |
| Support multiple multi-character delimiters | `"//[+][/]\n5+6/7"` | `18` |

---
## Sample Test Results

![image](https://github.com/user-attachments/assets/5cc42eba-b480-4515-b4e7-1ffbfc133765)
---
## Function Strategy

### `Add(numbers: string): number`
- **Count Tracking**: Increments a call counter each time `Add()` is invoked.
- **Base Case**: Returns 0 if the input string is empty.
- **Default Delimiters**: Handles comma `,` and newline `\n`.
- **Custom Delimiters**:
  - Single-character (`//;\n`)
  - Multi-character with brackets (`//[***]\n`)
  - Multiple delimiters (`//[*][%]`)
- **Delimiter Extraction**:
  - Extracts all custom delimiters between `[` and `]`.
  - Uses a utility function `escapeRegex()` to safely convert them to a regex.
- **Negative Check**: Throws an error listing all negative numbers found.
- **Upper Limit**: Ignores numbers greater than 1000.
- **Sum Logic**: Filters valid numbers and reduces them to a sum.


---

## Installation & Running Tests

```bash
# Clone the repository
git clone https://github.com/MayankMeghani/String-Calculator-TDD.git
cd String-Calculator-TDD

# Install dependencies
npm install

# Run all test cases using Jest
npm test
```


---

## 📁 Project Structure

```
String-Calculator-TDD
├── src/
│   ├── string-calculator.js
│   └── utils.js
├── test/
│   └── string-calculator.test.js
├── .gitignore
├── package.json
└── README.md
```

---

## 📚 References

* 📄 [String Calculator Kata PDF](https://osherove.com/tdd-kata-1)
* 🧪 [Jest Documentation](https://jestjs.io/)

---

