import env from "@/app/env";
import { Account, Client, Databases } from "appwrite";

// Init Appwrite Server SDK
const client = new Client();
client.setEndpoint(env.appwrite.endpoint).setProject(env.appwrite.projectId);

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account };
