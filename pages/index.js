import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import joshphoto from "../public/josh-research.jpg";
import swarm from "../public/dronecapture.jpg";
import cam2 from "../public/cam2.jpg";
import droneicon from "../public/droneicon.png";
import pic1 from "../public/pic1.jpg";
import pic2 from "../public/pic2.jpg";
import pic3 from "../public/pic3.png";
import pic4 from "../public/pic4.jpg";
import pic5 from "../public/pic5.jpg";
import pic6 from "../public/pic6.jpg";
import pic7 from "../public/pic7.jpg";
import pic8 from "../public/pic8.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Joshua Chang portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-vcr dark:text-white">Robin6205</h1>
            <ul className="flex flex-row items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1L2yqpFs1VAkRFD7ktzHYkP6sq1-H3SAo/view"
                    )
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-vcr md:text-6xl">
              Joshua Chang
            </h2>

            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-zinc-400">
              Computer Engineer interested in autonomous control systems and
              software development. Feel free to check out my projects!
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/joshua-chang-40/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/robin6205">
              <AiFillGithub />
            </a>
            <AiFillYoutube />
          </div>
          {/* set max image size to 96 */}
          <div className="relative justify-center mx-auto mt-20 overflow-hidden min-w-1/2 max-w-xl max-h-50 ">
            <Image src={joshphoto} objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 font-vcr mt-20 dark:text-white">
              Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-zinc-400">
              List of personal projects and research I have worked on. My
              <span className="text-teal-500"> research </span>
              projects are open source and available on my github.
            </p>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-zinc-400">
              Software projects are developed with:
              <span className="text-teal-500">
                {" "}
                Python, C++, Javascript, etc.{" "}
              </span>
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100">
              <Image src={swarm} width={350} height={250} />
              <h3 className="text-lg font-vcr pt-8 pb-2">
                SWARM Drone Flight Control Research Platform
              </h3>
              <p className="py-2">
                Research project focused on developing open-sourced flight
                control systems for a swarm of drones. And a web application
                that allows developers to build and test the algorithms with
                easy-to-use tools in simulated environments
              </p>
              <h4 className="py-4 text-teal-600">Software stack</h4>
              <p className="text-gray-800 py-1">Unreal Engine</p>
              <p className="text-gray-800 py-1">Airsim API (Python)</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100">
              <Image src={cam2} width={200} height={200} />
              <h3 className="text-lg font-vcr pt-8 pb-2">
                Cam2 Forest Inventory Analysis Research
              </h3>
              <p className="py-2">
                Research project focused on developing open-sourced flight
                control systems for a swarm of drones. And a web application
                that allows developers to build and test the algorithms with
                easy-to-use tools in simulated environments
              </p>
              <h4 className="py-4 text-teal-600">Software stack</h4>
              <p className="text-gray-800 py-1">Unreal Engine</p>
              <p className="text-gray-800 py-1">Airsim API (Python)</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100">
              <Image src={droneicon} width={200} height={200} />
              <h3 className="text-lg font-vcr pt-8 pb-2">Drone build</h3>
              <p className="py-2">
                Research project focused on developing open-sourced flight
                control systems for a swarm of drones. And a web application
                that allows developers to build and test the algorithms with
                easy-to-use tools in simulated environments
              </p>
              <h4 className="py-4 text-teal-600">Software stack</h4>
              <p className="text-gray-800 py-1">Unreal Engine</p>
              <p className="text-gray-800 py-1">Airsim API (Python)</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 font-vcr dark:text-white">
              Portfolio / Contact
            </h3>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-zinc-400">
              List of personal projects and research I have worked on. My
              <span className="text-teal-500"> research </span>
              projects are open source and available on my github.
            </p>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-zinc-400">
              Software projects are developed with:
              <span className="text-teal-500">
                {" "}
                Python, C++, Javascript, etc.{" "}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={pic2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={pic5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={pic1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src={pic6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={pic4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={pic7}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={pic8}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}