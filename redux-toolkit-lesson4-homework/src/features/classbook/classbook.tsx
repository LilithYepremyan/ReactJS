import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { getAllStudents } from "../students/students.slice";
import { addRate, getLessons } from "./classbook.slice";
import styles from "./classbook.module.css";
import AddLesson from "../../utils/add-lesson";
import RateModal from "../rateModal/rateModal";

export const ClassBook = () => {
  const students = useAppSelector((state) => state.students.list);
  const lessons = useAppSelector((state) => state.classbook.lessons);
  console.log(lessons, "lessons");
  console.log(students, "students");
  console.log(students, "students");

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
    dispatch(getLessons());
  }, []);

  const empty = new Array(16 - lessons.length).fill(null);

  const [open, setOpen] = useState(false);
  const handleOpen = (student: any, lesson: any) => {
    setOpen(true);
    setSelectedStudent(student);
    setSelectedLesson(lesson);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
    setSelectedLesson(null);
  };

  const handleSaveRate = (rating: number) => {
    console.log(rating, "rateSelected");
    if (selectedStudent && selectedLesson) {
      const newRating = {
        id: `${Date.now()}`,
        student: selectedStudent.id,
        rate: +rating,
      };

      const updatedRatings = [...selectedLesson.ratings, newRating];

      const payload = {
        lessonId: selectedLesson.id,
        ratings: updatedRatings,
      };

      dispatch(addRate(payload));
      handleClose();
    }
  };

  return (
    <>
      <h3>classbook</h3>
      <Link to={"/students"}>Students</Link>

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

              {lessons.map((lesson) => {
                const found = lesson.ratings?.find(
                  (r) => r.student === student.id
                );
                return (
                  <td
                    onClick={() => {
                      found?.rate ? "" : handleOpen(student, lesson);
                    }}
                    key={lesson.id}
                    className={
                      found?.rate >= 7
                        ? styles.green
                        : found?.rate > 4 && found?.rate < 7
                          ? styles.orange
                          : styles.red
                    }
                  >
                    {found?.rate}
                  </td>
                );
              })}
              {empty.map((_, index) => (
                <td key={index}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <RateModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleSaveRate={handleSaveRate}
        // student={selectedStudent}
      />
    </>
  );
};
