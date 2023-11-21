import React, { useState } from 'react';
import BubbleChart from './BubbleChart';
import CustomChart from './CustomChart';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import data from '../data.json';
import ErrorMessage from './ErrorMessage';

import OnBoarding from './OnBoarding';
import UploadBtn from './UploadBtn';
import Configuration from './Configuration';
import Header from './Header';
import { graphChecker } from '../utils/graph-checker';

export default function MainContent() {

    const [data, setData] = useState(null);

    const [errorMessage, setErrorMessage ] = useState("")

    const callBack = (data) => {
        setErrorMessage("")
        const checkerResult = graphChecker(data)
        if(!checkerResult.result)
            setErrorMessage(checkerResult.errorMessage)
        else
            setData(data);
    }

    return (
        <div className="flex flex-col justify-around h-full bg-[#efeeee]">

            <Header />

            <div className="w-full h-full overflow-auto flex flex-col justify-center">

                {
                    data != null
                    ? <BubbleChart data={data} />
                    : (
                        <div className="mx-auto w-3/5 h-auto">
                            <OnBoarding/>
                            {
                                errorMessage &&
                                    <ErrorMessage
                                        title="Oups. Format de fichier incorrect !!!."
                                        subtitle={ errorMessage  + ".Corrigez le fichier et importez le de nouveau.Vous y êtes presque !"}
                                    />
                            }

                            <div className="mt-16 flex items-center justify-center">
                                <UploadBtn parentCallBack={callBack} />
                            </div>
                        </div>
                    )
                }

            </div>
            {
                data != null && (
                <div className="flex flex-col fixed bottom-2 right-2 p-2 rounded-md custom-backdrop">
                    <UploadBtn parentCallBack={callBack} />
                    <Configuration />
                </div>
                )
            }
        </div>
    );
}



