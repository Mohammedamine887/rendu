import React, { Suspense, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import NotFound from './components/NotFound';
import NavBar from './components/NavigationBar';

const Header = React.lazy(() => import('./components/Header'))
const Products = React.lazy(() => import('./components/Products'))
const Events = React.lazy(() => import('./components/Events'))
const EventDetails = React.lazy(() => import('./components/EventDetails'))
const NavigationBar = React.lazy(() => import('./components/NavigationBar'))

function App() {

  const [show, setShow] = useState(true)
  const [role,setRole]=useState("admin")
  let name = "Test";
  let person = {
    name: "Test",
    age: 30,
  };

  let b = true;

  const style1 = {
    color: 'red',
    backgroundColor: 'blue'
  }

  let students = [
    { name: "s1", age: 10 },
    { name: "s2", age: 20 },
    { name: "s3", age: 30 },
  ];
  
  function test() {
    console.log("I m here")
  }

  function getPerson(person1) {
    return person1;
  }
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <NavBar /> {/* Afficher le composant NavBar */}
        <Routes>
          {/* {role !== 'admin' ? (
            <Route path="/admin" element={<Dashboard />} >
              <Route path="users" element={<Users/>}/>
            </Route>
          ) : ( */}
              {/* <> */}
                {/*  */}
          <Route path="/events">
            <Route index element={<Events />} />
            <Route path=":id/:title" element={<EventDetails/>}/>
          </Route>
          <Route path="/products" element={<Products />} />
              <Route path="/counter" element={<Counter />} />
              {/* </> */}
          {/* )} */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
