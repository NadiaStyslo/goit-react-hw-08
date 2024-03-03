import css from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const userId = useId();
  const dispatch = useDispatch();
  const filterName = useSelector((state) => state.filter.name);
  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.search}>
      <label htmlFor={userId} className={css.user}>
        Faind contacts by name
      </label>
      <input id={userId} value={filterName} className={css.input} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
