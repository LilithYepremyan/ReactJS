import axios from "axios";
import { useForm } from "react-hook-form";
import Types from "prop-types";

export const AddUser = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAdd = (data) => {
    console.log(data);
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
      <form onSubmit={handleSubmit(handleAdd)}>
        {errors.name && <p style={{ color: "red" }}>Please fill name</p>}
        <label>name</label>
        <input {...register("name", { required: true })} />

        {errors.surname && <p style={{ color: "red" }}>Please fill name</p>}
        <label>surname</label>
        <input {...register("surname", { required: true, minLength: 6 })} />

        {errors.salary && <p style={{ color: "red" }}>Please fill name</p>}
        <label>salary</label>
        <input {...register("salary", { required: true })} />

        <button>save</button>
      </form>
    </div>
  );
};

AddUser.propTypes = {
  onAdd: Types.func,
};
