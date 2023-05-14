import { NextPage } from 'next';
import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';

const socials = [
  {
    href: 'https://discord.gg/zW6jpzVRZc',
    color: '#5865F2',
    icon: 'fa6-brands:discord',
  },
  {
    href: 'https://youtube.com/@keksdev',
    color: '#ff0000',
    icon: 'fa6-brands:youtube',
  },
  {
    href: 'https://twitch.tv/keksdev9513',
    color: '#9146FF',
    icon: 'fa6-brands:twitch',
  },
  {
    href: 'https://github.com/tunikakeks',
    color: '#9146FF',
    icon: 'fa6-brands:github',
  },
];

const item: MotionProps = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Site = () => {
  return (
    <div className="max-w-screen h-screen min-h-screen w-screen bg-black">
      <motion.div
        animate={{
          zIndex: [0, 0, 0, -100],
        }}
        transition={{
          duration: 2,
          delay: 2,
        }}
        className="absolute grid h-screen w-screen place-items-center"
      >
        <motion.p
          className="font-poppins font-black text-white"
          animate={{
            opacity: [1, 1, 1, 0],
            fontSize: ['3rem', '3rem', '2rem', '2rem'],
            y: [0, 0, 0, 400],
          }}
          transition={{
            duration: 1.5,
            ease: [0.5, 0, 0.5, 1],
          }}
        >
          KeksDev
        </motion.p>
      </motion.div>
      <div className="background max-w-screen grid h-screen max-h-screen w-screen place-items-center bg-dark px-2 text-white">
        <motion.div
          className="grid grid-cols-12 rounded-lg p-6 shadow-xl"
          animate={{
            backgroundColor: ['#000000', '#404040'],
            width: ['100%', '100%', '100%', '75%'],
            borderRadius: ['0', '0', '0.5rem'],
          }}
          transition={{
            ease: [0.5, 0, 0.5, 1],
            duration: 1,
            delay: 1,
          }}
        >
          <motion.div
            id="sidebar"
            className="lg:grid-span-1 hidden w-16 place-items-center border-r border-white border-opacity-25 px-2 lg:grid"
            animate={{
              x: [-54, -27, -27, 0],
              height: ['0%', '25%', '100%', '100%'],
            }}
            transition={{
              duration: 1,
              ease: [0.5, 0, 0.5, 1],
              delay: 2,
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 3,
                duration: 0.25,
                ease: [0.5, 0, 0.5, 1],
              }}
            >
              {socials.map((l, i) => {
                return (
                  <motion.a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10"
                    key={`socials ${i}`}
                  >
                    <Icon
                      icon={l.icon}
                      className={`my-6 h-10 w-10 hover:text-[${l.color}] transition-colors duration-200`}
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
          <div
            id="main"
            className="container col-span-12 mx-auto p-2 lg:col-span-10"
          >
            <motion.p
              animate={{ y: [50, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.3,
                ease: [0.5, 0, 0.5, 1],
                delay: 3.25,
              }}
              className="font-poppins text-4xl font-black flex"
            >
              <motion.img src="https://media.discordapp.net/attachments/1036377496926556220/1036377647695007794/CC_Express_20220424_0133050.6834317868743442-1.png?width=676&height=676" height={40} width={40} style={{ borderRadius: "25px", marginRight: "5px" }} />
              KeksDev
            </motion.p>
            <motion.p
              animate={{ y: [50, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.3,
                ease: [0.5, 0, 0.5, 1],
                delay: 3.3,
              }}
            >
              Hi. I&apos;m KeksDev, just another german developer.
            </motion.p>
            
            <motion.p
              className="font-poppins my-6 text-xl font-black uppercase"
              animate={{ y: [50, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.3,
                ease: [0.5, 0, 0.5, 1],
                delay: 3.95,
              }}
            >
              My Projects
            </motion.p>

            <p>
              <motion.a
                animate={{ y: [50, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.3,
                  ease: [0.5, 0, 0.5, 1],
                  delay: 4.05,
                }}
                href="https://dbleu.org/b/eytron"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  margin: "5px"
                }}
              >
                <motion.img src="https://cdn.keksdev.ga/uploads/Eytron/logo.png" height={25} width={25} /> │ Eytron - Discord Bot
              </motion.a>
            </p>
            <p>
              <motion.a
                animate={{ y: [50, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.3,
                  ease: [0.5, 0, 0.5, 1],
                  delay: 4.05,
                }}
                href="https://dbleu.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  margin: "5px"
                }}
              >
                <motion.img src="https://cdn.discord-botlist.eu/pictures/logo.png" height={25} width={25} style={{ borderRadius: "1rem" }} /> │ dbleu.org - Discord Botlist
              </motion.a>
            </p>
            <p>
              <motion.a
                animate={{ y: [50, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.3,
                  ease: [0.5, 0, 0.5, 1],
                  delay: 4.05,
                }}
                href="https://discord.gg/pycmc"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  margin: "5px"
                }}
              >
                <motion.img src="https://cdn.discordapp.com/avatars/840525807554134026/eaa357797be1a7f1e762be5fba410ab2.png?size=1024" height={25} width={25} /> │ PyCMC - Minecraft Bedrock Edition Servernetwork
              </motion.a>
            </p>
            <p>
              <motion.a
                animate={{ y: [50, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.3,
                  ease: [0.5, 0, 0.5, 1],
                  delay: 4.1,
                }}
                href="https://github.com/tunikakeks/about-me"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  marginTop: "15px",
                  marginLeft: "5px"
                }}
              >
                Site source code
              </motion.a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <title>KeksDev</title>
      <Site></Site>
    </div>
  );
};

export default Home;
