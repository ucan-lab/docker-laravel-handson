import React from "react";
import ReactDOM, { render } from "react-dom";

const Example = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>これはテストです</p>
        </div>
    );
};

export default Example;

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
