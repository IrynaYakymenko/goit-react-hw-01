import s from './Profile.module.css';

const Profile = ({avatar, name, tag,location, stats}) => {
  return (
    <div className={s.profile}>
        <div>
            <img className={s.image}
            src={avatar}
            alt="User avatar"
            />
            <p className={s.name}>{name}</p>
            <p className={s.info}>@{tag}</p>
            <p className={s.info}>{location}</p>
        </div>

        <ul className={s.list}>
            <li className={s.listItem}>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li className={s.listItem}>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li className={s.listItem}>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
</div>
  )
};

export default Profile;