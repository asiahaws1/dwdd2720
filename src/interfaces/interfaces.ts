import curriculum from "../data/curriculum.json"
import { CodeSnippet } from "../lib/classes/CodeSnippet"
import hljs from "highlight.js/lib/common";

const blocks = curriculum["responsive-web-design"].blocks

const blocksArray = Object.values(blocks)

// this is an example of destructuring an array
const [basicCSS, basicHTML, flexbox, grid] = blocksArray

// example of destructuring an object
let { meta, challenges } = basicCSS

const navBar = document.querySelector(".navbar")
const navList = document.querySelector("#navList")
const snippetDisplay = document.querySelector("#snippetDisplay")

const buildTopNavFromJSON = (blocksArray: any) => {
  blocksArray.forEach((block: any, index: number) => {
    //console.log(block.meta.name)
    const navItem = document.createElement("a")
    navItem.classList.add("btn", "btn-sm", "m-4")
    navItem.href = `#${block.meta.dashedName}`
    navItem.textContent = block.meta.name

    navItem.addEventListener("click", () => {
      // find the block that matches that nav item that was clicked
      blocksArray.forEach((item: any) => {
        const navItem = document.querySelector(
          `a[href="#${item.meta.dashedName}"]`
        )
        navItem?.classList.remove("bg-white", "text-blue-500")
      })
      navItem.classList.add("bg-white", "text-blue-500")

      buildLeftNavFromJSON(block)
    })

    navBar?.appendChild(navItem)
  })
}

const buildLeftNavFromJSON = (block: any) => {
  while (navList?.firstChild) {
    navList.removeChild(navList.firstChild)
  }

  block.challenges.forEach((challenge: any) => {
    //console.log(challenge)
    const listItem = document.createElement("li")
    listItem.textContent = challenge.title
    listItem.classList.add("w-64", "hover:cursor-pointer", "hover:text-blue-500", "p-2", "border", "bg-gray-800", "text-center", "rounded-xl", "my-1")

    listItem.addEventListener("click", () => {
        console.log(challenge.title)
        buildSnippetDisplay(challenge)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        
    })

    navList?.appendChild(listItem)
  })
}

const buildSnippetDisplay = (challenge: any) => {
    // clear the snippet display
    while (snippetDisplay?.firstChild) {
        snippetDisplay.removeChild(snippetDisplay.firstChild)
    }
  // need instances of a CodeSnippet class to be created here
  // we will call the constructor method of the CodeSnippet class here
  const snippet = new CodeSnippet(
    challenge.title, 
    challenge.description, 
    challenge.instructions,
    challenge.solutions[0].indexhtml.contents)

  // make some DOM elements to display the code snippet

    const title = document.createElement("h2")
    title.textContent = snippet.title
    title.classList.add("text-2xl", "font-bold", "text-center", "my-4")

    const description = document.createElement("div")
    description.innerHTML = snippet.description
    //description.innerHTML = hljs.highlight(snippet.description, {language: "html"}).value;

    const instructions = document.createElement("div")
    instructions.innerHTML = snippet.instructions
    instructions.classList.add("bg-blue-900", "p-4", "rounded-xl", "text-white")

    const snippetSolution = document.createElement("div")
    snippetSolution.innerHTML = snippet.solution

    snippetDisplay?.appendChild(title)
    snippetDisplay?.appendChild(description)
    snippetDisplay?.appendChild(instructions)
    snippetDisplay?.appendChild(snippetSolution)
}

buildTopNavFromJSON(blocksArray)

buildLeftNavFromJSON(basicCSS);

/*
A Duck object needs to be able to quack and fly and swim. We can define an interface for the Duck object that specifies the methods that the Duck object should have. We can then use the interface to define the Duck object. This is a simple example of how interfaces can be used to define objects in TypeScript.
*/

interface CanQuack {
  quack: () => void
}

interface CanFly {
  wingSpan: number
  fly(): void
}

interface CanSwim {
  swim(): void
}

// The following is an example of how to define a Duck object using the CanQuack, CanFly, and CanSwim interfaces.  The Duck object must have the methods specified in the interfaces. If the Duck object does not have the methods specified in the interfaces, TypeScript will throw an error. This is an example of 'interface composition' in TypeScript.

class Duck implements CanQuack, CanFly, CanSwim {
  quack() {
    console.log("Quack!")
  }
  wingSpan: number
  fly() {
    console.log("Flap flap flap")
  }
  swim() {
    console.log("Splash splash splash")
  }
}

const duck = new Duck()
//duck.quack()
//duck.fly()
//duck.swim()