import { useQuery } from "@apollo/client";
import React, { useState, useMutation } from "react";
import { ADD_STATS } from "../../utils/mutations";
import { QUERY_MEMBERSTATS } from "../../utils/queries";

const AddStatsForm = ({ activity, member }) => {
  if (!activity.length) {
    return <h3>No Member Stats yet!</h3>;
  }

  return (
    <div>
      <h3>this is the add stats form</h3>
    </div>
  );
};

export default AddStatsForm;
