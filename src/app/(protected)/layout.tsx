"use client";

import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { session, hydrated } = useAuthStore();
    const router = useRouter();

    React.useEffect(() => {
        if (!session && hydrated) {
            router.push("/login");
        }
    }, [session, router, hydrated]);

    if (!session) {
        return null;
    }

    return <>{children}</>;
};

export default Layout;
