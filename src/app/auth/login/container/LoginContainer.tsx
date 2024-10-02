import AuthLayout from "@/shared/container/Layouts/AuthLayout";
import LoginForm from "./LoginForm";

export default function LoginContainer() {
  return (
    <AuthLayout title="Masuk" description="Masuk ke akun untuk melanjutkan">
      <LoginForm />
    </AuthLayout>
  );
}
