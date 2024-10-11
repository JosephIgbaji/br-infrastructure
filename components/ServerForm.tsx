"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const OfficeForm = () => {
  const [values, setValues] = useState({
    deviceName: "Malexe",
    brand: "",
    serialNumber: "",
    issuedTo: "",
    issuedDate: Date(),
    VM Name
Storage 
CPU
Memory 
Base OS
Running OS
IP Address
Host IP
Host Name

  });

  function onSubmit(e) {
    e.preventDefault();
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex flex-col pt-5">
      <form onSubmit={onSubmit}>
        <div className="w-full mb-4">
          <Label>Device Name</Label>
          <Input
            value={values.deviceName}
            onChange={(e) => setValues({ ...values, deviceName: e.target.value })}
          />
        </div>
        <div className="w-full mb-4">
          <Label>Brand</Label>
          <Input
            value={values.brand}
            onChange={(e) => setValues({ ...values, brand: e.target.value })}
          />
        </div>
        <div className="w-full mb-4">
          <Label>Issued To</Label>
          <Input
            value={values.issuedTo}
            onChange={(e) => setValues({ ...values, issuedTo: e.target.value })}
          />
        </div>
        <div className="w-full mb-4">
          <Label>Issued Date</Label>
          <Input
            type="Date"
            value={values.issuedDate}
            onChange={(e) => setValues({ ...values, issuedDate: e.target.value })}
          />
        </div>
        <Button className="w-full bg-sky-800" type="submit">Add</Button>
      </form>
    </section>
  );
};

export default OfficeForm;
