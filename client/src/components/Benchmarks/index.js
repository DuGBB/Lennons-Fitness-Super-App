import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { QUERY_ACTIVITIES } from "../../utils/queries";

function Benchmarks({ activity }) {
  //   const activities = useQuery(QUERY_ACTIVITIES);
  //   console.log(activities.data);
  /* Written while looking at lines 15-35 of the shop-shop
  module client/src/components/ProductList/index.js
  Specifically excluding calls to the helper utils because our
  client hasn't defined any helper utils.*/
  const { loading, data } = useQuery(QUERY_ACTIVITIES);

  useEffect(() => {
    if (data) {
      console.log(data);
      data.activities.forEach((activity) => {
        console.log(activity.name);
        console.log(activity._id);
        console.log(activity.units);
        console.log(activity.description);
      });
    } else if (!loading) {
      console.log("waiting on new data load??");
    }
  }, [data, loading]);
  //   for (const [key, value] of Object.entries(activities)) {
  //     console.log(`${key}: ${value}`);
  //   }

  const [formState, setFormState] = useState({});
  const { squat, bench, deadlift, fiveK, tenK } = formState;
  // const [updateMember, { error }] = useMutation(ADD_MEMBER);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("TRYING TO SUBMIT THE FORM DATA");
    console.log("Submit Form", formState);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log("Handle Form", formState);
  };

  /* Form should be built dynmaically, like the ProductList form.
  Lines 47-67.  Special attention to lines 52-61.*/
  return (
    <section className="container">
      <h2>Update Your Benchmarks!</h2>

      {activity &&
        activity.map((activity) => (
          <div key={this.activity._id}>
            <div>{this.activity.name}</div>
          </div>
        ))}
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="w-75">
          <div className="d-flex row justify-content-center">
            <label
              htmlFor="squat"
              className="d-flex col-md justify-content-center">
              Squat
            </label>
            <input
              type="text"
              className="form-control col-md"
              id="squat"
              name="squat"></input>
            <label
              htmlFor="bench"
              className="d-flex justify-content-center col-md">
              Bench
            </label>
            <input
              type="text"
              className="form-control col-md"
              id="bench"
              name="bench"></input>
            <label
              htmlFor="deadlift"
              className="d-flex col-md justify-content-center">
              Deadlift
            </label>
            <input
              type="text"
              className="form-control col-md"
              id="deadlift"
              name="deadlift"></input>
          </div>
          <div className="d-flex row justify-content-center mt-2">
            <label
              htmlFor="fivek"
              className="d-flex col-md justify-content-center">
              5K
            </label>
            <input
              type="text"
              className="form-control col-md"
              id="fiveK"
              name="fiveK"></input>
            <label
              htmlFor="tenK"
              className="d-flex col-md justify-content-center">
              10K
            </label>
            <input
              type="text"
              className="form-control col-md"
              id="tenK"
              name="tenK"></input>
          </div>
          <div className="row justify-content-center">
            <input type="submit" className="mt-2 w-50"></input>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Benchmarks;
