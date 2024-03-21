import { basicTypesExample, arrayTypesExample, specialTypesExample } from "./basic-types";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);



document.querySelector("#basicTypesButton").addEventListener("click", () => loadExample("basic"))
document.querySelector("#arrayTypesButton").addEventListener("click", () => loadExample("array"))
document.querySelector("#specialTypesButton").addEventListener("click", () => loadExample("special"))

const cardTitle = document.querySelector("#cardTitle");
const cardExplanation = document.querySelector("#cardExplanation");
const cardCode = document.querySelector("#cardCode");

function loadExample(exampleType: string) {
   
    let chosenExampleType
    switch (exampleType) {
        case "basic":
            chosenExampleType = basicTypesExample();
            break;
        case "array":
            chosenExampleType = arrayTypesExample();
            break;
        case "special":
            chosenExampleType = specialTypesExample();
            break;
        default:
            chosenExampleType = basicTypesExample();
    }

    cardTitle.textContent = chosenExampleType.title;
    cardExplanation.textContent = chosenExampleType.explanation;
    cardCode.innerHTML = hljs.highlight(chosenExampleType.code, { language: "typescript" }).value;
    
}

loadExample("basic")