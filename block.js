'use strict';

class Block extends React.Component {

    render() {
        // Simply create a p tag with some simple content
        return React.createElement(
            'p',
            null,
            'This is the content text'
        );
    }

}

const domBlock = document.querySelector("#block_container");

ReactDOM.render(
    React.createElement(Block),
    domBlock
);

