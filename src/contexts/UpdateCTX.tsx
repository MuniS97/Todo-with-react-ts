import React from "preact/compat"

interface IUpdate {
    status: boolean
    setStatus:(c: boolean) => void
}

export const UpdateContext = React.createContext<IUpdate>({status: false, setStatus: () => {}})