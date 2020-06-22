'use strict';

const DOM = document.getElementById('simple-component');

function tick() {
    ReactDOM.render(
        <h1>hello, {new Date().toLocaleTimeString()} !</h1>,
        DOM
    );
}

function Comment(props) {
    return(
        <div>Comment Example... {props.text}</div>
    );
}

function Welcome(props) {
    return (
        <React.Fragment>
        <h1> Hello {props.name}</h1>
        <Comment text="Comment text..."/>
        </React.Fragment>
    );
}

function App() {

    return (
        <div>
            <Welcome name="Tom"/>
            <Welcome name="Dick"/>
            <Welcome name="Harry"/>
        </div>
    );

}


ReactDOM.render(
    <App />,
    DOM
);
