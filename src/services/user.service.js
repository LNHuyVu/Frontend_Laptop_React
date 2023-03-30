import httpClient from "../http-common";
const getAll = (id) => {
  return httpClient.get(`/get-all-user?id=${id}`);
};
const create = (data) => {
  return httpClient.post("/create-new-user", data);
};
const update = (data) => {
  //   console.log('update', data)
  return httpClient.put("/edit-user", data);
};
const remove = (userId) => {
  //   console.log("data", userId);
  return httpClient.delete("/delete-user", {
    data: {
      id: userId,
    },
  });
};
export default { create, getAll, update, remove };
