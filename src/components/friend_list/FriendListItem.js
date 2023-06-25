import css from './FriendList.module.css';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <div>
      <li key={id} className={css.item}>
        <span className={isOnline ? css.status : css.status_false}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </div>
  );
}
