import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));


const Title = () =>(
    <h1>This is Title Functional Component</h1>
);
const number = 102938403;

// Component Composition
const HeadingComponent = ()=> (
    <div>
        <h1 className="heading">This is Heading Functional Component</h1>
        {number}
        {Title()}
    </div>
);



root.render(<HeadingComponent/>);
