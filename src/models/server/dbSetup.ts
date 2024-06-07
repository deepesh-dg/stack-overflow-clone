import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import { databases } from "./config";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

export default async function getOrCreateDB() {
    try {
        await databases.get(db); // Check if database exists
        console.log("Database Connected");
    } catch (error) {
        try {
            await databases.create(db, db); // Create database if it doesn't exist
            console.log("Database Created");

            // Create collections
            await Promise.all([
                createQuestionCollection(),
                createAnswerCollection(),
                createCommentCollection(),
                createVoteCollection(),
            ]);
            console.log("Collections Created");

            console.log("Database Connected");
        } catch (error) {
            console.error("Error creating databases or collections:", error);
        }
    }

    return databases;
}
