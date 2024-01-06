import { AppSelect, type AppSelectProps } from "../../controlled-inputs/select";

type Props = {
  start: number;
  end: number;
} & AppSelectProps;

const generateSizeArray = (start: number, end: number) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push({
      placeholder: i.toString(),
      value: i.toString(),
    });
  }
  return result;
};

export const FontSizePicker = ({ start, end, ...props }: Props) => {
  const options = generateSizeArray(start, end);
  return <AppSelect options={options} placeholder="Size" {...props} />;
};
