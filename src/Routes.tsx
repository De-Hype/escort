import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopThirtyFive from "pages/DesktopThirtyFive";
import DesktopThirtyFour from "pages/DesktopThirtyFour";
import DesktopTwentySix from "pages/DesktopTwentySix";
import DesktopTwentyFive from "pages/DesktopTwentyFive";
import Becomeamember from "pages/Becomeamember";
import Divdtindexfoot from "pages/Divdtindexfoot";
import DesktopThirtySeven from "pages/DesktopThirtySeven";
import DesktopTwentyThree from "pages/DesktopTwentyThree";
import DesktopThirtySix from "pages/DesktopThirtySix";
import ProfileEdit from "pages/ProfileEdit";
import BecomeamemberOne from "pages/BecomeamemberOne";
import A from "pages/A";
import DesktopTwentyNine from "pages/DesktopTwentyNine";
import DesktopThirtyOne from "pages/DesktopThirtyOne";
import DesktopThirty from "pages/DesktopThirty";
import Meesages from "pages/Meesages";
import DesktopThirtyThree from "pages/DesktopThirtyThree";
import ChangePassword from "pages/ChangePassword";
import ForgotPassword from "pages/ForgotPassword";
import ForgotPasswordOne from "pages/ForgotPasswordOne";
import DesktopFifteen from "pages/DesktopFifteen";
import DesktopTwo from "pages/DesktopTwo";
import Signup from "pages/Signup";
import Login from "pages/Login";
import DesktopThirtyTwo from "pages/DesktopThirtyTwo";
import Settings from "pages/SettingsNew";
import Gallery from "pages/Gallery";
import DesktopFourtyEight from "pages/DesktopFourtyEight";
import DesktopFourtyNine from "pages/DesktopFourtyNine";

const ProjectRoutes = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<DesktopThirtyTwo />} />
          {/* <Route path="/Home" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopfifteen" element={<DesktopFifteen />} />
          <Route path="/forgotpasswordone" element={<ForgotPasswordOne />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/desktopthirtythree" element={<DesktopThirtyThree />} />
          <Route path="/meesages" element={<Meesages />} />
          <Route path="/desktopthirty" element={<DesktopThirty />} />
          <Route path="/desktopthirtyone" element={<DesktopThirtyOne />} />
          <Route path="/desktoptwentynine" element={<DesktopTwentyNine />} />
          <Route path="/a" element={<A />} />
          <Route path="/becomeamemberone" element={<BecomeamemberOne />} />
          <Route path="/profileedit" element={<ProfileEdit />} />
          <Route path="/desktopthirtysix" element={<DesktopThirtySix />} />
          <Route path="/desktoptwentythree" element={<DesktopTwentyThree />} />
          <Route path="/desktopthirtyseven" element={<DesktopThirtySeven />} />
          <Route path="/divdtindexfoot" element={<Divdtindexfoot />} />
          <Route path="/becomeamember" element={<Becomeamember />} />
          <Route path="/desktoptwentyfive" element={<DesktopTwentyFive />} />
          <Route path="/desktoptwentysix" element={<DesktopTwentySix />} />
          <Route path="/desktopthirtyfour" element={<DesktopThirtyFour />} />
          <Route path="/desktopthirtyfive" element={<DesktopThirtyFive />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/desktopfourtyeight" element={<DesktopFourtyEight/>}/>
          <Route path="/desktopfourtynine" element={<DesktopFourtyNine/>}/>
          
        </Routes>
      </Router>
  );
};
export default ProjectRoutes;
