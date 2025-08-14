import { CiLocationOn } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      <div>
        <div className="grid h-screen grid-cols-3 grid-rows-5 gap-4">
          <div className=" col-span-3 row-span-2 row-start-4">
            <div className=" text-3xl md:text-5xl animate__animated animate__backInDown">
              EJ S. Marco
            </div>
            <div>Full-Stack Developer | Computer Science Graduate</div>
            <div className="flex gap-0.5 items-center">
              <CiLocationOn />
              <div>Manila, Philippines</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
