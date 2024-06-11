import React from "react";
import HeroSection from "./components/HeroSection";
import TopContributers from "./components/TopContributers";
import LatestQuestions from "./components/LatestQuestions";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default function Home() {
    return (
        <main id="main" className="space-y-20 pb-20">
            <HeroSection />
            <div className="container mx-auto flex flex-wrap gap-y-4">
                <div className="w-full px-4 lg:w-2/3">
                    <h2 className="mb-4 text-2xl">Latest Questions</h2>
                    <LatestQuestions />
                </div>
                <div className="w-full px-4 lg:w-1/3">
                    <h2 className="mb-4 text-2xl">Top Contributers</h2>
                    <TopContributers />
                </div>
            </div>
            <div className="container mx-auto">
                <NeonGradientCard className="text-center">
                    <div className="mx-auto max-w-3xl px-12 py-10">
                        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            JOIN NOW
                        </span>
                        <p className="mt-4">
                            &quot;Sign up&quot; to become a part of our dynamic community. Gain
                            access to a vast pool of knowledge, connect with experts, and share your
                            insights. Whether you&apos;re here to ask questions or provide answers,
                            joining us will enhance your learning experience and help you stay
                            updated with the latest discussions. Join now and start making
                            meaningful contributions today!
                        </p>
                    </div>
                </NeonGradientCard>
            </div>
        </main>
    );
}
