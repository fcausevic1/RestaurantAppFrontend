import React, { useState } from 'react';

const Jelo = (props) => {
    const [nesto] = useState("Konj")
    return (
        <div>
            {nesto}
    <h4>{props.ime_jela}</h4>
        </div>
    )
}

export default Jelo;