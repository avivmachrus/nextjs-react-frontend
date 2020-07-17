import Link from "next/link";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const About = () => {
  return (
    <div className="container">
      <h1>this is About Page</h1>
      <h3>
        back to{" "}
        <Link href="./">
          <a>Home</a>
        </Link>
      </h3>
      <Avatar
        alt="avatar-img"
        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/12/129ffc8bfee7ba994b86ca7a930d1a7a48383523_full.jpg"
      />
      <Chip label="mankind" />
    </div>
  );
};

export default About;
