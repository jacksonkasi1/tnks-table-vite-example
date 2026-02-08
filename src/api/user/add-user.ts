interface AddUserParams {
  name: string;
  email: string;
  phone: string;
  age: number;
}

export async function addUser(user: AddUserParams) {
  const response = await fetch("https://tnks-data-table.vercel.app/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    return { success: false, error: errorData.message || "Failed to add user" };
  }

  return { success: true, data: await response.json() };
}
