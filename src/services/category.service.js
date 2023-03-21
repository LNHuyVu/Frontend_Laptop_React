import httpClient from "../http-common";
const getAll = (id) => {
  return httpClient.get(`/get-all-category?id=${id}`);
};
const create = (data) => {
  return httpClient.post("/create-new-category", data);
};
const update = (data) => {
  //   console.log('update', data)
  return httpClient.put("/edit-category", data);
};
const remove = (userId) => {
  //   console.log("data", userId);
  return httpClient.delete("/delete-category", {
    data: {
      id: userId,
    },
  });
};
export default { create, getAll, update, remove };
