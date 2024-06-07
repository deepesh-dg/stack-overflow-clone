import { MarkdownPreview } from "@/components/RTE";
import VoteButtons from "@/components/VoteButtons";
import Particles from "@/components/magicui/particles";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { answerCollection, db, voteCollection, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import convertDateToRelativeTime from "@/utils/relativeTime";
import Link from "next/link";
import { Query } from "node-appwrite";
import React from "react";

const Page = async ({ params }: { params: { quesId: string; quesName: string } }) => {
    const [question, answers, upvotes, downvotes] = await Promise.all([
        databases.getDocument(db, questionCollection, params.quesId),
        databases.listDocuments(db, answerCollection, [Query.equal("questionId", params.quesId)]),
        databases.listDocuments(db, voteCollection, [
            Query.equal("typeId", params.quesId),
            Query.equal("type", "question"),
            Query.equal("voteStatus", "upvoted"),
            Query.limit(1), // for optimization
        ]),
        databases.listDocuments(db, voteCollection, [
            Query.equal("typeId", params.quesId),
            Query.equal("type", "question"),
            Query.equal("voteStatus", "downvoted"),
            Query.limit(1), // for optimization
        ]),
    ]);

    return (
        <>
            <Particles
                className="fixed inset-0 h-full w-full"
                quantity={500}
                ease={100}
                color="#ffffff"
                refresh
            />
            <div className="container relative mx-auto px-4 pb-20 pt-36">
                <div className="flex">
                    <div className="w-full">
                        <h1 className="mb-1 text-3xl font-bold">{question.title}</h1>
                        <div className="flex gap-4 text-sm">
                            <span>
                                Asked {convertDateToRelativeTime(new Date(question.$createdAt))}
                            </span>
                            <span>Answer {answers.total}</span>
                            <span>Votes {upvotes.total + downvotes.total}</span>
                        </div>
                    </div>
                    <Link href="/questions/ask" className="ml-auto inline-block shrink-0">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Ask a question
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>
                <hr className="my-4 border-white/40" />
                <div className="flex gap-4">
                    <VoteButtons
                        type="question"
                        id={question.$id}
                        className="shrink-0"
                        upvotes={upvotes}
                        downvotes={downvotes}
                    />
                    <div className="w-full">
                        <MarkdownPreview className="rounded-xl p-4" source={question.content} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
