# Calculator

## Updates 2024.06.14
    Variable j:
        enables multi-digit numbers
        increases if an empty index gets a digit
        set to 0 if operation is used
        # Logic doesn't work as intended
        # j is increased to early, causes first operand to be replaced
        # Needs to be looked at it again
    Variable i:
        used as index
        increases by 2 if operation is used
        example: 
            arr = ["12", "+"]
            i needs to be 2 for the next number to behave like the first
    
    The combination of these variables enables me to have multiple, multi-digit numbers.
    It's currently possible to do operations using both numbers.

    Readability is a big concern at the moment. Many long-winded if-else statements which
    make it a bit difficult to follow the logic.

    ToDo:
        digit.includes()
            Find a better solution to this.
            A better solution could clean up code, like remove need for i and j;
            Currently doesn't "find" a number if the number is greater than 9:
            digit.includes("11") is false
        function equal()
            Should be possible to find a better solution here.
            Current logic:
                Array with numbers to be operated on.
                Push completed operation to newArray.
                newArray to be used for further operations
                Example:
                    equal(array = ["1", "+", "4"], newArray = [])
                    Do calc() where operand = "+"
                    Left operand = number before operator
                    Right operand = number after operator
                    calc(leftOperand, operator, rightOperand)
                    Push result to newArray, newArray = ["5"]
            Fix:
                Removed if-else, already happens in calc()
                Added more variables to be used
                Might still be possible to make it cleaner. Stays on ToDo
        if-else:
            Multiple functions doing if-else statements even
            though their use-case is already decided by other if-else
            Remove if-else inside functions or outside?

arr = []
t = 1
i = 0
j = 0

if (digits.includes(t))     // true
    if(arr[i] === "")       // true
        arr.push(t)         // arr = ["1"]

t = 2

if (digits.includes(t))     // true
    if(arr[i] === "")       // false
    else
        arr
            .splice(
                i,
                1,
                arr[i]
                + t
            )               // arr = ["12"]

t = +

if (digits.includes(t))     // false
if (operators.includes(t))  // true
    arr.push(t)             // arr = ["12", "+"]