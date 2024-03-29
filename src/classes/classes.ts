import { ExampleCodeSnippet } from "../lib/classes/ExampleCodeSnippet";

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

const example1 = document.querySelector('#example1');
const example2 = document.querySelector('#example2');
const example3 = document.querySelector('#example3');

const imgContent = document.querySelector('section > img')

const objOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: '0px'
}

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);

if (section1) sectionObserver.observe(section1)
if (section2) sectionObserver.observe(section2)
if (section3) sectionObserver.observe(section3)

function callBackFunction(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
        
        const div = entry.target.querySelector('div');
        const targetClass = (entry.target as HTMLElement).dataset.class
        console.log(targetClass)
        if (entry.isIntersecting) {
            div.classList.remove(targetClass, "opacity-0");
        } else {
            div.classList.add(targetClass, "opacity-0");
        }
    })
}



const classExample = new ExampleCodeSnippet(
    'Class Example',
    `A class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or properties), and implementations of behavior (member functions or methods).`,
    `class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
    }
}`
)

const abstractClassExample = new ExampleCodeSnippet(
    'Abstract Class Example',
    `Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.`,
    `
    abstract class Shape {

        protected color: string;

        abstract getArea(): number;

        abstract getPerimeter(): number;

        getColor(): string {
            return this.color;
        }
    }`
)


if (example1) example1.innerHTML = abstractClassExample.renderCodeSnippet()

const inheritanceExample = new ExampleCodeSnippet(
    'Inheritance Example',
    `Inheritance is a mechanism in which one class acquires the property of another class. It helps to reuse, extend, and modify the code.`,
`
class Circle extends Shape {

private radius: number;

    constructor(color: string, radius: number) {
        super();
        this.color = color;
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}`
)

if (example2) example2.innerHTML = inheritanceExample.renderCodeSnippet()

const polymorphismExample = new ExampleCodeSnippet(
    'Polymorphism Example',
    `Polymorphism is an object-oriented programming concept that allows objects of different types to be treated as objects of a common type.`,
    `
class Rectangle extends Shape {
    
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        super();
        this.color = color;
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}`
)

if (example3) example3.innerHTML = polymorphismExample.renderCodeSnippet()

const encapsulationExample = new ExampleCodeSnippet(
    'Encapsulation Example',
    `Encapsulation is an object-oriented programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse.`,
    `class Person {
    private name: string;
    private age: number;
    occupation: string;

    constructor(name: string, age: number, occupation: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getName(): string {
        return this.name;
    }

    greet() {
        console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old. I'm an \${this.occupation}.\`);
    }
}`
)

abstract class Shape {

    protected color: string;

    abstract getArea(): number;

    abstract getPerimeter(): number;

    getColor(): string {
        return this.color;
    }
    
}

class Circle extends Shape {
    private radius: number;  

    constructor(color: string, radius: number) {
        super(); 
        this.color = color;
        this.radius = radius;
    }

    getArea(): number {

        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle('blue', 10);
myCircle.getArea(); 


class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        super();
        this.color = color;
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const shapes: Shape[] = [new Circle('red', 5), new Rectangle('green', 4, 6)];

shapes.forEach(shape => {
    console.log(`Area: ${shape.getArea()}`);
    console.log(`Perimeter: ${shape.getPerimeter()}`);
    console.log(`Color: ${shape.getColor()}`);
    console.log('-------------------');
})



class Person {
    private name: string;
    private age: number;
    occupation: string;

    constructor(name: string, age: number, occupation: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getName(): string {
        return this.name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I'm an ${this.occupation}.`);
    }
}

const alice = new Person('Alice', 30, 'Engineer');
alice.greet(); 
alice.getName(); 