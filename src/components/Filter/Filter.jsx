import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilter }) => {
  return (
    <>
      <label className={s.label}>
        <p className={s.text}>Find contacts by name</p>
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  onSufilterbmit: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
