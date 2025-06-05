import { useAuthLoading, useAuthError } from "@/stores";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/schema";
import { LoginPayload } from "@/types";

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const { handleLogin } = useAuth();
  const { isLoginLoading } = useAuthLoading();
  const { loginError } = useAuthError();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginPayload) => {
    const { success } = await handleLogin(data);
    if (success) {
      reset();
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        autoComplete="email"
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        autoComplete="current-password"
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <button type="submit" disabled={isLoginLoading}>
        {isLoginLoading ? "Logging in..." : "Login"}
      </button>
      {loginError && <p className="error">{loginError}</p>}
    </form>
  );
};

export default LoginForm;
