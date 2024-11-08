{/* <div id="parent">
    <div id="child">
        <h1>hello world</h1>
    </div>
</div> */}



const heading=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"heading"},"hello world"),
    React.createElement("h2",{id:"heading2"},"hello world2")]
    ));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);