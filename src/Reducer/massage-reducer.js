import  { SUCCESS,PRIMARY,SECONDARY,ERROR,INFO,WARNING }  from "../Actions/Massage-Types";


const MassageReducer = (state, action) => {
    switch (action.type) {
        case SUCCESS:
            return  "SUCCESS";

        case PRIMARY:
            return  "success";
            
        case SECONDARY:
            return  action.Payload;
           
        case ERROR:
            return  "success";
           
        case INFO:
            return  "success"
           
        case WARNING:
            return  "success"
        default:
            return state
            break;
    }
}

export default MassageReducer;