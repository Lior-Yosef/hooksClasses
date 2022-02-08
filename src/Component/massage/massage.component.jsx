import { useContext } from "react";
import { ActionSecondary,ActionShow } from "../../Actions/action";
import { MassageContext } from "../../Context/Massage-context";

const Massage=()=>{
    const {massage, dispatch} = useContext(MassageContext)
    

    const clickSecondary =()=>{
        dispatch(ActionSecondary({msg:"green"}))
    }

    return(<div>
        <h1> Massage component </h1>
        <p>massage state: {massage.msg}</p>
        <button onClick={clickSecondary}>Click</button>
    </div>)
}

export default Massage;