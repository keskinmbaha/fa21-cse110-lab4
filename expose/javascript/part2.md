1. **3** will be printed out because i is var and thus it exists withing the scope of the function. It will increment until i >= prices.length, which is 3.
2. **150** will be printed out since discountedPrices is defined as a var, it will exist within the scope of the function.
3. **150** will be printed out since finalPrice is defined as a var, it will exist within the scope of the function.
4. This function will return a list of all the items marked at a discount since discount is defined as a var within the scope of the function. So **[50, 100, 150]**.
5. An **error** will occur since it is trying to print out "let i" outside the loop, but i is only defined in the loop.
6. An **error** will occur since it is trying to print out "let discountedPrice" outside the loop, but discountedPrice is only defined in the loop.
7. It will print out **150** since "let finalPrice" is defined within the function, thus it can be accessed anywhere inside the function.
8. This function will return a list of all the items marked at a discount since discount is defined as a let within the scope of the function. So **[50, 100, 150]**.
9. An **error** will occur saying  "i" is not defined because i is only defined within the scope of the loop.
10. **3** will be printed out since const is defined within the fucntion, it can be accessed within the scope of the function.
11. This function will return a list of all the items marked at a discount since discount is defined as a const within the scope of the function. Since values can be added to a const list, no error will occur here either. So **[50, 100, 150]**.
12. A.  **student.name**

    B.  **student["Grad Year"]**
    
    C.  **student.greeting()**
    
    D.  **student["Favorite Teacher"].name**
    
    E.  **student.courseload[0]** or **student.courseload[1]** depending on what first index means
    
13. A. **'32'** It converts the 2 to a string then does a string concatenation.

    B. **1** When there is a subtraction, it converts the string to an int and subtracts.
    
    C.  **3** Since the first number is an int, the + means addition; thus, the null gets converted to 0 and then added to 3.
    
    D.  **'3null'** Again, javascript converts the second variable to a string since the first is a string and the plus means concatenation.
    
    E.  **4** Converts the boolean to a 1 (since 1 also means true), then adds the two ints together.
    
    F.  **0** false and null both get converted to 0 and when they are added together its int addition, thus the outcome is zero.
    
    G.  **'3undefined'** undefined is converted to a string and then string concatenated with '3'.
    
    H.  **NaN** Since there is no subtraction operater for strings, the string gets converted to an int and subtracted by NaN (i.e. undefined converted to int) which makes the result NaN.
14. A. **true** String '2' gets converted to an int and 2 > 1 so it returns true.

    B. **false** Since the string '12' is lexicogrpahically before '2', it returns false.

    C. **true** '2' is converted to an int and since 2 == 2, it outputs true.

    D. **false** Since its a strict equality operator, '2' is not converted to an int, thus 2 != '2' and it outputs false.
    
    E. **false** true is converted to 1, and since 1 != 2, it outputs false.
    
    F. **true** since 2 is not an empty value, it gets converted to true and since true equals true, the output is true.
    
15. == allows for types to be converted before the comparison, while === is a strict equality operator that does the comparison without type conversion.
16. The result that would be returend is **[2, 4, 6]**. The reason for this is because for each value that was passed in  with array, i.e. [1, 2, , 3], the value is passed into the function called callback and there the value is multiplied by 2 and pushed into newArr. Thus, the values will become 2, 4, 6.
17. **1 then 4 then 3 then 2** is printed out. 1 is the first number printed, thus it will be first. 4 is printed next because settimeout does not cause the code to wait for execution, thus everything below settimeout will keep running. Then 3 is printed out since 3 has a settimeout of 0 miliseconds. Then 2 is printed since this has a settimeout of 1000 miliseconds.
