import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        {/* <img
          src={"https://avatars.githubusercontent.com/u/25058652"}
          alt="Founder"
        /> */}

        <h2>Shyam Munde</h2>
        <p>Practice makes Man Perfect.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/shyam-munde-841168249" target={"blank"}>
            <AiFillLinkedin />
          </a>
          
          <a href="https://github.com/shyammunde1" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
