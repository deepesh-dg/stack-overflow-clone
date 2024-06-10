# Stack Overflow Clone

A clone of Stack Overflow using [Next.js](https://nextjs.org/) and [Appwrite](https://appwrite.io/).

## Getting Started

1. `npx create-next-app stack-overflow-clone`
2. configure linting with prettier and eslint
3. `npm install appwrite@15.0.0 node-appwrite@13.0.0`

Since we are using Appwrite, we need to create a new project in the Appwrite console and get the API key which will eventually be used to create databases and collections.

## Database and Collection Structure

We will be using the following databases:

-   `main-stackoverflow`: This is the main database that will contain all the questions, answers, comments, and tags.
-   `questions`: This collection will contain all the questions.
-   `answers`: This collection will contain all the answers.
-   `comments`: This collection will contain all the comments.
-   `votes`: This collection will contain all the upvotes and downvotes.

## Database and Collection Creation

`src/models/server/dbSetup.ts` and `src/models/server/storageSetup.ts` contains the code to create the databases, collections and storage bucket if doesn't exists which is called in `src/middleware` because this file will be executed on every request.

## Authentication

Authentication is handled by Appwrite which has been handled via zustand store in `src/store/auth.ts`. We are using `Aceternity UI` and `Magic UI` to handle authentication.

-   `src/app/(auth)/layout.tsx`: This is the layout for the auth pages.
-   `src/app/(auth)/login/page.tsx`: This is the login page.
-   `src/app/(auth)/register/page.tsx`: This is the register page.

## User Reputation Algorithm

The user reputation is calculated by the following rules:

-   If the user has answered a question, the reputation of answerAuthor is increased by 1.
-   If the user has upvoted a question, the reputation of questionAuthor is increased by 1.
-   If the user has downvoted a question, the reputation of questionAuthor is decreased by 1.
-   If the user has upvoted an answer, the reputation of answerAuthor is increased by 1.
-   If the user has downvoted an answer, the reputation of answerAuthor is decreased by 1.
