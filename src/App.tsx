import { useState } from 'react';
import { BiReset } from 'react-icons/bi';
import Cell from './components/Cell';

export interface FieldCell {
    id: number;
    value: 'cross' | 'zero' | 'empty';
}
type Move = 'cross' | 'zero';

function App() {
    const initialCells: FieldCell[] = [
        { id: 0, value: 'empty' },
        { id: 1, value: 'empty' },
        { id: 2, value: 'empty' },
        { id: 3, value: 'empty' },
        { id: 4, value: 'empty' },
        { id: 5, value: 'empty' },
        { id: 6, value: 'empty' },
        { id: 7, value: 'empty' },
        { id: 8, value: 'empty' }
    ];
    const [cells, setCells] = useState<FieldCell[]>(initialCells);
    const [currentMove, setCurrentMove] = useState<Move>('cross');

    function handleClick(fieldCell: FieldCell): void {
        if (fieldCell.value === 'empty') {
            setCells(
                cells.map((cell) =>
                    fieldCell.id === cell.id ? { ...cell, value: currentMove } : cell
                )
            );
            if (currentMove === 'cross') {
                setCurrentMove('zero');
            } else setCurrentMove('cross');
        }
        console.log(cells);
    }
    return (
        <main className="container flex flex-col items-center justify-center">
            <div className="mb-80 mt-6 flex w-full justify-end">
                <BiReset
                    size={36}
                    color={'blue'}
                    onClick={() => setCells(initialCells)}
                    className="mb-9 cursor-pointer"
                />
            </div>
            <div className="grid w-fit grid-cols-3 justify-center justify-items-center border border-blue-400">
                {cells.map((cell) => (
                    <Cell
                        onClick={() => handleClick(cell)}
                        key={cell.id}
                        id={cell.id}
                        value={cell.value}
                    />
                ))}
            </div>
        </main>
    );
}

export default App;
