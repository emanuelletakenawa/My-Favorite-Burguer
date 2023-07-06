import { MdShoppingCart, MdLogout } from "react-icons/md";

import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.png";

import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

interface IHeaderProps {
  modal: (value: boolean) => void;
}

const Header = ({ modal }: IHeaderProps) => {
  const { userLogout } = useContext(UserContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img src={Logo} alt="My Favorite Burguer Logo" className="logo" />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button
                type="button"
                onClick={() => {
                  modal(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type="button" onClick={userLogout}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
