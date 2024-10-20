import { log } from "console"

{// Problem 1================================================================================================

    // Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.


    const lengthSquare = (param: string | number): number => {
        if (typeof param === "string") {
            return param.length
        } else {
            return param * param
        }
    }

    // console.log(lengthSquare(10));

}







{// Problem 2================================================================================================

    // Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.



    interface Person {
        address?: {
            city: string;
            street?: string;
        }
        phone?: string;
    }

    const getAddressCity = (person: Person): string | undefined => {
        return person.address?.city;
    }



    const person1: Person = {
        address: {
            city: "New York",
            street: "123 Main St"
        },
        phone: "555-123-4567"
    }



    // console.log(getAddressCity(person1));




}





{// Problem 3================================================================================================

    // Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."


    class Cat {
        constructor(public cat: string, public sounds: string,) {
        }
    }
    class Dog {
        constructor(public dog: string, public sounds: string,) {
        }
    }



    const isCat = (animal: any): animal is Cat => {
        if (animal instanceof Cat) {
            console.log("yes, it's a cat.");
            return true;
        }
        else {
            console.log("no, it's not a cat.")
            return false;
        }
    }


    const cat = new Cat("cat", "mew")
    const dog = new Dog("dog", "bark")

    // isCat(dog)


}




{// Problem 4================================================================================================

    // You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

    // To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

    // Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.


    type MixedData = (number | string)[]


    const totalSum = (mixedData: MixedData): number => {
        let sum = 0;
        for (let i = 0; i < mixedData.length; i++) {
            if (typeof mixedData[i] === 'number') {
                sum = sum + Number(mixedData[i]);  // type assertion 
            }
        }
        return sum;
    }


    //another way-----------------------

    const totalSum2 = (mixedData: MixedData): number => {
        let sum = 0;
        for (const data of mixedData) {
            if (typeof data === 'number') {
                sum = sum + Number(data);  // type assertion 
            }
        }
        return sum;
    }

    const mixedData: MixedData = [8, "Mamun", 3, 4, "Noman", 10]

    // console.log(totalSum(mixedData));
    // console.log(totalSum2(mixedData));


}






{// Problem 5================================================================================================

    // Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.



    interface Car {
        make: string;
        model: string;
        year: number;
    }

    interface Driver {
        name: string;
        licenseNumber: string;
    }


    const combineCarAndDriver = (car: Car, driver: Driver): { make: string, model: string, year: number, name: string, licenseNumber: string } => {
        return { ...car, ...driver }
    };

    const car: Car = {
        make: "Toyota",
        model: "Camry",
        year: 2021
    }

    const driver: Driver = {
        name: "Mamun",
        licenseNumber: "ABC123"
    }

    // console.log(combineCarAndDriver(car, driver));



}






{// Problem 6================================================================================================

    // Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.



    const sumOfNumbers = (data: unknown): number | undefined => {

        if (Array.isArray(data)) {
            let sum = 0;
            for (const value of data) {
                if (typeof value !== "number") {
                    console.error("Input must be an array of numbers.")
                    return
                }
                else if (typeof value === "number") {
                    sum += value;
                }
            }
            return sum;
        }
        else {
            console.error("Input is not an array.");
        }
    }


    const numArray = [1, 2, "3", 4, 5]


    // console.log(sumOfNumbers(numArray));


}






{// Problem 7================================================================================================

    // Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

    // // Example usage:

    // const numbers: number[] = [1, 2, 3, 4, 5, 2];

    // const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

    // const targetNumber = 2;

    // const targetString = "cherry";

    // const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

    // const indexInStrings = findFirstOccurrence(strings, targetString);

    // console.log(indexInNumbers); //output:  1

    // console.log(indexInStrings); //output: 2


    const findFirstOccurrence = (targetedArray: number[] | string[], targetedElement: number | string): number => {

        // if (typeof targetedArray[0]==="number"&& typeof targetedElement==="number") {

        // }

        for (let i = 0; i < targetedArray.length; i++) {
            if (targetedArray[i] == targetedElement) {
                return i;
            }
        }
        return -1
    }



    const numbers: number[] = [1, 2, 3, 4, 5, 7];

    const strings: string[] = ["apple", "banana", "cherry", "date"];

    const targetNumber = 7;

    const targetString = "date";


    const indexNumber = findFirstOccurrence(strings, targetString)



    // console.log(indexNumber);

}





{// Problem 8================================================================================================

    // Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.

    interface Product {
        name: string;
        price: number;
        quantity: number;
    }

    type Products = Product[];


    const totalCost = (value: Products): number => {
        let total = 0;
        for (const item of value) {
            total += (item.price * item.quantity);
        }
        return total;
    }





    const newProducts: Products = [{ name: "Shirt", price: 40, quantity: 2 }, { name: "Pant", price: 20, quantity: 3 }, { name: "Shoe", price: 30, quantity: 4 }]


    // console.log(totalCost(newProducts));

}