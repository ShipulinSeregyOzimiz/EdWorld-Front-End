import request from "@/api/request";
import { withUnauthorizedHandler } from "../../../hooks/withUnauthorizedHandler.js";

export const sendApplication = async (payload) => {
  const response = await withUnauthorizedHandler(
    request.post(`/api/applications/`)
  );

  return response;
};
