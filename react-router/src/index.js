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
        <Route path="course" element={<Course />}>
          <Route path="outlet" element={<AboutOutlet />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>hello we are learning react-router</h1>
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
      <Link className="btn btn-dark" to="/home/course/outlet">outlet</Link>
      <br />
      <Outlet />
      <Link to="/home/course/navigate">navigate</Link>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
