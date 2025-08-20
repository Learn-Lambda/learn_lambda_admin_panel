import { observer } from "mobx-react-lite";
import { useStore } from "../../core/helper/use_store";
import { CoreButton } from "../../core/ui/button/button";
import { CoreInput } from "../../core/ui/input/input";
import { ModalV2 } from "../../core/ui/modal/modal";
import { CorePagination } from "../../core/ui/pagination/core_pagination";
import { UserStore } from "./users_store";

export const UsersPath = "/users";
export const Users = observer(() => {
  const store = useStore(UserStore);

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <CoreButton
          text="Создать нового юзера"
          onClick={() => store.modalShow()}
        />

        <div style={{ height: "75vh", overflow: "auto" }}>
          {store.models()?.map((el) => (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>{el.email}</div>
              <div>{el.login}</div>
              <div>{el.password}</div>
              <div onClick={() => store.delete(el.id ?? 0)}>Удалить</div>
            </div>
          ))}
        </div>
        <CorePagination store={store} />
        <ModalV2
          store={store}
          children={
            <div>
              <CoreInput
                label="email"
                onChange={(text) => store.updateForm({ email: text })}
              />
              <CoreInput
                label="login"
                onChange={(text) => store.updateForm({ login: text })}
              />
              <CoreInput
                label="password"
                onChange={(text) => store.updateForm({ password: text })}
              />
              <CoreButton text="создать" onClick={() => store.createNewModel()} />
            </div>
          }
        />
      </div>
    </>
  );
});
