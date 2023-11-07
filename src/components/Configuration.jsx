import { useState } from "react";
import ConfigurationModal from "./ConfigurationModal";


export default function Configuration() {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        console.log('console')
        setOpen(!open)
    }

    return (
        <>
            <div onClick={toggle} className="floated-btn text-black">
                {/* <span className="text-sm ml-1 leading-none">@lofiui</span> */}
                Paramètres
            </div>

            {open ? <ConfigurationModal/> : null}

        </>
    )
}