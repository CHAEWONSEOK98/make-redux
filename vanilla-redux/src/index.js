import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
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
  countStore.dispatch({ type: "ADD" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});
