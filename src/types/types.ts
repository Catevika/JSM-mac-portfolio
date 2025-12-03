export type NavLink = {
  id: number;
  name: string;
  type: string;
};

export type NavIcon = {
  id: number;
  img: string;
};

export type WindowData = {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
};

export type WindowConfig = Record<string, WindowData>;

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

export type Location = {
  id: number;
  type?: string;
  name: string;
  image?: string;
  subtitle?: string;
  icon: string;
  kind: string;
  fileType?: string;
  position?: string;
  description?: string[];
  href?: string;
  imageUrl?: string;
  children?: Location[];
};

export type LocationStore = {
  activeLocation: Location;
  setActiveLocation: (location: Location) => void;
  resetActiveLocation?: (location?: Location) => void;
};
export type TextFileData = {
  id: number;
  name: string;
  image?: string;
  subtitle?: string;
  description?: string[];
};

export type ImageFileData = {
  id: number;
  name: string;
  icon?: string;
  kind?: string;
  fileType?: string;
  position?: string;
  imageUrl?: string;
};

export type Social = {
  id: number;
  bg: string;
  icon: string;
  link: string;
  text: string;
};
