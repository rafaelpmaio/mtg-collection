import SetPage from "pages/SetPage";
import DefaultPage from "pages/DefaultPage";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

const AppRoutes = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:name" element={<SetPage />} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
};

export default AppRoutes;
