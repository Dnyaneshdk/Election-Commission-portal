import NavBarCOmponent from "../Components/NavBarComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage";
import "../Component_CSS/NavBarComponent.css";
import ViewUserProfile from "./ViewUserProfile";
import UpdateUserPage from "./UpdateUserPage";
import SignOutComponent from "../Components/SignOutComponent";
import ForgotPassword from './ForgotPassword';
import ViewElectionPage from './ElectionPages/ViewElectionsPage';
import RegisterElection from './ElectionPages/RegisterElection';
import UpdateElection from './ElectionPages/UpdateElection';

function HomePage( ) {
  return (
    <div>
      <BrowserRouter>
      <NavBarCOmponent/>
        <div className="container">
          <Switch>
            {/* <Route path="/home/candidateRegistration" component={UpdateAssemblyCandidatePage} /> */}
            {/*<Route path="/home/view-elections" component={ViewElectionPage} />*/}
            <Route path="/home/update-user" component={UpdateUserPage} />
            <Route path="/home/user-profile" component={ViewUserProfile} />
            <Route path="/home/forgotPassword" component={ForgotPassword} />
            <Route path="/home/View-elections" component={ViewElectionPage} />
            <Route path="/home/Election" component={RegisterElection} />
            <Route path="/home/update-election" component={UpdateElection} />

            <Route path="/signout" component={SignOutComponent} />
            <Route path="/home/" component={MainPage} />
            
          </Switch>
        </div>
      </BrowserRouter>
      {/* <LoginFooter /> */}
    </div>
  );
}

export default HomePage;
