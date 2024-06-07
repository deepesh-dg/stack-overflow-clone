import env from "@/app/env";
import { Avatars, Client, Databases, Storage, Users } from "node-appwrite";

// Init Appwrite Server SDK
const client = new Client();
client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apiKey);

const databases = new Databases(client);
const storage = new Storage(client);
const users = new Users(client);
const avatars = new Avatars(client);

export { client, databases, storage, users, avatars };
