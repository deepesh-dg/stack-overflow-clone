import { IndexType, Permission, Query } from "node-appwrite";
import { db, questionCollection } from "../name";
import { databases } from "./config";

export default async function createQuestionCollection() {
    // Creating Collection
    await databases.createCollection(db, questionCollection, questionCollection, [
        Permission.create("users"),
        Permission.read("any"),
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
        databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
    ]);
    console.log("Question Attributes Created");

    // Creating Indexes
    // Not possible here, throwing error "attributes not found". have to create indexes manually in https://cloud.appwrite.io
    /*await Promise.all([
        databases.createIndex(
            db,
            questionCollection,
            "title",
            IndexType.Fulltext,
            ["title"],
            ["asc"]
        ),
        databases.createIndex(
            db,
            questionCollection,
            "content",
            IndexType.Fulltext,
            ["content"],
            ["asc"]
        ),
    ]); */
    // console.log("Question Indexes Created");
}
