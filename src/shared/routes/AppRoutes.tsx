import { Routes, Route } from "react-router-dom";
import Signin from "../../app/auth/Signin";
import Signup from "../../app/auth/Signup";
import Home from "../../app/home/Home";
import routes from "../constants/routes";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.SIGNIN} element={<Signin />} />
            <Route path={routes.SIGNUP} element={<Signup />} />
        </Routes>
    )
}