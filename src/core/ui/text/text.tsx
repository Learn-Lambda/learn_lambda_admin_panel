export const TextV2: React.FC<{
  isEditable?: boolean;
  text?: string;
  currentRef?: any;
  color?: string;
  size?: number;
  onChange?: (text: string) => void;
  style?: React.CSSProperties;
}> = ({ isEditable, text, color, size, style, onChange, currentRef }) => (
  <div
    ref={currentRef}
    onInput={(event) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      onChange?.(event.target.innerText);
    }}
    contentEditable={isEditable ?? false}
    style={Object.assign(style ?? {}, {
      fontFamily: `'Satoshi', sans-serif`,
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: size ?? 16,

      color: color ?? "black",
    })}
  >
    {text}
  </div>
);
