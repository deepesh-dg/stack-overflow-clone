import env from "@/app/env";
import { Account, Avatars, Client, Databases, Storage } from "appwrite";

// Init Appwrite Server SDK
const client = new Client();
client.setEndpoint(env.appwrite.endpoint).setProject(env.appwrite.projectId);

const databases = new Databases(client);
const account = new Account(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, databases, account, avatars, storage };
