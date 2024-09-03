import { useEffect, useState } from 'react';
import { BiReset } from 'react-icons/bi';
import Cell from './components/Cell';

export interface FieldCell {
    id: number;
    value: 'cross' | 'circle' | 'empty';
}
type Move = 'cross' | 'circle';

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
    const [winningMessage, setWinningMessage] = useState<string>('');

    const currentTurn: string = `${currentMove} turn!`;

    function handleClick(fieldCell: FieldCell): void {
        if (!winningMessage && fieldCell.value === 'empty') {
            setCells(
                cells.map((cell) =>
                    fieldCell.id === cell.id ? { ...cell, value: currentMove } : cell
                )
            );
            if (currentMove === 'cross') {
                setCurrentMove('circle');
            } else setCurrentMove('cross');
        }
    }

    function checkScore() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        winningCombos.forEach((arr) => {
            let crossWins = arr.every((id) => cells[id].value === 'cross');
            let circleWins = arr.every((id) => cells[id].value === 'circle');
            if (crossWins) {
                setWinningMessage('Cross wins!');
                return;
            } else if (circleWins) {
                setWinningMessage('Circle wins!');
                return;
            }
        });
    }

    function resetGame(): void {
        setCells(initialCells);
        setCurrentMove('cross');
        setWinningMessage('');
    }

    useEffect(() => {
        checkScore();
    }, [cells]);

    return (
        <main className="container mx-auto h-[95vh]">
            <div className="mt-6 flex w-full justify-end">
                <BiReset
                    size={36}
                    color={'blue'}
                    onClick={resetGame}
                    className="mb-9 cursor-pointer"
                />
            </div>
            <div className="absolute left-[50%] top-[50%] mx-auto ml-[-121px] mt-[-121px]">
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
                <p className="mt-2 flex justify-center capitalize">
                    {winningMessage || currentTurn}
                </p>
            </div>
        </main>
    );
}

export default App;
