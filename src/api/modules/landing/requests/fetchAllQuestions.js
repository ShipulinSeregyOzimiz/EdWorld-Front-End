import request from "@/api/request";

export const fetchAllQuestions = async () => {
  const response = await request.get(`/api/test/user-test/1/questions`);

  return response;
};
