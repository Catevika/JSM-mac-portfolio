export interface NavLink {
  id: number;
  name: string;
  type: string;
};

export interface NavIcon {
  id: number;
  img: string;
};

export interface WindowData {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
};

export type WindowConfig = Record<string, WindowData>;

export interface WindowStore {
  windows: WindowConfig;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: unknown) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
};

export interface DockApp {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
};

export interface Location {
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
  windowPosition?: string;
  children?: Location[];
};

export interface LocationStore {
  activeLocation: Location;
  setActiveLocation: (location: Location) => void;
  resetActiveLocation?: (location?: Location) => void;
};
export interface TextFileData {
  id: number;
  name: string;
  image?: string;
  subtitle?: string;
  description?: string[];
};

export interface ImageFileData {
  id: number;
  name: string;
  icon?: string;
  kind?: string;
  fileType?: string;
  position?: string;
  imageUrl?: string;
};

export interface Social {
  id: number;
  bg: string;
  icon: string;
  link: string;
  text: string;
};

export interface PhotoLink {
  id: number;
  icon: string;
  title: string;
};

export interface GalleryPhoto {
  id: number;
  img: string;
};
