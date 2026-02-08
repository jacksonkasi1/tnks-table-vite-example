export async function addOrder() {
  const response = await fetch("https://tnks-data-table.vercel.app/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // The API likely generates random data if body is empty or specific fields are missing
      // For this demo, we'll send an empty object to trigger random generation if supported
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    return { success: false, error: errorData.message || "Failed to add order" };
  }

  return { success: true, data: await response.json() };
}
