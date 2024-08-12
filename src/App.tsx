import { useState } from 'react';
import Cell from './components/Cell';

function App() {
    const initialCells: string[] = ['', '', '', '', '', '', '', '', ''];
    const [cells, setCells] = useState<string[]>(initialCells);
    return (
        <main className="mx-5 my-96 flex h-full justify-center">
            <div className="grid w-fit grid-cols-3 justify-center justify-items-center border border-blue-400">
                {cells.map((cell, index) => (
                    <Cell
                        key={index}
                        id={index}
                        value={cell}
                    />
                ))}
            </div>
        </main>
    );
}

export default App;
