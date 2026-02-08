import type { CaseFormatConfig } from "@/components/data-table/utils/case-utils";

interface FetchUsersParams {
  page: number;
  limit: number;
  search: string;
  from_date?: string;
  to_date?: string;
  sort_by?: string;
  sort_order?: string;
  caseConfig?: CaseFormatConfig;
}

export async function fetchUsers(params: FetchUsersParams) {
  const searchParams = new URLSearchParams();
  searchParams.set("page", params.page.toString());
  searchParams.set("limit", params.limit.toString());
  if (params.search) searchParams.set("search", params.search);
  if (params.from_date) searchParams.set("fromDate", params.from_date);
  if (params.to_date) searchParams.set("toDate", params.to_date);
  if (params.sort_by) searchParams.set("sortBy", params.sort_by);
  if (params.sort_order) searchParams.set("sortOrder", params.sort_order);

  const response = await fetch(
    `https://tnks-data-table.vercel.app/api/users/camel-case?${searchParams.toString()}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}
