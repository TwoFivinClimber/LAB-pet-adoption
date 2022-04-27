import pets from "./data.js";
import buttonRender from "./buttonRender.js";
import { filterFunction } from "./filerFunction.js";
import { filterEvents } from "./filterEvents.js";
import deleteFunc from "./deleteFunction.js";
import addForm from "./addForm.js";

const startApp = () => {
  filterFunction(pets);
  buttonRender();
  filterEvents();
  addForm();
  deleteFunc();
};
startApp();
