import withSession from "./session";

export const mustLogin = (cb) => {
  return withSession(async function ({ req, res }) {
    const serverAuth = req.session.get("auth");

    if (!serverAuth || !serverAuth.isLoggedIn) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    let cbData = {
      props: {},
    };
    if (cb) {
      cbData = await cb(serverAuth);
    }

    if (cbData.redirect) {
      return {
        redirect: { ...cbData.redirect },
      };
    }
    return {
      props: { serverAuth, ...cbData.props },
    };
  });
};
