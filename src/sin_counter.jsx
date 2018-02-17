import React from 'react';

class SinCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inc : 0
        }
    }
    incrementNumber = () => {
        this.setState({inc : this.state.inc + 1});
    }
    render() {
        var sinName = this.props.sinName || "Sin"
        return (
            <div>
                <button onClick={this.incrementNumber}>{sinName}</button>
                <h4>{this.state.inc}</h4>
            </div>
        )
    }
}

export default SinCounter;