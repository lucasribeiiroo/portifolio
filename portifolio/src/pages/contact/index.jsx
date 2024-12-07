import FlipWords from "../../components/flipwords";
import Socials from "../../components/socials";

const Contact = () => {
  const words = ["Linkedin", "WhatsApp"];
  return (
    <div className="h-screen  bg-gray-950 justify-center place-items-center">
      <div>
        <div className="text-3xl pt-20 text-white justify-center place-items-center">
          <h1 className="p-4 text-5xl flex justify-center place-items-center">
            Have some project ideia?{" "}
            <p className="ml-4 text-white text-6xl">
              {":"}
              <span className="text-sky-500">{")"}</span>
            </p>
          </h1>{" "}
          <h4 className="p-6 text-4xl flex justify-center place-items-center">
            You can reach me out through
            <FlipWords words={words} />
            <br />
          </h4>
          or just send an email to{" "}
          <a
            href="mailto:lucasribeiiroo@hotmail.com"
            className="underline text-sky-500 mt-20"
          >
            lucasribeiiroo@hotmail.com
          </a>
        </div>

        <div className="mt-10 justify-center place-items-center">
          <Socials cv iconsSize={40} removeItens />
        </div>
      </div>
    </div>
  );
};

export default Contact;
