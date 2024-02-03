import request from "@/api/request";

export const createUserTest = async (testId) => {
  const response = await request.post(`api/test/user-test`, {
    test_id: testId,
  });

  return response;
};
