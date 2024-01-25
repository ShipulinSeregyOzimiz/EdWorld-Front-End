import request from "@/api/request";

export const loginUser = async (name, phone, password) => {
  const response = await request.post("/api/login", {
    name,
    phone,
    password,
  });

  const user = response.data;

  return user;
};
