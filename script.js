//  Problem statement#
// Write a program that asks for a temperature in degrees celsius, 
// then displays it on the Fahrenheit scale
// F = c * 9/5 + 32

// let Celsius = Number(prompt("Please enter celisius"))
// let Fahrenheit = Celsius * 9/5+32; 
// console.log(Fahrenheit)


// Problem Statement#

// Observe the following program and add the necessary 
// code to swap the values of variables number1 and number2.

// let num1 = 10;
// let num2 = 12;
// let swap = num1;
// num1 = num2;
// num2 = swap;
// alert(`num1 ${num1}`)
// alert(`num2 ${num2}`)



// Problem statement#
// Write a program that accepts two numbers, then compares their 
// values and displays an appropriate message in all cases.


// let num1 = Number(prompt('Please enter a number'))
// let num2 = Number(prompt('Please enter a number'))

// if(num1 > num2)
// console.log(`number1 ${num1} is greather than num2 ${num2}`)
// else
// console.log(`num2 ${num2} is greather than number1 ${num1}`)



// Problem Statement#
// Write a program that launches a carousel for 10 turns, 
// showing the turn number each time

    /// for loop
    // for (let i =0; i<11;i++)
    // {
    //     console.log(i)
    // }

    //while loop

    // let j = 0;

    // while(j<11)
    // {
    //     console.log(j)
    //     j++;
    // }

    // Problem statement#
// Check the following program that shows even numbers
//  (divisible by 2) between 11 and 1010.

// for (let i=11; i<=1011 ; i++)
// {
//     if (i % 2==0)
//     {
//         console.log(i + " is even")
//     }
//     else
//     console.log(i + "is odd")
// }

// Problem statement#
// Write a program that asks the user for a number,
//  then show the multiplication table for this number.

// let ask = Number(prompt("enter a number"))

// for (let i = 0;i<11;i++){
//     console.log(`${ask} * ${i} = ${ask}`);
// }


// Coding Challenge: Neither Yes nor No
// Learn how to write a code that doesn't stop prompting for user
//  input unless the user enters 'y' or 'n'. Good luck!

// let user =  prompt(" ")

// while(!(user == 'n') && !(user == 'y'))
// {
//     user = prompt(" ")
// }
// console.log(`you win`)


// Problem statement#
// Write a program that shows all numbers between 11 and 1010 with the following exceptions:

// If the number is divisible by 3, it should display Fizz
// If the number is divisible by 5, it should display Buzz
// If the number is divisible both by 5 and by 3, it should display FizzBuzz

// for(let i = 11; i<=1011;i++)
// {
//     if(i%3 ==0)
//     console.log(`${i} Fizz`)
//     else if(i%5==0)
//     console.log(`${i} Buzz`)
//     else
//     console.log(`FizzBuzz`)
// }

// Problem statement#
// Complete the below program so that the min() function 
// returns the minimum of its two received numbers.

    // function min(x,y)
    // {
    //     if(x<y)
    //     console.log(x)
    //    else
    //    console.log(y)
    // }
    // console.log(min(2,960))

    // Problem statement#
// Complete the below program so that it offers the four basic 
// arithmetical operations: addition, subtraction, multiplication and division.
//  You can use either a function declaration or a function expression.

// function operation(num1,operation,num2)
// {
//     if(operation == '+')
//     return num1 + num2;
//     else if(operation == '-')
//     return num1 - num2;
//     else if(operation == '*')
//     return num1 * num2;
//     else
//     return num1 / num2;
// }
// console.log(operation(10,'*',10))


// Problem statement#
// Create a Dog object with the following properties:

// name
// species
// size
// describe() - display all attributes of an object
// bark() - returns “Woof!”


// let Dog  = {
//     name : 'oscar',
//     species : 'rotweiller',
//     size : '180',
//     describe()
//     {`${this.name} and species ${this.species} and size ${this.size}`},
//     bark()
//     {
//         console.log('woof!')
//     }
    

// }

// Dog.bark();
// Dog.describe();


// Problem statement#

// Create an array named musketeers containing values - “Athos”, “Porthos” and “Aramis”
// Add the “D’Artagnan” value to the array
// Remove Aramis

// let musketeers = ["Athos","Porthos","Aramis"]
// musketeers.push("DArtagnan")
// musketeers.splice(2,1)
// console.log(musketeers)



