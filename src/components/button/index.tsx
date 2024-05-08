import { ButtonComponentProps } from "@/declarations";
export default function Button({ btnText }: ButtonComponentProps) {
  return (
    <button className="font-semibold inline-block p-2 bg-yellow-400 shadow text-black">{btnText}</button>
  );
}
