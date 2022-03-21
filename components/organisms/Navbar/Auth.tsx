import Link from "next/link";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();

  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Login
        </a>
      </Link>
    </li>
  );
}
