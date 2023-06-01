import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AuthForm from "./components/Auth/AuthForm";
import HomePage from "./pages/HomePage";
import UserProfile from "./components/Profile/UserProfile";
import AuthContext from "./store/auth-context";
import { useContext } from "react";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthForm />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
      </Switch>
    </Layout>
  );
};
export default App;
