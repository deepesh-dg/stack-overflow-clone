import env from "@/app/env";
import { Client, Databases, Storage } from "node-appwrite";

// Init Appwrite Server SDK
const client = new Client();
client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apiKey);

const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage };
