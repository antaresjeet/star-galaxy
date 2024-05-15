import { ButtonComponentProps } from "@/declarations";
export default function Button({ text }: ButtonComponentProps) {
  return (
    <button className="font-semibold inline-block p-2 bg-[var(--theme-yellow-color)] shadow text-black">{text}</button>
  );
}
