import AuthLayout from "@/components/layouts/AuthLayout";
import LoginForm from "./LoginForm";

export default function LoginContainer() {
  return (
    <AuthLayout title="Masuk" description="Masuk ke akun untuk melanjutkan">
      <LoginForm />
    </AuthLayout>
  );
}
