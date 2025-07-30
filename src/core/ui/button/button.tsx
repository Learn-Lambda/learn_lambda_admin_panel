import * as React from "react";
import { CoreText, CoreTextType } from "../text/text";

export function CoreButton(props: {
  block?: boolean;
  filled?: boolean;
  text?: string;
  onClick?: any;
  textStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}) {
  return (
    <div
      onClick={() => props.onClick?.call()}
      style={Object.assign(
        {
          width: "max-content",
          backgroundColor: props.filled ? "rgba(103, 80, 164, 1)" : "",
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 24,
          border: props.block
            ? "1px solid  rgba(29, 27, 32, 0.12)"
            : props.filled
            ? ""
            : "1px solid black",
          height: 50,
        },
        props.style
      )}
    >
      <CoreText
        text={props.text ?? ""}
        type={CoreTextType.medium}
        style={Object.assign(
          {
            fontSize: 20,
            height: "100%",
            alignContent: "center",
            justifySelf: "center",
          },
          props.textStyle
        )}
        color={
          props.block
            ? "#1D1B20"
            : props.filled
            ? "white"
            : "rgba(103, 80, 164, 1)"
        }
      />
    </div>
  );
}
