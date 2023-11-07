import { create } from "zustand";
import { SearchForJDResponse } from "./types/JDResponse";

type StoreGlobalState = {
  file: File | null;
  userID: string;
  text: string;
  isInteration: boolean;
  display: SearchForJDResponse | null;
  setFile: (_file: File) => void;
  setUserID: (_userID:string) => void;
  setSearchBox: (_text: string) => void;
  enableInteration: () => void;
};

export const useGlobalState = create<StoreGlobalState>((set, get) => ({
  // initiize request parameters
  file: null,
  userID: "",
  text: "",
  isInteration: false,
  display: null,
  setFile: (file: File) => set({ file }),
  setUserID: (userID: string) => set({ userID }),
  setSearchBox: (text: string) => set({ text }),
  enableInteration: async () => {
    const { file, userID, text } = get();
    
    try {
      // 开始交互, 方便加锁
      set({ isInteration: true });
      set({ display: null }) ;

      const formData = new FormData();
      formData.append("user", userID);
      formData.append("resume", file as Blob);
      formData.append("job_title", text);

      const response = await fetch("http://54.151.64.106:49880/api/remote-jobs-matcher", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error("Something has happened wrong: error" + response.statusText);
      }

      const result = (await response.json()) as SearchForJDResponse;
      set({ display: result });

    } catch(error) {
      console.error(error);
    } finally {
      // 结束交互
      set({ isInteration: false });
    }
  },
}));
