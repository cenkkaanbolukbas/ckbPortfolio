import { motion } from "framer-motion";
// import { Special } from "text-animations-react";
import { TextAnim } from "text-animations-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import "./App.css";

function App() {
  const container = {
    visible: {
      transition: {
        delayChildren: 5.7,
        staggerChildren: 1,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      translateY: 1,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };
  return (
    <div className="h-screen w-full ">
      <img className="h-screen w-screen object-cover"
         src="https://www.ktb.gov.tr/images/kapak.png"
        // src="https://sanatokur.com/wp-content/uploads/2023/09/kiz_kulesi-fotograf-esra_kaya-sanatokur.jpg"
        // src="https://safaelmali.com/img/istanbul-3911225_1920.jpg"
        alt=""/>

      

      <motion.div // FRAMER-MOTİON VE KAPSAYICI DİV
        initial="hidden"
        animate="visible"
        variants={container}
        className="absolute top-0 w-full h-[50%] flex flex-col items-center my-11 "
      >
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            className="rounded-full size-44"
            src="data:image/jpeg;base64,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"
            alt=""/>
        </motion.div>

        
                     {/* NAME-TİTLE SECTİON */}

        <div className="text-white text-xl mt-5">
          <span className="typeanimatecss">          {/*  span'le css kodlarında ortalandı dökümanda span kullanın yazıyor */}
            <TypeAnimation
              style={{ whiteSpace: "pre-line" }}
              sequence={[
                `Cenk Kaan Bölükbaş\nInformation Systems Engineer / Computer Programmer\nYou can check out my`,
                1000,
              ]}
            />
          </span>
        </div>

       
                   {/* SOCİAL MEDİA DÖNEN YAZILAR */}   

        <motion.div variants={item} className="mt-3 text-xl">
          <div className="mt-2">
            <TextAnim
              name="Linkedin"
              type="flip"
              color="white"
              count="infinite"
              duration={2}
            />
          </div>
          <div className="mt-1">
            <TextAnim
              name="Twitter"
              type="flip"
              color="white"
              count="infinite"
              duration={3}
            />
          </div>
          <div className="mt-1 ">
            <TextAnim
              name="Github"
              type="flip"
              color="white"
              count="infinite"
              duration={4}
            />
          </div>
        </motion.div>

         <motion.div variants={item} className="text-white mt-5 text-xl ">
          <TypeAnimation
            sequence={["By clicking the icon down below", 1000]}
          ></TypeAnimation>
        </motion.div>

                      {/* SOCİAL MEDİA LOGO BÖLÜMÜ */}

        <motion.div variants={item} className="mt-5 flex gap-3">
          <a href="https://www.linkedin.com/in/cenkkaanbolukbas/">
            <FaLinkedin className="border w-14 h-14 p-2 rounded-full cursor-pointer hover:bg-slate-600" />
          </a>
          <a href="https://twitter.com/cenkaanbolukbas">
            <FaXTwitter className="border w-14 h-14 p-2 rounded-full cursor-pointer hover:bg-slate-600" />
          </a>
          <a href="https://github.com/cenkkaanbolukbas">
            <FaGithub className="border w-14 h-14 p-2 rounded-full cursor-pointer hover:bg-slate-600" />
          </a>
        </motion.div>


                  {/* CONTACT */}
                  
        <motion.div variants={item} className="text-white mt-5 text-xl ">
          
          Contact Me :  
          <a href="mailto:cenkkaanbolukbas@hotmail.com">
          <TypeAnimation
            sequence={[" cenkkaanbolukbas@hotmail.com", 1000]}
          ></TypeAnimation></a>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default App;
