import "./admin.css";
import { LayoutWrapper } from "@/components/admin/layout-wrapper";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-shell dark">
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  );
}
