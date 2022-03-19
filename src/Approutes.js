import { Route, Routes } from "react-router-dom";
import routes from "./Components/Utils/Routes/routes";


const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        element={<route.component/>}
      />
    ))}
  </Routes>
);

export default AppRoutes;
