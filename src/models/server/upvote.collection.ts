import { Permission } from "node-appwrite";
import { db, upvoteCollection } from "../name";
import { databases } from "./config";

export default async function createUpvoteCollection() {
    // Creating Collection
    await databases.createCollection(db, upvoteCollection, upvoteCollection, [
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Upvote Collection Created");

    // Creating Attributes
    await Promise.all([
        databases.createEnumAttribute(db, upvoteCollection, "type", ["question", "answer"], true),
        databases.createStringAttribute(db, upvoteCollection, "typeId", 50, true),
        databases.createStringAttribute(db, upvoteCollection, "votedById", 50, true),
    ]);
    console.log("Upvote Attributes Created");
}
