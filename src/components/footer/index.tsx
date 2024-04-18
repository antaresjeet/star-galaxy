import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
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
