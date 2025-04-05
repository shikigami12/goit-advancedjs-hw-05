import { concatenate } from "./concatenation";

document.querySelector("button")?.addEventListener("click", () => {
  concatenate("Hello", "World");
});
