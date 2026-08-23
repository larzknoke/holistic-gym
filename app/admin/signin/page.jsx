import AdminAuthCard from "@/components/pages/admin/AdminAuthCard";

export const metadata = {
  title: "Admin Login | HolisticGym",
};

export default function AdminSignInPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-4 py-10">
      <AdminAuthCard mode="signin" />
    </div>
  );
}
