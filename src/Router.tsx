import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { HotelsAccommodations } from "./pages/HotelAccomodations";
import { Login } from "./pages/Login";
import { RegisterHotel } from "./pages/RegisterHotel";
import { RegisterUser } from "./pages/RegisterUser";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/hotel" element={<RegisterHotel />} />
        <Route
          path="/register/hotel-accomodations"
          element={<HotelsAccommodations />}
        />
      </Route>
    </Routes>
  );
}
