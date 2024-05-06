import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-3">
      <p className="text-center">
        © {new Date().getFullYear()}{" "}
        <Link
          href={'javascript:void(0)'}
        >
          antaresjeet
        </Link>
      </p>
    </footer>
  );
}
