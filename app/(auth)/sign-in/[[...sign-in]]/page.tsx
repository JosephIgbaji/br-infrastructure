import { SignIn } from "@clerk/nextjs";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignIn />;
    </div>
  );
};

export default page;
