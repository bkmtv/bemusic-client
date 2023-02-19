import { Routes, Route } from "react-router-dom";
import UsersList from "../../app/admin/UsersList";
import Signin from "../../app/auth/Signin";
import Signup from "../../app/auth/Signup";
import Home from "../../app/home/Home";
import CollectionPage from "../../app/profile/collections/CollectionPage";
import CreateCollection from "../../app/profile/collections/CreateCollection";
import ItemPage from "../../app/profile/items/ItemPage";
import Profile from "../../app/profile/Profile";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/signin"} element={<Signin />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/profile/:id"} element={<Profile />} />
            <Route path={"/profile/admin"} element={<UsersList />} />
            <Route path={"/profile/createcollection"} element={<CreateCollection />} />
            <Route path={"/profile/collection/:id"} element={<CollectionPage />} />
            <Route path={"/item/:id"} element={<ItemPage />} />
        </Routes>
    )
}