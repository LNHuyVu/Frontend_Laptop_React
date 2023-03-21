import httpClient from "../http-common";
const getAll = (id) => {
  return httpClient.get(`/get-all-productvalue?id=${id}`);
};
const create = (data) => {
  return httpClient.post("/create-new-productvalue", data);
};
const update = (data) => {
//   console.log('update', data)
  return httpClient.put("/edit-productvalue", data);
};
const remove = (userId) => {
//   console.log("data", userId);
  return httpClient.delete("/delete-productvalue", {
    data: {
      id: userId
    }
  });
};
export default { create, getAll, update, remove };
