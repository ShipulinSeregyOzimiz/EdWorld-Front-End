import request from "@/api/request";

export const sendApplication = async (payload) => {
  const response = await request.post(`/api/applications/`, {
    name: payload.name,
    phone: payload.phone,
    place: payload.place,
  });

  return response;
};
