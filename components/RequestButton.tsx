"use client";

import { BsBox } from "react-icons/bs";
import { FC } from "react";

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