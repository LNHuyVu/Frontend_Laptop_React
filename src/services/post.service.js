import httpClient from "../http-common";
const getAll = (id) => {
  return httpClient.get(`/get-all-post?id=${id}`);
};
const create = (data) => {
  return httpClient.post("/create-new-post", data);
};
const update = (data) => {
  //   console.log('update', data)
  return httpClient.put("/edit-post", data);
};
const remove = (Id) => {
  //   console.log("data", userId);
  return httpClient.delete("/delete-post", {
    data: {
      id: Id,
    },
  });
};
export default { create, getAll, update, remove };
