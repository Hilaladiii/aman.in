"use server";

export async function uploadDocumentRepository(data: FormData, token: string) {
  const response = await fetch(`${process.env.API_PATH}/api/document/upload`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await response.json();

  return res;
}

export async function getDocumentsRepository(token: string) {
  const response = await fetch(`${process.env.API_PATH}/api/document/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const res = await response.json();
  return res;
}
