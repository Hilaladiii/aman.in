export async function loginRepository({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/api/user/login`,
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const res = await response.json();
  return res;
}
