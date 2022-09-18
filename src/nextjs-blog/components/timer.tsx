import React from 'react';

type State = {
    seconds: number
}

class Timer extends React.Component<{}, State> {
    interval?: NodeJS.Timer;

    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <span>
                {this.state.seconds}
            </span>
        );
    }
}

export default Timer;