import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Login from "./components/Login/Login";
import Poems from "./components/Poems/Poems";
import Novels from "./components/Novels/Novels";
import Unclassifiable from "./components/Unclassifiable/Unclassifiable";
import About from "./components/About/About";

const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/signin", component: Signin },
  { path: "/login", component: Login },
  { path: "/poems", component: Poems },
  { path: "/novels", component: Novels },
  { path: "/unclassifiable", component: Unclassifiable },
  { path: "/about", component: About },
];

export default routes;
