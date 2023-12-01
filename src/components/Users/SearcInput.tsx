import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setFilters } from "../../store/reducers/FilterSlice";
import SearchIcon from "../../icons/SearchIcon";
import FilterIcon from "../../icons/FilterIcon";
import useDebounce from "../../hooks/useDebounce";

function SearcInput() {
  const [textName, setTextName] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setTextName(event.target.value);
  }

  function setFilterDebounce() {
    dispatch(setFilters({ filterName: "name", filterValue: textName }));
  }

  useDebounce(setFilterDebounce, 800, textName);

  return (
    <div className="SearchBlock"
    id="SearchBlock_guide">
      <div className="searchIcon">
        <SearchIcon />
      </div>
      <input
        value={textName}
        onChange={handleChangeName}
        placeholder="Поиск"
        className="SearchInput"
        type="text"
        id="SearchInput_white"
      />
      <div className="filterIcon">
        <FilterIcon />
      </div>
    </div>
  );
}

export default SearcInput;
