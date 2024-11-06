import styles from "./FilterSelect.module.css";

const FilterSelect = ({ label, options, value, onChange }) => {
  return (
    <div className={styles.filterGroup}>
      <label htmlFor="categoryFilter">{label}</label>
      <select
        id="categoryFilter"
        value={value}
        onChange={onChange}
        className={styles.select}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
