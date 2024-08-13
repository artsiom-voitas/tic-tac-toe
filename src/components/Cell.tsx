import { FieldCell } from '../App';
import { RxCross2 } from 'react-icons/rx';
import { GiCircle } from 'react-icons/gi';

interface CellsProps extends FieldCell {
    onClick: () => void;
}

function Cell({ value, id, onClick }: CellsProps) {
    return (
        <button
            onClick={onClick}
            id={`${id}`}
            className="flex h-20 w-20 items-center justify-center border border-blue-400 hover:border-blue-600 hover:bg-slate-300">
            {value === 'cross' && (
                <RxCross2
                    size={72}
                    color="blue"
                />
            )}
            {value === 'zero' && (
                <GiCircle
                    size={72}
                    color="blue"
                />
            )}
        </button>
    );
}

export default Cell;
