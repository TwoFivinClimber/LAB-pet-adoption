import pets from "./data.js";
import { filterFunction } from "./filerFunction.js";

const deleteFunc = () => {
  document.querySelector("#pet-div").addEventListener("click", (e) => {
    if (e.target.id) {
      const [method, id] = e.target.id.split("--");
      console.log(id);
      const index = pets.findIndex((taco) => taco.id === parseInt(id));
      if (e.target.id.includes("delete")) {
        pets.splice(index, 1);
        filterFunction(pets);
      }
    }
  });
};

export default deleteFunc;
