import axios from "axios";
import { Navigate } from "react-router";

// axios post for lung carcinoma associated targets
export const GetByQuery = async (endpoint, payload) => {
  try {
    var response = await axios.post(endpoint, payload);
    //success
    return response.data.data.disease.associatedTargets.rows;
  } catch (error) {
    // error
    if (error) {
      return <Navigate to="/error" replace={true} />;
    }
  }
};
