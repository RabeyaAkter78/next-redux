"use client";
import React from "react";
import Stats from "../Stats";
import Counter from "../Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counters/counterSlice";
import AllPostsPage from "@/app/(WithNavFooter)/allposts/page";
// import allposts from "../../app/(WithNavFooter)/allposts/page"
function HomeComponent() {
  const counters = useSelector((state) => state.counters);
  console.log("🚀 ~ HomeComponent ~ counters:", counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  return (
    <div className=" bg-violet-100">
      <div className="py-44 container mx-auto">
        <h1 className="text-center mb-5">Home compponents</h1>
        {counters.map((counter) => (
          <Counter
            count={counter.value}
            key={counter.id}
            onIncrerment={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}

        <Stats totalCount={totalCount}></Stats>
        <AllPostsPage />
      </div>
    </div>
  );
}

export default HomeComponent;
