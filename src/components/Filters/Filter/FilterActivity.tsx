import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";

function FilterActivity() {
  const [social, setSocial] = useState<boolean>(false);
  const [photo, setPhoto] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function handleSocialChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setSocial(true);
    } else {
      setSocial(false);
    }
  }

  function handlePhotoChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setPhoto(true);
    } else {
      setPhoto(false);
    }
  }

  useEffect(() => {
    dispatch(setFilters({ filterName: "social", filterValue: social }));
  }, [social, dispatch]);

  useEffect(() => {
    dispatch(setFilters({ filterName: "photo", filterValue: photo }));
  }, [photo, dispatch]);

  return (
    <div className="filterContainer">
      <div className="checkBoxColumnLeft">
        <div className="labelsBlock">
          <input
            onChange={handlePhotoChange}
            type="checkbox"
            id="photo"
            name="photo"
          />
          <label htmlFor="photo">С фотографией</label>
        </div>
      </div>
      {/* <div className="checkBoxColumnRight">
        <div className="labelsBlock">
          <input
            onChange={handleSocialChange}
            type="checkbox"
            id="social"
            name="social"
          />
          <label htmlFor="social">Соц. сети</label>
        </div>
      </div> */}
    </div>
  );
}

export default FilterActivity;
