import Link from "next/link";

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
    </div>
  );
};

export default About;
