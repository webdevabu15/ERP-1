import { useState, useEffect, useRef } from 'react';
import { Button, Modal } from "../../utils";
import { connect } from "react-redux";
import { loadStudents } from '../../redux/actions/student-actions';
import { useSelector } from 'react-redux';
import axios from "../../services/api";
import "./Attendance.scss";
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/actions/attendence-students';
import { loadAttends } from "../../redux/actions/attendence-students"

const Attendance = (props) => {
 
  const {students_data, isloading} = useSelector(state => state.student);
  const roomNo = useRef();
  const date = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false)
    
  const studentsData = new Map();
  students_data.forEach(student => {
    studentsData.set(student.name, {present: true})
  })

  const data = {}


  const attendanceDetails = new Map();
  attendanceDetails.set("classStart", "08:30");
  attendanceDetails.set("classEnd", "11:30");
  

 

  const details = {}
  attendanceDetails.forEach((value, key) => {
    details[key] = value;
  })

  useEffect(() => {
    props.loadStudents();
  }, [])
  
  const handleCreateNewAttendance = (e) => {
    e.preventDefault();

    // console.log(studentsData.entries());
    studentsData.forEach((value, key) => {
        data[key] = value;
    })
    console.log(date)
    console.log(roomNo)
    console.log(data)

    axios.post("/attendance/", {
      roomNo: [roomNo.current.value],
      date: date.current.value,
      data,
      details
    })
      .then(() => {
        setIsModalOpen(false)
      })
      .catch(error => console.log(error))
  }

  // const dispatch = useDispatch();
  // const attend = useSelector(state => state.attend);
  // const loading = useSelector(state => state.loading);
  // const error = useSelector(state => state.error);
// console.log(attend);

  // useEffect(() => {
  //   // Redux Thunk orqali asinxron amalni boshlash
  //   dispatch(fetchData());
  // }, [dispatch]);
  const attendata = useSelector(state => state.attend)
  const isLoading = useSelector(state => state.attend.isloading)
  console.log();
  useEffect(() => {
    props.loadAttends()
  },[])
  return (
    <>
      <div className='admin__content-header'>
        <h1>Attendance</h1>
        <Button text={"Create new attendance"} isloading={false} click={() => setIsModalOpen(true)}/>
      </div>
      <div className='admin__content-body'>
       <div className="admin__content-students">
       {
       !isLoading && attendata.attend_st.map(student => {
            return <table>
             <tr>
              <td>
                <p>{student.createdAt}</p>
              </td>
             </tr>
             <tr>
               <td>
                <p>{student.roomNo}</p>
               </td>
             </tr>
             <tr>
              <td><p>{student.date}</p></td>
             </tr>
              <tr>
                <td><p>{student.details.classStart}</p></td>
              </tr>
             <tr>
              <td><p>{student.details.classEnd}</p></td>
             </tr>
            </table>
          })
       }
       </div>
      </div>

      <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <form className='form' onSubmit={handleCreateNewAttendance}>
        <input type="date" ref={date}/>
          <select ref={roomNo} >
              <option value="select">Select room no</option>
              {
                new Array(15).fill("").map((_, index) => 
                  <option key={index} value={index + 1}>{index + 1}</option>
                )
              }
          </select>
          {!isloading && students_data.length > 0 ?
            students_data.map(student => 
              <div className='student-attendance-item' key={student._id}>
                <h4>{student.name}</h4>
               <div className='checbox-wrapper'>
                  <input id={student._id}  type="checkbox" defaultChecked onChange={(e) => studentsData.set(student.name, {present: e.target.checked})} />
                  <label htmlFor={student._id}></label>
               </div>
              </div>  
          )
            :
            <>{isloading && <p>Loading...</p>}</>
          }
         
          <Button text={"Save attendance"} isloading={false}/>
        </form>
      </Modal>

    </>
  )
}

export default connect (null, {loadStudents, loadAttends}) (Attendance)