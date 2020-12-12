import { ApiEndPoints } from "../utils/apiConfig";

let API = {};

export default API = {
  TestRequest: ApiEndPoints.api + "/user/info",
  CreateNewProject: ApiEndPoints.api + "project/new",
  DeleteProject: ApiEndPoints.api + "project/new",
};
