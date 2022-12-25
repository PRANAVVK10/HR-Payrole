import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/index';
import Login from './components/login/index';
import Calendar from './components/calendar/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Project from './project';

function App() {

  return (
    <section>

      {/* <div className="App"> */}
        <BrowserRouter>
          <Routes>
            {/* <Route element={<Layout />}> */}
              <Route path="/" element={<Dashboard />} />
              {/* <Route index element={<Dashboard />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/Project" element={<Project />} />

              {/* <Route path="/newmember" element={<NewMember />} /> */}
              {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
            {/* </Route> */}
          </Routes>
        </BrowserRouter>


      {/* </div> */}
    </section>

  );

}

export default App;
