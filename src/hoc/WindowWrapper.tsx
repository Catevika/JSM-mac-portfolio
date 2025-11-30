import React, { type ComponentProps, useLayoutEffect, useRef } from 'react';
import useWindowStore from '@/store/window';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';

const WindowWrapper = (Component: React.FC, windowKey: string) => {
  const Wrapped = (props: ComponentProps<typeof Component>) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLDivElement>(null);

    // Draggable window
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      gsap.registerPlugin(Draggable);
      const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey) });
      return () => instance.kill();
    }, []);

    // Open window + GSAP animation
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = 'block';
      gsap.fromTo(el, {scale: 0.8, opacity: 0, y:40}, {scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out'});
    }, [isOpen]);

    // Close window with useLayoutEffect
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? 'block' : 'none';
    }, [isOpen]);

    return (
      <section
        className='absolute'
        id={windowKey}
        onClick={() => focusWindow(windowKey)}
        ref={ref}
        style={{ zIndex }}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped;
};

export default WindowWrapper;
