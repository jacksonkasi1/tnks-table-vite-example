export async function fetchOrdersByIds(ids: string[]) {
  const searchParams = new URLSearchParams();
  ids.forEach((id) => searchParams.append("id", id));

  const response = await fetch(
    `https://tnks-data-table.vercel.app/api/orders?${searchParams.toString()}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }
  return response.json();
}
