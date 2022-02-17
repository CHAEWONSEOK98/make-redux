import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

//reducer
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

//store
const countStore = createStore(countModifier);

//change check
const onChange = () => {
  number.innerText = countStore.getState();
};

//subscribe
countStore.subscribe(onChange);

//event
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});
