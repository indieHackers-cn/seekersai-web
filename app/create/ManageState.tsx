import { create } from "zustand";

type StoreGlobalState = {
  file: File | null;
  userID: string;
  text: string;
  setFile: (_file: File) => void;
  setUserID: (_text:string) => void;
  setSearchBox: (_text: string) => void;
  enableInteration: () => void;
};

export const useGlobalState = create<StoreGlobalState>((set, get) => ({
  // initiize request parameters
  file: null,
  userID: "",
  text: "",
  setFile: (file: File) => set({ file }),
  setUserID: (userID: string) => set({ userID }),
  setSearchBox: (text: string) => set({ text }),
  enableInteration: async () => {
    const { file } = get();

    // try {
      const formData = new FormData();
      formData.append("resume", file as Blob);

      const response = await fetch("/api/resume-processor", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    }

//       const result = (await response.json()) as ResumeProcessorResponse;

//       set({ resumeProcessorResponse: result });
//     } catch (error) {
//       console.error(error);
//       const message = getErrorMessage(error);
//       set({ processingError: message });
//     } finally {
//       set({ isBackendProcessing: false });
//     }
//   },
//   clearResumeProcessorResponse: () => {
//     set({ resumeProcessorResponse: null });
//   },
}));
