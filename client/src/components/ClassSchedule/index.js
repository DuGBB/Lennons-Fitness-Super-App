// import React from "react";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CLASSES } from "../../utils/queries";

function ClassSchedule() {
  //     const classes = useQuery(QUERY_CLASSES);
  //     console.log(classes.data);
  //     for (const [key, value] of Object.entries(classes)) {
  //         console.log(`${key}: ${value}`);
  //       };
  //     return (
  //         <div>classschedule is working</div>
  //     )
  const { loading, data } = useQuery(QUERY_CLASSES);
  useEffect(() => {
    if (data) {
      console.log(data);
      data.classes.forEach((clazz) => {
        console.log(clazz.name);
        console.log(clazz._id);
        console.log(clazz.days);
        console.log(clazz.time);
        console.log(clazz.description);
      });
    } else if (!loading) {
      console.log("waiting on new data load??");
    }
  }, [data, loading]);
  //   for (const [key, value] of Object.entries(activities)) {
  //     console.log(`${key}: ${value}`);
  //   }
  /* Form should be built dynmaically, like the ProductList form.
  Lines 47-67.  Special attention to lines 52-61.*/
  return (
    <section className="container">
      <h2>Pick a class and Sign up today!</h2>
      <h3> dynamically build the class sign up list here! </h3>
    </section>
  );
}

export default ClassSchedule;
