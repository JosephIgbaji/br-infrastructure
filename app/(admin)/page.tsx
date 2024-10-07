"use client";
import MyTable from "@/components/MyTable";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/devices");
      const data = await response.json();

      console.log(data);
    };

    getData();
  }, []);

  return (
    <div className="px-20">
      <MyTable />
    </div>
  );
};

export default page;
