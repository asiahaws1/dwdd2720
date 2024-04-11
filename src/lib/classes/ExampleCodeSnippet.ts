import { ExampleCode } from "../../types/ExampleCode"
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

export class ExampleCodeSnippet implements ExampleCode {
  constructor(
    public title: string,
    public explanation: string,
    public code: string
  ) {}
  renderCodeSnippet(): string {
    return `<h3 class="font-bold text-black bg-slate-400 rounded p-1 my-4 text-center">
    ${this.title}
    </h3>
    <p class="text-white mb-1">${this.explanation}</p>
    <pre>
    <code>${hljs.highlight(this.code, { language: "typescript" }).value}</code>
    </pre>`
  }
}