import { MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { SubmitHandler, useForm } from "react-hook-form";
import { handleLogOut, updateUserPassword } from "../../helpers/api";
import { useNavigate } from "react-router-dom";

interface IChangePasswordForm {
  old: string;
  newpwd: string;
}

const ChangePassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IChangePasswordForm>();
  //   const [error, setError] = useState<string>("");

  //   const handleChangeLogin: SubmitHandler<IUser> = (user) => {
  //     updateUserLogin().then((response) => {
  //       console.log(response);
  //     });
  //   };

  const handleChangePassword: SubmitHandler<IChangePasswordForm> = async (
    data
  ) => {
    updateUserPassword({ old: data.old, newpwd: data.newpwd }).then(() =>
      navigate("/login")
    );
  };

  return (
    <div>
      <MDBCardBody className="px-5">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Change Password</h3>

        <form onSubmit={handleSubmit(handleChangePassword)}>
          {/* {error && <p className="text-danger">{error}</p>} */}
          <MDBInput
            wrapperClass="mb-4"
            label="Old password"
            type="text"
            {...register("old", { required: true })}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="New Password"
            type="text"
            {...register("newpwd", { required: true })}
          />

          <button type="submit" className="btn btn-outline-info">
            Submit
          </button>
        </form>
      </MDBCardBody>
    </div>
  );
};

export default ChangePassword;
