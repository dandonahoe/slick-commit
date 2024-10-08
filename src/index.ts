import { generateCommitMessage, createCompletion } from './commit-message';
import { getStagedDiff, execCommand } from './git-helpers';
import { parseDiffIntoChunks } from './git-helpers';
import { logColor, Color } from './logger';
import { MaxTokens } from './constant';


export const main = async (): Promise<void> => {

    logColor('Starting commit message generation...', Color.Cyan);

    // Stage all changes
    execCommand('git add .');

    // Get staged changes
    const diff = getStagedDiff();

    if (!diff.trim()) {
        logColor('No changes to commit. Exiting...', Color.Yellow);
        process.exit(0);
    }

    const fileSummaries = parseDiffIntoChunks(diff);
    const summaryPromises = fileSummaries.map(summary =>
        createCompletion(`Provide a detailed description of: ${summary.slice(0, MaxTokens * 2)}`),
    );

    const fileSummariesResponses = await Promise.all(summaryPromises);
    const finalCommitMessage = await generateCommitMessage(fileSummariesResponses);

    execCommand(`git commit -m "${finalCommitMessage}"`);

    logColor('\nGenerated commit message:\n', Color.Blue);
    console.log(finalCommitMessage);
    logColor('\nCommit successfully generated!', Color.Green);
};

// Error handling and execution
main().catch(error => {
    logColor('Error:', Color.Red);
    console.error(error.stack);
});
