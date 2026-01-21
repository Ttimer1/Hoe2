#!/bin/bash
# Trigger CLAUDE.md review only on specific commands
# Triggers: /learn, /evaluate, /claudemd

# Read user input from stdin (Claude Code passes it this way)
read -r user_input

# Check if input matches our triggers (case-insensitive)
if echo "$user_input" | grep -qiE '^/(learn|evaluate|claudemd)(\s|$)'; then
    cat "$(dirname "$0")/../prompts/review-claude-md.md"
fi
