import { SUCCESS, PRIMARY, SECONDARY, ERROR, INFO, WARNING, SHOW } from "./Massage-Types";

export const MassageSuccess = (value) => {
        return {
                type: SUCCESS,
                Payload: value
        }
}

export const ActionPrimary = (value) => {
        return {
                type: PRIMARY,
                Payload: value
        }
}

export const ActionSecondary = (value) => {
        return {
                type: SECONDARY,
                Payload: value
        }
}

export const ActionError = (value) => {
        return {
                type: ERROR,
                Payload: value
        }
}

export const ActionInfo = (value) => {
        return {
                type: INFO,
                Payload: value
        }
}

export const ActionWarning = (value) => {
        return {
                type: WARNING,
                Payload: value
        }
}

export const ActionShow = (value) => {
        return{
                type:SHOW,
                Payload: value
        }
}