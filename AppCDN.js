// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

const parent = React.createElement(
    "div", {id:"parent"}, [React.createElement(
        "div", {id:"child"}, [React.createElement(
            "h1", {}, "I am an H1 tag"
        ), React.createElement(
            "h2", {}, "I am an H2 tag"
        )]
    ), React.createElement(
        "div", {id:"child2"}, React.createElement(
            "h1", {}, "I am an H1 tag for child 2"
        )
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// Third argument {} can be string, array etc.