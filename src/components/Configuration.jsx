import { useState } from "react";
import ConfigurationModal from "./ConfigurationModal";


export default function Configuration() {

    const [open, setOpen] = useState(true);

    const toggle = () => {
        console.log('console')
        setOpen(!open)
    }

    return (
        <>
            <button onClick={toggle} className="fixed flex items-center justify-center h-14 w-40 pr-2 bottom-0 right-0 mr-4 mb-4 shadow text-black">
                {/* <span className="text-sm ml-1 leading-none">@lofiui</span> */}
                Personnalisation
            </button>

            {open ? <ConfigurationModal/> : null}

        </>
    )
}