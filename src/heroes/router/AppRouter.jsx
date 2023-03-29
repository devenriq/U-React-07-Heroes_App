import { Route, Routes } from "react-router-dom";
import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage";
import { LoginPage } from "../../auth/pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<MarvelPage />}></Route>
        <Route path="dc" element={<DcPage />}></Route>

        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};
