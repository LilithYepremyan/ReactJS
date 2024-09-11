import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { getAllStudents } from "../students/students.slice";
import { getLessons } from "./classbook.slice";
import styles from "./classbook.module.css";
import AddLesson from "../../utils/add-lesson";

export const ClassBook = () => {
  const students = useAppSelector((state) => state.students.list);
  const lessons = useAppSelector((state) => state.classbook.lessons);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
    dispatch(getLessons());
  }, []);

  const empty = new Array(16 - lessons.length).fill(null);

  return (
    <>
      <h3>classbook</h3>
      <Link to={"/students"}>Students</Link>
      <p>{students.length}</p>
      <p>{lessons.length}</p>
      <AddLesson />
      <table className={styles.table}>
        <thead>
          <tr>
            <th rowSpan={2}>Student</th>
            <th colSpan={16}>Lessons</th>
          </tr>
          <tr>
            {lessons.map((lesson) => (
              <td className={styles.vertical} key={lesson.id}>
                {lesson.title}
              </td>
            ))}
            {empty.map((_, index) => (
              <th key={index}></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                {student.name} {student.surname}
              </td>
              {/* {lessons.map((lesson) => (
                <td key={lesson.id}></td>
              ))} */}
              {lessons.map((lesson) => {
                const found = lesson.ratings.find(
                  (r) => r.student === student.id
                );
                return <td>{found?.rate}</td>;
              })}
              {empty.map((_, index) => (
                <td key={index}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
