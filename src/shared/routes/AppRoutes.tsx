import { Routes, Route } from "react-router-dom";
import Signin from "../../app/auth/Signin";
import Signup from "../../app/auth/Signup";
import Home from "../../app/home/Home";
import Profile from "../../app/profile/Profile";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/signin"} element={<Signin />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/profile/:id"} element={<Profile />} />
        </Routes>
    )
}