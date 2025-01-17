import {doGet, getCurrentDate} from './Utils';
import CONFIG from '../config';
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": ""
};

const getStatusServiceGroup = () => {
      // quickly construct request url
      let url =
        "https://" +
        CONFIG.endpoint +
        "/api/v2/status/" +
        CONFIG.reportName +
        "/SERVICEGROUPS" +
        "?start_time="+getCurrentDate() + "T00:00:00Z"+
        "&end_time="+getCurrentDate() + "T23:59:59Z"

      return doGet(url, headers);
}
  
export {getStatusServiceGroup};