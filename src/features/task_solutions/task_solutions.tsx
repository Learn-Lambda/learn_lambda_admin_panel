import { useParams } from "react-router-dom";
import { useStore } from "../../core/helper/use_store";
import { TaskSolutionStore } from "./task_solutions_store";
import { useEffect } from "react";
import { CoreTabs } from "../../core/ui/tabs/tabs";
import { Editor } from "@monaco-editor/react";
import { observer } from "mobx-react-lite";
import { Button } from "antd";
import { CoreButton } from "../../core/ui/button/button";
export const TaskSolutionPath = "/task/solution/";
export const TaskSolutionScreen = observer(() => {
  const params = useParams();

  const store = useStore(TaskSolutionStore);
  useEffect(() => {
    store.initParam(params.id as string);
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CoreTabs
        tabs={[
          {
            title: "Таск",
            content: (
              <>
                <div>id: {store.task?.id}</div>
                <div>name: {store.task?.name}</div>
                <div>description: {store.task?.description}</div>

                <div style={{ width: "50vw" }}>
                  <Editor
                    height={200}
                    defaultLanguage="typescript"
                    value={store.task?.code}
                    defaultValue={store.task?.code}
                    onMount={(editor, _) => {}}
                  />
                </div>
              </>
            ),
          },
          {
            title: "Решения таска",
            content: (
              <>
                {store.viewModels?.map((el, index) => (
                  <div>
                    <div style={{ padding: 20, fontSize: 30 }}>{index + 1}</div>
                    <CoreButton
                      text="Удалить"
                      onClick={() => store.deleteSolutions(el.id as number)}
                    />
                    <Editor
                      height={200}
                      defaultLanguage="typescript"
                      value={el.code}
                      defaultValue={el.code}
                      onMount={(editor, _) => {}}
                    />
                  </div>
                ))}
              </>
            ),
          },
          {
            title: "Добавить новое решение",
            content: (
              <>
                <Editor
                  height={200}
                  defaultLanguage="typescript"
                  value={store.task?.code}
                  defaultValue={store.task?.code}
                  onMount={(editor, _) => {}}
                  onChange={(text) => {
                    if (text !== undefined) store.newSolution.code = text;
                  }}
                />
                <CoreButton
                  text="Отправить"
                  onClick={() => store.sendNewSolution()}
                />
              </>
            ),
          },
        ]}
      />
    </div>
  );
});
