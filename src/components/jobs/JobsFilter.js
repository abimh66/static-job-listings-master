import Card from '../UI/Card';

const JobsFilter = (props) => {
  return (
    <Card className="flex-row justify-between items-center -mt-16 pt-4">
      <div className="w-4/5 flex flex-row gap-3 flex-wrap">
        {props.items.map((item) => (
          <div
            className="flex justify-center items-center  text-dark-cyan font-bold bg-gray-cyan-2 rounded-sm"
            key={item}>
            <span className="px-2 py-1">{item}</span>
            <button
              id={item}
              onClick={(event) => props.onRemoveFilter(event.target.id)}
              className="h-full flex items-center bg-dark-cyan text-white px-2 py-1 rounded-r-sm hover:bg-black cursor-pointer">
              X
            </button>
          </div>
        ))}
      </div>
      <button
        className="text-dark-cyan hover:underline h-fit w-fit"
        onClick={() => props.onClearFilter()}>
        Clear
      </button>
    </Card>
  );
};

export default JobsFilter;
