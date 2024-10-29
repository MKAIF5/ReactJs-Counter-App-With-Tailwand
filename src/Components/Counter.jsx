import Switcher from "./Switcher"

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
                    <br />
                    <div>
                        <p className='text-center'>0</p>
                    </div>
                    <br />
                    <div className='flex justify-center'>
                        <button className='bg-yellow-400 text-white
                        p-2 w-36 rounded-full'>Sub</button>
                    </div>
                    <br /><br />
                    <div>
                        <Switcher />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
