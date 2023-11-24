function FilterIcon() {
  function handleShowFilter() {
    const filterDiv = document.querySelector(".MainFilter");
    filterDiv.classList.add("MainFilterView");
    const bgMask = document.querySelector("#get_report_mask");
    if (bgMask) bgMask.classList.add("maskShowed");
  }

  return (
    <svg
      onClick={handleShowFilter}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
    >
      <path
        d="M0.765813 4.3782H12.4256C12.777 5.99482 14.2054 7.20848 15.909 7.20848C17.6125 7.20848 19.0409 5.99487 19.3923 4.3782H23.7402C24.1631 4.3782 24.506 4.03165 24.506 3.60422C24.506 3.17678 24.1631 2.83023 23.7402 2.83023H19.392C19.0399 1.21443 17.6095 0 15.909 0C14.2075 0 12.7778 1.21424 12.4258 2.83023H0.765813C0.342893 2.83023 0 3.17678 0 3.60422C0 4.03165 0.342893 4.3782 0.765813 4.3782ZM13.8745 3.60625C13.8745 3.60349 13.8745 3.60068 13.8745 3.59793C13.8779 2.46757 14.7905 1.54802 15.909 1.54802C17.0258 1.54802 17.9385 2.46631 17.9433 3.59614L17.9435 3.6075C17.9417 4.7398 17.0297 5.66055 15.909 5.66055C14.7887 5.66055 13.877 4.74072 13.8744 3.6091L13.8745 3.60625ZM23.7402 11.6218H12.0805C11.729 10.0052 10.3006 8.79157 8.59706 8.79157C6.89351 8.79157 5.46508 10.0052 5.11367 11.6218H0.765813C0.342893 11.6218 0 11.9684 0 12.3958C0 12.8233 0.342893 13.1698 0.765813 13.1698H5.11405C5.46618 14.7855 6.89653 16 8.59706 16C10.2985 16 11.7282 14.7857 12.0802 13.1698H23.7402C24.1631 13.1698 24.506 12.8233 24.506 12.3958C24.506 11.9684 24.1631 11.6218 23.7402 11.6218ZM10.6315 12.3938C10.6315 12.3966 10.6315 12.3993 10.6315 12.4021C10.6281 13.5324 9.71553 14.452 8.59706 14.452C7.48017 14.452 6.56752 13.5337 6.56268 12.4039L6.56254 12.3926C6.56421 11.2602 7.47625 10.3395 8.59706 10.3395C9.71735 10.3395 10.6291 11.2593 10.6316 12.391L10.6315 12.3938Z"
        fill="#878787"
      />
    </svg>
  );
}

export default FilterIcon;
