import styles from "./Search.module.scss";
import searchIcon from "../../assets/search_icon.png";
import closeIcon from "../../assets/cancel_icon.png";
import { useCallback, useContext, useRef, useState } from "react";
import { SearchContext } from "../../pages/Layout";
import debounce from "lodash.debounce";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setValue("");
    setSearchValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      setSearchValue(str);
    }, 1000),
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
