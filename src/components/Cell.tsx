interface CellProps {
    value: string;
    id: number;
}

function Cell({ value, id }: CellProps) {
    function handleClick(): void {
        console.log(id);
    }
    return (
        <button
            onClick={handleClick}
            id={`${id}`}
            className="flex h-20 w-20 items-center justify-center border border-blue-400">
            {id}
        </button>
    );
}

export default Cell;
