## A. Executive Summary

Dit product is een webgebaseerd documentatie‑ en procescapturatietool dat automatisch stap‑voor‑stap handleidingen (“Scribes”) genereert op basis van gebruikersacties in browser en desktop‑apps. De primaire doelgroep zijn kenniswerkers (ops, customer success, support, HR, finance, onboarding/trainers) die terugkerende processen willen documenteren en delen met collega’s of klanten.[youtube**+1**](https://www.youtube.com/watch?v=nbFzoidr1Fo)[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]

Kernwaarde:

* Eén klik opnemen, proces uitvoeren, automatisch een visueel stappenplan met screenshots en instructietekst ontvangen.[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
* Snel delen via link, embed of export (PDF/Word/HTML/Markdown) zodat kennis herbruikbaar is in bestaande kennisbanken en tools.[scribehow**+1**](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)
* Veilig omgaan met gevoelige data via automatische en handmatige blur/redactie (“Smart Blur”) nog vóór screenshots op de server terechtkomen.[scribe**+1**](https://scribe.com/library/smart-blur)

Differentiatoren t.o.v. generieke screenrecorders/tutorial tools:

* Automatische herkenning van klikken, invoer en UI‑elementen om instructietekst te genereren zonder handmatig typen.[youtube**+1**](https://www.youtube.com/watch?v=nbFzoidr1Fo)
* Fijnmazige redactie‑opties (categorie‑gebaseerde Smart Blur, element‑selectie en manuele redactie) gericht op compliance in gereguleerde sectoren.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)
* Document‑ en viewer‑inzichten (views, completions, wie heeft gekeken) voor Pro/Enterprise om adoptie en performance van guides te meten.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)

## B. Product Scope & Non-Goals

## Scope v1 (MVP parity)

In scope voor v1:

* Account & onboarding:
  * Webapp met onboarding naar eerste Scribe: account aanmaken, workspace en teamnaam opgeven, prompt om browserextensie te installeren.[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
* Browserextensie:
  * Installatie, permissies voor scherm/actietracking in browser.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)
  * Capture‑modus: registreren van muisklikken, toetsenbordinvoer en pagina‑navigatie; automatisch screenshots per stap.[youtube**+1**](https://www.youtube.com/watch?v=nbFzoidr1Fo)
  * On‑screen controls met start/pause/stop en Smart Blur‑bediening.[scribe**+1**](https://scribe.com/tools/image-blur-redaction)
* Desktop capture:
  * Mogelijkheid om processen buiten de browser vast te leggen (desktop app); Pro‑feature.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* Scribe genereren:
  * Na stoppen van opname automatisch document met genummerde stappen, screenshots en gegenereerde tekst (wat klikte/typte de gebruiker, op welk element).[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
* Editor:
  * Bewerken van staptekst, titels, beschrijvingen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Herordenen, samenvoegen, kopiëren, verwijderen van stappen.[scribehow**+1**](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)
  * Screenshot‑tools (Pro/Enterprise): crop, annotaties (pijlen, kaders, tekst), blur/redactie van gevoelige delen.[scribe**+1**](https://scribe.com/tools/image-blur-redaction)
  * Handmatige blur op bestaande screenshots.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)]
* Organisatie & IA:
  * Workspaces en teams; documenten in mappen/folders organiseren.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)][[vault.nimc.gov](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)]
  * Documenttypen: Scribes (stap‑voor‑stap guides) en Pages (rich‑content documenten die meerdere Scribes, tekst, media bundelen). Pro/Enterprise voor Pages.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* Sharing & rechten:
  * Deelopties: Not Shared, Shared with Team, Shared with Organization (Enterprise), Shareable with Link, Restricted (specifieke individuen).[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9008029939997-Basics-How-to-share-a-Scribe)
  * Document‑niveau view/edit rechten voor teamleden.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
  * Team‑/org‑niveau standaard en maximum share‑instellingen (Enterprise).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]
  * Embeds in externe tools (Confluence, Notion, Sharepoint, Guru, HubSpot, etc.).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Export naar PDF, Word (DOCX), HTML, Markdown (Pro/Enterprise).[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)][[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* Collaboratie:
  * Teamrollen (Admin, Creator; en in Enterprise ook System Admin, Team Admin, Viewer).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Documenteigendom en overdracht bij verwijderen van teammates.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Approval workflows voor publiceren als aanwezig.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* Analytics:
  * Document‑insights: views, completion rate, dagelijkse aantallen; per document inzicht in wie bekeek en afrondde.[scribehow**+1**](https://scribehow.com/viewer/How_to_Access_and_Analyze_Map_Engagement_Data__9c2V2H3NQ7-vKkQ8YgIW9A)
* Privacy & security:
  * Smart Blur die data in de browser redigeert vóór upload naar server.[scribe**+1**](https://scribe.com/library/smart-blur)
  * Organisatiebrede delingsrestricties (default & max share).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]
  * GDPR/privacy/terms‑conforme data‑verwerking (high‑level).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)]
* Pricing & packaging:
  * Free, Pro, Team/Business, Enterprise met plan‑specifieke features en limieten, incl. Pro‑only features zoals desktop capture, Smart Blur, geavanceerde exports, insights en custom branding.[scribe**+1**](https://scribe.com/library/smart-blur)[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]

## Non‑Goals v1

Niet in scope (expliciet uitgesloten of alleen als AANNAME):

* Geen volledig AI‑gebaseerde contentgeneratie buiten basic instructie‑formulering zoals bronproduct dat nu al doet.[youtube**+1**](https://www.youtube.com/watch?v=nbFzoidr1Fo)
* Geen uitgebreide workflow‑automatisering (bijv. multi‑step business process management). AANNAME.
* Geen real‑time co‑editing van een Scribe (meerdere editors tegelijk). AANNAME.
* Geen ingebouwde chat‑ of voice‑assistent in de viewer/editor. AANNAME.
* Geen custom SSO/SCIM implementatie details, alleen functionele beschrijving voor Enterprise als eisen zichtbaar zijn in rollen/instellingen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* Geen mobiele apps‑specificatie, behalve dat Pro desktop/mobile capture ondersteunt (functioneel gedrag wordt beschreven, niet de native implementatie).[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]

## C. Personas & User Roles

## Personas

* **Knowledge worker / Creator**
  * Doel: processen documenteren om supportvragen te verminderen en onboarding te stroomlijnen.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Gebruik: opname in browser/desktop, bewerken, delen met team/klanten.[youtube**+1**](https://www.youtube.com/watch?v=_WQ_MKyA6C8)
* **Team Admin**
  * Doel: beheer van team, mappen, rechten, en licenties.[vault.nimc**+1**](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)
  * Gebruik: uitnodigen gebruikers, rolbeheer, share‑beleid instellen.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)
* **System Admin / Org Owner (Enterprise)**
  * Doel: organisatiebrede instellingen (SSO/SCIM, share‑policies, redactie‑policy).[scribehow**+2**](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)
* **Viewer (authenticed)**
  * Doel: Scribes lezen en processen volgen; eventueel “Guide Me” gebruiken.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)
* **Anonieme viewer**
  * Doel: publiek gedeelde Scribes volgen via link/embed, zonder account.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9008029939997-Basics-How-to-share-a-Scribe)

## User roles

* Anonieme bezoeker (website):
  * Kan marketing site bekijken, pricing, publieke templates en voorbeeld‑Scribes.[scribehow**+1**](https://scribehow.com/viewer/How_to_Access_and_Analyze_Map_Engagement_Data__9c2V2H3NQ7-vKkQ8YgIW9A)
* Geregistreerde gebruiker:
  * Heeft account, toegang tot eigen Workspace, kan afhankelijk van rol Scribes creëren/bekijken.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)
* Maker (Creator):
  * Kan Scribes/Pages creëren, bewerken, delen binnen toegekende bevoegdheden.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)
* Viewer:
  * Kan gedeelde documenten bekijken, “Guide Me” gebruiken en telt mee in insights.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)
* Team Admin:
  * Kan teaminstellingen en leden beheren; kan documenten creëren/bewerken.[vault.nimc**+1**](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)
* Org/System Admin (Enterprise):
  * Kan teams aanmaken, org‑instellingen (SSO/SCIM, share‑policies, redactie) beheren.[scribehow**+2**](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)

## Permission matrix (CRUD per rol – documenten)

(AANNAME: matrix gereconstrueerd uit rolbeschrijvingen; waar expliciet genoemd wordt, verwijzing)

| Rol              | Create Scribe/Page                                                                                                     | Read eigen                                                                                                            | Read team                                                                                                                       | Read org (Ent)                                                                                                               | Update eigen                                                                                                          | Update team docs                                                                                                                   | Delete eigen | Delete team docs                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Anonieme viewer  | Nee                                                                                                                    | n.v.t.                                                                                                                | Alleen publieke link/embed[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)] | Alleen publieke                                                                                                              | Nee                                                                                                                   | Nee                                                                                                                                | Nee          | Nee                                                                                                                                |
| Viewer (auth)    | Nee[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)] | n.v.t.                                                                                                                | Ja, gedeelde docs[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]          | Ja, indien org‑gedeeld[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)] | Nee                                                                                                                   | Nee                                                                                                                                | Nee          | Nee                                                                                                                                |
| Creator          | Ja[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]  | Ja[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)] | Ja, voor team‑gedeeld[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]     | Ja (Ent org‑gedeeld)[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]   | Ja[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)] | AANNAME: Alleen als expliciet edit‑rechten                                                                                        | Ja           | AANNAME: Alleen eigen docs                                                                                                         |
| Team Admin       | Ja[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]  | Ja                                                                                                                    | Ja                                                                                                                              | Ja                                                                                                                           | Ja                                                                                                                    | Ja, binnen team[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)] | Ja           | Ja, binnen team[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)] |
| System Admin/Org | Ja[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]  | Ja                                                                                                                    | Ja                                                                                                                              | Ja                                                                                                                           | Ja                                                                                                                    | Ja, alle teams[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]  | Ja           | Ja, alle teams[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]  |

## Share‑permissions

Share‑typen (documentniveau):[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)

* Not Shared:
  * Alleen eigenaar kan bekijken/bewerken.
* Shared with Team:
  * Alle teamleden kunnen document vinden en bekijken; owner kan view of edit toekennen aan team.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9008029939997-Basics-How-to-share-a-Scribe)
* Organization (Enterprise):
  * Alle geauthenticeerde users in de organisatie kunnen vinden/bekijken.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)
* Shareable with Link:
  * Iedereen met link kan document bekijken, ongeacht account.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9008029939997-Basics-How-to-share-a-Scribe)
  * Team kan document ook in Workspace terugvinden.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
* Restricted (specifiek):
  * Delen via e‑mailadres met specifieke individuen; share‑setting toont dan “Restricted”.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]

Org‑niveau instellingen (Enterprise):[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]

* Default Share Permission: standaard share‑instelling voor nieuwe documenten (bijv. “Not Shared”).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]
* Maximum Share Permission: hoogste toegestane share‑modus (bijv. max “Shared with Organization”).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]

## D. Information Architecture (IA)

## Sitemap & navigatiestructuur

Hoog‑niveau IA webapp:[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]

* Marketing site
  * Home
  * Features / Product
  * Use cases / Library
  * Pricing
  * Templates / Example Scribes
  * Resources: Blog, Help Center, Product Releases
* Webapp (na login)
  * Dashboard / Workspace
    * Mijn Scribes
    * Pages
    * Folders
    * Shared with me / Team content
    * Recent / Favorites (AANNAME, gezien library/usage focus)
  * Capture
    * Download browserextensie
    * Download desktop app
  * Document viewer (Scribe/Page)
  * Document editor (Scribe/Page)
  * Team / Workspace settings
  * Organization settings (Enterprise)
  * Billing & subscription
  * Notifications (AANNAME: basis e‑mailinstellingen, aangezien comments/insights bestaan)
* Help Center (support)
  * Recording
  * Editing
  * Sharing & Exporting
  * Teams & Permissions
  * Privacy & Security[scribehow**+1**](https://support.scribehow.com/hc/en-us/categories/6852063006493-Sharing)

## Objectmodel

(AANNAME: logisch model afgeleid uit support‑ en marketingcontent.)

* **Scribe (Document)**
  * Attributes: id, title, description, created_at, updated_at, owner_id, workspace_id, folder_id, share_setting, completion_rate, view_count.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)
  * Relations: heeft meerdere Steps; heeft meerdere Screenshots (via Steps); hoort bij Workspace, Folder; heeft Share Links, Embeds, Exports; heeft Versions (AANNAME).
* **Step**
  * Attributes: id, scribe_id, order, instruction_text, input_text, element_selector (AANNAME), type (click, input, navigation, manual), timestamp.[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
* **Screenshot**
  * Attributes: id, step_id, image_url, width, height, blur_regions, annotations.[scribe**+1**](https://scribe.com/tools/image-blur-redaction)
* **Annotation**
  * Attributes: id, screenshot_id, type (arrow, box, text, blur), position, size, color, label.[scribe**+1**](https://scribe.com/tools/image-blur-redaction)
* **Workspace**
  * Attributes: id, name, owner_id, plan_type (Free/Pro/Enterprise), domain (voor auto‑teaming), default_share_permission, max_share_permission.[vault.nimc**+1**](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)
* **Folder**
  * Attributes: id, workspace_id, name, parent_folder_id.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
  * Relations: bevat Scribes/Pages; kan met team gedeeld worden.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
* **Team**
  * Attributes: id, workspace_id, name, access_level (Open/Closed/Default).[[scribe.launchnotes](https://scribe.launchnotes.io/announcements/seamlessly-work-with-your-teammates-in-scribe)]
  * Relations: heeft Members; heeft Folders; heeft Documents.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* **Member**
  * Attributes: id, user_id, team_id, role (Creator, Admin, Viewer, System Admin).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* **Invite**
  * Attributes: id, email, team_id, role, status (pending/accepted/expired).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* **Template**
  * Attributes: id, title, description, industry/use case, base_structure (Scribe of Page), availability plan.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* **Page**
  * Attributes: id, title, content_blocks (text, images, embedded Scribes/videos), workspace_id.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* **Share Link**
  * Attributes: id, scribe_id, url_token, share_type (Link, Team, Org, Restricted), created_by, created_at, step_anchor (optioneel).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
* **Embed**
  * Attributes: id, scribe_id, embed_code, target_tool (Confluence/Notion/etc.), created_at.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* **Export**
  * Attributes: id, scribe_id, format (PDF/DOCX/HTML/Markdown), generated_at, requested_by.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)][[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* **Version**
  * AANNAME: versiegeschiedenis per Scribe/Page: version_number, created_at, created_by, diff_summary.
* **Insight / View Event**
  * Attributes: id, scribe_id, viewer_id (optioneel), viewed_at, completed (bool).[scribehow**+1**](https://scribehow.com/viewer/How_to_Access_and_Analyze_Map_Engagement_Data__9c2V2H3NQ7-vKkQ8YgIW9A)

## E. Core User Flows

Voor elke flow: preconditions, hoofdpad, alternatieven, errors, postconditions.

## 1) Browse/landing -> sign up

* Preconditions:
  * Gebruiker bezoekt marketing homepage of een publiek gedeelde Scribe/template.[scribehow**+1**](https://scribehow.com/viewer/How_to_Access_and_Analyze_Map_Engagement_Data__9c2V2H3NQ7-vKkQ8YgIW9A)
* Hoofdpad:
  1. Gebruiker klikt op “Get started for free” / “Sign up”.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  2. Sign‑up‑pagina toont opties (e‑mail, SSO; Pro trial‑opties AANNAME).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  3. Gebruiker vult naam, werk‑e‑mail en wachtwoord in, of kiest SSO.[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
  4. Gebruiker kiest team/workspace naam bij eerste onboarding (“Enter your name”/“Team name”).[[youtube](https://www.youtube.com/watch?v=ZPtNIeQMwGM)]
  5. Na submit wordt de eerste Workspace aangemaakt en gebruiker wordt ingelogd en naar onboarding / workspace dashboard geleid.[youtube**+1**](https://www.youtube.com/watch?v=nbFzoidr1Fo)
* Alternatieve paden:
  * Klik vanaf publieke Scribe op “Sign up to copy/edit” → prefill met uitnodiging naar team als document onderdeel van team is. AANNAME.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/9008029939997-Basics-How-to-share-a-Scribe)]
* Errors:
  * Ongeldig e‑mailformaat, te zwak wachtwoord → inline foutmelding.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * E‑mail al in gebruik → hint “Log in” of “Reset password”. AANNAME.
* Postconditions:
  * Account en Workspace zijn aangemaakt.
  * Gebruiker is aangemeld en krijgt prompt om extensie te installeren.[youtube**+1**](https://www.youtube.com/watch?v=nbFzoidr1Fo)

## 2) Install extensie -> onboarding permissions

* Preconditions:
  * Gebruiker is ingelogd in webapp of volgt onboarding flow.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)]
* Hoofdpad:
  1. Op “Get started” onboarding scherm: call‑to‑action “Download browser extension”.[[youtube](https://www.youtube.com/watch?v=ZPtNIeQMwGM)]
  2. Klik opent Chrome Web Store‑listing (of equivalente store) met beschrijving, screenshots, reviews.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
  3. Gebruiker klikt “Add to browser” → standaard browser‑prompt voor permissions (access to read/modify data on visited sites, screen capture). AANNAME, gebaseerd op extensie‑typologie.
  4. Na installatie verschijnt extensie‑icon in toolbar. Extensie detecteert loginstatus en toont “You’re logged in as [name]” of vraagt login.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  5. Bij eerste gebruik vraagt extensie toestemming voor schermopname / tab toegang (native browser permission). AANNAME.
* Alternatieve paden:
  * Gebruiker slaat extensie‑installatie over; kan later via “Capture” in app alsnog installeren.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* Errors:
  * Permissions geweigerd → extensie toont foutbanner en uitleg hoe permissies in browserinstellingen aan te passen.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
  * Niet‑ondersteunde browser → webapp toont melding dat extensie alleen op bepaalde browsers werkt en verwijst naar desktop app.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* Postconditions:
  * Extensie is geïnstalleerd, klaar om opnames te starten.

## 3) New capture (record) -> stop -> auto‑generated doc

* Preconditions:
  * Extensie geïnstalleerd; gebruiker ingelogd.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)]
* Hoofdpad:
  1. Gebruiker klikt op extensie‑icon of “Start Recording”‑knop.[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
  2. On‑screen control overlay verschijnt met statusindicator (bijv. knipperende dot) en knoppen Start/Pause/Stop, Smart Blur knop.[scribe**+1**](https://scribe.com/library/smart-blur)
  3. Gebruiker voert proces uit (navigeren, klikken, typen). Extensie registreert elke stap en maakt per actie een screenshot.[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
  4. Gebruiker klikt “Finish Recording”/“Stop”.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)]
  5. Extensie stuurt ruwe capture data (stappen, screenshots) naar webapp; webapp genereert automatisch een Scribe met genummerde stappen, screenshots en instructies.[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
  6. Gebruiker wordt automatisch naar Scribe editor geleid met “magic” boodschap dat guide klaar is.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)]
* Alternatieve paden:
  * Pauze tijdens opname; opnieuw starten zonder nieuwe Scribe te creëren. (AANNAME voor pauze‑gedrag).[[scribe](https://scribe.com/library/smart-blur)]
  * Gebruiker annuleert opname (Discard) → geen document aangemaakt. AANNAME.
* Errors / edge cases:
  * Mislukte screenshot (blocked page, DRM, incognito): extensie slaat stap zonder screenshot op en toont melding met instructie (bijv. “Cannot capture this page, please use desktop app”).[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)
  * Offline tijdens capture: extensie buffert lokaal en probeert bij reconnect te syncen; bij mislukking geeft fout bij stoppen. AANNAME.
* Postconditions:
  * Nieuwe Scribe bestaat met basisstructuur van stappen; klaar voor editing en delen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]

## 4) Edit doc

Functionaliteit volgens support‑/onboarding‑artikelen:[scribehow**+1**](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)

* Preconditions:
  * Scribe bestaat en gebruiker heeft edit‑rechten (owner of team member met edit).[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)
* Hoofdpad (algemeen):
  1. Gebruiker opent Scribe in viewer en klikt “Edit”.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  2. Editor toont lijst met stappen links of boven, preview in hoofdgebied, en bewerkpanelen voor tekst/screenshot.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* Subflows:
  * Step reorder:
    * Gebruiker sleept een step in de lijst naar een nieuwe positie (drag‑and‑drop).
    * Volgorde‑nummers worden automatisch bijgewerkt.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Text edit:
    * Klik op instructietekst in een step; tekst‑editor wordt actief, wijzigingen worden inline opgeslagen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Insert step:
    * Knop “Add step” tussen bestaande stappen; gebruiker kan een handmatige step toevoegen met tekst en optionele afbeelding.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Delete step:
    * Klik op prullenbak‑icon bij step → bevestigingsdialoog “Delete this step?”.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
  * Screenshot edit/crop/blur (Pro/Ent):
    * Klik “Edit screenshot” bij een step.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
    * Editor biedt tools: crop, annotaties (pijlen, vormen, tekst), blur/redactie.[scribe**+1**](https://scribe.com/tools/image-blur-redaction)
    * Smart Blur kan ook achteraf gebruikt worden op bestaande screenshots.[scribe**+1**](https://scribe.com/library/smart-blur)
  * Headings, tips/callouts:
    * Gebruiker kan headings en callout‑boxes toevoegen (“tips”, “alerts”) om context toe te voegen.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)]
* Alternatieve paden:
  * Pro‑gebruikers bewerken screenshot, Free‑gebruikers zien upsell/prompt naar Pro bij klik op screenshot‑edit.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* Errors:
  * Opslagfout tijdens edit → inline error en CTA “Retry” zonder wijzigingen te verliezen (AANNAME).
* Postconditions:
  * Scribe bevat bijgewerkte structuren/visuals; viewer toont laatste versie.

## 5) Share: links, embed, export PDF

* Preconditions:
  * Document bestaat; gebruiker heeft share‑rechten (owner/Admin).[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)
* Hoofdpad (link & access control):
  1. Gebruiker klikt “Share”.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/9008029939997-Basics-How-to-share-a-Scribe)]
  2. Share‑dialog toont huidige instelling (Not Shared / Team / Org / Link / Restricted).[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9008029939997-Basics-How-to-share-a-Scribe)
  3. Gebruiker kiest share‑type; indien “Shareable with Link” wordt een URL getoond voor kopiëren.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
  4. Optioneel: gebruiker nodigt specifieke personen via e‑mail uit → share‑setting wordt “Restricted”.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
  5. Gebruiker kan per team “view” of “edit” toggelen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
* Embed:
  1. In share‑dialog of menu “Embed” kiezen.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9008029939997-Basics-How-to-share-a-Scribe)
  2. App genereert embed‑code (AANNAME: iframe/script) geschikt voor tools als Confluence, Notion, Sharepoint, Guru, HubSpot.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  3. Gebruiker kopieert code en plakt in externe tool.
* Export PDF:
  1. In share/export‑menu kiest gebruiker “Export as PDF”.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
  2. App genereert PDF met alle stappen en screenshots.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
  3. Downloadlink verschijnt; bij Pro‑only feature krijgt Free user upgrade‑prompt.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* Alternatieve paden:
  * Export naar Word (DOCX), HTML, Markdown voor Pro/Enterprise.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* Errors:
  * Export timeout → melding en mogelijkheid opnieuw te proberen.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* Postconditions:
  * Link, embed en/of export is beschikbaar; share‑settings en insights worden bijgewerkt.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)

## 6) Organize: folders/tags/search, duplicate, move/copy

* Preconditions:
  * Workspace en minstens één document.[[vault.nimc.gov](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)][[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
* Hoofdpad:
  * Folders:
    1. Gebruiker opent Workspace dashboard met folderstructuur.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
    2. Knop “New Folder” maakt een nieuwe folder; gebruiker geeft naam.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
    3. Documenten kunnen naar folder gesleept worden of via contextmenu “Move to folder”.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
  * Duplicate:
    1. In documentlijst of viewer kiest gebruiker “Duplicate”.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
    2. Nieuwe kopie wordt aangemaakt (bijv. “Copy of …”) in dezelfde folder.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
  * Search:
    1. Search‑bar bovenaan; gebruiker typt zoekterm.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
    2. Resultaten tonen Scribes/Pages binnen workspace (AANNAME: titel + content search), met filters (AANNAME: by owner, folder, type).
* Alternatieve paden:
  * Shared library per team met shared folders.[[vault.nimc.gov](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)][[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
* Errors:
  * Geen resultaten → “No documents found” empty state met tips (bijv. check spelling, filters). AANNAME.
* Postconditions:
  * Documenten zijn logisch geordend; vindbaarheid verbeterd.

## 7) Team: create workspace, invite, roles, shared library

* Preconditions:
  * Gebruiker is Admin of System Admin.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* Hoofdpad:
  1. Admin opent Team/Workspace settings.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  2. Admin maakt nieuw team aan of bewerkt teamnaam.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  3. Admin stelt team access level in: Open, Closed, Default.[[scribe.launchnotes](https://scribe.launchnotes.io/announcements/seamlessly-work-with-your-teammates-in-scribe)]
  4. Admin nodigt gebruikers uit via e‑mail en wijst rollen toe (Creator/Admin/Viewer).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  5. Uitgenodigde gebruikers ontvangen uitnodiging, aanvaarden en worden aan team toegevoegd.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  6. Shared folders en documenten verschijnen in teambibliotheek.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
* Alternatieve paden:
  * Open team: gebruikers met hetzelfde domein kunnen zonder approval joinen.[[scribe.launchnotes](https://scribe.launchnotes.io/announcements/seamlessly-work-with-your-teammates-in-scribe)]
  * Closed team: join‑request vereist admin‑approval.[[scribe.launchnotes](https://scribe.launchnotes.io/announcements/seamlessly-work-with-your-teammates-in-scribe)]
* Errors:
  * Onjuist e‑mailformaat, dubbele uitnodiging → foutmelding.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* Postconditions:
  * Teamstructuur staat; content gedeeld volgens teamrechten.

## 8) Analytics/dashboard

* Preconditions:
  * Document is gedeeld en bekeken door anderen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
* Hoofdpad:
  1. In documentviewer klikt gebruiker op “Insights”.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
  2. Insights‑paneel toont:
     * Totaal aantal views.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
     * Completion rate en completion counts (sinds specifieke datums).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
     * Dagelijkse view/complete grafiek over de afgelopen maand.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
  3. Gebruikers met rechten zien per viewer wie heeft bekeken, of ze voltooid hebben, en laatste view‑moment.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
  4. Optioneel: download insights data voor verder gebruik.[[scribehow](https://scribehow.com/viewer/How_to_Access_and_Analyze_Map_Engagement_Data__9c2V2H3NQ7-vKkQ8YgIW9A)]
* Errors:
  * Geen data (nog niet bekeken) → empty state “No insights yet; share your Scribe to start collecting data”. AANNAME.
* Postconditions:
  * Gebruiker heeft inzicht in performance en kan content optimaliseren.

## F. Detailed UI Spec (per pagina)

Voor alle schermen: beschrijving van doel, layout, states, validaties en microcopy (geparafraseerd).

## Marketing site – Home/Features/Pricing

* Doel:
  * Uitleggen wat product doet, voor wie het is, en gebruikers naar sign‑up of demo sturen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* Layout (Home):
  * Hero‑sectie met headline (“Maak handleidingen terwijl je klikt”), subheadline, primaire CTA (“Start gratis / Proberen”).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Sekundaire CTA: “Bekijk voorbeeld” of “Bekijk demo”.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Secties: “Hoe het werkt” (Record → Edit → Share), use cases, testimonial/logo‑riem, feature‑overzicht (Smart Blur, desktop capture, exports, insights).[[scribe](https://scribe.com/library/smart-blur)][[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
  * Footer met links naar Support, Blog, Pricing, Terms, Privacy.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* States:
  * Desktop en responsive mobiele layout.
  * Loading: skeleton of spinners voor hero‑visuals. AANNAME.
  * Error: algemene foutmelding bij serverprobleem. AANNAME.
* Pricing‑pagina:
  * Plan‑kaarten met Free/Pro/Team/Enterprise plus maand/jaar prijs, feature‑matrix (zie sectie M).[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* Validaties:
  * Contact/demo formulier valideert naam, e‑mail, bedrijfsnaam. AANNAME.
* Microcopy voorbeelden:
  * CTA knoptekst: “Begin direct – geen creditcard nodig” (geparafraseerd).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]

## Auth: login/signup/SSO

* Doel:
  * Beveiligde toegang tot workspace, zonder wrijving bij onboarding.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* Layout:
  * Tabs of toggles voor “Log in” en “Account aanmaken”.
  * Velden: e‑mail, wachtwoord, eventueel naam en teamnaam bij eerste registratie.[[youtube](https://www.youtube.com/watch?v=ZPtNIeQMwGM)]
  * SSO‑knop (“Log in met SSO / bedrijfsaccount”) voor Enterprise.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* States:
  * Empty: velden leeg, CTA disabled tot verplichte velden zijn ingevuld.
  * Loading: spinner in knop na submit.
  * Error: inline fouttekst bij verkeerd wachtwoord, onbekend account, of mislukte SSO.
* Validaties:
  * E‑mailformaat en minimale wachtwoordsterkte (AANNAME).
* Microcopy:
  * “Nog geen account? Registreer gratis in een paar seconden.” (parafrase).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]

## Dashboard/Library

* Doel:
  * Overzicht van Scribes/Pages, snelle toegang tot capture, search, folders, en gedeelde content.[[vault.nimc.gov](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)][[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
* Layout:
  * Topbar: workspace switcher, search bar, “New”‑knop (New Scribe/Page), profielfoto met menu.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
  * Sidebar: nav naar “My Documents”, “Shared with me”, “Folders”, “Templates”, “Trash” (AANNAME).[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
  * Hoofdgrid: kaarten of lijst met documenten (titel, eigenaar, folder, laatste wijziging, view count).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
* States:
  * Empty (new user): educatieve cards met “Install extension”, “Record your first Scribe”, verwijzing naar New User Guide.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Loading: skeleton cards.
* Microcopy:
  * Empty state tekst: “Je hebt nog geen handleidingen. Installeer de extensie om je eerste Scribe vast te leggen.” (parafrase).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]

## Scribe viewer pagina

* Doel:
  * Scribe als stap‑voor‑stap walkthrough presenteren voor lezers.[scribehow**+1**](https://scribehow.com/viewer/How_to_Access_and_Analyze_Map_Engagement_Data__9c2V2H3NQ7-vKkQ8YgIW9A)
* Layout:
  * Header: documenttitel, eigenaar, knoppen “Edit” (indien rechten), “Share”, “Insights”.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9008029939997-Basics-How-to-share-a-Scribe)
  * Linker kolom: lijst van genummerde stappen (klikbaar).[[youtube](https://www.youtube.com/watch?v=ZPtNIeQMwGM)]
  * Hoofdcontent: huidige stap met screenshot, instructiewoording, eventueel “Guide Me” mode (AANNAME viewer role).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Footer: navigatieknoppen “Vorige stap / Volgende stap” en progress indicator (bijv. 3/10). AANNAME.
* States:
  * Public view zonder login: alleen viewer UI, geen edit, beperkte insights.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
  * Authenticated view: extra knoppen voor edit, insights, copy.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
* Errors:
  * Document niet gevonden of geen toegang → errorpagina met “Vraag toegang aan” (AANNAME).
* Microcopy:
  * “Volg de stappen hieronder om het proces af te ronden.” (parafrase).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]

## Scribe editor pagina

* Doel:
  * Scribes aanpassen, verrijken en finaliseren.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* Layout:
  * Bovenbalk: documenttitel (inline rename), knoppen “Share”, “Preview”, “Export”.[scribehow**+1**](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)
  * Linker paneel: stepslijst met drag‑handles, context menu (Insert above/below, Duplicate, Delete).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Midden: geselecteerde step screenshot + instructietekst editor.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Rechter paneel: screenshot tools (crop, annotations, blur), step settings, callouts.[scribe**+1**](https://scribe.com/tools/image-blur-redaction)
* States:
  * Loading: placeholder tot stappen geladen zijn.
  * Dirty state: indicator dat er niet‑opgeslagen wijzigingen zijn; autosave feedback (“Recently saved”). AANNAME.
* Validaties:
  * Documenttitel niet leeg (default “Untitled Scribe” wordt getoond maar mag blijven).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* Microcopy:
  * Tooltip bij blur‑tool: “Verberg gevoelige informatie in één klik.” (parafrase).[[scribe](https://scribe.com/tools/image-blur-redaction)]

## Folder/workspace settings

* Doel:
  * Structuur en policies van workspace beheren.[vault.nimc**+1**](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)
* Layout:
  * Tabs: “General”, “Members”, “Sharing”, “Branding”, “Integrations” (AANNAME), “Billing”.
* General:
  * Naam, logo, workspace domain.[[vault.nimc.gov](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)]
* Sharing:
  * Instellingen voor Default Share Permission en Maximum Share Permission; dropdowns met opties (Not Shared, Team, Org, Link).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]
* States:
  * Alleen Admin/System Admin ziet alle tabs; Creators hebben beperkte toegang.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* Microcopy:
  * Beschrijving bij Maximum Share: “Beperk hoe ver medewerkers documenten kunnen delen buiten de organisatie.” (parafrase).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]

## Team management/invites

* Doel:
  * Leden en rollen beheren per team.[scribe.launchnotes**+1**](https://scribe.launchnotes.io/announcements/seamlessly-work-with-your-teammates-in-scribe)
* Layout:
  * Ledenlijst met kolommen: naam, e‑mail, rol, laatste activiteit, acties (change role, remove).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Invite‑sectie met invoerveld voor e‑mail en rolselect.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Team‑access setting (Open/Closed/Default) met uitleg.[[scribe.launchnotes](https://scribe.launchnotes.io/announcements/seamlessly-work-with-your-teammates-in-scribe)]
* States:
  * Pending invites met status “Uitgenodigd – wacht op bevestiging”.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* Microcopy:
  * “Open team: iedereen met jouw e‑maildomein kan direct deelnemen.” (parafrase).[[scribe.launchnotes](https://scribe.launchnotes.io/announcements/seamlessly-work-with-your-teammates-in-scribe)]

## Billing/plan management

* Doel:
  * Abonnement en facturatie beheren.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* Layout:
  * Huidige plan, seats/licenties, prijsperiode (maand/jaar), volgende factuurdatum.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
  * Upsell‑secties naar hogere plannen (Pro/Enterprise).[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
  * Betalingsgegevens en factuurgeschiedenis.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* States:
  * Admins hebben toegang; Creators niet.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* Microcopy:
  * “Upgrade om geavanceerde exports, Smart Blur en desktop capture te ontgrendelen.” (parafrase).[[scribe](https://scribe.com/library/smart-blur)][[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]

## Admin/privacy settings

* Doel:
  * Org‑brede security, redactie, GDPR/terms‑gerelateerde instellingen beheren.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)
* Layout:
  * Opties: Smart Blur default aan/uit, redactie‑categorieën, dataretentie (AANNAME), cookie/consent links.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)]
  * Link naar Terms of Service en Privacy Policy.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)]
* Microcopy:
  * Uitleg dat Smart Blur gevoelige elementen in de browser verbergt vóór ze naar servers gestuurd worden.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)]

## G. Browser Extension PRD

## Install & permissions

* Extensie wordt via browser store geïnstalleerd; bij installatie accepteert gebruiker standaard permissies zoals toegang tot bezochte sites en tab interactie.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* Bij eerste opname vraagt extensie expliciet om schermopname‑rechten indien nodig.[scribe**+1**](https://scribe.com/tools/image-blur-redaction)

## Capture modes

* Click tracking:
  * Registreert muisklikken en UI‑elementen; elke klik wordt een step met instructietekst (“Klik op [knop]”).[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
* Auto screenshots:
  * Voor elke relevante actie maakt extensie een screenshot van relevante viewport.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)]
* Text extraction:
  * Legt ingevoerde tekst vast om zinnen te genereren (“Voer [waarde] in het veld [naam] in”).[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)]
* Smart Blur:
  * Pro/Enterprise feature; via overlay‑controls kan gebruiker Smart Blur activeren en categorieën kiezen (e‑mailadressen, nummers, namen, lange tekst, formuliervelden, tabelrijen, afbeeldingen).[scribe**+1**](https://scribe.com/library/smart-blur)
  * Extensie leest HTML headers en elementen om deze categorieën automatisch te blur‑en vóór screenshot transfer.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)]

## Controls: start/pause/stop, restart, discard, naming, tab handling

* Controls (overlay):
  * Knoppen: Start/Pause/Resume/Stop; Smart Blur; eventueel settings.[[scribe](https://scribe.com/library/smart-blur)][[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)]
* Restart:
  * AANNAME: knop “Start over” om huidige opname te resetten zonder editor te openen.
* Discard:
  * Bij Stop verschijnt keuze “Save & open in editor” of “Discard recording”. AANNAME.
* Naming:
  * Na stop wordt gebruiker in webapp gevraagd documenttitel te bevestigen/bewerken; default titel wordt gegenereerd (bijv. paginatitel + datum).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* Tab handling:
  * Extensie volgt navigatie over tabs en vensters; stappen worden in chronologische volgorde vastgelegd.[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
  * AANNAME: indicator wanneer gebruiker pagina verlaat die niet capture‑baar is (bijv. systeemdialogen).

## Data handoff naar webapp

* Na stoppen verzendt extensie JSON‑achtige payload met stappen, DOM‑metadata en screenshots naar backend.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)]
* Webapp genereert Scribe en opent editor in nieuwe tab of redirect in bestaande tab.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]

## Failure modes

* Blocked pages:
  * Systeem‑/DRM‑beveiligde of browsergeblokkeerde pagina’s resulteren in steps zonder screenshot; user krijgt overlay‑melding dat screenshot niet gemaakt kan worden en dat desktop app een alternatief is.[scribe**+1**](https://scribe.com/library/smart-blur)
* Permissions denied:
  * Zonder juiste permissies toont extensie error “Permission required to record this page” met instructies om permissies te resetten.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* Offline:
  * Extensie detecteert offline status; AANNAME: toont banner dat uploads vertraagd worden en vraagt bij Stop om opnieuw te proberen zodra verbinding terug is.

## H. Sharing, Embeds, Exports

## Link types & permissions

Zie sectie C (Share‑permissions).

Belangrijke eisen:

* Elk document heeft slechts één actieve share‑setting tegelijk.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
* Document‑owner kan share‑instelling wijzigen of intrekken; link wordt dan ongeldig voor anonieme viewers.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
* Enterprise kan via Maximum Share Permission bepaalde share‑typen blokkeren.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]

## Embeds

* Embed opties:
  * Embed‑code genereren voor externe tools.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Mogelijkheid om autohoge/‑brede responsieve embed te kiezen (AANNAME).
* Gedrag:
  * Embed toont viewer‑UI binnen host‑tool, inclusief step‑navigatie.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Wanneer document share‑instelling verandert naar Not Shared, moet embed een “No longer available”‑melding tonen. AANNAME.
* Branding toggles:
  * Pro/Enterprise kunnen embedded branding (logo/watermerk) aanpassen of minimaliseren. (AANNAME uit “custom branding”.)[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]

## Exports

* Formaten:
  * PDF, DOCX, HTML, Markdown.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* Opties:
  * In export‑dialoog kan user kiezen welke elementen mee te nemen (bijv. screenshotresolutie, include/exclude tips). AANNAME.
  * Pro/Enterprise hebben toegang; Free users zien paywall bij poging tot export.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]

## Access logging

* Document insights tonen per viewer wie gekeken heeft, voltooid en wanneer.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
* AANNAME: log‑events worden gebruikt voor audit‑doeleinden in Enterprise.

## I. Collaboration & Content Governance

(Alleen features gesteund door bronnen + gemarkeerde aannames.)

* Comments / suggestions:
  * AANNAME: inline comments bij stappen niet expliciet zichtbaar in bronnen; baseline PRD kan comment‑systeem als optionele v1.1 beschouwen, maar niet vereist voor MVP‑parity.
* Versioning:
  * AANNAME: intern bestaan versie‑wijzigingen; UI hoeft niet per se versie‑timeline te tonen in v1.
* Approval workflows:
  * Support noemt “Controlling what gets published with approval workflows”.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
  * Functionele eisen:
    * Document kan status hebben (Draft, Pending approval, Published).
    * Admins kunnen reviewers aanwijzen.
    * Alleen na approval wordt document in team/organization library zichtbaar voor brede groep.
* Ownership transfer:
  * Bij verwijderen van teammate gaan documenten in eigendom over naar Admin.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* Deletion/restore:
  * AANNAME: Deleted docs gaan eerst naar “Trash” met restore‑mogelijkheid binnen periode.

## J. Search & Discovery

* Search scope:
  * Zoeken in titels en beschrijvingen voor Scribes en Pages binnen de workspace.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
  * AANNAME: content‑body search op instructietekst is wenselijk.
* Filters:
  * Filter op type (Scribe/Page), eigenaar, folder/team, en share‑status (Not Shared/Team/Org/Link).[vault.nimc**+1**](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)
* Sorting:
  * Sorteren op Recent (laatst gewijzigd), meest bekeken (views), alfabetisch.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
* Discovery:
  * “Recent documents” en “Shared with me” secties op dashboard.[[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
  * Template gallery en example Scribes om te ontdekken wat mogelijk is.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]

## K. Notifications & Email

* E‑mailnotificaties (AANNAME op basis van invites/shares/approvals):
  * Uitnodigingen voor team/workspace met acceptatie‑link.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Eventueel notificatie wanneer user is toegevoegd aan document (Restricted share). AANNAME.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe)]
  * Approval requests / decision mails bij workflows. AANNAME.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* In‑app notificaties:
  * AANNAME: eenvoudige notificatie‑badge of dropdown met recente activiteiten (shares, approvals, invites).

## L. Privacy, Security, Compliance

* Smart Blur & data privacy:
  * Smart Blur identificeert HTML‑elementen op basis van headers en categorieën (namen, e‑mailadressen, etc.) en past blur toe vóórdat de screenshot naar servers wordt verzonden, waardoor gevoelige informatie nooit in niet‑geredigeerde vorm wordt opgeslagen.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)
* Access control:
  * Organisaties kunnen default & maximum share‑settings configureren voor compliance.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]
* GDPR/cookies:
  * Website gebruikt cookies en moet consent‑mechanismen hebben; data‑verwerking moet transparant zijn via privacy policy. AANNAME gebaseerd op algemene regelgeving; Smart Blur‑uitleg verwijst naar compliance in gereguleerde sectoren.[[scribe](https://scribe.com/library/smart-blur)]
* Security:
  * Enterprise‑rollen omvatten System Admin met verantwoordelijkheid voor SSO/SCIM setup en beveiligingsinstellingen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * AANNAME: TLS‑versleuteling voor alle data in transit; encryptie at rest; least‑privilege access.

## M. Pricing & Packaging

(AANNAME: exacte prijzen niet gespecificeerd; focus op feature‑gating.)

* Free:
  * Basis browser capture en automatische Scribe‑generatie.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Beperkte aantal documenten/gebruiker (AANNAME).
  * Geen geavanceerde screenshot editing (crop/annotate/blur), geen desktop capture, beperkte export (bijv. alleen URL).[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* Pro:
  * Desktop en mobile capture.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
  * Smart Blur (Pro/Enterprise only).[scribe**+1**](https://scribe.com/tools/image-blur-redaction)
  * Screenshot editing (crop, annotate, redact).[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Exports naar PDF, DOCX, HTML, Markdown.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)][[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
  * Viewer insights per document.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)][[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
  * Custom branding.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* Team/Business:
  * Meerdere Creators/Admins, gedeelde workspaces en folders.[[vault.nimc.gov](https://vault.nimc.gov.ng/blog/scribehow-workspace-dashboard-your-ultimate-guide-1767647335)][[youtube](https://www.youtube.com/watch?v=NqoWK2RKZGI)]
  * Team‑roles en management UI.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Team‑brede library en approvals.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* Enterprise:
  * System Admin & Team Admin‑rollen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Organization‑level share policies (default/max).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]
  * SSO/SCIM, advanced security & governance settings (AANNAME).[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Uitgebreidere insights en mogelijk API’s (Search & Retrieval API genoemd).[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]

Upgrade/panwall‑gedrag:

* Wanneer Free‑gebruikers Pro‑features proberen (Smart Blur, screenshot editing, exports, insights), verschijnt een modal die upgrade aanbiedt met samenvatting van extra voordelen.[scribe**+1**](https://scribe.com/library/smart-blur)[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]
* Paywall blokkeert daadwerkelijke actie tot upgrade is voltooid.

## N. Non-Functional Requirements

(AANNAME: afgeleid uit aard van product; niet expliciet gespecificeerd in bronnen.)

* Performance:
  * Generatie van een standaard Scribe (bijv. 10–20 stappen) na stoppen opname duurt maximaal enkele seconden; target < 5s bij 95e percentiel.
  * Viewer laadt eerste stap en screenshot binnen 1–2 seconden bij normale verbinding.
* Reliability:
  * Extensie moet stabiel captures uitvoeren tijdens gewone kantoorwerkflows zonder merkbare vertraging voor gebruiker.
  * Backend moet idempotent omgaan met duplicate uploads van dezelfde opname; geen dubbele documenten.
* Scalability:
  * Ondersteuning voor honderden Scribes per workspace en duizenden views per dag zonder merkbare degradatie in viewer/insights.
* Usability:
  * Alle kernacties (Record, Edit, Share) moeten in < 3 klikken toegankelijk zijn na login.[[youtube](https://www.youtube.com/watch?v=nbFzoidr1Fo)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* Compatibility:
  * Ondersteuning voor moderne browsers waar extensie‑ecosysteem beschikbaar is; desktop capture onder belangrijkste desktop‑OS’en (functioneel gelijk; techstack niet gespecificeerd).[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)]

## Acceptance Criteria per Feature (Samenvattend)

Hier een niet‑uitputtende, maar leidende set van testbare acceptance criteria:

* **Recording**
  * Start/Stop‑flow genereert automatisch Scribe met correcte volgorde van stappen en screenshots.[youtube**+1**](https://www.youtube.com/watch?v=ZPtNIeQMwGM)
  * Smart Blur voorkomt dat ongeredigeerde gevoelige data zichtbaar is in opgeslagen screenshots wanneer categorieën zijn geactiveerd.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)
* **Editing**
  * Gebruiker kan tekst, stappen en screenshots bewerken; wijzigingen zijn direct zichtbaar in viewer.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Pro‑gebruikers kunnen screenshots croppen, annoteren en blur‑en; Free‑users krijgen duidelijke upgrade‑melding.[[youtube](https://www.youtube.com/watch?v=_WQ_MKyA6C8)][[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
* **Sharing**
  * Alle share‑modi werken volgens matrix (Not Shared, Team, Org, Link, Restricted); wijziging van share‑type werkt direct door in toegang tot viewer/embed.[scribehow**+1**](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)
* **Embeds & Exports**
  * Embed‑code toont step‑viewer correct binnen externe tool; bij intrekken van toegang verandert embed‑status naar niet‑beschikbaar.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/8951146003741-New-User-Guide)]
  * Exports naar PDF/DOCX/HTML/Markdown bevatten alle stappen met instructies en screenshots in juiste volgorde.[[support.scribehow](https://support.scribehow.com/hc/en-us/sections/6852344267933-Sharing-and-Exporting)]
* **Teams & Roles**
  * Admin kan rollen toewijzen/wijzigen; Creators kunnen geen team‑instellingen aanpassen; Viewers kunnen niet editen.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
  * Bij verwijderen van teammate wordt documenteigendom overgedragen aan Admin.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team)]
* **Insights**
  * Views en completion rates worden accuraat bijgehouden; dagelijkse grafiek toont data over laatste maand.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
  * Detail‑overzicht toont per viewer wie gekeken heeft, of voltooid, en wanneer.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/13664555264413-Insights-Analyzing-views-and-completions-for-a-specific-Scribe-or-Page)]
* **Compliance**
  * Wanneer Smart Blur is ingeschakeld, wordt geen niet‑geblurde screenshot opgeslagen voor de geselecteerde data‑categorieën.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/9485388950045-Redacting-sensitive-information)]
  * Org‑level maximum share‑setting voorkomt dat gebruikers documenten breder delen dan toegestaan.[[support.scribehow](https://support.scribehow.com/hc/en-us/articles/10857957485597-Managing-permissions-settings)]

Dit PRD beschrijft de functionele en UX‑pariteit met het Scribe‑product op basis van publiek beschikbare bronnen en expliciet gemarkeerde aannames, zodat een development‑team gericht kan ontwerpen, plannen en implementeren.
