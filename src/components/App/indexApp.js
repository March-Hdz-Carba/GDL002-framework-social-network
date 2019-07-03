import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Navigation from '../Navigation/indexNavigation';
import LandingPage from '../Landing/indexLand';
import SignUpPage from '../SignUp/indexSignUp';
import SignInPage from '../SignIn/indexSignIn';
import PasswordForgetPage from '../PasswordForget/indexPassForget';
import HomePage from '../Home/indexHome';
import AccountPage from '../Account/indexAccount';
import AdminPage from '../Admin/indexAdmin';
import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
    </Router>
);

export default App;