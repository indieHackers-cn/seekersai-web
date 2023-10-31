"use client";

// concatenate toolkit
import clsx from "clsx";
import { useState } from "react";

import { useGlobalState } from "./ManageState";

interface FileUploadProps {
  userID: string;
  buttonLabel?: string;
  dropZoneLabel?: string;
};

// only support pdf format currently
const FILE_TYPES = ["application/pdf"];

export default function ResumeUpload({
  userID,
  buttonLabel = "Click to upload file",
  dropZoneLabel = "Or drag and drop file",
}: FileUploadProps) {

const { setUserID, setFile } = useGlobalState();

const [fileName, setFileName] = useState<string>();
const [isDragging, setIsDragging] = useState(false);

const acceptedFileTypes = FILE_TYPES.join(", ");

// 状态改变器
function saveSelectedFileToState(file: File) {
  setUserID(userID);
  setFileName(file.name);
  setFile(file);
}

// handle upload event
function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
  const uploadedFile = e.target.files?.[0] || null;

  if (uploadedFile && FILE_TYPES.includes(uploadedFile.type)) {
    saveSelectedFileToState(uploadedFile);
    }
}

// handle drop file event
function handleDrop(e: React.DragEvent<HTMLDivElement>) {
  e.preventDefault();
  setIsDragging(false);

  const droppedFile = e.dataTransfer.files?.[0] || null;

  if (droppedFile && FILE_TYPES.includes(droppedFile.type)) {
    saveSelectedFileToState(droppedFile);
  }
}

function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
  e.preventDefault();
  setIsDragging(true);
}

return (
  <div
    className={clsx(
    "flex flex-col gap-4 p-6 border-2 border-dashed border-gray-300 rounded-lg",
    { "border-purple-100 opacity-50": isDragging }
    )}
    onDragOver={handleDragOver}
    onDragLeave={() => setIsDragging(false)}
    onDrop={handleDrop}
  >
    <input
        type="file"
        id="upload-btn"
        onChange={handleUpload}
        accept={acceptedFileTypes}
        hidden
        multiple={false}
    />
      
    <label
      htmlFor="upload-btn"
      className="block text-black text-base p-12 rounded-2xl italic hover:not-italic cursor-pointer bg-gray-300"
    >
    
    {buttonLabel}
      </label>
      <small className="text-center text-black text-base">
        Drag and drop files here...
      </small>
      {fileName ? (
        <span className="block text-2xl text-center text-cyan-500">
          {fileName}
        </span>
      ) : (
        <p className="block text-2xl text-center">{dropZoneLabel}</p>
      )}
    </div>
  );
};