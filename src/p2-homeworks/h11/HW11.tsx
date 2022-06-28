import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const maxValue = 100;

    const spanStyle = {display: 'inline-block', minWidth: '25px', marginLeft: '5px'};

    const onChangeRangeHandler = (values: [number, number]) => {
        setValue1(values[0]);
        setValue2(values[1]);
    }

    return (
        <div>
            <hr/>
            <span>homeworks 11</span>

            <div style={{display: "flex"}}>
                <span style={spanStyle}>{value1}</span>
                <SuperRange onChangeRange={setValue1} value={value1}/>
                <span style={spanStyle}>{maxValue}</span>
            </div>

            <div style={{display: "flex"}}>
                <span style={spanStyle}>{(value1 >= value2) ? value2 : value1}</span>
                <SuperDoubleRange value={[value1, value2]} onChangeRange={onChangeRangeHandler}/>
                <span style={spanStyle}>{value2}</span>
            </div>

            <hr/>
        </div>
    )
}

export default HW11
