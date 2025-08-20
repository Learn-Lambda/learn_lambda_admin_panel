import { observer } from "mobx-react-lite";
import { CorePagination } from "../../core/ui/pagination/core_pagination";
import { useStore } from "../../core/helper/use_store";
import { TasksStore } from "./tasks_store";
import { Editor } from "@monaco-editor/react";
import { CoreText, CoreTextType } from "../../core/ui/text/text";
import { CoreTabs } from "../../core/ui/tabs/tabs";
import { InputV3 } from "../../core/ui/input/input_v3";
import { CoreButton } from "../../core/ui/button/button";

export const TasksPath = "/tasks";

export const Tasks = observer(() => {
  const store = useStore(TasksStore);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CoreTabs
        tabs={[
          {
            title: "Задачи",
            content: (
              <>
                <div style={{ height: "75vh", overflow: "auto" }}>
                  {store.models()?.map((el) => (
                    <div
                      style={{
                        border: "1px solid",
                        margin: 5,
                      }}
                    >
                      <div>id: {el.id}</div>
                      <div>name: {el.name}</div>
                      <div>description: {el.description}</div>
                      <div style={{ width: "50vw" }}>
                        <Editor
                          height={200}
                          defaultLanguage="typescript"
                          defaultValue={el.code}
                          onMount={(editor, _) => {}}
                        />
                      </div>
                      <div onClick={() => store.delete(el.id ?? 0)}>
                        Удалить
                      </div>
                    </div>
                  ))}
                </div>
                <CorePagination store={store} />
              </>
            ),
          },
          {
            title: "новая задача",
            content: (
              <>
                <div style={{ width: "100vw", overflow: "auto", height: 500 }}>
                  <div style={{ width: "40vw" }}>
                    <InputV3 label="name" store={store} />
                    <div style={{ height: 10 }} />
                    <InputV3 store={store} label="description" />
                    <div style={{ height: 10 }} />

                    <InputV3
                      onChange={(text) =>
                        store.updateForm({ complexity: Number(text) })
                      }
                      label="complexity"
                    />

                    <div style={{ height: 10 }} />

                    {store.viewModel.tags.map((el, index) => (
                      <InputV3
                        label={`тэг ${index + 1}`}
                        onChange={(text) =>
                          store.updateForm({
                            tags: store.viewModel.tags.map((element, i) => {
                              if (i === index) {
                                return text;
                              }
                              return element;
                            }),
                          })
                        }
                      />
                    ))}

                    <div
                      style={{ fontSize: 14 }}
                      onClick={() => {
                        store.viewModel.tags.push("");
                        console.log(store.viewModel.tags);
                      }}
                    >
                      Добавить тэг
                    </div>
                  </div>
                  <div style={{ border: "1px solid" }}>
                    <CoreText text="Code preview" type={CoreTextType.header} />
                    <Editor
                      height={300}
                      defaultLanguage="typescript"
                      defaultValue="// vscode preview"
                      onMount={(editor, _) => {}}
                      onChange={(text) => store.updateForm({ code: text })}
                    />
                    <CoreButton
                      onClick={() => store.createTaskModel()}
                      text="Заполнить модель"
                    />
                  </div>
                </div>
                <div style={{ height: 10 }} />
                <CoreButton
                  text="Создать новую задачу"
                  onClick={() => store.createNewModel()}
                />
              </>
            ),
          },
        ]}
      />
    </div>
  );
});
