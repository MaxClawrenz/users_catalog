import { IUser } from "../../../interfaces/IUser";
import UserInfo from "./UserInfo";
import UserPhoto from "./UserPhoto";

function Card(props: IUser) {
  return (
    <div className="userCard">
      <UserPhoto id={props.id} />
      <UserInfo
        name={props.name}
        email={props.email}
        id={props.id}
        city={props.city}
        company={props.company}
        department={props.department}
        position={props.position}
        subdivision={props.subdivision}
      />
    </div>
  );
}

export default Card;
