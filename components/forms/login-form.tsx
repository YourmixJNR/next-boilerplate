import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { loginFormSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { LoginPayload } from "@/types";

const LoginForm = () => {
  const router = useRouter();
  const { login, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginPayload) => {
    const success = await login(data);
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

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default LoginForm;
