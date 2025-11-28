import React from "react";

import Navbar from "@/components/layout/Navbar";
import GuestGuard from "@/features/auth/components/GuestGuard";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <GuestGuard>
        {/* inject page.tsx file */}
        <main>{children}</main>
      </GuestGuard>
    </>
  )
}

export default PublicLayout;