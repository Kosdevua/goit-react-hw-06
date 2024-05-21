import s from "./SearchBox.module.css";

const SearchBox = ({ setInputValue }) => {
  return (
    <div className={s.search_wrapper}>
      <label htmlFor="search">Find contact by name</label>
      <input
        name="search"
        type="search"
        className={s.searchInput}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
