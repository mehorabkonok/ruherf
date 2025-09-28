import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomepageContainer from "./Pages/HomepageContainer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Error from "./Pages/Routes/Error/Error.jsx";
import Contact from "./Pages/Routes/Contact/Contact.jsx";
import About from "./Pages/Routes/About/About.jsx";
import Research from "./Pages/Routes/Research/Research.jsx";
import Events from "./Pages/Routes/Events/Events.jsx";
import Resource from "./Pages/Routes/Resource/Resource.jsx";
import Members from "./Pages/Routes/Members/Members.jsx";
import Gallery from "./Pages/Routes/Gallery/Gallery.jsx";
import Login from "./Pages/Routes/Login/Login.jsx";
import Register from "./Pages/Routes/Register/Register.jsx";
import Dashboard from "./Pages/Routes/Dashboard/Dashboard.jsx";
import MyProject from "./Pages/Routes/Dashboard/MyProject/MyProject.jsx";
import Profile from "./Pages/Routes/Dashboard/Profile/Profile.jsx";
import Settings from "./Pages/Routes/Dashboard/Settings/Settings.jsx";
import FAQ from "./Pages/Routes/FAQ/FAQ.jsx";
import PrivacyPolicy from "./Pages/Routes/PrivacyPolicy/PrivacyPolicy.jsx";
import Terms_and_Conditions from "./Pages/Routes/Terms_and_Condition/Terms_and_Conditions.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageContainer></HomepageContainer>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: "/research", element: <Research></Research> },
      { path: "/events", element: <Events></Events> },
      { path: "/resource", element: <Resource></Resource> },
      { path: "/publications", element: <Resource></Resource> },
      { path: "/members", element: <Members></Members> },
      { path: "/gallery", element: <Gallery></Gallery> },
      { path: "/register", element: <Register></Register> },
      { path: "/login", element: <Login></Login> },
      { path: "/about", element: <About></About> },
      { path: "/contact_us", element: <Contact></Contact> },
      { path: "/privacy_policy", element: <PrivacyPolicy></PrivacyPolicy> },
      { path: "/terms_and_conditions", element: <Terms_and_Conditions></Terms_and_Conditions> },
      { path: "/faq", element: <FAQ></FAQ> },

      // protected rout (will be accessible after a successfull authentication by user credentials)
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>, // protected route
        children: [
          { path: "profile", element: <Profile></Profile> },
          { path: "projects", element: <MyProject></MyProject> },
          { path: "settings", element: <Settings></Settings> },
        ],
      },

      // Will catch any erronus route activities
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
