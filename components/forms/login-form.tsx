import { useAuthLoading, useAuthError, useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { handleLogin } = useAuth();
  const { isLoginLoading } = useAuthLoading();
  const { loginError } = useAuthError();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { success } = await handleLogin(email, password);
    if (success) router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoginLoading}>
        {isLoginLoading ? "Logging in..." : "Login"}
      </button>
      {loginError && <p className="error">{loginError}</p>}
    </form>
  );
};

export default LoginForm;
