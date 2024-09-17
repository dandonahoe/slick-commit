import { createCompletion } from './ai-helpers';


export const generateCommitMessage = async (fileSummaries: string[]): Promise<string> => {
    const combinedPrompt = fileSummaries.join('\n\n');

    const finalCommitMessage = await createCompletion(
        `Summarize the following file summaries into a commit
message, using plain text and bullet points, no other markdown. title formatted as "feat(subject): summary" where feat is of
type:
feat
fix
perf
docs
style
refactor
test
build
ci
chore
revert

and subject is a single alphanumeric word describing the
change. Bullet points should also be formatted like titles, ie

- feat(subject): description
- fix(subject): description
  - src/index.ts

an indented bulletpoints listing the files involved, with
"subject" describing the update in one word and not just a file name, then one more line
giving a detailed description of the change in understandable terms but can use tech language.
The final line should note if there is anything unusual or noteworthy, such as breaking code.
Include a title, bullet points, and statistics in the commit message.

${combinedPrompt}`
    );

    return finalCommitMessage.replace(/`/g, '').trim();
};

export { createCompletion };

