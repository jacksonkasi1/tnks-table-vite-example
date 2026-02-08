export async function deleteOrder(id: number) {
  const response = await fetch(`https://tnks-data-table.vercel.app/api/orders/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    return { success: false, error: errorData.message || "Failed to delete order" };
  }

  return { success: true };
}
