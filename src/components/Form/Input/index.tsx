import { ForwardedRef, forwardRef } from "react";
import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";

interface IInputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type: "text" | "password" | "email";
  error?: string | undefined;
  disabled?: boolean;
}

const Input = forwardRef(
  (
    { id, error, placeholder, label, type, disabled, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <StyledInputContainer>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            ref={ref}
            {...rest}
          />
          <label htmlFor={id}>{label}</label>
        </StyledInputContainer>
        {error ? (
          <StyledParagraph fontColor="red">{error}</StyledParagraph>
        ) : null}
      </div>
    );
  }
);

export default Input;
