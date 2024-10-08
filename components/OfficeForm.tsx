"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const OfficeForm = () => {
  const [values, setValues] = useState({
    name: "",
    brand: "",
    serialNumber: "",
    issuedTo: "",
    IssuedDate: new Date(),
  });

  function onSubmit() {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex flex-col py-5">
      <div className="w-full mb-4">
        <Label>Name</Label>
        <Input
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
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
        <Label>IssuedTo</Label>
        <Input
          value={values.issuedTo}
          onChange={(e) => setValues({ ...values, issuedTo: e.target.value })}
        />
      </div>
      <div className="w-full mb-4">
        <Label>IssuedDate</Label>
        <Input
          type="Date"
          value={values.IssuedDate}
          onChange={(e) => setValues({ ...values })}
        />
      </div>
    </section>
  );
};

export default OfficeForm;
