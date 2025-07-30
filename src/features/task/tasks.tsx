import { observer } from "mobx-react-lite";
import { CorePagination } from "../../core/ui/pagination/core_pagination";
import { ModalV2 } from "../../core/ui/modal/modal";
import { useStore } from "../../core/helper/use_store";
import { CoreButton } from "../../core/ui/button/button";
import { TasksStore } from "./tasks_store";
import { Editor } from "@monaco-editor/react";

export const TasksPath = "/tasks";

export const Tasks = observer(() => {
  const store = useStore(TasksStore);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CoreButton
        text="Создать новую задачу"
        onClick={() => store.modalShow()}
      />

      <div style={{ height: "75vh", overflow: "auto" }}>
        {store.models()?.map((el) => (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* <div>{el.name}</div> */}
            <div onClick={() => store.editable(el)}>Редактирование</div>
            <div onClick={() => store.delete(el.id ?? 0)}>Удалить</div>
          </div>
        ))}
      </div>
      <CorePagination store={store} />
      <ModalV2
        store={store}
        children={
          <div style={{ height: "100vh", width: "100vw" }}>
            <Editor
              height="90vh"
              defaultLanguage="typescript"
              defaultValue="// код тут"
              onMount={(editor, _) => {
                // store.updateEditor(editor);
                // editor.onDidChangeCursorSelection((_) =>
                //   store.updateLastSection(editor.getSelection())
                // );
              }}
            />
          </div>
        }
      />
    </div>
  );
});
