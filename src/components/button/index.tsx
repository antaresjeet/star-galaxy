import { ButtonComponentProps } from "@/declarations";
export default function Button({ ...props }: ButtonComponentProps) {
  return (
    <button className="font-semibold inline-block p-2 bg-[var(--theme-yellow-color)] shadow text-black" onClick={props.clickHandler}>{props.text}</button>
  );
}
