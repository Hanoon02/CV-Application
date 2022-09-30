import React, {useState} from 'react'

function FormControls(){
    const [clear, setClear] = useState(false)

    const clearForm = () => {
        setClear(true)
    }

    const resetForm = () => {
        setClear(false)
    }

    return{
        clear, resetForm,
        formControls:(<>
        <div className='flex flex-row py-4 justify-center items-center'>
        <button onClick={()=>clearForm()} type="button" className="py-4 px-6 w-1/6 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
            Clear
        </button>
        <button type="button" className="py-4 px-6 w-1/6 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
            Create CV
        </button>
        </div>
    </>)}
}

export default FormControls