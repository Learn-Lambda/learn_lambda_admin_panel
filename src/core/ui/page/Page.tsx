import React from "react";
import { Icon, IconType } from "../icon/icon";
import { Avatar } from "../avatar/avatar";
import { TextV2 } from "../text/text";

export const Page: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <div
        style={{
          width: 52,
          height: "100%",
          backgroundColor: "#1C2434",
          textAlign: "center",
          justifyItems: "center",
        }}
      >
        <div style={{ height: 29 }} />
        <Icon type={IconType.logoMini} />
        <div style={{ height: 80 }} />
        <div
          style={{
            backgroundColor: "#DEE4EE",
            borderRadius: 2,
            width: 12,
            height: 2,
          }}
        />
        <div style={{ height: 50 }} />
        <Icon type={IconType.group} />
        <div style={{ height: 40 }} />
        <Icon type={IconType.calendar} />
        <div style={{ height: 40 }} />
        <Icon type={IconType.list} />
        <div style={{ height: 40 }} />
        <Icon type={IconType.paper} />
        <div style={{ height: 40 }} />
        <Icon type={IconType.grid} />
        <div style={{ height: 40 }} />
      </div>
      <div style={{ width: "calc(100% - 52px)", height: "100%" }}>
        <div
          style={{
            height: 85,
            backgroundColor: "white",
            width: "100%",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <div
            style={{
              alignContent: "center",
              height: "100%",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#1C2434",
                width: 90,
                height: 46,
                borderRadius: 50,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
                border: "1px solid #000000",
                alignContent: "center",
                justifyItems: "center",
                cursor: "pointer",
              }}
            >
              <TextV2 text="zero" color="white" />
            </div>
          </div>
          <div style={{ width: 30 }} />
          <div
            style={{
              alignContent: "center",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <TextV2 text="user123" style={{ paddingRight: 20 }} />
          </div>

          <div style={{ alignContent: "center", height: "100%" }}>
            <Avatar name={"qewdawe"} size={50} />
          </div>
          <div style={{ width: 135 }} />
        </div>
        <div
          style={{
            height: "calc(100% - 85px)",
            width: "100%",
            backgroundColor: "#F1F5F9",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
