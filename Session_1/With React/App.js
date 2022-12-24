const header = React.createElement(
  "h1",
  { className: "heading" },
  "Namaste react"
);

const header2 = React.createElement("h1", { className: "heading2" }, "Header2");

const container = React.createElement("div", { id: "container" }, [
  header,
  header2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
