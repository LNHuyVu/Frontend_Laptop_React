import httpClient from "../http-common";
const getAll = (id) => {
  return httpClient.get(`/get-all-product?id=${id}`);
};
const create = (data) => {
  return httpClient.post("/create-new-product", data);
};
const update = (data) => {
//   console.log('update', data)
  return httpClient.put("/edit-product", data);
};
const remove = (userId) => {
//   console.log("data", userId);
  return httpClient.delete("/delete-product", {
    data: {
      id: userId
    }
  });
};
export default { create, getAll, update, remove };
