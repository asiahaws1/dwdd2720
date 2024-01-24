import { basicTypesExample } from "./basic-types";

document.querySelector("#basicTypesButton").addEventListener("click", () => {
    const basicTypes = basicTypesExample();
    document.querySelector("#basicTypesTitle").innerHTML = basicTypes.title;
    document.querySelector("#basicTypesExplanation").innerHTML = basicTypes.explanation;
    document.querySelector("#basicTypesCode").innerHTML = basicTypes.code;
})