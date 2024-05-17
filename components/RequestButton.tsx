"use client";

import { BsBox } from "react-icons/bs";
import { FC } from "react";

/**
 * this component assumes that requesting is
 * something that happens completetly on the backend
 * eg send a post to an endpoint and it sends an alert when that's done
 */
const RequestButton: FC = () =>(
  <button
    className="fixed justify-center items-center !w-min bg-gray-500 flex gap-2 text-white p-2 rounded text-sm top-4 right-4"
    onClick={() => window.alert("Request sent")}
  >
    <BsBox />
    Request
  </button>
);

export default RequestButton;