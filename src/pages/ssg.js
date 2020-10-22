import { initialState } from "../constants";
import Link from "next/link";

export default function Static(props) {
  const { time, light } = props.initialState.state;

  return (
    <>
      <Link href="/">
        <a>Home page</a>
      </Link>
      <h3>Initial Props : </h3>
      <p>time: {time} and light: {light}</p>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      initialState,
    },
  };
}

// import { wrapper } from "../redux/store.ts";

// export const getStaticProps = wrapper.getStaticProps(({ store }) => {
//   store.dispatch(Page("static"));
// });