import { navIcons, navLinks } from "@/constants";
import type { NavIcons, NavLinks } from "@/types/types";
import dayjs from "dayjs";

const Navbar = () => {
  return <nav>
    <div>
      <img src="/images/logo.svg" alt="Logo" />
      <p className="font-bold">Catevika's portfolio</p>
      <ul>
        {navLinks.map(({ id, name }: NavLinks) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>

    <div>
      <ul>
        {navIcons.map(({ id, img }: NavIcons) => (
          <li key={id}>
            <img src={img} alt={`Icon ${id}`} className="icon-hover" />
          </li>
        ))}
      </ul>
      <time>{dayjs().format("ddd MMM D h:mm A")}</time>
    </div>
  </nav>;
};

export default Navbar;
