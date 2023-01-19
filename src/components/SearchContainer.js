import React, { useState, useMemo } from "react";
import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

function SearchContainer() {
  const [localSearch, setLocalSearch] = useState("");
  const dispatch = useDispatch();
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <form className="form">
        <h4>Search form</h4>
        <div className="form-center">
          {/* search by position */}
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="Status"
            name="searchStatus"
            value={searchStatus}
            list={["all", ...statusOptions]}
            handleChange={handleSearch}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="Type"
            name="searchType"
            value={searchType}
            list={["all", ...jobTypeOptions]}
            handleChange={handleSearch}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            list={sortOptions}
            handleChange={handleSearch}
          />
          <button
            className="btn btn-block btn-danger"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SearchContainer;
