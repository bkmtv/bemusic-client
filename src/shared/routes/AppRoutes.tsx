import { Routes, Route } from "react-router-dom";
import UsersList from "../../app/admin/UsersList";
import Signin from "../../app/auth/Signin";
import Signup from "../../app/auth/Signup";
import Home from "../../app/home/Home";
import CollectionPage from "../../app/collections/CollectionPage";
import CreateCollection from "../../app/collections/CreateCollection";
import AddItem from "../../app/items/AddItem";
import ItemPage from "../../app/items/ItemPage";
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
            <Route path={"/createcollection"} element={<CreateCollection />} />
            <Route path={"/collection/:id"} element={<CollectionPage />} />
            <Route path={"/collection/:id/additem"} element={<AddItem />} />
            <Route path={"/item/:id"} element={<ItemPage />} />
        </Routes>
    )
}