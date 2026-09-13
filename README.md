# 🚨 Incident Commander

> An AI agent that investigates software incidents, reproduces failures safely, prepares fixes, verifies them, and asks a human before taking consequential action.

Built for the **Build Agents That Act — TrueFoundry × Polaris Hackathon**.

---

## 🎯 What is Incident Commander?

Incident Commander is an AI-powered software incident response agent.

Instead of simply telling an engineer what might be wrong, the agent can actually:

1. Investigate a real GitHub repository.
2. Inspect relevant source code, tests, and git history.
3. Reproduce the incident inside an isolated Daytona sandbox.
4. Identify the root cause.
5. Prepare the smallest safe fix.
6. Run tests to verify the fix.
7. Stop and ask for human approval.
8. After approval, create a real GitHub Pull Request.

The goal is to safely hand over the repetitive parts of incident response to an agent while keeping a human in control of consequential actions.

---

## 💡 Why is this different from a normal AI coding assistant?

A normal coding assistant might suggest:

> "The problem is probably in `server.js`. Change this line."

Incident Commander goes further.

It interacts with real systems and performs real work:

```text
Real GitHub Issue
       ↓
Incident Commander
       ↓
Investigate real repository
       ↓
Reproduce failure
       ↓
Daytona sandbox
       ↓
Prepare fix
       ↓
Run tests
       ↓
🛑 Human approval
       ↓
Real GitHub Pull Request