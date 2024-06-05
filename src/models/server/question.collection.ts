import { IndexType, Permission, Query } from "node-appwrite";
import { db, questionCollection } from "../name";
import { databases } from "./config";

export default async function createQuestionCollection() {
    // Creating Collection
    await databases.createCollection(db, questionCollection, questionCollection, [
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Question Collection Created");

    // Creating Attributes and Indexes
    await Promise.all([
        databases.createStringAttribute(db, questionCollection, "title", 100, true),
        databases.createStringAttribute(
            db,
            questionCollection,
            "content",
            10000, // bigger size coz of markdown
            true // required
        ),
        databases.createStringAttribute(db, questionCollection, "authorId", 50, true),
        databases.createStringAttribute(
            db,
            questionCollection,
            "tags",
            50,
            true, // required means can accept empty array
            undefined,
            true // array of strings
        ),
        databases.createStringAttribute(
            db,
            questionCollection,
            "attachmentIds",
            50,
            true, // required means can accept empty array
            undefined,
            true // array of bucket photo IDs
        ),
    ]);
    console.log("Question Attributes Created");

    // Creating Indexes
    // await Promise.all([
    //     databases.createIndex(
    //         db,
    //         questionCollection,
    //         "search",
    //         IndexType.Fulltext,
    //         ["title", "content"],
    //         ["asc", "desc"]
    //     ),
    //     databases.createIndex(
    //         db,
    //         questionCollection,
    //         "author",
    //         IndexType.Fulltext,
    //         ["authorId"],
    //         ["asc", "desc"]
    //     ),
    // ]);
    // console.log("Question Indexes Created");
}
