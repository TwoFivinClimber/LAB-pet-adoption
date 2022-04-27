import pets from "./data.js";
import { filterFunction } from "./filerFunction.js";

const filterEvents = () => {
  document.querySelector("#btn-div").addEventListener("click", (e) => {
    // document.querySelector("cat-btn").addEventListener("click", function () {
    if (e.target.id === "cat-btn") {
      const catArr = pets.filter((type) => type.type === "cat");
      filterFunction(catArr);
    }
    if (e.target.id === "dog-btn") {
      const dogArr = pets.filter((type) => type.type === "dog");
      filterFunction(dogArr);
    }
    if (e.target.id === "dino-btn") {
      const dinoArr = pets.filter((type) => type.type === "dino");
      filterFunction(dinoArr);
    }
    if (e.target.id === "all-btn") {
      filterFunction(pets);
    }
  });
};
export { filterEvents };
