"use client"

import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useRouter } from 'next/navigation';

interface GuestGuardProps {
    redirectTo?: string;
    children: React.ReactNode
}

const GuestGuard = ({ redirectTo = "/", children }: GuestGuardProps) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            router.replace("/");
        }
    },
        [isLoading, isAuthenticated, router, redirectTo])

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-500">
                Checking session...
            </div>
        );
    }

    if (isAuthenticated) {
        return null;
    }

    return (
        // pages that are displayed only to guest user
        <>{children}</>
    )
}

export default GuestGuard