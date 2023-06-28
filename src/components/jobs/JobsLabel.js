const JobsLabel = (props) => {
  return (
    <div
      className="flex justify-center items-center  text-dark-cyan font-bold bg-gray-cyan-2 rounded-sm cursor-pointer hover:bg-dark-cyan hover:text-white px-2 py-1"
      id={props.id}
      onClick={(event) => props.onAddFilterItem(event.target.id)}>
      {props.children}
    </div>
  );
};

export default JobsLabel;
