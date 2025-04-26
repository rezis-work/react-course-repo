import { createElement } from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return createElement("div", {}, [
    createElement("h1", {}, props.name),
    createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return createElement("div", {}, [
    createElement("h1", {}, "Hello World"),
    createElement(Pizza, {
      name: "The Peperoni",
      description: "Mozarella Cheese and bacon",
    }),
    createElement(Pizza, {
      name: "Chicken Pizza",
      description: "Cheese and Chicken",
    }),
    createElement(Pizza, {
      name: "Veggie Pizza",
      description: "Cheese and Veggies",
    }),
    createElement(Pizza, {
      name: "Hawaiian Pizza",
      description: "Cheese and Pineapple",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(createElement(App));
