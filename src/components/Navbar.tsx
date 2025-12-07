import { navIcons, navLinks } from "@/constants";
import useWindowStore from "@/store/window";
import type { NavIcon, NavLink } from "@/types/types";
import dayjs from "dayjs";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">My portfolio by Catevika</p>
        <ul>
          {navLinks.map(({ id, name, type }: NavLink) => (
            <li key={id} onClick={() => {openWindow(type)}}>
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }: NavIcon) => (
            <li key={id}>
              <img src={img} alt={`Icon ${id.toString()}`} className="icon-hover" />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
