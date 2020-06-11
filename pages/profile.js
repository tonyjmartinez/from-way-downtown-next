import auth0 from "../utils/auth0";

const Profile = (props) => {
  console.log("props", props);
  return <div>Profile</div>;
};

Profile.getInitialProps = async ({ req, res }) => {
  if (typeof window === "undefined") {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: "/api/login",
      });
      res.end();
      return;
    }
    return { user: session.user };
  }
};

export default Profile;
