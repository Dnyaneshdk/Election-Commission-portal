import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "./../Common/Constant";
import VoterProfile from "../Components/VoterProfileComponent";
import "../Pages_CSS/VoterCSS/ViewVoterProfile.css";

function ViewVoterProfile() {
  const [voterInfo, setVoterInfo] = useState({});
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const updatePersonalInfo = () => {
    const data = {
      voterId: voterInfo.voterId,
      firstName: voterInfo.firstName,
      middleName: voterInfo.middleName,
      lastName: voterInfo.lastName,
      dateOfBirth: voterInfo.dateOfBirth,
      age: voterInfo.age,
      gender: voterInfo.gender,
      uid: voterInfo.uid,
      pan: voterInfo.pan,
      uniqueId: voterInfo.uniqueId,
    };
    history.push("/home/updatePersonalInfo", { personalInfo: data });
  };

  const updateAddressInfo = () => {
    const data = {
      addressId: voterInfo.addressId,
      state: voterInfo.state,
      district: voterInfo.district,
      taluka: voterInfo.taluka,
      village: voterInfo.village,
      pincode: voterInfo.pincode,
      assemblyId: voterInfo.assemblyId,
      parlimentId: voterInfo.parlimentId,
      voterId: voterInfo.voterId,
    };
    history.push("/home/updateAddressInfo", { addressInfo: data });
  };

  const updateDocumentInfo = () => {
    const data = {
      uidDoc: voterInfo.uidDoc,
      panDoc: voterInfo.panDoc,
      photo: voterInfo.photo,
      voterId: voterInfo.voterId,
      docId: voterInfo.docId,
    };
    history.push("/home/updateDocumentInfo", { documentInfo: data });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    if (user == undefined) history.push("/signin");
    else {
      axios.get(url + "/user/" + user.uniqueId).then((response) => {
        const result = response.data;
        setVoterInfo(result.data);
        console.log(result.data);
      });
    }
  };

  if (user != undefined) {
    return (
      <div>
        {/* <table className="update-table">
          <tbody>
            <tr>
              <td>
                <button
                  className="btn btn-link p-0"
                  onClick={updatePersonalInfo}
                >
                  Update Personal Info
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn btn-link p-0"
                  onClick={updateAddressInfo}
                >
                  Update Address
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn btn-link p-0"
                  onClick={updateDocumentInfo}
                >
                  Update Documents
                </button>
              </td>
            </tr>
          </tbody>
        </table> */}
        <VoterProfile voterInfo={voterInfo} />
      </div>
    );
  } else return <div></div>;
}

export default ViewVoterProfile;
