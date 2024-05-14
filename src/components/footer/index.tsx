import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-3">
      <p className="text-center">
        © {new Date().getFullYear()}{" "}
        <Link
          href={'https://github.com/antaresjeet'} target="_blank"
        >
          antaresjeet
        </Link>
      </p>
    </footer>
  );
}
