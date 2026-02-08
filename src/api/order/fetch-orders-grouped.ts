interface FetchOrdersParams {
  page: number;
  limit: number;
  search: string;
  from_date?: string;
  to_date?: string;
  sort_by?: string;
  sort_order?: string;
}

export async function fetchOrdersGrouped(params: FetchOrdersParams) {
  const searchParams = new URLSearchParams();
  searchParams.set("page", params.page.toString());
  searchParams.set("limit", params.limit.toString());

  if (params.search) searchParams.set("search", params.search);
  if (params.from_date) searchParams.set("from_date", params.from_date);
  if (params.to_date) searchParams.set("to_date", params.to_date);
  if (params.sort_by) searchParams.set("sort_by", params.sort_by);
  if (params.sort_order) searchParams.set("sort_order", params.sort_order);

  const response = await fetch(
    `https://tnks-data-table.vercel.app/api/orders/grouped?${searchParams.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  return response.json();
}
