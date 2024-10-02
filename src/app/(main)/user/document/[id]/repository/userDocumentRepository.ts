"use server";

export async function addDocumentAccessRespository(
  id: string,
  token: string,
  data: FormData,
) {
  const response = await fetch(
    `${process.env.API_PATH}/api/document/access/${id}`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const res = await response.json();
  return res;
}

export async function getDocumentByIdRepository(id: string, token: string) {
  const response = await fetch(
    `${process.env.API_PATH}/api/document/detail/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const res = await response.json();
  return res;
}
