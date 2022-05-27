import React from "react";
import { useQuery } from "react-query";
import useParts from "../../Hooks/useParts";
import Loading from "../../sherd/Loading/Loading";

const BusinessSummary = () => {
  const [parts] = useParts();

  const { data: reviews, isLoading: reviewLoading } = useQuery(
    "allReviews",
    () => fetch("http://localhost:5000/all-reviews").then((res) => res.json())
  );

  const { data: orders, isLoading: orderLoading } = useQuery("allOrders", () =>
    fetch("http://localhost:5000/all-order").then((res) => res.json())
  );

  console.log(orders);

  if (reviewLoading || orderLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>parts: {parts?.length}</h1>
      <h1>order: {orders?.length}</h1>
      <h1>reviews: {reviews?.length}</h1>
    </div>
  );
};

export default BusinessSummary;
