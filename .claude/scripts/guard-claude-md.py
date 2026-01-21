#!/usr/bin/env python3
"""
Guard script for CLAUDE.md edits.
Requires 5-check qualification before allowing updates.
"""

import json
import sys

def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        print(json.dumps({"decision": "allow"}))
        return

    tool_input = input_data.get("tool_input", {})
    file_path = tool_input.get("file_path", "")

    # Check if targeting CLAUDE.md
    if "CLAUDE.md" not in file_path and "claude.md" not in file_path.lower():
        print(json.dumps({"decision": "allow"}))
        return

    # CLAUDE.md edit detected - require qualification
    qualification_prompt = """
## CLAUDE.md Update Guard

Je wilt CLAUDE.md wijzigen. Doorloop eerst de 5-check:

| # | Check | Vraag |
|---|-------|-------|
| 1 | Herhaalbaarheid | Relevant voor toekomstige sessies? |
| 2 | Stabiliteit | Stabiel, niet experimenteel? |
| 3 | Genericiteit | Geldt voor hele project? |
| 4 | Non-redundantie | Niet al gedekt in CLAUDE.md? |
| 5 | Actionability | Direct bruikbaar door nieuwe sessie? |

**Bevestig met "5/5 CONFIRMED" of leg uit waarom je annuleert.**
"""

    print(json.dumps({
        "decision": "ask",
        "message": qualification_prompt
    }))

if __name__ == "__main__":
    main()
