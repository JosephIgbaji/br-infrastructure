"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const OfficeForm = () => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    serialNumber: z.string().min(2, {
      message: "serial number must be at least 2 characters.",
    }),
    brand: z.string().min(2, {
      message: "brand must be at least 2 characters.",
    }),
    issuedTo: z.string().min(2, {
      message: "Issued to must be at least 2 characters.",
    }),
    issuedDate: z.date(),
    purchasedDate: z.string().min(2, {
      message: "Date of purchse must be at least 2 characters.",
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Asus ROGSTRIX" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serialNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serial number</FormLabel>
                <FormControl>
                  <Input placeholder="S/N: 12JDCJCK3" {...field} />
                </FormControl>
                {/* <FormDescription>This is your public displ.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input placeholder="Product Brand" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="issuedTo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Issued To</FormLabel>
                <FormControl>
                  <Input placeholder="Malenxe krix" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="issuedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Issued Date</FormLabel>
                <FormControl>
                  <Input placeholder="02/01/2024" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="purchasedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purchased Date</FormLabel>
                <FormControl>
                  <Input placeholder="02/01/2024" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
};



export default OfficeForm