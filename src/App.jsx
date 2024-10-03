import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlayout from "./layout/main-layout";
import Profile from "./pages/profile/profile";
import User from "./pages/user/user";
import User_detail from "./pages/user_detail/user_detail";
import ProfileWrapper from "./layout/profileWrapper/ProfileWrapper";
import { CreateProfile } from "./pages/profile/createProfile/createProfile";
import { ChangeProfile } from "./pages/profile/changeProfile/changeProfile";
import { ChangeAddress } from "./pages/profile/changeAddress/chageAddress";
import HomePage from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfileWrapper />}>
          <Route index element={<Profile />} />
          <Route path="createProfile" element={<CreateProfile />} />
          <Route path="changeProfile" element={<ChangeProfile />} />
          <Route path="changeAddress" element={<ChangeAddress />} />
        </Route>
        <Route path="user" element={<User />} />
        <Route path="user/detail/:userId" element={<User_detail />} />
        <Route path="*" element={<h1>Page not found 404!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
