import httpClient from "../http-common";
const getAll = (id, Token) => {
  return httpClient.get(`/get-all-user?id=${id}`, {
    headers: { token: `Bearer ${Token.accessToken}` },
  });
};
const create = (data) => {
  return httpClient.post("/create-new-user", data);
};
const update = (data) => {
  //   console.log('update', data)
  return httpClient.put("/edit-user", data);
};
const remove = (userId, Token) => {
  //   console.log("data", userId);
  return httpClient.delete(
    "/delete-user",
    {
      headers: { token: `Bearer ${Token.accessToken}` },
      data: {
        id: userId,
      },
    },
  );
};
export default { create, getAll, update, remove };
