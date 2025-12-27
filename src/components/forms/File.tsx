import React from "react";
// import "./file.css";


export function File(props: {
  label?: React.ReactNode;
  accept?: string;
  multiple?: boolean;
  onFiles: (files: FileList) => void;
}) {
  const { label, accept, multiple, onFiles } = props;
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [name, setName] = React.useState<string>("");

  return (
    <div className="ui-file">
      {label ? <div className="ui-file__label">{label}</div> : null}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        style={{ display: "none" }}
        onChange={(e) => {
          const files = e.target.files;
          if (!files || files.length === 0) return;
          setName(multiple ? `${files.length} файлов` : files[0].name);
          onFiles(files);
        }}
      />
      <button
        type="button"
        className="ui-file__button"
        onClick={() => inputRef.current?.click()}
      >
        <span>Выбрать файл</span>
        <span className="ui-file__name">{name || "Не выбрано"}</span>
      </button>
    </div>
  );
}
