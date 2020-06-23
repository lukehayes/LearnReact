'use strict';

class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {date: new Date()}
    }

    componentDidMount() {

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUnMount() {

        clearInterval(this.timerID);
    }

    tick() {

        this.setState({
            date: new Date()
        });
    }


    render() {
        return(
            <React.Fragment>
                <h3>Clock Component</h3>
                <h4>It is {this.state.date.toLocaleTimeString()}</h4>
            </React.Fragment>
        );
    }

}

ReactDOM.render(
    <Clock />,
    document.getElementById('clock')
);
