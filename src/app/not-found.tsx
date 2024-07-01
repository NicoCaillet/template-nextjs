"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section className="w-full h-screen">
      <div className="w-full h-full container mx-auto flex items-center justify-center flex-col px-2 py-3">
        <h2 className="text-5xl font-bold">Page not found</h2>
        <Button
          variant="outline"
          className="p-2 border rounded-md mt-5"
          onClick={() => router.back()}
        >
          Volver
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
