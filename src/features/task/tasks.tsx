import { observer } from "mobx-react-lite";
import { CorePagination } from "../../core/ui/pagination/core_pagination";
import { ModalV2 } from "../../core/ui/modal/modal";
import { useStore } from "../../core/helper/use_store";
import { CoreButton } from "../../core/ui/button/button";
import { TasksStore } from "./tasks_store";
import { Editor } from "@monaco-editor/react";
import { InputV2 } from "../../core/ui/input/input_v2";
import { CoreText, CoreTextType } from "../../core/ui/text/text";

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
            <div>{el.name}</div>
            <div>{el.description}</div>

            <div onClick={() => store.editable(el)}>Редактирование</div>
            <div onClick={() => store.delete(el.id ?? 0)}>Удалить</div>
          </div>
        ))}
      </div>
      <CorePagination store={store} />
      <ModalV2
        store={store}
        children={
          <div style={{ width: "100vw", overflow: "auto", height: 500 }}>
            <div style={{ width: "40vw" }}>
              <InputV2
                onChange={(text) => store.updateForm({ name: text })}
                label="name"
              />
              <div style={{ height: 10 }} />
              <InputV2
                onChange={(text) => store.updateForm({ description: text })}
                label="description"
              />
              <div style={{ height: 10 }} />

              <InputV2
                onChange={(text) => store.updateForm({ functionName: text })}
                label="functionName"
              />
              <div style={{ height: 10 }} />

              <InputV2
                onChange={(text) =>
                  store.updateForm({ complexity: Number(text) })
                }
                label="complexity"
              />
              <div style={{ height: 10 }} />
              <InputV2
                onChange={(text) =>
                  store.updateForm({ testArguments: JSON.parse(text) })
                }
                label={"testArguments"}
              />
            </div>
            <CoreText text="Code preview" type={CoreTextType.header} />
            <Editor
              defaultLanguage="typescript"
              defaultValue="// vscode preview"
              onMount={(editor, _) => {}}
              onChange={(text) => store.updateForm({ code: text })}
            />
          </div>
        }
      />
    </div>
  );
});
