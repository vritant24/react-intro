import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import SinList from './sin_list'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>The Sin Counter</h1>
                <SinList/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
