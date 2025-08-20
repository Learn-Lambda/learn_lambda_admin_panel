import { Input } from "antd";
import { CoreText, CoreTextType } from "../text/text";
import { FormState } from "../../store/base_store";

export const InputV3: React.FC<{
  onChange?: (text: string) => void;
  label: string;
  store?: FormState<any>;
}> = ({ onChange, label, store }) => {
  return (
    <div>
      <CoreText type={CoreTextType.medium} text={label} />
      <Input
        onChange={(event) => {
          onChange?.(event.target.value);

          store?.updateForm({ [label]: event.target.value });
        }}
      />
    </div>
  );
};
