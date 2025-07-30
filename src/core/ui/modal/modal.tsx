import React from "react";
import { themeStore } from "../../..";
import { ModalStore } from "../../store/base_store";
import { observer } from "mobx-react-lite";

export const ModalV2: React.FC<{
  store: ModalStore;
  children: React.ReactNode;
}> = observer(({ store, children }) => {
  if (!store.isModalOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: themeStore.theme.fon,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => store.modalCancel()}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          backgroundColor: "white",
          border: `1px solid ${themeStore.theme.greenWhite}`,
          padding: 20,
          borderRadius: 5,
          // width: 400,
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
});
