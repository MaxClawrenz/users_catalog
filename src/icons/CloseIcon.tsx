function CloseIcon() {
  function handleHideFilter() {
    const filterDiv = document.querySelector(".MainFilter");
    filterDiv.classList.remove("MainFilterView");
    const bgMask = document.querySelector("#get_report_mask");
    if (bgMask) bgMask.classList.remove("maskShowed");
  }

  return (
    <div className="CloseIcon">
      <svg
        onClick={handleHideFilter}
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <rect width="15" height="15" rx="4" fill="#E7E7E7" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0327 5.85411C10.2283 5.65915 10.2288 5.34257 10.0338 5.147C9.83888 4.95143 9.5223 4.95094 9.32673 5.14589L7.58987 6.87733L5.853 5.14589C5.65743 4.95094 5.34085 4.95143 5.14589 5.147C4.95094 5.34257 4.95143 5.65915 5.147 5.85411L6.88165 7.58333L5.147 9.31256C4.95143 9.50752 4.95094 9.8241 5.14589 10.0197C5.34085 10.2152 5.65743 10.2157 5.853 10.0208L7.58987 8.28934L9.32673 10.0208C9.5223 10.2157 9.83888 10.2152 10.0338 10.0197C10.2288 9.8241 10.2283 9.50752 10.0327 9.31256L8.29808 7.58333L10.0327 5.85411Z"
          fill="#808080"
        />
      </svg>
    </div>
  );
}

export default CloseIcon;
