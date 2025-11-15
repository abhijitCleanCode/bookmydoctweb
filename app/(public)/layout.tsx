import React from "react";

import Navbar from "@/components/layout/Navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      {/* inject page.tsx file */}
      <main>{children}</main>
    </>
  )
}

export default PublicLayout;