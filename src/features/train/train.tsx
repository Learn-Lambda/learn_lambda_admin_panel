import { observer } from "mobx-react-lite";
import { useStore } from "../../core/helper/use_store";
import { TrainStore } from "./train_store";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Page } from "../../core/ui/page/Page";
import { TextV2 } from "../../core/ui/text/text";
import { Icon, IconType } from "../../core/ui/icon/icon";

export const TrainPath = "/train/last/task";

export const Train = observer(() => {
  const store = useStore(TrainStore);
  return (
    <>
      <Page
        children={
          <>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "calc(100% - 73px)",
                padding: "10px 40px 10px 40px",
              }}
            >
              <div style={{ height: "100%", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TextV2
                    text="Тренировка"
                    style={{ fontSize: 26, fontWeight: 700 }}
                  />
                  <div>
                    <div
                      style={{
                        width: 29,
                        height: 29,
                        backgroundColor: "#E2E8F0",
                        borderRadius: 90,
                        display:"flex",
                        alignItems:"center",
                        alignContent:"center",
                        justifyContent:'center',
                      }}
                    >
                      <Icon
                        type={IconType.ok}
                        color={true ? "#8A99AF" : undefined}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "calc(100%)",
                    width: "100%",
                    marginLeft: 15,
                    marginTop: 15,
                    backgroundColor: "white",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
                    borderRadius: 2,
                    display: "flex",
                  }}
                >
                  <PanelGroup direction="horizontal" style={{ width: "100%" }}>
                    <Panel>
                      <div
                        style={{
                          width: "50%",
                          height: "100%",
                        }}
                      />
                    </Panel>
                    <PanelResizeHandle>
                      <div
                        style={{
                          width: 2,
                          height: "100%",
                          backgroundColor: "#E2E8F0",
                        }}
                      ></div>
                    </PanelResizeHandle>
                    <Panel> </Panel>
                  </PanelGroup>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
});
