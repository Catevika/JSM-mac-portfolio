import { WindowControls } from "@/components";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";
import type { TextFileData } from "@/types/types";

const TextView = () => {
  const { windows } = useWindowStore();

  const data = windows.txtfile.data as TextFileData | null;
  if (!data || typeof data !== "object" || !("name" in data)) {
    return null;
  }

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="flex flex-col gap-6 bg-white p-5">
        {image ? (
          <div className="w-full">
            <img src={image} alt={name} className="h-auto w-full rounded" />
          </div>
        ) : null}
        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}
        {Array.isArray(description) && description.length > 0 ? (
          <div className="flex flex-col gap-3 text-base leading-relaxed text-gray-800">
            {description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(TextView, "txtfile");
export default TextWindow;
