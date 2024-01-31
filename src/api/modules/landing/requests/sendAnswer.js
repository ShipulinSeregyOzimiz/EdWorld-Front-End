import request from "@/api/request";

export const sendAnswer = async (payload) => {
  const response = await request.post(`api/test/user-test/1/set-answer`, {
    user_test_id: payload.userTestId,
    test_answer_id: payload.testAnswerId,
  });

  return response;
};
