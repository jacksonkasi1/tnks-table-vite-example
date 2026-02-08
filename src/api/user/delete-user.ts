export async function deleteUser(id: number) {
  const response = await fetch(`https://tnks-data-table.vercel.app/api/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    return { success: false, error: errorData.message || "Failed to delete user" };
  }

  return { success: true };
}
