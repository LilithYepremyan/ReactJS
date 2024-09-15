import React, { useState } from "react";
import { addLesson } from "../features/classbook/classbook.slice";
import { useAppDispatch } from "../app/hooks";
import "../index.css";

const AddLesson = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const handleSubmit = () => {
    dispatch(addLesson({ title: text, ratings: [] }))
      .unwrap()
      .then(() => setText(""));
  };

  return (
    <div>
      <p>Add Lesson</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      ></input>
    </div>
  );
};

export default AddLesson;
