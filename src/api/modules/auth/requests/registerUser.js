import request from "@/api/request";

export const registerUser = async (name, phone, password) => {
  const response = await request.post("/api/register", {
    name,
    phone,
    password,
  });

  const user = response.data;

  return user;
};
