"use client";
import { EventHandler, useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EventType } from "react-hook-form";

const ServerForm = () => {
  const [values, setValues] = useState({
    name: "",
    storage: "",
    memory: "",
    cpu: "",
    baseOs: "",
    ipAddress: "",
    location: "",
    category: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex flex-col w-full pt-5">
      <form onSubmit={onSubmit} className="">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-10 ">
            <div className="w-[300px] lg:w-full mb-4">
              <Label>Name of Server</Label>
              <Input
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="w-[300px] lg:w-full mb-4">
              <Label>Storage Capaicty (Rom)</Label>
              <Input
                value={values.storage}
                onChange={(e) =>
                  setValues({ ...values, storage: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-10 ">
            <div className="w-[300px] lg:w-full mb-4">
              <Label>Memory (Ram)</Label>
              <Input
                value={values.memory}
                onChange={(e) =>
                  setValues({ ...values, memory: e.target.value })
                }
              />
            </div>
            <div className="w-[300px] lg:w-full mb-4">
              <Label>C P U</Label>
              <Input
                value={values.cpu}
                onChange={(e) => setValues({ ...values, cpu: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-10 ">
            <div className="w-[300px] lg:w-full mb-4">
              <Label>Base OS</Label>
              <Input
                value={values.baseOs}
                onChange={(e) =>
                  setValues({ ...values, baseOs: e.target.value })
                }
              />
            </div>
            <div className="w-[300px] lg:w-full mb-4">
              <Label>Location</Label>
              <Input
                value={values.location}
                onChange={(e) =>
                  setValues({ ...values, location: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-10 ">
            <div className="w-[300px] lg:w-full mb-4">
              <Label>IP Address</Label>
              <Input
                value={values.ipAddress}
                onChange={(e) =>
                  setValues({ ...values, ipAddress: e.target.value })
                }
              />
            </div>
            <div className="w-[300px] lg:w-full mb-4">
              <Label>Host Name</Label>
              <Input
                value={values.category}
                onChange={(e) =>
                  setValues({ ...values, category: e.target.value })
                }
              />
            </div>
          </div>
          {/* <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-10 "></div> */}
          <Button className="w-full bg-sky-800" type="submit">
            Add
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ServerForm;
