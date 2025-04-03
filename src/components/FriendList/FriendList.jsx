import FriendListItem from "./FriendListItem"
import s from "./FriendList.module.css"

const FriendList = ({friends}) => {
    return (
        <ul className={s.list}>
          {friends.map(({ id, avatar, name, isOnline }) => {
            return ( 
              <li key={id} className={s.listItem}>
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
              </li>
            );
          })}
        </ul>
      );
}

export default FriendList