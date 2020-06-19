'use strict';

const DOM = document.getElementById('simple-component');

function tick() {
    ReactDOM.render(
        <h1>hello, {new Date().toLocaleTimeString()} !</h1>,
        DOM
    );
}

function Welcome(props) {
    return <h1> Hello {props.name}</h1>;
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

let element = <Welcome name="John"/>;

ReactDOM.render(
    <App />,
    DOM
);

