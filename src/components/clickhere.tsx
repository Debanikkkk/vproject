// import 'react' from react

import { useState } from "react"
import WillubemyValentine from "./willubemyvalentine"
import AskingButton from "./askingButton"

const ClickHere = () => {
    const [gqdef, gamequestion] = useState(false)
    const [askbutton, abap]=useState(false)
    return (
        <div >
            <button className="button-design" onClick={() => {
                gamequestion(!gqdef)
            }}>CLICK HERE</button>
            {
                gqdef && (
                    <h1 style={{ color: 'purple', fontFamily: 'arcade', wordSpacing: '10px', cursor:'pointer' }} onClick={()=>{
                        abap(!askbutton)
                    }}>I wanna ask you something 😳 
                    </h1>
                )
            }

            {
                askbutton && (
                    <AskingButton backgroundColor="purple" color='white' message="What is it?" size={50} url="/willubemyvalentine"/>
                )
            }
        </div >
    )
}

export default ClickHere