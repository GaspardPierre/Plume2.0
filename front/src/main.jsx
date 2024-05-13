import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Link} from 'react-router-dom';
import App from './components/App/App'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { verifyToken } from './reducers/member';
import '../src/scss/styles.scss';
import { store } from './store/store';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'font-awesome/css/font-awesome.min.css';
import { Admin, Resource } from 'react-admin';
import Dashboard from './Admin/Dashboard/Dashboard';
import dataProvider from './Admin/DataProvider/dataProvider';
import authProvider from './provider/authProvider';
import { WorkList, WorkEdit, WorkCreate } from './Admin/Works/Work';
import { WorkShow } from './Admin/Works/WorkShow';
import { CommentShow } from './Admin/Comments/CommentShow';
import { CommentList, CommentEdit } from './Admin/Comments/Comment';
import { MemberList, MemberEdit, MemberCreate } from './Admin/Members/Member';
import { LabelList, LabelEdit, LabelCreate } from './Admin/Labels/Label';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './Admin/Layout';
import AlertMessage from './ui/AlertMessage';
import './index.scss';


const Root = () => {
  return (
    <Provider store={store}>
      <AppLogic />
    </Provider>
  );
};

const AppLogic = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.member.isLoggedIn);
  const user = useSelector(state => state.member.user);
  const isAdmin = user && user.role === 'admin';
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(verifyToken());
    if (!isLoggedIn) {
      setShowModal(true);
    }

    const setBodyHeight = () => {
      document.documentElement.style.height = `calc(${window.innerHeight}px -68px)`;
    };
    window.addEventListener("resize", setBodyHeight);
    setBodyHeight();
    return () => window.removeEventListener("resize", setBodyHeight);
  }, [dispatch, isLoggedIn]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <BrowserRouter>
     <AlertMessage 
  show={showModal} 
  handleClose={handleClose}
  title="⚠️ Commenter et noter les poèmes => Connexion
  continuer la navigation => Accueil 🕒"
  message={
    <>
       🏠
      <Link to="/" onClick={handleClose}> Accueil </Link> ou 
      <Link to="/login" onClick={handleClose}> Connexion 🔓 ?</Link>
    </>
  }
/>
 {isAdmin ? (
        <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider} layout={Layout}>
          <Resource name="work" list={WorkList} edit={WorkEdit} create={WorkCreate} show={WorkShow}/>
          <Resource name="comment" list={CommentList} edit={CommentEdit} show={CommentShow}/>
          <Resource name="member" list={MemberList} edit={MemberEdit} create={MemberCreate}/>
          <Resource name="label" list={LabelList} edit={LabelEdit} create={LabelCreate}/>
        </Admin>
      ) : (
        <App />
      )}
    </BrowserRouter>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(<Root />);