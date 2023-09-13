import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Project from "../pages/Projects/Project";
import SignUp from "../pages/SignUp/SignUp";
import Task from "../pages/Tasks/Task";
import TeamRoaster from "../pages/TeamRoasters/TeamRoaster";
import Team from "../pages/Teams/Team";
import UserStory from "../pages/UserStories/UserStory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },

      { path: "projects", element: <Project /> },

      { path: "teams", element: <Team /> },
      { path: "tasks", element: <Task /> },

      { path: "teamRoasters", element: <TeamRoaster /> },
      { path: "userStories", element: <UserStory /> },
    ],
  },
]);
