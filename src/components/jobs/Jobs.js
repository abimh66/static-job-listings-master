import JobsFilter from './JobsFilter';
import JobsItem from './JobsItem';
import { useState, useEffect } from 'react';

const Jobs = (props) => {
  const [itemFilter, setItemFilter] = useState([]);
  const [showData, setShowData] = useState(props.dataItem);

  useEffect(() => {
    let items = props.dataItem;
    let filterCount = itemFilter.length - 1;
    const filteringItems = (x) => {
      if (filterCount >= 0) {
        items = x.filter((data) =>
          data.label.includes(itemFilter[filterCount])
        );
        filterCount--;
        filteringItems(items);
      }
    };

    filteringItems(items);
    setShowData(items);
  }, [itemFilter, props.dataItem]);

  const addFilterHandler = (item) => {
    setItemFilter((prevState) => Array.from(new Set([...prevState, item])));
  };
  const clearFilterHandler = () => {
    setItemFilter([]);
  };
  const removeFilterHandler = (item) => {
    setItemFilter((prevState) =>
      prevState.filter((state) => state.includes(item))
    );
  };

  return (
    <div className="py-10 px-5 bg-gray-cyan-1 flex flex-col gap-16 items-center">
      {/* <p>{`${showData.length} Data Available`}</p> */}
      {itemFilter.length !== 0 && (
        <JobsFilter
          items={itemFilter}
          onRemoveFilter={removeFilterHandler}
          onClearFilter={clearFilterHandler}
        />
      )}
      {showData.map((item) => (
        <JobsItem
          dataItem={item}
          key={item.id}
          onAddFilter={addFilterHandler}
        />
      ))}
    </div>
  );
};

export default Jobs;
