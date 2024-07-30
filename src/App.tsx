import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="flex justify-center">
                <a
                    href="https://vitejs.dev"
                    target="_blank">
                    <img
                        src={viteLogo}
                        alt="Vite logo"
                    />
                </a>
                <a
                    href="https://react.dev"
                    target="_blank">
                    <img
                        src={reactLogo}
                        alt="React logo"
                    />
                </a>
            </div>
            <div className="my-5 flex justify-center gap-7">
                <button
                    className="min-w-10 rounded-xl border bg-slate-200 p-2"
                    onClick={() => setCount((count) => count + 1)}>
                    +
                </button>
                <button
                    className="min-w-10 rounded-xl border bg-slate-200 p-2"
                    onClick={() => count > 0 && setCount((count) => count - 1)}>
                    -
                </button>
            </div>
            <p>{count}</p>
        </>
    );
}

export default App;
