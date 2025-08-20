import { observer } from "mobx-react-lite";
import { useStore } from "../../core/helper/use_store";
import { RecognitionTaskCategoryStore } from "./recognition_category_store";
import { CorePagination } from "../../core/ui/pagination/core_pagination";
import { ModalV2 } from "../../core/ui/modal/modal";
import EditableMarkdown from "./ui/editable_markdown";
import { CoreButton } from "../../core/ui/button/button";
import { Input } from "antd";

export const RecognitionCategoryPath = "/recognition/category";

export const RecognitionCategory = observer(() => {
  const store = useStore(RecognitionTaskCategoryStore);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CoreButton
        text="Создать новую категорию  "
        onClick={() => store.modalShow()}
      />

      <div style={{ height: "75vh", overflow: "auto" }}>
        {store.models()?.map((el) => (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>{el.name}</div>
            <div onClick={() => store.editable(el)}>Редактирование</div>
            <div onClick={() => store.delete(el.id ?? 0)}>Удалить</div>
          </div>
        ))}
      </div>
      <CorePagination store={store} />
      <ModalV2
        store={store}
        children={
          <div>
            <Input
              placeholder="название новой категори"
              value={store.viewModel.name}
              onChange={(e) => store.updateForm({ name: e.target.value })}
            />
            <EditableMarkdown
              initValue={store.viewModel.helper}
              onChange={(text) => store.updateForm({ helper: text })}
            />
            <CoreButton
              onClick={() => store.createNewModel()}
              text="создать новую категорию"
            />
          </div>
        }
      />
    </div>
  );
});
