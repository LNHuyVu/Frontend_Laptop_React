import httpClient from "../http-common";

const sendEmail = (data) => {
  return httpClient.post("/send-email", data);
};
export default {sendEmail};
