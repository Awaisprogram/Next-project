import Image from "next/image";
import styles from "./about.module.css";
import about from "../images/about.png";
import Heading from "../components/heading";
import Font from "../components/Font";
import Button from "../components/button";
function About() {
  return (
    <>
      <div>
        <Heading title="About Us" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["image"]}>
          <Image src={about} alt=""></Image>
        </div>
        <div className={styles["content"]}>
          <Font text="Making your brand bigger than ever"></Font>
          <p>
            We help businesses & organizations promote their products, services
            or brands in the online world with 12 years of experience. We have
            become a leader in digital experiences, web design, and branding.
          </p>
          <p>
            We love what we do with our clients to ensure their positioning and
            digital transformation ensure the business meets every standard.
          </p>
          <div className={styles["button"]}>
            <Button click="Explore more" />
          </div>
        </div>
      </div>
      <div className={styles["details"]}>
        <div>
          <h1>
            100+ <span>Years of experience</span>
          </h1>
        </div>
        <div>
          <h1>
            85k<span>Active monthly users</span>
          </h1>
        </div>
        <div>
          <h1>
            60k+<span> Project completed</span>
          </h1>
        </div>
        <div>
          <h1>
            4.8/5<span>Total success rate</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default About;
