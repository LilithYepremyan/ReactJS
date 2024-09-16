import { useOutletContext } from "react-router-dom"
import { IContext } from "../../../helpers/types"
import { handlePrivacy } from "../../../helpers/api"

export const UpdatePrivacy = () => {
    const { account, setAccount } = useOutletContext<IContext>()
    const switchTo = () => {
        handlePrivacy()
        .then(response => {
            setAccount({...account, isPrivate:response.payload as number})
        })
    }
    return <div className=" break content">
        <p>Hey {account.name}, your account is <strong>{account.isPrivate == 1 ? "private":"public"}</strong></p>
        <img
            className="icon"
            onClick={switchTo}
            src={
                account.isPrivate ?
                "https://cdn1.iconfinder.com/data/icons/internet-security-26/64/x-01-512.png"
                :
                "https://cdn1.iconfinder.com/data/icons/internet-security-26/64/x-11-512.png"
            }
        
        />
       
    </div>
}