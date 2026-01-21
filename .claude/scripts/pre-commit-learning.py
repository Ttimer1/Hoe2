#!/usr/bin/env python3
"""
Pre-commit hook: Inject learning review prompt.
Non-blocking - uses additionalContext.
"""

import json
import sys
import re

def main():
    try:
        input_data = json.load(sys.stdin)
    except json.JSONDecodeError:
        print(json.dumps({"decision": "allow"}))
        return

    tool_input = input_data.get("tool_input", {})
    command = tool_input.get("command", "")

    # Only trigger on git commit
    if not re.search(r'\bgit\s+commit\b', command):
        print(json.dumps({"decision": "allow"}))
        return

    review_prompt = """
## Pre-Commit Learning Check

**Scan deze sessie:**
- [ ] Nieuwe patterns/conventions?
- [ ] Architecture decisions?
- [ ] Nuttige commands?
- [ ] Fouten om te voorkomen?

**5-Check** (alleen bij 5/5 → update CLAUDE.md):
H(erhaalbaar) S(tabiel) G(eneriek) N(on-redundant) A(ctionable)

**Format:** `LEARNINGS: X | QUALIFIED: Y | ACTION: [update/none]`
"""

    print(json.dumps({
        "decision": "allow",
        "additionalContext": review_prompt
    }))

if __name__ == "__main__":
    main()
