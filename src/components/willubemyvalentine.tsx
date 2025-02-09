import AskingButton from "./askingButton"

const WillubemyValentine=()=>{
    return (
        <div>
        <div style={{fontFamily: 'arcade', wordSpacing: '23px', fontSize: '70px', color: 'white'}}>Will you be my valentine?</div>
        <div style={{
            display: "flex", gap: '10px'
        }}>
            <AskingButton message="YES" color="white" url="" backgroundColor="green" size={70}/>
            <AskingButton message="NO" color="white" url="" backgroundColor="red" size={25}/>

        </div>
        </div>
        
    )
}

export default WillubemyValentine