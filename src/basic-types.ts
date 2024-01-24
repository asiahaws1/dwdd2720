export function basicTypesExample() {
    return {
      title: "Basic Types",
      explanation: `TypeScript adds several data types on top of JavaScript's data types:
          - boolean
          - number
          - string
          - array
          - tuple
          - enum
          - any
          - void
          - null and undefined
          - never
          - object `,
      code: `// boolean
  let isDone: boolean = false; // "is assigned the value of"
  // isDone is a variable annotated with the boolean data type and assigned the value false.
  
  // number
  let myNumber: number = 42;
  // myNumber is a variable annotated with the number data type and assigned the value 42.
  
  // string
  let myName: string = "Asia";
  // myName is a variable annotated with the string data type and assigned the value "Asia".
  `,
    }
  }
  
  export function functionTypesExample() {
    return {
      title: "Function Types",
      explanation: `In JavaScript, functions are objects. TypeScript allows you to annotate functions with types.
              - parameter types
              - return types`,
      code: `// parameter types`,
    }
  }
  
  // example of function type with parameter types
  
  function add(x: number, y: number): number {
      return x + y;
  }