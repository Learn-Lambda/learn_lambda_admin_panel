import * as React from "react";
import { CoreText, CoreTextType } from "../text/text";

export function CoreButton(props: {
  block?: boolean;

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
          backgroundColor: "rgba(103, 80, 164, 1)",
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 24,

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
            fontSize: 14,
            height: "100%",
            alignContent: "center",
            justifySelf: "center",
          },
          props.textStyle
        )}
        color={"white"}
      />
    </div>
  );
}
