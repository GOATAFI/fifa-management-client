import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TeamsList from './components/TeamList/TeamList.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './components/Main/Main';
import AddTeamForm from './components/AddTeamForm/AddTeamForm';
import PlayerList from './components/PlayerList/PlayerList';
import Header from './components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import Matches from './components/Matches/Matches';
import Leagues from './Pages/Leagues/Leagues';
import Ucl from './Pages/Ucl/Ucl';
import Epl from './Pages/Epl/Epl';
import LaLiga from './Pages/LaLiga/LaLiga';
import Login from './components/LoginLayout/Login';
import Register from './components/LoginLayout/Register';
import Managers from './components/Managers/Managers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [{
      path :"/",
      element: <MainPage></MainPage>
    },
    {
      path: "/teams",
      element: <TeamsList></TeamsList>,
    },
    {
      path: "/addteams",
      element: <AddTeamForm></AddTeamForm>
    },
    {
      path: "/players",
      element: <PlayerList></PlayerList>
    },
    {
      path:"/matches",
      element : <Matches></Matches>
    },
    {
      path: "/leagues",
      element : <Leagues></Leagues>  
    },
    {
        path : "/ucl",
        element : <Ucl></Ucl>
    },
    {
      path : "/epl",
      element : <Epl></Epl>
    },
    {
      path : "/laliga",
      element : <LaLiga></LaLiga>
    },
    {
      path : '/login',
      element : <Login></Login>
    },
    {
      path : '/register',
      element : <Register></Register>
    },
    {
      path : '/managers',
      element : <Managers></Managers>
    }
  ]
  },
  {
    path: "/header",
    element: <Header></Header>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
