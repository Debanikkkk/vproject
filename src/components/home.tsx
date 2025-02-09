import { useState } from "react"
import cutecat from '../media/cutecat.gif'
import ClickHere from "./clickhere"
// import ClickHere from './components/clickhere';

const Home =()=>{

      const [visible, setVisible] = useState(false)
    
    return (
        <div>
 <img src={cutecat}></img>
        <div className="fade-text" >hello  &nbsp; &nbsp; bubby ❤️</div>
        <h1 onClick={() => setVisible(!visible)} style={{cursor: 'pointer'}}className="clicktocontinue">click this to continue</h1>
        {visible && (
          <ClickHere />
        )}
        </div>
        
    )
}

export default Home