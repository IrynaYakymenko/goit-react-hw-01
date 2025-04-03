import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.profile}>
        <div>
            <img className={s.image}
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            />
            <p className={s.name}>Petra Marica</p>
            <p className={s.info}>@pmarica</p>
            <p className={s.info}>Salvador, Brasil</p>
        </div>

        <ul className={s.list}>
            <li className={s.listItem}>
                <span>Followers</span>
                <span>1000</span>
            </li>
            <li className={s.listItem}>
                <span>Views</span>
                <span>2000</span>
            </li>
            <li className={s.listItem}>
                <span>Likes</span>
                <span>3000</span>
            </li>
        </ul>
</div>
  )
};

export default Profile;