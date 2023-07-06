import { StyledIllustrationBox } from "./style";
import Logo from "../../assets/Logo.png";
import BallsIllustration from "../../assets/BallsIllustrations.svg";
import Icon from "../../assets/Icon.png";
import { StyledParagraph } from "../../styles/typography";

const IllustrationBox = () => (
  <StyledIllustrationBox>
    <img src={Logo} alt="Logo My Favorite Burguer" />
    <div className="styledBox">
      <img src={Icon} alt="Ícone de cesta de compras" />
      <StyledParagraph>
        A vida é como um sanduíche, é preciso recheá-la com os{" "}
        <strong>melhores</strong> ingredientes.
      </StyledParagraph>
    </div>
    <img className="ballsImage" src={BallsIllustration} alt="Bolinhas" />
  </StyledIllustrationBox>
);

export default IllustrationBox;
