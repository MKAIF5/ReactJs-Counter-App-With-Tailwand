import React from 'react'

function Counter() {
    return (
        <>

            <div className='flex justify-center items-center h-full'>
                <div className='p-6 bg-white w-96 rounded-3xl'>

                    <div>
                        <h1 className='text-center text-3xl text-yellow-400
                        font-mono font-semibold'>Counter App</h1>
                    </div>
                    <br /><br />
                    <div className='flex justify-center'>
                        <button className='bg-yellow-400 text-white
                        p-2 w-36 rounded-full'>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
