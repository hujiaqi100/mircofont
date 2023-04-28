import logo from './logo.svg';
import './home.css';
import React from 'react';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    onClick={() => {
                        postMessage({
                            openTab: {
                                url: 'https://reactjs.org'
                            }
                        })
                    }}
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
