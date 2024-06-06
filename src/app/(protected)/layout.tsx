"use client";

import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const session = useAuthStore(store => store.session);
    const router = useRouter();

    React.useEffect(() => {
        if (!session) {
            router.push("/login");
        }
    }, [session, router]);

    if (!session) {
        return null;
    }

    return <>{children}</>;
};

export default Layout;
