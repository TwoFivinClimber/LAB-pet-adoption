import renderToDom from "./renderToDom.js";

const buttonRender = () => {
  let domstring = "";
  domstring = `<button type="button" id="cat-btn" class="btn btn-primary">Cats</button>
  <button type="button" id="dog-btn" class="btn btn-success">Dogs</button>
  <button type="button" id="dino-btn" class="btn btn-warning">Dinos</button>
  <button type="button" id="all-btn" class="btn btn-dark">ALL</button>`;
  renderToDom("#btn-div", domstring);
};

export default buttonRender;
