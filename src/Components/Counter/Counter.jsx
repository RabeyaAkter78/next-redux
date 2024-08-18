
import Count from "../Count";
import Button from "../Button";

function Counter({ count, onIncrerment, onDecrement }) {
  return (
    <div className="">
      <Count count={count}></Count>
      <div className="flex gap-5 justify-center">
        <Button handler={onIncrerment}>Increment</Button>
        <Button type="danger" handler={onDecrement}>
          Deccrement
        </Button>
      </div>
    </div>
  );
}

export default Counter;
