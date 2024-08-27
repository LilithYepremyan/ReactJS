import { useForm } from "../../hooks";
import styles from "./style.module.css";
export const Parent = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const handleAdd = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleAdd)}>
        <div>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <input
            className={styles.input}
            {...register("name", {
              required: "Please fill name",
              minLength: 3,
              maxLength: 6,
            })}
          />
        </div>

        <div>
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}

          <input
            className={styles.input}
            {...register("age", {
              required: "Please fill age",
              minLength: 2,
              maxLength: 4,
            })}
          />
        </div>
        <button>Save</button>
        <button onClick={()=>{reset()}}>Reset</button>
      </form>
    </>
  );
};
