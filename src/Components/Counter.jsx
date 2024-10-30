import ReactSwitch from 'react-switch';
import { createContext, useState } from 'react'

export const ThemeContext = createContext(null);


function Counter() {

    const [num, setNum] = useState(0);
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    };


    return (
        <>

            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className='flex justify-center items-center h-full' id={theme}>
                    <div id='container' className='p-6 bg-white w-96 rounded-3xl'>
                        <div>
                            <h1 id='heading' className='text-center text-3xl text-yellow-400
                        font-mono font-semibold'>Counter App</h1>
                        </div>
                        <br /><br />
                        <div className='flex justify-center'>
                            <button className='bg-yellow-400 text-white
                        p-2 w-36 rounded-full font-semibold italic'
                                onClick={() => {
                                    setNum(num + 1)
                                }}
                                id='btn'
                            >Add</button>
                        </div>
                        <br />
                        <div>
                            <p className='text-center'>{num}</p>
                        </div>
                        <br />
                        <div className='flex justify-center'>
                            <button className='bg-yellow-400 text-white
                        p-2 w-36 rounded-full font-semibold italic'
                                onClick={() => { setNum(num - 1) }}
                                id='btn'
                            >Sub</button>
                        </div>
                        <br /><br />
                        <div>
                            <ReactSwitch className='fixed left-36'
                                onChange={toggleTheme} checked={theme === "dark"} />
                        </div>
                    </div>
                </div>
            </ThemeContext.Provider >
        </>
    )
}

export default Counter
