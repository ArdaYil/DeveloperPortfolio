import { create } from "zustand";

interface ImageStore {
  images: string[];
  setImages: (images: string[]) => void;
}

const imageStore = create<ImageStore>((set) => ({
  images: [],
  setImages: (images) => set(() => ({ images })),
}));

export default imageStore;
