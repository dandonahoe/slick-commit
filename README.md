
# Slick Commit

Slick Commit is a tool that leverages OpenAI's GPT-4 to automatically generate high-quality commit messages based on staged changes in your Git repository. It uses AI to analyze the `git diff` and creates concise, readable, and technically sound commit messages—far better than most humans can craft on the spot.

## Features

- **Automatic Commit Message Generation**: Slick Commit uses the OpenAI API to generate commit messages based on staged changes in the repository.
- **File-Specific Summaries**: Summarizes each changed file with a focus on important changes.
- **Commit Message Formatting**: Ensures consistent formatting for commit messages, following conventional commits structure (e.g., `feat`, `fix`, `docs`, etc.).
- **Large Diff Handling**: Handles large or complex diffs, skipping irrelevant files like `package-lock.json`.
- **Parallel File Summaries**: Processes file changes concurrently, optimizing for speed and performance.
- **Commit Statistics**: Includes statistics such as the number of files changed and the size of the changes in the commit message.

## Installation

To install Slick Commit, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/slick-commit.git
    ```

2. Navigate to the project directory:

    ```bash
    cd slick-commit
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Set up your OpenAI API key by adding it to your environment variables:

    ```bash
    export OPENAI_API_KEY=your-api-key-here
    ```

## Usage

After making your changes and staging them in Git, use the following command to automatically generate and commit your changes with an AI-generated message:

```bash
npm run slick-commit
```

This will:

1. Add all your staged changes.
2. Analyze the `git diff` of your staged changes.
3. Generate a commit message using OpenAI.
4. Commit the changes with the AI-generated message.

### Example Commit Message

```bash
feat(authentication): enhance auth token verification

- feat(token): improved validation logic for token length in auth.service.ts
  - File: src/auth/auth.service.ts
  - Changes: Added better token validation and expiration checks
- fix(auth): resolved an issue where invalid tokens were being accepted in some cases
  - File: src/auth/auth.guard.ts
  - Changes: Improved error handling and logging

This update enhances token validation to prevent security loopholes. No breaking changes detected.
```

## Configuration

- **Git**: Make sure you have a valid Git configuration and repository.
- **OpenAI API**: You need to set the `OPENAI_API_KEY` environment variable to use this tool.

## Development

### Running Locally

To run this project locally:

1. Clone the repo and install dependencies:

    ```bash
    git clone https://github.com/your-username/slick-commit.git
    cd slick-commit
    npm install
    ```

2. Make sure your OpenAI API key is available in your environment variables.

3. Run the tool:

    ```bash
    npm run slick-commit
    ```

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

### License

This project is licensed under the ISC License.

---

### Future Plans

- Support for more file types and custom diff summarization.
- Improved handling for extremely large files.
- Better commit message customizations and rules.
