import "./admin.css";
import { LayoutWrapper } from "@/components/admin/layout-wrapper";

export default function AdminLayout({ children }) {
  return (
    <div>
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  );
}
