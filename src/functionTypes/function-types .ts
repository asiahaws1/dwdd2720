import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

let indicator: number = 1;


function add(num1: number, num2: number): string {
    return (num1 + num2).toString()
}

console.log(add(5, 7))


const addArrow = (num1: number, num2: number): string => (num1 + num2).toString()

console.log(addArrow(5, 7))


function greetUser(name: string, age?: number): string {
    if (age) {
        return `Hi there ${name}, you are ${age} years old.`
    } else {
        return `Hi there ${name}`
    }
}

export const functionParamsExample = () => {
    return {
        title: `Data types can be set for function parameters.`,
        explanation: `When writing functions in typescript, you can specify the types of data that the function expects as parameters`,
        code: `
        function add(num1: number, num2: number) {
            return (num1 + num2)
        }`
    }
}

export const functionReturnTypesExample = () => {
    return {
        title: `Data types can be set for the return value of a function.`,
        explanation: `When writing functions in typescript, you can specify the type of data that the function will return.`,
        code: `
        function add(num1: number, num2: number): number {
            return (num1 + num2)
        }`
    }
}

export const functionArrowExample = () => {
    return {
        title: `Arrow functions can be used to define functions. All of the data typeing of parameters and return values can be done in the same line.`,
        explanation: `Arrow functions are a more concise way to define functions in javaScript and typeScript.`,
        code: `
const addArrow = (num1: number, num2: number): string => (num1 + num2).toString()`
    }
}

export const optionalParamsExample = () => {
    return {
        title: `Function parameters can be optional. here, the "greetUser" function contains a required name parameter and an optional age parameter.  The return type annotation is a string.`,
        explanation: `If the optional age parameter is provided, the function will return a string that includes the name and age of the user.  If the optional age parameter is not provided, the function will return a string that only includes the name of the user.`,
        code: `
        function greetUser(name: string, age?: number): string {
            if (age) {
                return "Hello " + name + ", you are " + age + " years old."
            } else {
                return "Hello " + name
            }
        }`,
    }
}

const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton');

nextButton.addEventListener('click', () => {
    if (indicator < 4) {
        indicator++;
        loadExample(indicator);
    }
})

prevButton.addEventListener('click', () => {
    if (indicator > 1) {
        indicator--;
        loadExample(indicator);
    }
})

const cardTitle = document.querySelector("#cardTitle");
const cardExplanation = document.querySelector("#cardExplanation");
const cardCode = document.querySelector("#cardCode");

function loadExample(exampleNum: number = 1) {

    let chosenExample
    switch (exampleNum) {
        case 1:
            chosenExample = functionParamsExample();
            break;
        case 2:
            chosenExample = functionReturnTypesExample();
            break;
        case 3:
            chosenExample = functionArrowExample();
            break;
        case 4:
            chosenExample = optionalParamsExample();
            break;
        default:
            chosenExample = functionParamsExample();
    }

    cardTitle.textContent = chosenExample.title;
    cardExplanation.textContent = chosenExample.explanation;
    cardCode.innerHTML = hljs.highlight(chosenExample.code, { language: "typescript" }).value;
}

loadExample(indicator);



function delayedResponse(callback: (message: string) => void, delay: number): void {
    setTimeout(() => {
        callback('This is a delayed response');
    }, delay);
}


delayedResponse((message) => {
    console.log(message);
}, 4000);

function fetchData(url: string, callback: (data: string) => void): void {

    const data = "Some data fetched from the URL";
    callback(data);
}