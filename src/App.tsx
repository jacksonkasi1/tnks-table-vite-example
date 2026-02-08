import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserTable from "@/features/users-table";
import { OrdersDataTable } from "@/features/orders-table";

const queryClient = new QueryClient();

function App() {
  const [activeTab, setActiveTab] = useState<"users" | "orders">("users");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4 flex items-center gap-6">
            <h1 className="text-xl font-bold">Table Examples</h1>
            <nav className="flex gap-4">
              <button
                onClick={() => setActiveTab("users")}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground ${
                  activeTab === "users"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Users Table
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground ${
                  activeTab === "orders"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Orders Table
              </button>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-10 px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">
              {activeTab === "users" ? "Users" : "Orders"}
            </h2>
            <p className="text-muted-foreground mt-1">
              {activeTab === "users"
                ? "A powerful table component with filtering, sorting, and selection. (API: camelCase)"
                : "An example of a table with grouped rows and complex data structures. (API: snake_case)"}
            </p>
          </div>

          <div className="bg-card text-card-foreground">
            {activeTab === "users" ? <UserTable /> : <OrdersDataTable />}
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
