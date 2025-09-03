import UserDetailsClient from "@/components/UserDetailsClient/UserDetailsClient";
import axiosInstance from "@/utils/axios";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

    let user = null;
     try {
       const res = await axiosInstance.get(`/users/${slug}`);
       user = res.data;
     } catch (err) {
       console.error("Failed to fetch user:", err);
    }
  return (
    <div className="container">
      <UserDetailsClient user={user} />
    </div>
  );
}
