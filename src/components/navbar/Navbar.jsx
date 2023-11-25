import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dagmaros Portfolio
        </motion.span>
        <div className="social">
          <a href="https://gmail.com/" target="_blank" rel="noreferrer">
            <img src="/gmail.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/dagmaros27"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            href="https://github.com/dagmaros27"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" alt="" />
          </a>
          <a href="https://t.me/Dagua27" target="_blank" rel="noreferrer">
            <img src="/telegram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
