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