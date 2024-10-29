import Counter from './Components/Counter'
import './App.css'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          id={theme}
          style={{ backgroundColor: "bisque", width: "100%", height: "100vh" }}>
          <Counter />
        </div>
      </ThemeContext.Provider >

    </>
  )
}

export default App
