import UsersClient from "@/components/UsersClient/UsersClient";
import axiosInstance from "@/utils/axios";

export default async function UsersPage() {
  const res = await axiosInstance.get("/users");
  const newData = res.data;

  return (
    <div className="container">
      <UsersClient users={newData} />
    </div>
  );
}
