import { WindowControls } from "@/components";
import { socials } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";
import type { Social } from "@/types/types";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="j flex flex-col gap-5 p-5">
        <div className="flex items-center gap-5">
          <img
            src="/images/adrian.jpg"
            alt="Adrian"
            className="w-20 rounded-full"
          />
          <div>
            <h3>Let's Connect</h3>
            <p>
              Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
            </p>
            <p>contact@jsMastery.pro</p>
          </div>
        </div>
        <ul>
          {socials.map(({ id, bg, icon, link, text }: Social) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title="text"
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
