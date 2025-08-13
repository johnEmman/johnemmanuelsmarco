import { CiLocationOn } from "react-icons/ci";
import "animate.css";

export default function Home() {
  return (
    <>
      <main className="px-5 lg:px-70 text-gray-950  font-mono bg-[#ffffff]">
        <div>
          <div className="grid h-screen grid-cols-3 grid-rows-5 gap-4">
            <div className=" col-span-3 row-span-2 row-start-4">
              <div className=" text-3xl md:text-5xl animate__animated animate__backInDown">
                EJ S. Marco
              </div>
              {/* <img src="" alt="" srcset="" /> */}
              <div>Full-Stack Developer | Computer Science Graduate</div>
              <div className="flex gap-0.5 items-center">
                <CiLocationOn />
                <div>Manila, Philippines</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid h-screen  grid-cols-3 grid-rows-5 gap-7">
            <div className="col-span-2   row-span-3 row-start-2">
              <div>About</div>
              <div className="flex mt-7 items-center gap-2">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQF40U_E-6fU2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682683941506?e=1758153600&v=beta&t=b_Q-2Mb5cz6npatcH2b-VFZ4xl4_8E2aRM9ynMdhCpY"
                  alt=""
                  className=" rounded-full h-[5rem]"
                />
                <div>
                  <div className="text-2xl">Hi, I'm John Emmanuel Marco</div>
                  <div className=" text-[10px]">22 Yesrs Old</div>
                </div>
              </div>
              <div className="py-3  text-gray-600 flex flex-col gap-6 text-[15px]">
                <div className="">
                  I’m a Software Developer skilled in full-stack, real-time
                  systems, and AI. Built an ALPR system boosting detection by
                  40% and a WebRTC tool cutting feedback by 50%.
                </div>
                <div>
                  Proficient in Python, JavaScript, TypeScript, React, Node.js,
                  WebRTC, and Hugging Face. Improved mobile engagement by 25%
                  and reduced defects by 35%.
                </div>
                <div>
                  Passionate about building efficient, user-friendly solutions
                  that drive growth. Skilled in databases, SEO, and networks,
                  blending innovation with practicality.
                </div>
              </div>
            </div>
            <div className="row-span-3   col-start-3 row-start-2">
              <div className="pb-12">Quotes</div>
              <div className="flex flex-col ">
                <div className="mb-2.5">
                  <div className="text-[12px] text-gray-600">
                    Coding like poetry should be short and concise
                  </div>
                  <div className="text-end text-[10px]">– Santosh Kalwar</div>
                </div>

                <div className="mb-2.5">
                  <div className="text-[12px] text-gray-600">
                    It’s not a bug; it’s an undocumented feature.
                  </div>
                  <div className="text-end text-[10px]">– Anonymous</div>
                </div>
                <div className="mb-2.5">
                  <div className="text-[12px] text-gray-600">
                    First, solve the problem. Then, write the code.
                  </div>
                  <div className="text-end  text-[10px]">– John Johnson</div>
                </div>
                <div className="mb-2.5">
                  <div className="text-[12px] text-gray-600">
                    Clean code always looks like it was written by someone who
                    cares.
                  </div>
                  <div className="text-end  text-[10px]">
                    – Robert C. Martin
                  </div>
                </div>
                <div className="mb-2.5">
                  <div className="text-gray-600 text-[12px]">
                    Most good programmers do programming not because they expect
                    to get paid, but because it is fun to program.
                  </div>
                  <div className="text-end  text-[10px]">– Linus Torvalds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen bg-amber-200">hello</div>
      </main>
      <footer></footer>
    </>
  );
}
