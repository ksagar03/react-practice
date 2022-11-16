import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
} from "react-router-dom";
// navigate - it is a component which is been imported from react-router-dom
// this component is used to navigate to the specific path defined inside that component
// this is useful when we have defined a path(url path) but inside that we want to navigate to another path
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/h" element={<Navigate replace to="/home" />} />
      {/* this above comand orverlap the component which is defined inside the path /home
      so to overcome this we use 'replace' keyword    */}
      <Route path="/home" element={<Home />}>
        <Route path=":coursename" />
        <Route path="course" element={<Course />}>
          <Route path="outlet" element={<AboutOutlet />} />
          <Route path="navigate" element={<AboutNavigate />} />
          <Route path="usepramps" element={<AboutusePramps />} />
          <Route path="navlink" element={<AboutNavLink />} />
          <Route path="usenavigate" element={<AboutuseNavigate />} />
        </Route>
      </Route>
      <Route
        path="/home/course/usenavigate/newpage"
        element={<button onClick={() => useNavigate()}>Go back</button>}
      />
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>hello here we will be learning {<CourseName />} </h1>
      <Link className="btn btn-primary" to="/home/course">
        About course
      </Link>
      {/* this link command is similar to 'a' tag but the only diff is that 
      a tag reloads the whole page but the Link tag does'not reload the whole page */}
      <Outlet />
    </div>
  );
}
function Course() {
  return (
    <div>
      <h1>here we are learning different lib or components of react router </h1>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "yellow" : "",
          };
        }}
        to="/home/course/outlet"
      >
        outlet
      </NavLink>
      {" || "}
      <NavLink to="/home/course/navigate">navigate</NavLink>
      {" || "}
      <NavLink to="/home/course/usePramps">useParams</NavLink>
      {" || "}
      <NavLink to="/home/course/navlink">NavLink</NavLink>
      {" || "}
      <Link to="/home/course/usenavigate">useNavigate</Link>
      <Outlet />
    </div>
  );
}

// function Learn() {
//   return (
//     <div>
//       <Link to="/home/course/learn">outlet</Link>
//     </div>
//   );
// }
function AboutOutlet() {
  return (
    <div>
      <h4>
        outlet is the component of the react-router which is used to load the
        data defined in different url in a same page{" "}
      </h4>
    </div>
  );
}
function AboutNavigate() {
  return (
    <div>
      <h4>
        it is a component which is been imported from react-router-dom this
        component is used to navigate to the specific path defined inside that
        component this is useful when we have defined a path(url path) but
        inside that we want to navigate to another path
      </h4>
    </div>
  );
}

function AboutusePramps() {
  return (
    <div>
      <h4>
        useParams- is a hook intraduced inside react router dom v6 <br />
        this hook is used to fetch data from the url and that data can be used
      </h4>
    </div>
  );
}

function AboutNavLink() {
  return (
    <div>
      <h4>
        NavLink- It is similar to "Link" but the only difference is in Link we
        cant pass style properties <br />
        in same tag but in NavLink we can
      </h4>
    </div>
  );
}
function AboutuseNavigate() {
  const navigate = useNavigate();
  return (
    <div>
      <h4>
        useNavigate- is a hook intraduced inside react router dom v6 <br />
        this is similar to usehistory(RRD v5) which helps us to navigate to
        other path <br />
      </h4>
      <button
        onClick={() => navigate("/home/course/usenavigate/newpage")}
        className="btn btn-warning"
      >
        Demo
      </button>
    </div>
  );
}

function CourseName() {
  const { coursename } = useParams();
  return (
    <div>
      <h2>{coursename}</h2>
    </div>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
