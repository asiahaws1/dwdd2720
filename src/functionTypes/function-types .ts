
function add(num1: number, num2: number): string {
    return (num1 + num2).toString()
}

console.log(add(5, 7))


const addArrow = (num1: number, num2: number): string => (num1 + num2).toString()

console.log(addArrow(5, 7))


export const functionTypesExample = () => {
    return {
        title: "Function Types",
        explanation: `In JavaScript, functions are objects. TypeScript allows you to annotate functions with types.`,
        code: ` code sample coming soon...`
    }
}

