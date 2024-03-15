import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
const CourseList = (props) => {
    let course = props.courses;
    let setData = props.setData;
    return <>
        <div id="myDIV" className="header">
            <ul id="myUL">
                <Header header="Course List" />
                {course.map((courselist, index) => (
                    <li key={index} className="course">
                        <Link to="/enquiryForm" state={courselist.name}><button id={index} className="Btn"  onClick={() => setData(courselist.name)}>Enquire</button></Link>
                        &nbsp;&nbsp;&nbsp;<span className="list"> <img width="25" height="25" alt={courselist.name} src={courselist.url} />{courselist.name} by <strong>{courselist.instructor}</strong></span>

                        <span style={{ float: "right", fontSize: "14px" }}>
                            <span><img width="35" height="25" alt="likes" src="https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png" /></span><span>{courselist.likes}</span>  </span>
                    </li>
                ))}
            </ul>
        </div>
    </>
}
export default CourseList;