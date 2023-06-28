import JobsLabel from './JobsLabel';
import Card from '../UI/Card';

const JobsItem = (props) => {
  const labelNew = props.dataItem.new && (
    <div className="bg-dark-cyan text-white px-3 rounded-full flex items-center justify-center">
      NEW!
    </div>
  );
  const labelFeatured = props.dataItem.featured && (
    <div className="bg-dark-gray-2 text-white px-3 rounded-full flex items-center justify-center">
      FEATURED
    </div>
  );
  const addItemFilterHandler = (item) => {
    props.onAddFilter(item);
  };

  return (
    <Card className="flex-col gap-3 md:flex-row md:items-center md:py-7 justify-start border-l-4 border-dark-cyan">
      <img
        src={props.dataItem.logo}
        className="w-[60px] h-auto -mt-[30px]"
        alt={props.dataItem.company}
      />
      <div className="flex flex-col gap-3 md:border-none justify-start w-full border-b-2 pb-3 border-dark-gray-1">
        <div className="flex gap-4">
          <h3 className="text-dark-cyan text-lg ">{props.dataItem.company}</h3>
          <div className="flex gap-2">
            {labelNew}
            {labelFeatured}
          </div>
        </div>
        <p className="w-fit font-bold hover:text-dark-cyan cursor-pointer">
          {props.dataItem.position}
        </p>
        <div className="flex gap-3 text-dark-gray-2 items-center">
          <div>{props.dataItem.postedAt}</div>
          <div className="h-1 w-1 rounded bg-dark-gray-1"></div>
          <div>{props.dataItem.contract}</div>
          <div className="h-1 w-1 rounded bg-dark-gray-1"></div>
          <div>{props.dataItem.location}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 w-11/12">
        {props.dataItem.label.map((label) => {
          return (
            <JobsLabel
              id={label}
              key={label}
              onAddFilterItem={addItemFilterHandler}>
              {label}
            </JobsLabel>
          );
        })}
      </div>
    </Card>
  );
};

export default JobsItem;
