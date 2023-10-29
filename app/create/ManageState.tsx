import { create } from "zustand";

type StoreGlobalState = {
  file: File | null;
  setFile: (_file: File) => void;
  enableInteration: () => void;
};

export const useGlobalState = create<StoreGlobalState>((set, get) => ({
  file: null,
  setFile: (file: File) => set({ file }),
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
