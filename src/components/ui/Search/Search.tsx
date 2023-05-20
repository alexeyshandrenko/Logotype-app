import { FC, InputHTMLAttributes } from "react";
import search from "@assets/icons/search.svg";
import { SearchContent } from "@styles/components";

interface Searchprops extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
}

const Search: FC<Partial<Searchprops>> = ({
  type,
  placeholder,
  name,
  ...rest
}) => {
  return (
    <SearchContent>
      <img src={search} alt="search-button" />
      <input type={type} placeholder={placeholder} name={name} {...rest} />
    </SearchContent>
  );
};

export default Search;
