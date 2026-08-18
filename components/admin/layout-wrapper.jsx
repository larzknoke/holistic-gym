"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/app-sidebar";

export function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Don't show sidebar on auth pages
  const isAuthPage = [
    "/signin",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/auth/verify-email",
    "/auth/verify-email-pending",
    "/privacy",
  ].includes(pathname);

  if (isAuthPage) {
    return children;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-background text-foreground flex flex-1 flex-col overflow-x-hidden p-6">
        {children}
      </main>
    </SidebarProvider>
  );
}
