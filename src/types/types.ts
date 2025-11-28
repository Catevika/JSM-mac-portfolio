export type NavLinks = {
  id: number;
  name: string;
  type: string;
};

export type NavIcons = {
  id: number;
  img: string;
};

export type Window = {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
};

export type WindowConfig = Record<string, Window>;

export type WindowStore = {
  windows: WindowConfig;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: unknown) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
};

export type DockApp = {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
};