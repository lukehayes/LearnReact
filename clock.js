'use strict';


function Clock(props) {
    return(
        <React.Fragment>
            <h3>Clock Component</h3>
            <h4>It is {props.date.toLocaleTimeString()}</h4>
        </React.Fragment>
    );
}

ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('clock')
)
