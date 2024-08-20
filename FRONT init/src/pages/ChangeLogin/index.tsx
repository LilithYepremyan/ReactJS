import { MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateUserLogin } from "../../helpers/api";
import { useNavigate } from "react-router-dom";

interface IChangeLoginForm {
  newLogin: string;
  currentPassword: string;
}

const ChangeLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IChangeLoginForm>();

  const handleChangeLogin: SubmitHandler<IChangeLoginForm> = async (data) => {
    updateUserLogin({
      login: data.newLogin,
      password: data.currentPassword,
    }).then(() => navigate("/login"));
  };

  return (
    <div>
      <MDBCardBody className="px-5">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Change Login</h3>

        <form onSubmit={handleSubmit(handleChangeLogin)}>
          <MDBInput
            wrapperClass="mb-4"
            label="New login"
            type="text"
            {...register("newLogin", { required: true })}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            type="text"
            {...register("currentPassword", { required: true })}
          />
          <button type="submit" className="btn btn-outline-info">
            Submit
          </button>
        </form>
      </MDBCardBody>
    </div>
  );
};

export default ChangeLogin;
