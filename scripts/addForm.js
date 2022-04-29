import pets from "./data.js";
import { filterFunction } from "./filerFunction.js";

//Add Animal
const addForm = () => {
  document.querySelector("#petForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const newAnimalObj = {
      id: pets[pets.length - 1].id + 1,
      name: document.querySelector("#petName").value,
      color: document.querySelector("#petColor").value,
      specialSkill: document.querySelector("#petSkill").value,
      type: document.querySelector("#petType").value,
      imageUrl: document.querySelector("#petImage").value,
    };
    pets.push(newAnimalObj);
    filterFunction(pets);
    document.getElementById("petForm").reset();
    //Check to see id is being generated.
    console.log(pets[pets.length - 1].id);
  });
};

export default addForm;
