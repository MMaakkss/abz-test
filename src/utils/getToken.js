import { getToken } from "../api";

export const getUserToken = async () => {
  // const token = $cookies.get("token");

  // if (token) return token

  const { data } = await getToken();

  // $cookies.set("token", data.token)

  return data.token;
};
