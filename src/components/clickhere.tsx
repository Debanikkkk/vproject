// import 'react' from react

import { useState } from "react"

const ClickHere = () => {
    const [gqdef, gamequestion] = useState(false)

    return (
        <div >
            <button className="button-design" onClick={() => {
                gamequestion(!gqdef)
            }}>CLICK HERE</button>
            {
                gqdef && (
                    <h1 style={{ color: 'purple', fontFamily: 'arcade', wordSpacing: '10px' }}>I wanna ask you something :*</h1>
                )
            }
        </div >
    )
}

export default ClickHere