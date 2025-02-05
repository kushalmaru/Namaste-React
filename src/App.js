import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState } from "react";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";



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
// const Title = () => (
// <h1 className="head">Hey Title</h1>
// ); // if we want to render this inside below heading component then do this => ....

// const HeadingComponent = () => (
//     <div id="container">
//         <Title />   
//         <h1 className="heading">Namaste React Functional Component</h1> 
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);





// ------------------------------------------------------------------------------------------------------------------------

 







const Grocery = lazy(() => import("./components/Grocery"))



const AppLayout = () => {

    
    const [userName, setUserName] = useState(null);

    //authentication
    useEffect(() => {
        //Make an API call and send username and password
        const data = {
            name: "Kushal Maru",
            // password: "admin"
        }
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
