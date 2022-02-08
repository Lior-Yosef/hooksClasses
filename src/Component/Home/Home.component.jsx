import React,{ useContext } from "react";
import Massage from "../massage/massage.component";
import { ActionShow } from "../../Actions/action";
import { MassageContext } from "../../Context/Massage-context";


const Home=()=>{
    const {massage, dispatch} = useContext(MassageContext)

    const clickShow =()=>{
        dispatch(ActionShow({isOpen}))
    }

    return(<div>
        <button onClick={clickShow}> send </button>
        <Massage/>
    </div>

    )
}
export default Home;