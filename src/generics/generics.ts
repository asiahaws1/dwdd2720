import { ExampleCodeSnippet } from '../lib/classes/ExampleCodeSnippet'

// sample 1
function reverse<T>(itemArray: T[]): T[] {
  return itemArray.reverse()
}

const monsterArray = ['Frankenstein', 'Dracula', 'Blob', 'Zombie']
const reversedMonsterArray = reverse(monsterArray)
console.log(reversedMonsterArray)

const numberArray = [23983, 8923498, 20989384, 945982]
const reversedNumberArray = reverse(numberArray)
console.log(reversedNumberArray)

const objectArray = [
  { name: 'Frankenstein' },
  { name: 'Dracula' },
  { name: 'Blob' },
  { name: 'Zombie' },
]
const reversedObjectArray = reverse(objectArray)
console.log(reversedObjectArray)

const booleanArray = [true, true, false, false]
const reversedBooleanArray = reverse(booleanArray)
console.log(reversedBooleanArray)

//sample 2

class DataStorage<T> {
  private data: T

  constructor(data: T) {
    this.data = data
  }

  getData(): T {
    return this.data
  }
}

const stringStorage = new DataStorage<string>('Hello World!  This is a string.')
console.log(stringStorage.getData())

const numberStorage = new DataStorage<number>(123456789)
console.log(numberStorage.getData())

const booleanStorage = new DataStorage<boolean>(true)
console.log(booleanStorage.getData())

const objectStorage = new DataStorage<object>({ name: 'Frankenstein' })
console.log(objectStorage.getData())
// sample 3
interface hasAge {
  age: number
}

function getTotalAge<T extends hasAge>(people: T[]): number {
  return people.reduce((total, person) => total + person.age, 0)
}

const people = [
  { name: 'Frankenstein', age: 200, foo: 'bar' },
  { name: 'Dracula', age: 500 },
  { name: 'Zombie', age: 100 },
]

const totalAge = getTotalAge(people)
console.log(totalAge)

/* ------------------------------------------------------------- */

const detailView = document.querySelector('#detail-view')
const detailViewExample = document.createElement('div')
detailViewExample.classList.add('w-full', 'p-4')
detailView.appendChild(detailViewExample)

const exampleOne = new ExampleCodeSnippet(
  'Generic Function Example',
  'This is an example of a generic function that reverses an array of any type.',
  `function reverse<T>(itemArray: T[]): T[] {
      return itemArray.reverse();
    }`
)

const exampleTwo = new ExampleCodeSnippet(
  'Generic Classes',
  'Generic classes allow you to write code that can be reused with different types of data.',
  `class DataStorage<T> {
    private data: T

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}`
)

const exampleThree = new ExampleCodeSnippet(
  'Generic Constraints',
  'Generic constraints allow you to specify that a generic type must have certain properties.',
  `interface hasAge {
      age: number;
    }

function getTotalAge<T extends hasAge>(people: T[]): number {
  return people.reduce((total, person) => total + person.age, 0)
}`
)

const listView = document.querySelector('#list-view')

function renderExample(example: ExampleCodeSnippet) {
  const exampleElement = document.createElement('div')
  exampleElement.classList.add(
    'text-[.5rem]',
    'bg-slate-900',
    'p-1',
    'm-[2px]',
    'rounded',
    'overflow-x-auto',
    'hover:bg-slate-700',
    'hover:cursor-pointer'
  )
  exampleElement.innerHTML = example.renderCodeSnippet()
  listView.appendChild(exampleElement)
  exampleElement.addEventListener('click', () => {
    detailViewExample.classList.add(
      'text-2xl',
      'w-full',
      'p-4',
      'mx-4',
      'bg-[#121212CC]'
    )
    detailViewExample.innerHTML = example.renderCodeSnippet()
  })
}

renderExample(exampleOne)
renderExample(exampleTwo)
renderExample(exampleThree)

