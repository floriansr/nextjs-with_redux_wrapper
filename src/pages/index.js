import Page from "../components/page";
import Link from "next/link";

export default function Index() {
  return <>
    <Link href="/ssg">
      <a>Static page</a>
    </Link>
    <Page />
  </>
}