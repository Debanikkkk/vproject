export interface askingButtonProps {
    color: string,
    message: string
    size: number,
    url: string,
    backgroundColor: string
}

// void function handleAllowClick(url: string){
//     window.location.href=url
// }


const AskingButton: React.FC<askingButtonProps> = ({color, message, size, url, backgroundColor}) => {
    function handleAllowClick(){
        window.location.href=url
    }
    return (
        <div>
            <button style={{ color: `${color}`, cursor: 'pointer', height: `${size}`, width:`${2*size}`, backgroundColor: `${backgroundColor}`}} onClick={handleAllowClick} >{message}</button>
        </div>
    )
}
export default AskingButton