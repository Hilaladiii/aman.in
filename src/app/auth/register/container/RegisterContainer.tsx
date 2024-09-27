import AuthLayout from "@/components/layouts/AuthLayout";
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
