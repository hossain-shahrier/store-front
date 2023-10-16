import { create } from 'zustand';

import { Product } from '@/types';

interface PreviewModelStore {
  isOpen: boolean;
  data: Product | null;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePriveiwModel = create<PreviewModelStore>((set) => ({
  isOpen: false,
  data: null,
  onOpen: (data) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false, data: null }),
}));

export default usePriveiwModel;
