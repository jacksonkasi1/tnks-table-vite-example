export async function fetchUsersByIds(ids: string[]) {
  const searchParams = new URLSearchParams();
  ids.forEach((id) => searchParams.append("id", id));

  const response = await fetch(
    `https://tnks-data-table.vercel.app/api/users/camel-case?${searchParams.toString()}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}
