import React, { useState } from 'react'
import './App.css'

const App: React.FC = () => {
    const [hover, setHover] = useState(false)
    return (
        <div className="App">
            <div
                className="image"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {hover ? (
                    <div className="editor">
                        <button className="item">L</button>
                        <button className="item">C</button>
                        <button className="item">R</button>
                        <button className="item">+</button>
                        <button className="item">-</button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default App
