const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

const imgContent = document.querySelector('section > img')

const objOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
}

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);

if (section1) sectionObserver.observe(section1)
if (section2) sectionObserver.observe(section2)

function callBackFunction(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
        const img = entry.target.querySelector('img');
        const targetClass = (entry.target as HTMLElement).dataset.class
        console.log(targetClass)
        if (entry.isIntersecting) {
            img.classList.remove(targetClass, "opacity-0");
        } else {
            img.classList.add(targetClass, "opacity-0");
        }
    })
}

// Abstraction

/*
Abstract Class: The Shape class is declared as abstract. This means it serves as a blueprint for other classes, but cannot be instantiated itself. It abstracts the concept of a "shape" in general, without specifying the details of any specific shape.

Abstract Methods: The getArea and getPerimeter methods are declared as abstract. This means that any class extending Shape must provide an implementation for these methods. The details of how to calculate the area and perimeter are abstracted away from the Shape class and left to the specific shape classes to define.

Encapsulation: The color property is protected, meaning it can only be accessed within the Shape class and its subclasses. This hides the internal state of the Shape objects, providing a level of abstraction.

Method: The getColor method provides a way to access the color property from outside the class, without directly accessing the property itself. This is another form of abstraction, as the internal implementation could change without affecting code that uses this method.
*/

abstract class Shape {

    protected color: string;

    abstract getArea(): number;

    abstract getPerimeter(): number;

    getColor(): string {
        return this.color;
    }
    
}

//const myshape = new Shape(); // Error: Cannot create an instance of an abstract class.

// Inheritance
/*
Inheritance is a principle that allows one class (the child, or subclass) to have the same behaviors and attributes as another class (the parent, or superclass), with the ability to add or override them.

Here, the Circle class is the subclass and Shape is the superclass. The Circle class inherits from the Shape class, meaning it has access to all public and protected members of Shape.

The super(color) call in the Circle constructor is also part of inheritance. It calls the constructor of the superclass (Shape), passing in the necessary parameters. This is necessary because when a new Circle is created, we also need to initialize the Shape part of it.

*/

class Circle extends Shape {
    private radius: number;  // private means that the radius property can only be accessed within the Circle class

    constructor(color: string, radius: number) {
        super();  // calls the constructor of the superclass (Shape)
        this.color = color;
        this.radius = radius;
    }

    getArea(): number {
        //return Math.PI * this.radius * this.radius;
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle('blue', 10);

// Polymorphism

/*
Polymorphism is an object-oriented programming concept that allows objects of different types to be treated as objects of a common type. This is typically achieved through inheritance and interfaces.

Both Circle and Rectangle will have their own implementations of the getArea and getPerimeter methods, demonstrating polymorphism. This allows us to treat Circle and Rectangle objects as Shape objects, and call the getArea and getPerimeter methods on them without knowing their specific types.
*/

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

// Encapsulation

/*
Encapsulation is an object-oriented programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse. The data of an object can be accessed only through the methods of that object.
*/

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
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.
//alice.name; // Error: Property 'name' is private and only accessible within class 'Person'.
alice.getName(); // Output: 'Alice'