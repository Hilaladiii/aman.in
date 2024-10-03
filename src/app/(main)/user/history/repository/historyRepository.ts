"use server";

export async function getHistoryRepository(token: string) {
  const response = await fetch(`${process.env.API_PATH}/api/document/history`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const res = await response.json();
  return res;
}

export async function deleteAccessRepository(
  token: string,
  data: { doc_id: string; accessor_id: string },
) {
  const response = await fetch(
    `${process.env.API_PATH}/api/document/access/delete`,
    {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  const res = await response.json();
  return res;
}
