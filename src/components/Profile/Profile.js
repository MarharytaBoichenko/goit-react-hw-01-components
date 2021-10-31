import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          width="100"
          alt="Аватар пользователя"
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className="label">Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className="label">Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className="label">Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

// name — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — url на изображение
// stats — объект с информацией об активности

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
