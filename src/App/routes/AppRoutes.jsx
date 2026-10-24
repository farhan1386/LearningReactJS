import { Routes, Route, Navigate } from "react-router-dom";
import homeRoutes from "../../features/Home/routes.jsx";
import weekRoutes from "../../features/Weeks/routes.jsx";

const AppRoutes = () => {
  const combinedRoutes = [...homeRoutes, ...weekRoutes];

  return (
    <Routes>
      {combinedRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
