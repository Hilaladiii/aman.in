export async function registerUserService({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/api/user/register`,
    {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    },
  );

  const res = await response.json();
  console.log(res);
}
