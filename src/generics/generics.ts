import { ExampleCodeSnippet } from '../lib/classes/ExampleCodeSnippet';

function reverse<T>(itemArray: T[]): T[] {
    return itemArray.reverse();
}

const monsterArray = ['Frankenstein', 'Dracula', 'Blob', 'Zombie'];
const reversedMonsterArray = reverse(monsterArray);
console.log(reversedMonsterArray);

const numberArray = [23983, 8923498, 20989384, 945982]
const reversedNumberArray = reverse(numberArray);
console.log(reversedNumberArray);

const objectArray = [{name: 'Frankenstein'}, {name: 'Dracula'}, {name: 'Blob'}, {name: 'Zombie'}];
const reversedObjectArray = reverse(objectArray);
console.log(reversedObjectArray);

const booleanArray = [true, true, false, false];
const reversedBooleanArray = reverse(booleanArray);
console.log(reversedBooleanArray);

const exampleOne = new ExampleCodeSnippet('Generic Function Example', 'This is an example of a generic function that reverses an array of any type.', `function reverse<T>(itemArray: T[]): T[] {
    return itemArray.reverse();
}`);

const listView = document.querySelector('#list-view');
listView.innerHTML = exampleOne.renderCodeSnippet();