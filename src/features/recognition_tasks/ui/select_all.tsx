import { Editor } from "@monaco-editor/react";
 import { observer } from "mobx-react-lite";
import { NavigateFunction } from "react-router-dom";
import { useStore } from "../../../core/helper/use_store";
import { FormState } from "../../../core/store/base_store";
import * as monaco from "monaco-editor";
import makeAutoObservable from "mobx-store-inheritance";

export class SelectAllModel {}

export interface SelectRange {
  range: any;
  options: {
    className: string;
    isWholeLine: boolean;
    inlineClassName: string;
  };
}
type SelectRangeHelper = {
  range: SelectRange | never[];
  options: {
    className: string;
    isWholeLine: boolean;
    inlineClassName: string;
  };
}[];

export class SelectSectionModel {
  selectRange: SelectRangeHelper;
  code: string;
  constructor(selectRange: SelectRangeHelper, code: string) {
    this.code = code;
    this.selectRange = selectRange;
  }
}
export class SelectAllStore extends FormState<SelectAllModel> {
  deleteSection = (index: number): void => {
    this.selectSectionModels = this.selectSectionModels.filter(
      (el, i) => index !== i
    );
    this.editor?.deltaDecorations(
      [],
      this.getLastSection() as unknown as monaco.editor.IModelDeltaDecoration[]
    );
  };
  lastSection?: SelectRange = undefined;
  editor?: monaco.editor.IStandaloneCodeEditor = undefined;
  viewModel: SelectAllModel;

  selectSectionModels: SelectSectionModel[] = [];
  constructor() {
    super();
    makeAutoObservable(this);
  }

  getLastSection = (): SelectRangeHelper => [
    {
      range: this.lastSection ?? [],
      options: {
        className: "my-square-decoration",
        isWholeLine: false,
        inlineClassName: "my-square-border",
      },
    },
  ];

  updateLastSection = (selection: monaco.Selection | null) => {
    this.lastSection = selection as unknown as SelectRange;
  };

  async init(navigate?: NavigateFunction): Promise<any> {
    window.addEventListener("keydown", this.onCtrlKey);
  }

  onCtrlKey = (event: KeyboardEvent) => {
    if (event.key === "Control") {
      this.editor?.deltaDecorations(
        [],
        this.getLastSection() as unknown as monaco.editor.IModelDeltaDecoration[]
      );
      this.selectSectionModels.push(
        new SelectSectionModel(
          this.getLastSection(),
          this.editor
            ?.getModel()
            ?.getValueInRange(this.lastSection as any) as string
        )
      );
    }
  };
  updateEditor(editor: monaco.editor.IStandaloneCodeEditor) {
    this.editor = editor;
  }

  dispose(): void {
    window.removeEventListener("keydown", this.onCtrlKey);
  }
}
export const SelectAll = observer(() => {
  const store = useStore(SelectAllStore);
  return (
    <>
      <style>
        {`
          .my-square-border {
            border: 2px solid red;
            border-radius: 2px;
            box-sizing: border-box;
            background-color: #7fffd47a;            
          }
        `}
      </style>
      <div style={{ display: "flex" }}>
        <Editor
          height="90vh"
          defaultLanguage="typescript"
          defaultValue="// код тут"
          onMount={(editor: monaco.editor.IStandaloneCodeEditor, _) => {
            store.updateEditor(editor);
            editor.onDidChangeCursorSelection((_) =>
              store.updateLastSection(editor.getSelection())
            );
          }}
        />
        <div style={{ height: "100%" }}>
          Выделенные фрагменты
          <div>
            {store.selectSectionModels.map((el, index) => (
              <div>
                <div>{index + 1}</div>
                <div>{el.code}</div>
                <div
                  onClick={() => store.deleteSection(index)}
                  style={{
                    border: "1px solid red",
                    textAlign: "center",
                    borderRadius: 20,
                    backgroundColor: "#ff0000ab",
                    color: "white",
                  }}
                >
                  удалить
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});