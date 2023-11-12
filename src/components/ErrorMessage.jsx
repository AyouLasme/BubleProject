import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'; 

export default function ErrorMessage({title,subtitle}) {
    return (
        <div className='relative border-2 border-red-700 rounded-lg mt-6 '>
            <div className='bg-red-900 absolute top-0 rounded-l-lg bottom-0 w-2'></div>


            <div className='flex mx-4 p-4  space-x-4'>
                <ExclamationTriangleIcon className="h-6 w-6 text-red-900" />
                <div >
                    <div className='text-red-900 font-bold'>{ title }</div>
                    <div> { subtitle } </div>
                </div>
            </div>



        </div>)

}