import styles from "./Search.module.scss";
import searchIcon from "../../assets/search_icon.png";
import closeIcon from "../../assets/cancel_icon.png";
import { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <img className={styles.searchIcon} src={searchIcon} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.root}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.closeIcon}
          src={closeIcon}
          alt="closeIcon"
        />
      )}
    </div>
  );
};

export default Search;
