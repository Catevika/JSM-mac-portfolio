import { WindowControls } from "@/components";
import { gallery, photosLinks } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";
import type { GalleryPhoto, PhotoLink } from "@/types/types";
import { Mail, Search } from "lucide-react";

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <div className="items-between flex w-full justify-end gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>
      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }: PhotoLink) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }: GalleryPhoto) => (
              <li
                key={id}
                onClick={() => {
                  openWindow("imgfile", {
                    id,
                    name: "Gallery Image",
                    icon: "/icons/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })}
                }
              >
                <img src={img} alt={`Gallery image ${id.toString()}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
const GalleryWindow = WindowWrapper(Photos, "photos");
export default GalleryWindow;
