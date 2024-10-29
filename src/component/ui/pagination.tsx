interface PaginationPropsType {
  total: number;
  current: number;
  onSelect: (page: number) => void;
}

const Pagination = ({ total, current, onSelect }: PaginationPropsType) => {
  const generatePageNumbers = (total: number, current: number) => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    range.push(1);
    for (let i = current - delta; i <= current + delta; i++) {
      if (i >= 2 && i < total) {
        range.push(i);
      }
    }
    range.push(total);

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const pageNumbers = generatePageNumbers(total, current);

  return (
    <div>
      {pageNumbers.map((number, index) => (
        <button
          key={index}
          onClick={() => number !== "..." && onSelect(number as number)}
          disabled={number === current || number === "..."}
          className={` btn-num ${number === current ? "btn-num-active" : ""} `}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
