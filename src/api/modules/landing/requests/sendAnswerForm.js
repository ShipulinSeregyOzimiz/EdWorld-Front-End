import request from "@/api/request";
import { formatPhoneNumber } from "@/common/utils/formatPhoneNumber.js";

export const sendAnswerForm = async (payload) => {
  const response = await request.post(`/api/test/application`, {
    test_id: payload.test_id,
    name: payload.name,
    email: payload.email,
    phone: formatPhoneNumber(payload.phone),
    message: payload.message,
  });

  return response;
};
