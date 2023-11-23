function SkeletonCard() {
  return (
    <div className="userCard">
      <div className="UserPhotoSkelet"></div>
      <div className="UserInfo">
        <div className="userNameSkelet"></div>
        <div className="userProp">
          <div className="userTitle">Должность:</div>
          <div className="userValueSkelet"></div>
        </div>
        <div className="userProp">
          <div className="userTitle">Компания:</div>
          <div className="userValueSkelet"></div>
        </div>
        <div className="userProp">
          <div className="userTitle">Подразделение:</div>
          <div className="userValueSkelet"></div>
        </div>
        <div className="userProp">
          <div className="userTitle">Город:</div>
          <div className="userValueSkelet"></div>
        </div>
        <div className="userProp">
          <div className="userTitle">Email:</div>
          <div className="userValueSkelet"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
