import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { CartContext } from "../../../providers/CartContext";
import { FormEvent, useContext } from "react";

const SearchForm = () => {
  const { getProducts, filterProducts } = useContext(CartContext);

  const filter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let searchValue = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    if (searchValue == "") {
      getProducts();
    } else {
      filterProducts(searchValue);
    }
    (event.currentTarget.elements[0] as HTMLInputElement).value = "";
  };

  return (
    <StyledSearchForm onSubmit={filter}>
      <input type="text" placeholder="Digitar pesquisa" />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
