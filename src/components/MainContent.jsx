import React, { useState } from 'react';
import BubbleChart from './BubbleChart';
import CustomChart from './CustomChart';
import data from '../data.json';

import OnBoarding from './OnBoarding';
import UploadBtn from './UploadBtn';
import Configuration from './Configuration';
import Header from './Header';

export default function MainContent() {

    const [data, setData] = useState(null);

    const callBack = (data) => {
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



