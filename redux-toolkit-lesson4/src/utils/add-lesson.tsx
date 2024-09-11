import React, { useState } from "react";
import { addLesson } from "../features/classbook/classbook.slice";
import { useAppDispatch } from "../app/hooks";

const AddLesson = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const handleSubmit = () => {
    dispatch(addLesson({ title: text, ratings: [] }))
      .unwrap()
      .then(() => setText(""));
  };

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
    ></input>
  );
};

export default AddLesson;
