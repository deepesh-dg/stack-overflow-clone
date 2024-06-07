import { Permission } from "node-appwrite";
import { db, downvoteCollection } from "../name";
import { databases } from "./config";

export default async function createDownvoteCollection() {
    // Creating Collection
    await databases.createCollection(db, downvoteCollection, downvoteCollection, [
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Downvote Collection Created");

    // Creating Attributes
    await Promise.all([
        databases.createEnumAttribute(db, downvoteCollection, "type", ["question", "answer"], true),
        databases.createStringAttribute(db, downvoteCollection, "typeId", 50, true),
        databases.createStringAttribute(db, downvoteCollection, "votedById", 50, true),
    ]);
    console.log("Downvote Attributes Created");
}
