## Post-Commit: Update HISTORY.md

Een commit is zojuist gemaakt. Update het HISTORY.md logboek.

### Instructies

1. **Lees de laatste commit info**:
   ```bash
   git log -1 --pretty=format:"%h - %s (%an, %ar)"
   ```

2. **Update HISTORY.md** onder de huidige sessie sectie:
   - Voeg de commit hash en beschrijving toe aan de "Completed" tabel
   - Als dit een significante beslissing was, voeg toe aan "Key Decisions"

3. **Check voor CLAUDE.md candidates**:
   - Is er iets geleerd dat de 5-check passeert?
   - Zo ja, voeg toe aan CLAUDE.md
   - Zo nee, log in HISTORY.md waarom niet

### Format voor HISTORY.md update

```markdown
| Task description | `commit_hash` |
```

### Reminder

- HISTORY.md = sessie details, tijdelijke info, learnings
- CLAUDE.md = alleen 5/5 gekwalificeerde, stabiele regels
