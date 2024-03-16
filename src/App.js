import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import EnquiryForm from './components/EnquireForm';
import Enquiries from './components/Enquiries';

function App() {
  const [courses, setCourses] = useState([]);
  const getData = () => {
      var myHeaders = new Headers();
      myHeaders.append("User-Agent", "Apidog/1.0.0 (https://apidog.com)");
      myHeaders.append("Accept", "*/*");
      myHeaders.append("Host", "akgitsolutions.in.net");
      myHeaders.append("Connection", "keep-alive");

      var requestOptions = {
          method: 'GET',
          mode: 'cors',
          headers: myHeaders,
          redirect: 'follow'
      };

    fetch("https://akgitsolutions.in.net/json_server/db.json", requestOptions)
      .then((response) => response.json())
      .then((result) => setCourses(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);
    const [data, setData] = useState('');
  return (
    <div className="wrapper">
       <Routes>
          <Route path="/" element={<CourseList  courses={courses} setData={setData}/>} />
          <Route path="/enquiryForm" element={<EnquiryForm data={data}/>} />
          <Route path="/enquiries" element={<Enquiries />} />
       </Routes>
    </div>
  );
}

export default App;
