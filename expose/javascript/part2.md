1.) What will happen at line 12 and why?
    '3' is printed. This is because i is declared using the var keyword, therefore making it accessible outside of the for loop.

2.) What will happen at line 13 and why?
    '150' is printed(300 * (1-0.5)). Similarly to the previous problem, because discountedPrice is decleared with 'var' and therefore has function scope.

3.) What will happen at line 14 and why?
    '150' is printed. Discounted Price was 150, (150*100)/100 = 150.

4.) What will this function return? Give a brief explanation why. If the code causes an error, explain why.
    Function will return [50, 100, 150]; the function loops through the array [100, 200, 300] and reduces each by 50% and returns the array.

5.) What will happen at line 12 and why?
    Error occurs, 'let' declaration leads to an error because it's not accessible outside block scope.

6.) What will happen at line 13 and why?
    Similar error occurs, 'let' declaration not accessible outside block scope

7.) What will happen at line 14 and why?
    '150' is printed. Line 14 doesn't result in an error because the variable 'finalPrice' is in the same scope.

8.) What will this function return? Give a brief explanation.
    Function will return [50, 100, 150]; the function loops through the array [100, 200, 300] and reduces each by 50% and returns the array. The 'let' keyword doesn't affect the output because it's declared before the for loop and present in the function.

9.) What will happen at line 11 and why? 
    Error occurs, the usage of 'const' makes declared variables not accessible inside for loop.(block scope)

10.) What will happen at line 12 and why?
    '3' is printed, it's the length of the array, prices.

11.) What will this function return?
    [50, 100, 150] is what the function returns. This is because the function returns an array that contains all the discounts. It also doesn't create an error because the variable isn't being reassigned.

12.) Given above Object, write the notation for:
    A: Accessing the value of the name property in the student object
        student.name
    B: Accessing the value of Grad Yr property in the student object
        student['Grad Year']
    C: Call the function for the greeting property in student object
        student.greeting()
    D: Accessing the name property of the object in the Favorite Teacher property in student
        student['Favorite Teacher'].name
    E: Access the first index in the array of the courseLoad property of the student object
        student.courseLoad[0]

13.) Arithmetic
    A. '3' + 2
        32, 2 is converted then concatenated to string '3'
    B. '3' - 2
        1, '3' is converted to integer and then subtracted by 2
    C. 3 + null
        3, null maps to integer 0.
    D. '3' + null
        '3null', null maps to string format
    E. true + 3
        4, true maps to integer value: 1
    F. false + null
        0, integer values of both are equal to zero
    G. '3' + undefined
        '3undefined', '3' is a string at it will concatenate the secondary term
    H. '3' - undefined
        NaN, because of the (-) sign JS treats this as a mathematical operation and therefore we have 3 - undefined(NaN) which is NaN

14.) Comparison
    A. '2' > 1
        true, '2' is converted to int. form and 2 > 1
    B. '2' < '12'
        false, since both values are of the same type JS compares each character and since '2' > '1' therefore false
    C. 2 == '2'
        true, '2' is converted to int and 2 == 2
    D. 2 === '2'
        false,  2 and '2' are not of the same type
    E. true == 2
        false, true converts to 1 which is not equal to 2
    F. true === Boolean(2)
        true, boolean(2) converts to true because 2 is not 0, null, etc.

15.) Explain the difference between the == and === operators
        == converts variables to the same type before comparing,
        === is a strict comparison(no conversions)

16.) Check JS file part2-question16.js

17.) What will be the result of the following: modifyArray([1,2,3], doSomething)
        Result: [2, 4, 6]
            Walkthrough:
                Declare the function modfifyArray with two paramaters: array and callback. From the function call
                we observe that doSomething is the callback argument.
                The const variable newArr creates an empty array for adding new items and from the for-loop we repeatedly call the doSomething function as the callback parameter that essentially doubles the value of each item, then push those values to a new array and return this as the result.
    
18.) Check JS file part2-question18.js

19.) What is the output of the above code?
    The above code outputs 1 4 3 2.
