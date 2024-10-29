import { useState } from "react"
import Switcher from "./Switcher"

function Counter() {

    const [num, setNum] = useState(1);



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
                        p-2 w-36 rounded-full'
                                onClick={() => {
                                    setNum(num + 1)
                                }}>Add</button>
                        </div>
                        <br />
                        <div>
                            <p className='text-center'>{num}</p>
                        </div>
                        <br />
                        <div className='flex justify-center'>
                            <button className='bg-yellow-400 text-white
                        p-2 w-36 rounded-full'
                                onClick={() => { setNum(num - 1) }}>Sub</button>
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
