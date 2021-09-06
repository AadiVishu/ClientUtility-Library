/**
 * Global variables:
 */

const clientUtility = {
    addition : addNumbers(n1, n2),
    subtraction : subtractNumbers(),
};

 function addNumbers() {
     try {
         return num1+num2;
     } catch (error) {
        throw error;
     }
 }
 clientUtility.addition(2, 0);