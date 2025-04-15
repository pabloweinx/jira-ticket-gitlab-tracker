# weinx-jira-ticket-gitlab-tracker

A simple yet powerful **Visual Studio Code extension** that helps you track whether a JIRA ticket has been committed in Git, and whether it has been included in any release tag or GitLab deployment.

## 📦 Features

- 🔍 Input a JIRA ticket (e.g., `FTR-12345`) and search through Git history
- ✅ Detect which commit(s) contain the ticket reference
- 🏷️ Check if those commits have been included in any Git tags (e.g., GitLab release tags)
- 📄 Displays the result in an integrated output console

## 🚀 How to Use

1. Open the Command Palette: `Cmd + Shift + P` (or `Ctrl + Shift + P` on Windows/Linux)
2. Run: **Check JIRA Ticket in GitLab Releases**
3. Enter your JIRA ticket ID (e.g., `FTR-12589`)
4. The output panel will show which commits reference the ticket and which tags/releases include them

## 🧰 Requirements
- Git must be available in your system path
- Run this extension inside a Git repository that contains the related commits

## 🛠️ Installation (Local Dev or VSIX)

### Manual from Source:
1. Clone this repo:
   ```bash
   git clone https://github.com/weinx/weinx-jira-ticket-gitlab-tracker.git
   cd weinx-jira-ticket-gitlab-tracker
   ```
2. Install dependencies (if needed)
3. Run VS Code in dev mode:
   ```bash
   code .
   ```
   Press `F5` to launch the extension.

### From VSIX:
```bash
code --install-extension weinx-jira-ticket-gitlab-tracker-*.vsix
```

## 📄 License
MIT

## 🤝 Contributing
Contributions, ideas, and improvements are welcome. Feel free to fork and submit a pull request!

---
Made with 💻 by [Pablo Weinx]
