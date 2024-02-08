import { useRoutes } from "react-router-dom";
import AdminRoutes from "../Component/Admin/AdminRoutes/AdminRoutes";
import UserRoutes from "../Component/User/UserRoutes/UserRoutes";
import AdminLayout from "../Component/Admin/AdminLayout/AdminLayout";
import UserLayout from "../Component/User/UserLayout/UserLayout";

const AllRoutes = () => {
  const router = useRoutes([
    {
      path: "",
      element: <UserLayout />,
      children: UserRoutes,
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: AdminRoutes,
    },
  ]);

  return router;
};

export default AllRoutes;
