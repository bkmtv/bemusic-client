import { Routes, Route } from "react-router-dom";
import Signin from "../../app/auth/Signin";
import Signup from "../../app/auth/Signup";
import routes from "../../shared/constants/routes";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.SIGNIN} element={<Signin />} />
            <Route path={routes.SIGNUP} element={<Signup />} />
        </Routes>
    )
}