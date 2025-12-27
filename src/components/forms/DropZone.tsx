import React from "react";
// import "./dropzone.css";


export function DropZone(props: {
  onFiles: (files: FileList) => void;
  title?: React.ReactNode;
  hint?: React.ReactNode;
}) {
  const { onFiles, title = "Перетащите файлы сюда", hint = "или нажмите, чтобы выбрать" } = props;
  const [over, setOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <div
      className="ui-drop"
      data-over={over ? "true" : "false"}
      onDragEnter={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setOver(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          onFiles(e.dataTransfer.files);
        }
      }}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
    >
      <input
        ref={inputRef}
        type="file"
        style={{ display: "none" }}
        onChange={(e) => {
          const files = e.target.files;
          if (!files || files.length === 0) return;
          onFiles(files);
        }}
      />

      <div className="ui-drop__title">{title}</div>
      <div className="ui-drop__hint">{hint}</div>
    </div>
  );
}
