import { WindowControls } from "@/components";
import { locations } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";
import useLocationStore from "@/store/location";
import useWindowStore from "@/store/window";
import type { Location } from "@/types/types";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item: Location) => {
    if (item.kind === "folder") {
      setActiveLocation(item);
    } else {
      if (item.fileType === "pdf") {
        openWindow("resume");
      } else if (["fig", "url"].includes(item.fileType!) && item.href) {
        window.open(item.href, "_blank");
      } else {
        openWindow(item.fileType! + item.kind, item);
      }
    }
  };

  const renderList = (name: string, items: Location[]) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setActiveLocation(item);
            }}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active",
            )}
          >
            <img src={item.icon} alt={item.name} />
            <p className="truncate text-sm font-medium">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="flex h-full bg-white">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation.children?.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => {openItem(item)}}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
