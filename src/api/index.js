import axios from "axios";
import { getUserToken } from "../utils/getToken";

const api = axios.create({
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
});

const positionsApiUrl = "/positions";
const tokenApiUrl = "/token";
const usersApiUrl = "/users";

export const getToken = () => api.get(tokenApiUrl);

export const getPositions = () => api.get(positionsApiUrl);

export const getUsers = (page = 1) =>
  api.get(usersApiUrl, {
    params: {
      count: 6,
      page,
    },
  });

export const createUser = async (data) => {
  const token = await getUserToken();

  return api.post(usersApiUrl, data, {
    headers: {
      "Token": token,
    },
  });
};
