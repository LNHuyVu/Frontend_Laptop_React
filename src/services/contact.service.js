import httpClient from "../http-common";
const getAll = (id) => {
  return httpClient.get(`/get-all-contact?id=${id}`);
};
const create = (data, Token) => {
  return httpClient.post("/create-new-contact", data);
};
const update = (data, Token) => {
  return httpClient.put("/edit-contact", data);
};
const remove = (userId, Token) => {
  return httpClient.delete("/delete-contact", {
    data: {
      id: userId,
    },
  });
};
export default { create, getAll, update, remove};
