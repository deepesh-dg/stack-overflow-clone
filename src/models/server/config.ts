import env from "@/app/env";
import { Client, Databases } from "node-appwrite";

// Init Appwrite Server SDK
const client = new Client();
client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apiKey);

const databases = new Databases(client);

export { client, databases };
