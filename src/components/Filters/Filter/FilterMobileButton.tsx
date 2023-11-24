function FilterMobileButton() {
  function handleHideFilter() {
    const filterDiv = document.querySelector(".MainFilter");
    filterDiv.classList.remove("MainFilterView");
    const bgMask = document.querySelector("#get_report_mask");
    if (bgMask) bgMask.classList.remove("maskShowed");
  }

  return (
    <div className="FilterMobileButton" onClick={handleHideFilter}>
      Показать результаты
    </div>
  );
}

export default FilterMobileButton;
