import AuthLayout from "@/shared/container/Layouts/AuthLayout";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  return (
    <AuthLayout
      title="Daftar"
      description="Daftarkan akun untuk mengakses website!"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
