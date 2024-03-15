import Header from './header';
import React from 'react';
import { useEffect,useState } from "react";
const Enquiries = () => {

    const [enquiryList, setenquiryList] = useState([]);
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8001/enquiries", requestOptions)
      .then((response) => response.json())
      .then((result) => setenquiryList(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="myDIV" className="header">
            <Header header="Course List" />
            <table border="1" className="enquiry-list">
                <thead className="course">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody className="course">
                    {enquiryList.map((enquiries, index) => (
                        <tr key={index}>
                            <td>{enquiries.name}</td>
                            <td>{enquiries.email}</td>
                            <td>{enquiries.course}</td>
                            <td>{enquiries.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );

//     const dispatch = useDispatch();
//     const { enquiryList } = useSelector((state) => state.enquiry);

//     const getData = async () => {
//         try {
//             const url = `http://localhost:8001/enquiries`;
//             const options = {
//                 method: "GET",
//             };
//             let response = await fetch(url, options);
//             let data = await response.json();
//             dispatch(saveEnquiryList(data));
//         } catch (error) {
//             alert("Server error:: " + error.message);
//         }
//     };

//     useEffect(() => {
//         getData();
//     }, []);

//     useEffect(() => {
//         // unmount starts
//         return () => {
//             dispatch(saveEnquiryList([])); // resting list
//         };
//         // unmount ends
//     }, []);
// // updating
//     useEffect(() => {
//     }, [enquiryList]);

//     return (
//         <div id="myDIV" className="header">
//             <Header header="Course List" />
//             <table border="1" >
//                 <thead className="course">
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Course</th>
//                         <th>Message</th>
//                     </tr>
//                 </thead>
//                 <tbody className="course">
//                     {enquiryList.map((enquiries, index) => (
//                         <tr key={index}>
//                             <td>{enquiries.name}</td>
//                             <td>{enquiries.email}</td>
//                             <td>{enquiries.course}</td>
//                             <td>{enquiries.message}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
}
export default Enquiries;