import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  );
};
