import { Routes, Route } from "react-router-dom";

import UsersList from "../../app/pages/admin/UsersList";
import Signin from "../../app/pages/auth/Signin";
import Signup from "../../app/pages/auth/Signup";
import CollectionPage from "../../app/pages/collection/CollectionPage";
import CreateCollection from "../../app/pages/collection/CreateCollection";
import EditCollection from "../../app/pages/collection/EditCollection";
import Home from "../../app/pages/home/Home";
import AddItem from "../../app/pages/item/AddItem";
import ItemPage from "../../app/pages/item/ItemPage";
import Profile from "../../app/pages/profile/Profile";

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
      <Route path={"/collection/:id/edit"} element={<EditCollection />} />
      <Route path={"/collection/:id/additem"} element={<AddItem />} />
      <Route path={"/item/:id"} element={<ItemPage />} />
    </Routes>
  );
}
