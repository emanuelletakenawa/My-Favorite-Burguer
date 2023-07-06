import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { TRegisterFormValues, schema } from "../RegisterForm/validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <Input
        type="text"
        id="name"
        label="Nome"
        error={errors.name ? errors.name.message : undefined}
        {...register("name")}
      />
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
      <Input
        type="password"
        id="confirmPassword"
        label="Confirmar Senha"
        error={errors.confirm ? errors.confirm.message : undefined}
        {...register("confirm")}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
