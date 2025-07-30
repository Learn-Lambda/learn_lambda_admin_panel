import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function EditableMarkdown(props: {
  onChange: (text: string) => void;
  initValue?: string;
}) {
  const [markdown, setMarkdown] = useState(
    props.initValue ?? "Описание категории в markdown..."
  );
  const [isEditing, setIsEditing] = useState(true);
  useEffect(() => {
    if (isEditing === true) {
      props.onChange(markdown);
    }
  }, [isEditing, markdown, props]);

  return (
    <div>
      {isEditing ? (
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows={10}
          cols={50}
        />
      ) : (
        <Markdown>{markdown}</Markdown>
      )}
      <div>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Просмотр" : "Редактировать"}
        </button>
      </div>
    </div>
  );
}
