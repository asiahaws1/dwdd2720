import { basicTypesExample, arrayTypesExample, specialTypesExample } from "./basic-types";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

/* document.querySelector("#basicTypesButton").addEventListener("click", () => {
    const basicTypes = basicTypesExample();
    document.querySelector("#basicTypesTitle").innerHTML = basicTypes.title;
    document.querySelector("#basicTypesExplanation").innerHTML = basicTypes.explanation;
    document.querySelector("#basicTypesCode").innerHTML = basicTypes.code;
    document.querySelector("#codeDiv").classList.add("mockup-code");
})

document.querySelector("#arrayTypesButton").addEventListener("click", () => {
    const arrayTypes = arrayTypesExample();
    document.querySelector("#basicTypesTitle").innerHTML = arrayTypes.title;
    document.querySelector("#basicTypesExplanation").innerHTML = arrayTypes.explanation;
    document.querySelector("#basicTypesCode").innerHTML = arrayTypes.code;
    document.querySelector("#codeDiv").classList.add("mockup-code");
}) */

document.querySelector("#basicTypesButton").addEventListener("click", () => loadExample("basic"))
document.querySelector("#arrayTypesButton").addEventListener("click", () => loadExample("array"))
document.querySelector("#specialTypesButton").addEventListener("click", () => loadExample("special"))

const cardTitle = document.querySelector("#cardTitle");
const cardExplanation = document.querySelector("#cardExplanation");
const cardCode = document.querySelector("#cardCode");

function loadExample(exampleType: string) {
    // based on the exampleType, load the appropriate example
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
    //document.querySelector("#codeDiv").classList.add("mockup-code");
}

loadExample("basic")