import renderToDom from "./renderToDom.js";

const filterFunction = (arr) => {
  let domString = "";
  for (const petObj of arr) {
    const catType = petObj.type === "cat";
    const dogType = petObj.type === "dog";
    const dinoType = petObj.type === "dino";
    domString += `<div id="card" class="card" style="width: 18rem;">
      <h4 class="card-title">${petObj.name}</h4>
      <img src="${petObj.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="list-group-color">${petObj.color}</h5>
      <p class="card-text">${petObj.specialSkill}</p>
    </div>
      <h5 ${catType ? "class= cat-type" : ""} ${
      dogType ? "class= dog-type" : ""
    } ${dinoType ? "class= dino-type" : ""} id="list-group-type">${
      petObj.type
    }</h5>
    <button id="delete--${
      petObj.id
    }" class="btn btn-outline-dark">Delete</button>
    </div>`;
  }
  renderToDom("#pet-div", domString);
};

export { filterFunction };
