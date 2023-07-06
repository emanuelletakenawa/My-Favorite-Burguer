import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import { TLoginFormValues, schema } from "./validator";

export interface ILoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<TLoginFormValues> = async (formData) => {
    await userLogin(formData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <Input
        type="email"
        id="email"
        label="Email"
        error={errors.email ? errors.email.message : undefined}
        {...register("email")}
      />
      <Input
        type="password"
        id="password"
        label="Senha"
        error={errors.password ? errors.password.message : undefined}
        {...register("password")}
      />
      <StyledButton $buttonSize="default" $buttonStyle="green" type="submit">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
