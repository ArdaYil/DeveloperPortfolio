import ClassName from "../../util/ClassName";

interface Props {
  className?: string;
}

const SearchBar = ({ className }: Props) => {
  return (
    <label className={ClassName("search-bar", className)}>
      <input
        className={"search-bar__input"}
        type="search"
        placeholder="Search"
      />
    </label>
  );
};

export default SearchBar;
