import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getColor from '../../helpers';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s.stats}>
        {stats.map(item => (
          <li
            key={item.id}
            className={s.item}
            style={{ backgroundColor: getColor() }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

Statistics.defaultProps = {
  title: '',
};
