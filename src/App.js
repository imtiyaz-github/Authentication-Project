import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AuthForm from "./components/Auth/AuthForm";
import HomePage from "./pages/HomePage";
import UserProfile from "./components/Profile/UserProfile";
// import ProfileForm from "./components/Profile/ProfileForm";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth" >
          <AuthForm />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
};
export default App;
