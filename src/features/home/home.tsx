import { useNavigate } from "react-router-dom";
import { UsersPath } from "../users/users";
import { TasksPath } from "../task/tasks";
import { CoreText, CoreTextType } from "../../core/ui/text/text";

export const HomePath = "/home";
const routes: { name: string; path: string }[] = [
  { name: "USERS", path: UsersPath },
  { name: "TASKS", path: TasksPath },
];
export const Home = () => {
  const nav = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {routes.map((el) => {
        return (
          <CoreText
            onClick={() => nav(el.path)}
            text={el.name}
            type={CoreTextType.big}
          />
        );
      })}
    </div>
  );
};
