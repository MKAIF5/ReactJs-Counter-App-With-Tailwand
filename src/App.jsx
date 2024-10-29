import Counter from './Components/Counter'
import './App.css'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          id={theme}
          style={{ backgroundColor: "bisque", width: "100%", height: "100vh" }}>
          <Counter />
          <ReactSwitch className='relative bottom-20'
            onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </ThemeContext.Provider >

    </>
  )
}

export default App
