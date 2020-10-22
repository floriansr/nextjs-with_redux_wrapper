import useInterval from "../lib/useInterval";
import { useDispatch, useSelector } from "react-redux";
import { Tick } from "../redux";

export default function Page() {
  const dispatch = useDispatch();
  const { time } = useSelector((state) => state.state);

  useInterval(() => {
    dispatch(Tick(Date.now()));
  }, 1000);

  return (
    <>
      <h5>{time}</h5>
    </>
  );
}