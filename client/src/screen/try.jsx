import { useState } from "react";

function EditableText() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Untitled Document");

  const handleRename = () => setIsEditing(true);
  const handleBlur = () => setIsEditing(false);
  const handleChange = (e) => setText(e.target.value);

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className="border-b-2 border-blue-500 outline-none px-1"
        />
      ) : (
        <span
          onClick={handleRename}
          className="text-xl font-bold cursor-pointer hover:underline"
        >
          {text}
        </span>
      )}
    </div>
  );
}

export default EditableText;
