import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setFilters } from "../../store/reducers/FilterSlice";

function SearcInput() {
  const [textName, setTextName] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setTextName(event.target.value);
  }

  useEffect(() => {
    if (textName.length > 4) {
      dispatch(setFilters({ filterName: "name", filterValue: textName }));
    } else if (textName.length === 0) {
      dispatch(setFilters({ filterName: "name", filterValue: textName }));
    }
  }, [textName, dispatch]);

  return (
    <div className="SearchBlock">
      <input
        value={textName}
        onChange={handleChangeName}
        placeholder="Поиск"
        className="SearchInput"
        type="text"
      />
    </div>
  );
}

export default SearcInput;
