import pets from "./data.js";
import { filterFunction } from "./filerFunction.js";

//Add Animal
const addForm = () => {
  document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newAnimalObj = {
      name: document.querySelector("#petName").value,
      color: document.querySelector("#petColor").value,
      specialSkill: document.querySelector("#petSkill").value,
      type: document.querySelector("#petType").value,
      imageUrl: document.querySelector("#petImage").value,
    };
    pets.push(newAnimalObj);
    filterFunction(pets);
    document.getElementById("#form").reset();
  });
};

export default addForm;
