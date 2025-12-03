import { locations } from "@/constants";
import type { Location, LocationStore } from "@/types/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION: Location = locations.work;

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        if (location != null)
          state.activeLocation = location;
      }),

    resetActiveLocation: (location = DEFAULT_LOCATION) =>
      set((state) => {
        state.activeLocation = location;
      }),
  }))
);

export default useLocationStore;
