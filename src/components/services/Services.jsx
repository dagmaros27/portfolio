import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const handleScrollContact = () => {
    const portfolioSection = document.getElementById("Contact");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              Awesome Quality
            </motion.b>{" "}
            Websites
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Website Development</h2>
          <p>
            From concept to execution, I specialize in developing fully
            responsive and visually stunning websites. My proficiency spans
            across various technologies, including HTML, CSS, JavaScript, and
            more. Let's create a website that not only looks impressive but also
            functions seamlessly.
          </p>

          <button onClick={handleScrollContact}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Custom Web Applications</h2>
          <p>
            Need a tailored solution to meet your unique business requirements?
            I excel in designing and developing custom web applications that
            align perfectly with your goals. Let's build an intuitive and
            efficient platform that sets you apart from the competition.
          </p>
          <button onClick={handleScrollContact}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>E-Commerce Solutions</h2>
          <p>
            Unlock the potential of online sales with a robust and user-friendly
            e-commerce website. I can integrate secure payment gateways,
            implement inventory management systems, and optimize the user
            experience to maximize your online business potential.
          </p>
          <button onClick={handleScrollContact}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
