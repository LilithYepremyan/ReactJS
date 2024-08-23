import {   MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import { UpdatePrivacy } from "../../../components/Settings/UpdatePrivacy";
import { UpdatePassword } from "../../../components/Settings/UpdatePassword";

export const Settings = () => {
  

  return (
    <MDBContainer className="py-5">
      <div>
        <MDBCardBody className="p-4">
            <UpdatePrivacy/>
            <UpdatePassword/>
          </MDBCardBody>
      </div>
    </MDBContainer>
  );
};
