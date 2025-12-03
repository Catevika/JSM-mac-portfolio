import { WindowControls } from "@/components";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";
import type { ImageFileData } from "@/types/types";

const ImageView = () => {
  const { windows } = useWindowStore();

  const data = windows.imgfile.data as ImageFileData | null;
  if (!data || typeof data !== "object" || !("name" in data)) {
    return null;
  }

  const { name, position, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="flex flex-col gap-6 bg-white p-5">
        {imageUrl ? (
          <div className="w-full">
            <img src={imageUrl} alt={name} className={position} />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageView, "imgfile");
export default ImageWindow;
