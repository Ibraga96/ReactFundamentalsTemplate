import React, { useState } from "react";
import { useRoutes, Navigate } from "react-router-dom";

import styles from "./App.module.css";
import { Header, Courses, CourseInfo, Login } from "./components";
import { mockedAuthorsList, mockedCoursesList } from "./constants";

// Module 2:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * wrap your App with BrowserRouter in src/index.js
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#add-the-router-to-the-app-component

// Module 3:
// * wrap your App with Redux Provider in src/index.js
// * remove 'mockedAuthorsList' and 'mockedCoursesList' constants amd import and their use throughout the project
// * get courses and authors from the server. Use courses/all and authors/all GET requests.
// * save courses and authors to the store. Use 'setCourses' and 'setAuthors' actions from appropriate slices here 'src/store/slices'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#app-component

// Module 4:
// * rewrite old GET requests /courses/all with 'getCoursesThunk' from 'src/store/thunks/coursesThunk.js' using getCourses service from 'src/services.js'.
// * rewrite old GET requests /authors/all with 'getAuthorsThunk' from 'src/store/thunks/authorsThunk.js' using getAuthors service from 'src/services.js'.
// * wrap 'CourseForm' in the 'PrivateRoute' component

function App() {
  // write your code here
  const [courseId, setCourseId] = useState(0);

  let onback = () => {
    setCourseId(0);
  };

  const token = localStorage.getItem("token");

  let element = useRoutes([
    {
      path: "*",
      element: token ? <Navigate to="/сourses" /> : <Login />,
    },
    {
      path: "/сourses",
      element: token ? (
        <Courses
          authorsList={mockedAuthorsList}
          coursesList={mockedCoursesList}
          handleShowCourse={setCourseId}
        />
      ) : (
        <Navigate to="*" />
      ),
    },
  ]);

  if (!element) return null;

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>{element}</div>
    </div>
  );
}

export default App;
