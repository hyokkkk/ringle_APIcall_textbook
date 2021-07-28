import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const landingCourses = useSelector(state => state.landingCourses);

  console.log(landingCourses)

  useEffect(() => {
    const url = "https://api.ringleplus.com/api/v4/student/landing/course?locale=en"
    const options = {
      method: 'GET',
      url,
    };

    // useEffect에 async 붙이면 안 됨
    const fetchData = async () => {
      const res = await axios(options);

      if (res.data.success){
        setCourses(res.data.landing_courses)
        console.log('fetch landing courses 하기 직전')
        dispatch({type:"FETCH_LANDING_COURSES"})
      }
    }

    fetchData()
  }, [])

  return (
    <div className="Textbook">
      {
        // 1. [] 이거는 왜 굳이 있는거?
        // (landingCourses || []).map(coursesObj => {

        /* 2. 이렇게하면 console.log에는 잘 뜨는데 왜 브라우저에는 안 뜨는지?
        landingCourses.map(coursesObj => {
          coursesObj.courses.map((elem) => {
            console.log(elem.title)
            return <div> {elem.title}</div>
          }
        )
      })}
      */

      // 3. key가 없어도 값이 동일하던데 왜 굳이 key가 필요한지
      (courses || []).map(coursesObj => {
        return <div key={coursesObj.category_id}> {coursesObj.courses[0].title}</div>
      })
    }
    </div>
  )
}

export default App 
