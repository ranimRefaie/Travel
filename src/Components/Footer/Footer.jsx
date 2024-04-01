import "./Footer.css";
import logo from "./image/footer-logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DataFooter1 from "../Lists/DataFooter1";
import DataFooter2 from "../Lists/DataFooter2";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";

const Footer = () => {
  const [footerItem1, setFooterItem1] = useState([]);
  const [footerItem2, setFooterItem2] = useState([]);
  useEffect(() => {
    setFooterItem1(DataFooter1());
  });

  useEffect(() => {
    setFooterItem2(DataFooter2());
  });
  return (
    <div className="footer">
      <div className="row">
        <div className="col-1">
          <img src={logo} alt="" className="logo" />
          <p>Travel helps companies manage payments easily.</p>
          <div className="social">
            <Link>
              <FaLinkedinIn className="icon" />
            </Link>
            <Link>
              <FaFacebookMessenger className="icon" />
            </Link>
            <Link>
              <FaTwitter className="icon" />
            </Link>
            <Link>
              <IoInfinite className="icon" />
            </Link>
          </div>
        </div>

        <div className="col-2">
          <h2>Company</h2>
          {footerItem1.map((item) => (
            <Link key={item.id}>{item.link}</Link>
          ))}
        </div>

        <div className="col-3">
          <h2>Destinations</h2>
          {footerItem2.map((item) => (
            <Link key={item.id}>{item.link}</Link>
          ))}
        </div>
      </div>
      <div className="row">
        <p>Copyright @ Xpro 2023 All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
