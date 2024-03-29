import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App'
import { Provider, useSelector } from 'react-redux';
import '../src/scss/styles.scss';
import store from './store/store';
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
import { CommentList, CommentEdit } from './Admin/Comments/Comment';
import { MemberList, MemberEdit, MemberCreate } from './Admin/Members/Member';
import { LabelList, LabelEdit, LabelCreate } from './Admin/Labels/Label';
import Layout from './Admin/Layout';
import './index.scss';



import '../src/index.scss'

// Set the height of the body to the height of the window

const Root = () => {
  useEffect(() => {
    const setBodyHeight = () => {
      // Calculez la hauteur sans la marge/le padding si nécessaire
      document.documentElement.style.height = `calc(${window.innerHeight}px -68px )`;
    };
    window.addEventListener("resize", setBodyHeight);
    setBodyHeight();
    return () => window.removeEventListener("resize", setBodyHeight);
  }, []);

  return (
    <Provider store={store} >
      <AppLogic />
    </Provider>
  );
};

const AppLogic = () => {
  const isAdmin = useSelector((state) => state.member.role) === 'admin';
  return (
    <BrowserRouter>
      <React.StrictMode>
        {isAdmin ?
          (<Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider} layout={Layout}>
            <Resource name="work" list={WorkList} edit={WorkEdit} create={WorkCreate} show ={WorkShow}/>
            <Resource name="comment" list={CommentList} edit={CommentEdit} />
            <Resource name="member" list={MemberList} edit={MemberEdit} create={MemberCreate} />
            <Resource name="label" list={LabelList} edit={LabelEdit} create={LabelCreate} />
          </Admin>) :
          (
            <App />
          )
        }
      </React.StrictMode>,
    </BrowserRouter>

  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
