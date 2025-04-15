// 📦 VS Code Extension: weinx-jira-ticket-gitlab-tracker
// Description: Track JIRA ticket status through Git commits and GitLab tags/releases

const vscode = require('vscode');
const cp = require('child_process');

function activate(context) {
  let disposable = vscode.commands.registerCommand('weinxJiraTracker.checkTicket', async function () {
    const ticket = await vscode.window.showInputBox({
      prompt: 'Enter JIRA Ticket (e.g., FTR-12345)',
    });

    if (!ticket) {
      vscode.window.showWarningMessage('No ticket ID provided.');
      return;
    }

    const output = vscode.window.createOutputChannel('JIRA GitLab Tracker');
    output.show(true);
    output.appendLine(`🔍 Checking commits for: ${ticket}\n`);

    try {
      // Search for commits matching the ticket ID
      const commits = cp.execSync(`git log --all --grep=${ticket} --pretty=format:"%H"`).toString().split('\n');

      if (!commits || commits.length === 0 || commits[0].trim() === '') {
        output.appendLine(`❌ No commits found for ticket ${ticket}`);
        return;
      }

      let foundTags = new Set();

      for (const commit of commits) {
        // Search for tags/releases containing the commit
        const tags = cp.execSync(`git tag --contains ${commit}`).toString().split('\n').filter(t => t.trim() !== '');
        if (tags.length > 0) {
          tags.forEach(tag => foundTags.add(tag));
          output.appendLine(`✅ Commit ${commit} is included in: ${tags.join(', ')}`);
        } else {
          output.appendLine(`⚠️ Commit ${commit} is not in any tag.`);
        }
      }

      if (foundTags.size > 0) {
        output.appendLine('\n🧾 Ticket appears in the following releases:');
        foundTags.forEach(tag => output.appendLine(`  - ${tag}`));
      } else {
        output.appendLine('\n❌ Ticket is not yet included in any known release.');
      }
    } catch (err) {
      output.appendLine(`Error running git commands: ${err.message}`);
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
