"use client";

import {
  Calendar,
  MessageCircleQuestionMark,
  UserCog,
  PackageSearch,
  ClipboardList,
  Dumbbell,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const adminItems = [
  { title: "Kurse", url: "/admin/kurse", icon: Calendar },
  // { title: "Produkte", url: "/admin/products", icon: PackageSearch },
  // { title: "Bestellungen", url: "/admin/orders", icon: ClipboardList },
  // {
  //   title: "Support",
  //   url: "/admin/support",
  //   icon: MessageCircleQuestionMark,
  // },
  { title: "Benutzer", url: "/user", icon: UserCog },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! flex-1"
            >
              <a href="/admin/kurse">
                <Dumbbell />
                <span className="text-base font-semibold">Admin</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Verwaltung</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroupLabel>System</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild variant="outline">
              <a href="/">Zur Website</a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
