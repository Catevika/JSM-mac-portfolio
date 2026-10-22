import { trashes } from '@/constants';
import WindowWrapper from '@/hoc/WindowWrapper';
import { WindowControls } from '@/components';
import useWindowStore from "@/store/window";
import type { Trash } from "@/types/types";

const Trash = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id='window-header'>
        <WindowControls target='trash' />
        <h2>Trash</h2>
      </div>
      <div className='trash'>
        <ul className='content'>
          {trashes.map(({ id, name, imageUrl }: Trash) => (
            <li
              key={id}
              onClick={() => {
                openWindow("imgfile", {
                  id,
                  name,
                  imageUrl,
                });
              }}
            >
              <img src="/images/image.png" alt={name} />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const TrashWindow = WindowWrapper(Trash, 'trash');

export default TrashWindow;
