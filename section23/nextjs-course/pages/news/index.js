import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS Is a Great Framework
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
