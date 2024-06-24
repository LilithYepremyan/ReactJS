import axios from "axios";
import { useForm } from "react-hook-form";
import Types from "prop-types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup
    .string()
    // .typeError("Name must be a string")
    .matches(/^[A-Za-z]+$/, "Name must be a string containing only letters")
    .min(2, "Name must be at least 2 characters long")
    .max(10, "Name must be at most 10 characters long")
    .required("Name is required"),
  surname: yup
    .string()
    // .typeError("Surname must be a string")
    .matches(/^[A-Za-z]+$/, "Surname must be a string containing only letters")
    .min(2, "Surname must be at least 2 characters long")
    .max(10, "Surname must be at most 10 characters long")
    .required("Surname is required"),
  salary: yup
    .number()
    .typeError("Salary must be a number")
    .required("Salary is required"),
});

export const AddUser = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    console.log(data, "data::");
    console.log(errors);
    axios
      .post("http://localhost:3004/users", { ...data, salary: +data.salary })
      .then((res) => {
        onAdd(res.data);
        reset();
      });
  };

  return (
    <div>
      <h1>AddUser</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>Name</label>
        <input {...register("name")} placeholder="Name" type="text" />
        <p style={{ color: "red" }}>{errors.name?.message}</p>

        <label>Surname</label>
        <input {...register("surname")} placeholder="Surname" type="text" />
        <p style={{ color: "red" }}>{errors.surname?.message}</p>

        <label>Salary</label>
        <input type="number" {...register("salary")} placeholder="Salary" />
        <p style={{ color: "red" }}>{errors.salary?.message}</p>

        <button>Save</button>
      </form>
    </div>
  );
};

AddUser.propTypes = {
  onAdd: Types.func.isRequired,
};
