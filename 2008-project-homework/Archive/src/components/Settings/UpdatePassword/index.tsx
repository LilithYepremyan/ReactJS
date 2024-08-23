import { SubmitHandler, useForm } from "react-hook-form"
import { handleLogout, handlePasswordChange } from "../../../helpers/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface IForm {
    old: string
    newpwd: string
}
export const UpdatePassword = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>()
    const navigate = useNavigate()
    const [error, setError] = useState<string>("")
    const handleUpdate: SubmitHandler<IForm> = user => {
        handlePasswordChange(user)
        .then(response => {
            if(response.status == 'error' && response.message){
                setError(response.message)
            }else{
                reset()
                setError('')
               handleLogout()
               .then(() => [
                navigate("/login")
               ])
            }
        })
    }

    return <div className="break content">
        <p>update your password</p>
        <form onSubmit={handleSubmit(handleUpdate)}>
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
                <div className="col-md-4">
                    <div className="my-2">
                        <input
                            type="text"
                            className={"form-control " + (errors.old && "is-invalid")}
                            placeholder="enter your current password"
                            {...register('old', {required:true})}
                        />
                    </div>
                    <div className="my-3">
                        <input
                            type="text"
                            className={"form-control " + (errors.old && "is-invalid")}
                            placeholder="enter your new password"
                            {...register('newpwd', {required:true})}
                        />
                    </div>
                    <button className="btn btn-outline-dark">update</button>
                </div>

            </div>
        </form>
    </div>
}