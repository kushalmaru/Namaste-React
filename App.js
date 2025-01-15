import React from "react";
import ReactDOM from "react-dom/client";

//Using React ELEMENT
// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World! from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);   // This is how we render react ELEMENT



//Using JSX
// JSX => React Element(object) => HTML Element(on render)
// const jsxHeading = <h1 id="heading" className="head">Hello World! using JSX</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);  // This is how we render react ELEMENT


// --------------------------------------------------------------------------------------------------------------------------




//React Functional COMPONENT
// Functional COMPONENT is just a normal Javascript function which returns some JSX/React Element
// const HeadingComponent = () => {
//     return <h1 className="heading">Namaste React Functional Component</h1>  //way 1
// }

// const HeadingComponent2 = () => (
//     <h1 className="heading">Namaste React Functional Component</h1>  //way 2
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);  // This is how we render react COMPONENT






// -----------------------------------------------------------------------------------------------------------------



// COMPONENT COMPOSITION
const Title = () => (
<h1 className="head">Hey Title</h1>
); // if we want to render this inside below heading component then do this => ....

const HeadingComponent = () => (
    <div id="container">
        <Title />   
        <h1 className="heading">Namaste React Functional Component</h1> 
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
