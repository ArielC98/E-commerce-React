import { Route, RouterProvider, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { router } from "./routes";

function App() {
  return (

    // <MainLayout>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/shop" element={<Shop />} />
    //     <Route path="/cart" element={<Cart />} />
    //   </Routes>
    // </MainLayout>
    <RouterProvider router = {router}/>
  );
}

export default App;
