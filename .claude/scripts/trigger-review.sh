#!/bin/bash
# Trigger CLAUDE.md review
# Usage: Just run this script or type "/review" in chat

cat "$(dirname "$0")/../prompts/review-claude-md.md"
