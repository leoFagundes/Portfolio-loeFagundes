import { useState } from "react";
import SocialNetworks from "../SocialNetworks";
import style from "./Me.module.scss";
import { motion } from "framer-motion";
import { FaPizzaSlice } from "react-icons/fa6";

export default function Me() {
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Reset the position to the original state
    setDragX(0);
    setDragY(0);
  };

  const handleImageLoad = () => {
    // Atualiza o estado para indicar que a imagem foi carregada
    setImageLoaded(true);
  };

  return (
    <section id="Me" className={style.Me}>
      <section>
        <div className={style.nameSection}>
          <h1>Leonardo Fagundes</h1>
          <h2>Estudante de Programação</h2>
          <div className={style.networks}>
            <SocialNetworks
              link="https://github.com/leoFagundes"
              image="assets/img/social-icons/github.png"
              name="github"
            />
            <SocialNetworks
              link="https://www.linkedin.com/in/leonardo-fagundes-5a348a248/"
              image="assets/img/social-icons/linkedin.png"
              name="linkedin"
            />
            <SocialNetworks
              link="https://www.instagram.com/leo.fagundes.50/"
              image="assets/img/social-icons/instagram.png"
              name="instagram"
            />
          </div>
        </div>
        <div className={style.imageSection}>
          <div className={style.secretMessage}>
            <p>Vou te contar um segredo...</p>
            <p>
              Eu <strong>AMO</strong> pizza <FaPizzaSlice size={15} />
            </p>
          </div>
          <motion.div
            className={style.border}
            drag
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            // Define a dynamic animate object based on isDragging state
            animate={{
              x: isDragging ? 0 : dragX,
              y: isDragging ? 0 : dragY,
            }}
            // Set the initial position
            initial={{ x: 0, y: 0 }}
            // Enable smooth animation
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            // Update the position when dragging
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.65} //Valor de eslasticidade
            dragMomentum={false}
            whileTap={{ cursor: "grabbing", scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            // Update the dragX and dragY values while dragging
            onDrag={(event, info) => {
              setDragX(info.offset.x);
              setDragY(info.offset.y);
            }}
          >
            <img
              src="assets/img/eu.jpg"
              className={style.profileImage}
              alt="me-image"
              onLoad={handleImageLoad}
            />

            {!imageLoaded && (
              <div className={style.loading}>
                <span className={style.loader}></span>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </section>
  );
}
