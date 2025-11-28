// use for pages logged-out user should not access

"use client"

import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

interface AuthGuardProps {
    roles?: string[];
    children: React.ReactNode;
}

const AuthGuard = ({ roles = [], children }: AuthGuardProps) => {
    const { user, isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    const isUserCanAcees = roles.length === 0 ? true : roles.includes(user?.role);

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated) {
                router.replace("/login");
                return;
            }

            if (!isUserCanAcees) {
                router.replace("/"); // TODO: add 403 or forbidden
                return;
            }
        }
    }, [isLoading, isAuthenticated, isUserCanAcees, router]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-500">
                Checking authorization...
            </div>
        );
    }

    if (!isAuthenticated || !isUserCanAcees) return null;

    return (
        <>{children}</>
    )
}

export default AuthGuard