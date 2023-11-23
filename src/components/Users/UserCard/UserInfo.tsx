import { IUserInfo } from "../../../interfaces/IUserInfo";

function UserInfo(props: IUserInfo) {
  return (
    <div className="UserInfo">
      <div className="userName">
        <a href={`/_wt/${props.id}`} target="_blank">
          {props.name}
        </a>
      </div>
      <div className="userProp">
        <div className="userTitle">Должность:</div>
        <div className="userValue">{props.position}</div>
      </div>
      <div className="userProp">
        <div className="userTitle">Компания:</div>
        <div className="userValue">{props.company}</div>
      </div>
      {/* <div className="userProp">
        <div className="userTitle">Департамент:</div>
        <div className="userValue">{props.department}</div>
      </div> */}
      <div className="userProp">
        <div className="userTitle">Подразделение:</div>
        <div className="userValue">{props.subdivision}</div>
      </div>
      <div className="userProp">
        <div className="userTitle">Город:</div>
        <div className="userValue">{props.city ? props.city : "Не указан"}</div>
      </div>
      <div className="userProp">
        <div className="userTitle">Email:</div>
        <div className="userValue">{props.email}</div>
      </div>
    </div>
  );
}

export default UserInfo;
