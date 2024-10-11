"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const VirtualMachineForm = () => {
  const [values, setValues] = useState({
    vmName: "",
    storage: "",
    memory: "",
    cpu: "",
    baseOs: "",
    runningOs: "",
    ipAddress: "",
    hostIp: "",
    hostName: "",
    dateProvisioned: Date(),
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
                    <Label>Name of Virtaul Machine</Label>
                    <Input
                        value={values.vmName}
                        onChange={(e) => setValues({ ...values, vmName: e.target.value })}
                    />
                </div>
                <div className="w-[300px] lg:w-full mb-4">
                    <Label>Storage Capaicty (Rom)</Label>
                    <Input
                        value={values.storage}
                        onChange={(e) => setValues({ ...values, storage: e.target.value })}
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-10 ">
                <div className="w-[300px] lg:w-full mb-4">
                <Label>Memory (Ram)</Label>
                <Input
                    value={values.memory}
                    onChange={(e) => setValues({ ...values, memory: e.target.value })}
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
                    onChange={(e) => setValues({ ...values, baseOs: e.target.value })}
                />
                </div>
                <div className="w-[300px] lg:w-full mb-4">
                <Label>Running OS</Label>
                <Input
                    value={values.runningOs}
                    onChange={(e) => setValues({ ...values, runningOs: e.target.value })}
                />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-10 ">
                <div className="w-[300px] lg:w-full mb-4">
                <Label>IP Address</Label>
                <Input
                    value={values.ipAddress}
                    onChange={(e) => setValues({ ...values, ipAddress: e.target.value })}
                />
                </div>
                <div className="w-[300px] lg:w-full mb-4">
                <Label>Host IP</Label>
                <Input
                    value={values.hostIp}
                    onChange={(e) => setValues({ ...values, hostIp: e.target.value })}
                />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-10 ">
                <div className="w-[300px] lg:w-full mb-4">
                <Label>Host Name</Label>
                <Input
                    value={values.hostName}
                    onChange={(e) => setValues({ ...values, hostName: e.target.value })}
                />
                </div>
                <div className="w-[300px] lg:w-full mb-4">
                <Label>Provisioned Date</Label>
                <Input
                    type="Date"
                    value={values.dateProvisioned}
                    onChange={(e) => setValues({ ...values, dateProvisioned: e.target.value })}
                />
                </div>
            </div>
            <Button className="w-full bg-sky-800" type="submit">Add</Button>
        </div>
      </form>
    </section>
  );
};

export default VirtualMachineForm;
