import React from 'react';
import SinCounter from './sin_counter'

function SinList(props) {
    var sins = ["Coffee", "Bananas", "Bad Jokes"];
    
    var list = sins.map((item, i) => {
        return <SinCounter id={i} sinName={item}/>
    });

    return (
        <div>
            {list}
        </div>
    )
}

export default SinList;