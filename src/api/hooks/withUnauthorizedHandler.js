export const withUnauthorizedHandler = async (request) => {
  try {
    return await request;
  } catch (e) {
    const error = e;

    if (error.status === 401) {
      //   store.dispatch(unsetAuth());
      //   store.dispatch(unsetAdmin());
      //   router.navigate("/auth/login", { replace: true });
    }

    throw e;
  }
};
