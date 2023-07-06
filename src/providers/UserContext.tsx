import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { ILoginFormData } from "../components/Form/LoginForm";
import { IRegisterFormData } from "../components/Form/RegisterForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null;
  userLogin: (formData: ILoginFormData) => Promise<void>;
  userRegister: (formData: IRegisterFormData) => Promise<void>;
  userLogout: () => void;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IUserLoginResponse {
  user: IUser;
  accessToken: string;
}

interface IUserRegisterResponse {
  user: IUser;
  accessToken: string;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userAutoLogin = async () => {
      let token = localStorage.getItem("token");
      token = token != null ? JSON.parse(token) : null;
      let userId = localStorage.getItem("userId");
      userId = userId != null ? JSON.parse(userId) : null;
      let cart = localStorage.getItem("cart");
      cart = cart != null ? JSON.parse(cart) : null;
      if (token != null && userId != null) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        try {
          const response = await api.get<IUser>(`users/${userId}`);
          setUser(response.data);
          navigate("/shop");
        } catch (error) {
          navigate("/");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          localStorage.removeItem("cart");
        }
      }
    };
    userAutoLogin();
  }, [navigate]);

  const userLogin = async (formData: ILoginFormData) => {
    try {
      const response = await api.post<IUserLoginResponse>("/login", formData);
      if (response.data.accessToken) {
        api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
        setUser(response.data.user);
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("userId", JSON.stringify(response.data.user.id));
        toast.success("Usuário logado com sucesso");
        navigate("/shop");
      }
    } catch (error) {
      toast.error("E-mail ou senha incorretos");
    }
  };

  const userRegister = async (formData: IRegisterFormData) => {
    try {
      await api.post<IUserRegisterResponse>("/users", formData);
      toast.success("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Não foi possível cadastrar usuário");
    }
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("cart");
    setUser(null);
    toast.success("Usuário deslogado com sucesso");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
