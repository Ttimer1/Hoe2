# Product Requirements Document – Scribehow Clone

## 1. Productoverzicht

Dit product is een digitale tool voor het automatisch vastleggen van stap-voor-stap handleidingen (een 1-op-1 kloon van Scribehow). De software helpt gebruikers om snel procesdocumentatie te maken door hun acties op het scherm op te nemen, waarna er direct een gepolijste handleiding met schermafbeeldingen en instructies uit gegenereerd wordt[1]. Het doel is om het documenteren en delen van workflows te vereenvoudigen en te versnellen, zodat kennis overdraagbaar wordt en trainingstijd wordt verkort.

Belangrijkste kenmerken en doelen van het product:
- Automatisch handleidingen genereren: In plaats van handmatig screenshots te maken en tekst te schrijven, neemt de tool de gebruiker stap voor stap bij de hand. Elke actie die de gebruiker uitvoert, wordt vastgelegd en omgezet in een duidelijke instructie met beeld[1].
- Gebruiksgemak en tijdsbesparing: Gebruikers kunnen binnen enkele minuten een complete instructiehandleiding creëren. Wat voorheen uren duurde (schrijven, formatteren, screenshots plakken) gebeurt nu automatisch in seconden[2].
- Breed inzetbaar: De software is beschikbaar als browserextensie (voor Chrome/Edge) en als desktop-applicatie (voor Windows/macOS)[3]. Hierdoor kunnen zowel webapplicaties als desktopprocessen worden gedocumenteerd. Het is geschikt voor individuele gebruikers én voor teams/organisaties die hun interne kennisdeling willen standaardiseren.
- Direct deelbaar en herbruikbaar: De gegenereerde handleidingen zijn direct deelbaar via link, PDF of embed, zodat ze gemakkelijk kunnen worden verspreid binnen teams, naar klanten of opgenomen in kennisbanken. Het resultaat is een consistente, visueel aantrekkelijke handleiding die overal toegankelijk is[4][5].

Samengevat: dit product automatiseert het maken van procedurele documentatie. Het doel is om kennisdeling te versnellen, fouten te verminderen (doordat de instructies direct uit de daadwerkelijke stappen komen) en consistentie te bevorderen in hoe processen worden uitgevoerd binnen een organisatie[2].

## 2. Gebruikersrollen

De software kent verschillende gebruikersrollen, elk met hun eigen toegangsrechten en functionaliteit:

Anonieme gebruiker (gast): Iemand zonder account die een gedeelde handleiding bekijkt. Deze gebruiker kan openbare of via link gedeelde handleidingen lezen, maar heeft geen bewerkingsrechten of toegang tot interne teamcontent. Er is geen inlog vereist voor louter het bekijken van publiek gedeelde instructies via een link[6].

Geregistreerde gebruiker (maker): Een gebruiker met een account (gratis of betaald) die handleidingen kan creëren en bewerken. Deze gebruiker kan de extensie/app gebruiken om stappen op te nemen, automatisch handleidingen laten genereren en deze naar wens aanpassen. Makers kunnen hun eigen documenten beheren en delen. In een teamcontext worden ze vaak "Creators" genoemd – zij kunnen nieuwe documenten aanmaken en bestaande aanpassen[7].

Teamlid: Een geregistreerde gebruiker die deel uitmaakt van een team/werkruimte. Teamleden kunnen naast hun persoonlijke documenten ook teamhandleidingen zien en (afhankelijk van rechten) bijdragen. Standaard hebben teamleden rechten om te creëren en te bewerken binnen de team-omgeving, tenzij hun rol beperkt is tot alleen-lezen. Ze kunnen dus gezamenlijk content onderhouden en elkaars werk inzien binnen de teambibliotheek[7].

Teambeheerder (Team admin): De beheerder van een teamaccount. Deze rol kan nieuwe gebruikers uitnodigen in het team, bestaande teamleden beheren (rollen toewijzen of verwijderen) en teaminstellingen aanpassen[7]. Teambeheerders bepalen bijvoorbeeld de standaard privacy-instellingen van teamdocumenten en kunnen content van het team ordenen (bijv. mappen of categorieën). In deze clone heeft de teambeheerder ook controle over eventueel toegevoegde branding en toegangsrechten binnen het team.

Enterprise beheerder (Organisatiebeheerder): Optioneel, voor Enterprise-context. Dit is een overkoepelende beheerder bij grotere organisaties met meerdere teams. Zij kunnen meerdere teams/werkruimtes aanmaken, Single Sign-On (SSO) configureren en organisatiebrede instellingen beheren (zoals beveiligingsrichtlijnen, redactiefilters, etc.). Ook kunnen zij licenties beheren en zien hoeveel gebruikers in totaal actief zijn[8].

Alleen-lezer (Viewer): Optioneel, met name voor Enterprise. Een gebruiker met een account die intern gedeelde documenten kan bekijken, maar niets mag aanpassen[7]. Viewers kunnen door de gedeelde handleidingen navigeren en feedback geven, maar niet zelf nieuwe handleidingen maken. Deze rol is handig voor bijvoorbeeld klanten of teamleden die alleen trainingsmateriaal consumeren.

NB: In de Enterprise-versie van het origineel bestaan expliciete rollen zoals Creator, Viewer en Admin[9]. In deze clone hanteren we vergelijkbare rollen. Standaard tellen Makers en Admins mee als volledige gebruikerslicenties, terwijl Alleen-lezers beperkt rechten hebben en vooral dienen om content veilig te distribueren binnen een organisatie[7]. Anonieme gasten zijn niet-authenticeerde externe kijkers voor publiek gedeelde content.

## 3. User flows en functionaliteiten

### Stappen opnemen (recording)

Use case: Een gebruiker wil een bepaalde procedure of taak documenteren (bijvoorbeeld “Hoe reset ik een wachtwoord in systeem X”). In plaats van dit handmatig uit te schrijven, kan de gebruiker de opneemfunctie starten.

Flow:
1. Opname starten: De gebruiker klikt op de opnameknop in de browserextensie of desktop-app. Als het de eerste keer is, kiest de gebruiker eventueel of hij de browser of het volledige scherm wil vastleggen. De extensie/app geeft een indicatie dat de opname loopt (bijv. een rood lampje of timer).
2. Uitvoeren van stappen: De gebruiker doorloopt nu de handelingen van het proces zoals normaal. Elke muisklik, toetsaanslag en paginaovergang wordt door de software vastgelegd. De tool registreert welke knop of link is aangeklikt en neemt automatisch een schermafbeelding op dat moment. Ook invoer in tekstvelden kan gelogd worden (bijvoorbeeld als “voer


in bij


”). De gebruiker hoeft zelf geen screenshots te maken of notities te typen – alles gebeurt op de achtergrond[1].
3. Ondersteuning voor verschillende platforms: De opnamefunctie werkt in webapplicaties via de browserextensie én voor desktopapplicaties via de native app. Dit betekent dat de gebruiker zowel een webworkflow (bijv. in een SaaS-tool) als een native applicatie (bijv. Excel of een ERP-systeem) kan documenteren. In de Pro-variant kan de gebruiker dus “Scribes” vastleggen in elke omgeving, niet alleen in de browser[10][11]. (Indien een desktopproces wordt opgenomen, kan de desktop-app een schermopname/screenshot maken van het actieve venster of volledige scherm, inclusief meerdere monitoren[12].)
4. Opname pauzeren/herstarten (optioneel): De gebruiker kan tijdens het opnemen eventueel pauzeren als er gevoelige informatie in beeld komt of een stap overgeslagen moet worden. Na hervatten gaat de tool verder met registreren. Dit voorkomt dat onnodige of privé-informatie wordt opgenomen.
5. Opname stoppen: Wanneer de taak is voltooid, klikt de gebruiker op “Stop” in de extensie/app. Direct daarna wordt de opgenomen ruwe data (alle gemaakte screenshots + acties) geüpload naar de webapplicatie voor verwerking. De gebruiker krijgt een melding dat de handleiding wordt gegenereerd.

Resultaat: De ruwe opname wordt door de software omgezet in een concept-handleiding. Dit gebeurt meteen na het stoppen van de opname: de software converteert alle uitgevoerde acties automatisch naar gestructureerde stappen met beeld en tekst[13]. De gebruiker wordt vervolgens doorgestuurd naar de bewerkinterface om de gegenereerde handleiding na te lopen en finetunen.

### Handleidingen automatisch genereren

Zodra een opname is voltooid, zorgt de software voor de automatische generatie van de handleiding. Dit omvat:

Stapformulering: Elke vastgelegde gebruikersactie wordt omgezet in een korte instructiezin. Bijvoorbeeld: als de gebruiker op een knop met label "Instellingen" klikt, genereert de tool een stap als “Klik op Instellingen.” De tekst wordt gegenereerd op basis van de UI-elementen (knop- of veldnamen) zodat de instructie duidelijk en contextueel juist is[13]. Typische acties die herkend worden zijn klikken op knoppen/links, invoeren van tekst, navigeren naar een nieuwe pagina, selecteren van opties, etc.

Screenshot per stap: Voor elke stap wordt automatisch de schermafbeelding toegevoegd die tijdens het opnemen is vastgelegd. De software markeert of highlight eventueel de relevante UI-elementen (bijv. een rode rechthoek om de knop die aangeklikt is) om de lezer te laten zien waar de actie plaatsvond. Zo ontstaat er per stap een visuele ondersteuning bij de tekstuitleg.

Automatische nummering en structuur: De gegenereerde handleiding nummert alle stappen in volgorde. Het document krijgt automatisch een titel (vaak op basis van de titel van de webpagina of applicatie die is opgenomen, of een generieke titel als “Nieuwe Scribe”). Indien beschikbaar kan de tool AI gebruiken om een nette titel en samenvatting te suggereren op basis van de inhoud van de stappen, zodat de handleiding een begrijpelijke context heeft[14].

Directe beschikbaarheid van de concept-handleiding: Binnen enkele seconden na het stoppen van de opname presenteert de webapp een conceptversie van de handleiding aan de gebruiker. Deze bevat alle opgenomen stappen met tekst en beeld. De gebruiker hoeft geen code te schrijven of opmaak te doen – de layout en basisinstructies zijn automatisch verzorgd[13][4]. Dit automatische procescaptatie-mechanisme is de kern van het product en zorgt voor enorme tijdwinst en consistentie (elke handleiding is immers direct gebaseerd op de daadwerkelijke handelingen)[1].

NB: Indien de opgenomen sessie erg lang is of veel schermen bevat, kan de software een korte verwerkingsperiode nodig hebben. In de regel is de handleiding echter vrijwel instant beschikbaar, dankzij cloudverwerking en geoptimaliseerde herkenning van UI-elementen. De gegenereerde instructies zijn een vertrekpunt – gebruikers kunnen ze in de volgende fase (bewerken) volledig naar wens aanpassen.

### Bewerken van handleidingen

Na het automatisch genereren voert de gebruiker doorgaans een nabewerking uit om de handleiding te verfijnen. De bewerkfunctionaliteit omvat:

Tekstaanpassingen per stap: De gebruiker kan de automatisch gegeneerde instructiezinnen aanpassen. Bijvoorbeeld termen verduidelijken, extra context toevoegen of vertalen naar een gewenste taal. Elke stap heeft een tekstveld dat direct bewerkbaar is. Zo kan men van "Klik op Submit" bijvoorbeeld "*Klik op de knop Verzenden* om het formulier in te dienen" maken, voor extra duidelijkheid.

Screenshots bewerken: De interface biedt tools om schermafbeeldingen te bewerken. Gebruikers kunnen specifieke gebieden blur/out (onscherp maken) om gevoelige informatie te verbergen[15][16]. Ook kunnen ze markeringen of pijlen toevoegen om aandacht te vestigen op belangrijke interface-elementen. Daarnaast is het mogelijk om screenshots bij te snijden of te vervangen (bijv. een nieuwe screenshot uploaden als een stap gewijzigd is). Deze functies zorgen ervoor dat handleidingen veilig en to-the-point zijn, zonder privacygevoelige gegevens zichtbaar[15].

Stappen beheren: Gebruikers kunnen de volgorde van stappen wijzigen (bijv. verslepen om te herordenen), stappen verwijderen die overbodig zijn, of aanvullende stappen invoegen. Het is mogelijk een extra stap toe te voegen met een eigen screenshot (de gebruiker kan een losse afbeelding uploaden of een nieuwe mini-opname maken voor die stap). Ook kunnen twee stappen samengevoegd worden tot één indien nodig, of een stap in tweeën gesplitst worden als er eigenlijk twee handelingen in één screenshot stonden. De volgnummering past zich automatisch aan bij deze wijzigingen.

Aanvullende beschrijvingen en media: Naast de automatisch gegenereerde stappen kan de gebruiker extra toelichting toevoegen. Er is ruimte voor vrije tekstblokken (bijv. een inleidende uitleg aan het begin of sectie-tussentitels bij lange handleidingen). Men kan ook notities of waarschuwingen invoegen – bijvoorbeeld een tip onder een stap (“Let op: zorg dat je dit doet met admin-rechten”). Scribehow heeft hiervoor functies als “Tips” en “Alerts” om belangrijke punten te markeren[17]. Eventueel kan de gebruiker ook extra afbeeldingen of zelfs GIF-animaties toevoegen (de Pro-versie ondersteunt het combineren van meerdere stappen in één GIF om een snelle overzichtsanimatie te tonen[18]).

Branding en opmaak: In de bewerkingsmodus (of in instellingen) kan een gebruiker of teambeheerder bedrijfseigen branding toevoegen. Denk aan een bedrijfslogo dat in de kop van de handleiding komt, of het instellen van huisstijlkleuren voor kaders en tekstelementen. Deze branding wordt zichtbaar in de gedeelde handleidingen zodat documenten er professioneel en herkenbaar uitzien[19]. De gebruiker kan ook de titel van de handleiding aanpassen en een beschrijving toevoegen, eventueel met behulp van AI-suggesties[20].

Versiebeheer (basic): Elke wijziging wordt doorgaans automatisch opgeslagen. De gebruiker kan wijzigingen ongedaan maken (undo/redo) tijdens het bewerken. Er is echter geen uitgebreid versiebeheer in de basisfunctionaliteit; indien men wezenlijke veranderingen wil bijhouden, kan men handmatig een kopie van de handleiding maken. (Enterprise-versies zouden eventueel versies als aparte documenten kunnen opslaan, maar standaard is het één live document dat je bewerkt.)

Met deze bewerkingsmogelijkheden kan de gebruiker de automatisch aangemaakte handleiding fine-tunen tot een kwalitatief hoogstaand document. Alles is bewerkbaar – de automatische generatie dient als startpunt, maar de gebruiker behoudt volledige controle om de inhoud kloppend, volledig en duidelijk te maken[21]. Zelfs nadat een handleiding is aangemaakt en gedeeld, kan deze achteraf in de editor aangepast worden om up-to-date te blijven (wijzigingen zijn meteen door te voeren en opnieuw te publiceren).

### Delen (link, insluiten, exporteren als PDF)

Een kernfunctionaliteit is het delen en distribueren van de voltooide handleidingen. De software ondersteunt meerdere manieren van delen, zodat de content makkelijk beschikbaar is voor het beoogde publiek:

Delen via link (URL): Elke handleiding kan met één klik omgezet worden naar een deelbare link. Deze link kan vrij worden verspreid (bijvoorbeeld via e-mail, chat of intranet). Iedereen die de link heeft kan de handleiding bekijken in zijn browser – ongeacht of die persoon een account heeft, mits de handleiding als publiek/gedeeld is gemarkeerd[6]. De eigenaar kan kiezen of de link openbaar is (voor iedereen toegankelijk) of alleen voor geauthenticeerde gebruikers (bijv. alleen teamleden). Standaard in deze clone is een nieuwe handleiding privé tot de maker ervoor kiest een deel-link te genereren.

Insluiten (embedden): De tool biedt een embed-code (bijv. een iframe snippet) om de handleiding in te sluiten op andere platforms. Gebruikers kunnen zo een handleiding integreren in bv. een interne kennisbank (Confluence, Notion) of op een support-website[22][23]. Dit betekent dat de handleiding interactief op die pagina verschijnt, inclusief de stappen en beelden, zonder dat de lezer naar de Scribe-website hoeft te gaan. Ingesloten handleidingen updaten automatisch mee als de inhoud gewijzigd wordt (de embed toont altijd de laatste versie). Er zijn integraties voorzien met populaire tools: er is bijvoorbeeld directe ondersteuning om via een macro of link in Confluence/Notion de handleiding in mooi formaat te tonen[23].

Exporteren als PDF: Gebruikers kunnen een PDF-bestand genereren van de handleiding[24]. Dit is handig voor offline gebruik, het toevoegen aan e-mailbijlagen of het afdrukken van de instructies. De PDF bevat alle stappen, screenshots en teksten in volgorde. (Let op: wijzigingen in de online handleiding worden niet automatisch doorgevoerd naar eerder geëxporteerde PDF’s; men zou dan opnieuw moet exporteren[25].)

Exporteren als HTML/Markdown: Voor geavanceerd gebruik (bijvoorbeeld developers die de content in eigen documentatiesites willen opnemen) kan de handleiding geëxporteerd worden als HTML of Markdown-bestand[26][27]. Hiermee kan de instructie na export bijvoorbeeld in een bestaande website worden geplaatst of in een git-gedreven kennisrepository worden opgeslagen. Dit vereist een Pro-licentie.

Direct delen via e-mail: De applicatie biedt de optie om rechtstreeks vanuit de interface de handleiding te versturen. Bijvoorbeeld “Deel via e-mail” waarbij je e-mailadressen kunt invoeren; de ontvangers krijgen dan een mail met de link naar de handleiding. Dit is vooral handig voor snelle sharing naar klanten of collega’s. Het is in feite een snelle manier om de deelbare link te verspreiden (met eventueel een standaard bericht erbij).

Integraties voor delen: Er zijn kant-en-klare koppelingen om de link te delen via andere communicatiekanalen. Zo kan een gebruiker met één knop de link posten naar Slack (intern teamkanaal) of Microsoft Teams, of een embed direct toevoegen aan een kaart in tools als Trello/Jira. Dit zorgt ervoor dat handleidingen naadloos in bestaande workflows kunnen worden opgenomen.

Ongeacht de methode van delen geldt dat de content onmiddellijk beschikbaar is voor de ontvangers zodra gedeeld. Bijvoorbeeld, via de link zien ze de actuele versie van de handleiding in een nette viewer in hun browser[24]. Er is geen speciale software nodig aan ontvangerszijde.

De software houdt ook rekening met toegangsrechten bij het delen (zie beveiliging & privacy). Bijvoorbeeld, als een handleiding alleen intern gedeeld mag worden, kan een teambeheerder instellen dat linktoegang alleen werkt voor ingelogde teamleden (in plaats van openbaar).

### Samenwerken in teams

Voor gebruik binnen organisaties is er uitgebreide team- en samenwerkingfunctionaliteit. Dit stelt groepen gebruikers in staat gezamenlijk een kennisbasis van Scribe-handleidingen op te bouwen. Belangrijke aspecten:

Teamworkspaces: Gebruikers kunnen lid worden van een team-werkruimte. Binnen zo’n team zijn alle handleidingen standaard toegankelijk voor de teamleden (tenzij als privé gemarkeerd). De interface biedt een gedeeld dashboard of bibliotheek waar alle teamdocumenten zichtbaar zijn. Dit maakt het makkelijk om kennis centraal te organiseren. Bijvoorbeeld kan er een team “Customer Support” zijn met alle support-gerelateerde Scribes. Teamleden hoeven niet steeds links te delen onderling – ze zien elkaars werk in de teamomgeving.

Rechten en permissies: De teambeheerder kan bepalen welke informatie teamleden mogen zien of bewerken. Standaard kunnen alle makers in een team elkaars handleidingen bekijken en ook bewerken (tenzij de eigenaar dat beperkt). Echter, men kan ook bepaalde Scribes markeren als alleen-lezen voor anderen. In Enterprise-omgevingen is dit verder verfijnd: daar kunnen specifieke Viewer-accounts worden toegevoegd die alleen mogen bekijken en niet mogen bewerken[7]. Ook kunnen er meerdere teams zijn met scheiding daartussen; een gebruiker ziet dan alleen de handleidingen binnen de teams waarvan hij lid is.

Gezamenlijke bewerking: Hoewel de editor primair single-user is (niet simultaan door twee personen real-time), ondersteunt de applicatie wel sequentiële samenwerking. Dit betekent dat teamleden elkaar’s handleidingen kunnen openen in de editor en verbeteringen doorvoeren (met de juiste rechten). Bijvoorbeeld kan persoon A een concept opnemen en delen in het team, en persoon B opent het later om de tekst na te lopen of screenshots te updaten. De wijzigingen worden meteen opgeslagen en zijn voor het hele team zichtbaar. Er is geen realtime Google Docs-achtig multi-cursor editing, maar via versiegeschiedenis of duplicaat maken kan men wel samenwerken zonder content te verliezen.

Commentaar en feedback: Een belangrijke collab-feature is dat teamleden commentaar kunnen geven op stappen of gehele handleidingen. In de weergavestand is er een mogelijkheid om reacties te plaatsen (bijvoorbeeld een vraag stellen bij een stap, of aangeven dat iets gewijzigd is). De oorspronkelijke maker of anderen kunnen deze comments zien en opvolgen. Dit maakt het mogelijk om reviewrondes te doen: collega’s kunnen feedback geven binnen de context van de handleiding. De Pro Team-versie heeft deze commentaarfunctie expliciet beschikbaar[28]. Notificaties zorgen ervoor dat makers een bericht krijgen wanneer iemand een commentaar toevoegt (zie Notificaties).

Organisatie van content: Teams kunnen hun handleidingen ordenen in mappen, categorieën of zogeheten “Pages” (zie verder). Bijvoorbeeld kan een teambeheerder mappen maken per onderwerp of afdeling. Dit helpt bij het navigeren als het aantal Scribes groeit. Daarnaast kan men bepaalde Scribes uitlichten of vastzetten (pinned) als ze belangrijk zijn (zoals “Onboarding instructies” bovenaan de lijst).

Samenwerking tussen teams (Enterprise): In enterprise-modus is er ondersteuning voor meerdere teams en een hiërarchie (organisaties > teams). Een System Admin kan handleidingen eventueel delen over teamgrenzen heen of verplaatsen tussen teams, wat handig is als bijvoorbeeld een handleiding relevant is voor meerdere afdelingen. Standaard is content echter afgeschermd per team, voor focus en beveiliging.

Voorbeelden van samenwerking: Een praktisch scenario: een nieuwe medewerker maakt een concept-handleiding voor een softwareprocedure. Hij deelt deze in de teamruimte Drafts. Een senior medewerker kijkt ernaar en laat via comments weten waar nog verduidelijking nodig is. De maker verwerkt de feedback door de Scribe te bewerken. Vervolgens markeert hij de handleiding als “Gereed” en verplaatst deze naar een publieke map die voor de hele organisatie toegankelijk is. Zo is de kennistransfer geborgd en gebeurd met kwaliteitstoetsing door het team.

Kortom, de software maakt het makkelijk om binnen teams processen te documenteren en kennis te delen, met controle over wie wat kan doen. Vanaf het Pro-plan zijn deze samenwerkingsfuncties beschikbaar[29]. Voor individuele gebruikers (gratis plan) is samenwerken beperkt; zij hebben hun persoonlijke ruimte maar kunnen natuurlijk wel handleidingen via link delen met anderen op kijkbasis.

### Dashboard en analytics

De applicatie voorziet in een dashboard en analysetools om inzicht te geven in het gebruik en de effectiviteit van de gedeelde handleidingen. Dit helpt zowel de individuele maker als teambeheerders om te begrijpen hoe de documentatie wordt gebruikt en waar eventuele verbeteringen nodig zijn.

Dashboard/Overzicht:
Wanneer een gebruiker inlogt, komt hij op een overzichtspagina (dashboard). Hier ziet hij in één oogopslag: - Een lijst of tegels van zijn recente handleidingen (zowel eigen creaties als gedeelde teamhandleidingen). - Snelkoppelingen om een nieuwe handleiding op te nemen of een bestaande te bewerken. - Eventuele meldingen (bijv. “5 nieuwe views op jouw handleiding ‘Inloggen CRM’” of “John heeft gereageerd op stap 3 van ‘Inloggen CRM’”). - Voor teamgebruikers: een schakelaar of menu om tussen verschillende weergaven te wisselen (bijv. “Mijn documenten”, “Team documenten” etc.). In enterprise scenario’s kan de gebruiker hier ook tussen teams/werkruimtes wisselen. - Statistieken op hoofdlijnen: bijvoorbeeld totaal aantal Scribes aangemaakt, totaal aantal weergaven van jouw content deze week, etc., afhankelijk van het plan.

Analytics op documentniveau:
Voor elke handleiding is er een detailpagina of sectie met inzage in het gebruik van die specifieke instructie[30]. Belangrijke metrics en functionaliteiten:
- Views & Completes: Het systeem registreert hoe vaak een handleiding is bekeken (views) en hoe vaak volledig doorgelopen (completions)[31]. “Volledig doorgelopen” kan gebaseerd zijn op of de gebruiker tot de laatste stap heeft genavigeerd. Deze cijfers laten de maker zien welke documenten veel gebruikt worden en of lezers doorgaans de hele procedure afmaken.
- Gebruikersinzichten: Je kunt zien wie jouw handleiding heeft bekeken (voor zover bekend, bv. ingelogde teamleden) en wanneer ze dat voor het laatst deden[32]. Bijvoorbeeld: “Jane (Marketing) heeft 2 dagen geleden 1× jouw Scribe bekeken”. Dit is vooral beschikbaar in teamcontext; bij publieke anonieme views wordt alleen het totaal geteld.
- Feedback & beoordeling: Lezers kunnen feedback geven op een handleiding, bijvoorbeeld een beoordeling (ster of thumbs-up) of een melding “Deze stap was onduidelijk” achterlaten. De maker ontvangt dergelijke feedback en kan daarop actie ondernemen. In de analytics sectie ziet de eigenaar eventuele gemiddelde beoordeling of een lijst van ontvangen opmerkingen. Bij Enterprise plannen kan men deze feedback verplicht stellen of uitbreiden (bv. quizvraag aan einde om begrip te testen).
- Out-of-date alerts: De software kan signaleren wanneer een handleiding mogelijk verouderd is. Bijvoorbeeld als er langere tijd niemand de handleiding bekijkt of juist als meerdere gebruikers feedback geven dat iets niet klopt, kan het systeem een waarschuwing tonen aan de eigenaar of teambeheerder[33]. Ook kan een handleiding handmatig gemarkeerd worden als “herziening nodig”. Zulke alerts verschijnen in het dashboard en kunnen via e-mail gecommuniceerd worden, zodat de verantwoordelijke de instructie kan updaten.
- Trend en gebruiksrapportage: Op team/enterprise niveau zijn er eventueel overzichten van de totale kennisbank: hoeveel handleidingen zijn er gepubliceerd, hoeveel worden er gebruikt, welke teams gebruiken documentatie het meest, etc. Dit helpt om de ROI van procesdocumentatie te meten. Zo kan een beheerder zien dat bv. in Q1 alle onboarding-scribes 1000 keer bekeken zijn, wat trainingstijd heeft bespaard.

Illustratieve workflow: Stel, een support-handleiding “Wachtwoord resetten” is gedeeld met klanten. In het dashboard ziet de eigenaar dat deze maand 50 klanten de Scribe bekeken hebben, maar slechts 30 de laatste stap bereikten. Ook zijn er 2 feedbackmeldingen “stap 4 klopt niet meer bij nieuwe interface”. De maker kan nu actie ondernemen: de handleiding bijwerken (nieuwe screenshots) en de verbeterde versie publiceren. Daarna kan hij zien of de completions verbeteren.

Analytics zorgen dus voor een continue verbeterlus: makers en teams krijgen inzicht in kennisleemtes en kunnen hun documenten daarop aanpassen[30][32]. De dashboards zijn visueel opgezet met grafieken/diagrammen voor views over de tijd, een lijst van top gebruikte Scribes, enz., om het gebruik snel te kunnen interpreteren. (Opmerking: basisinzichten zoals totaal views zijn in alle plannen beschikbaar; meer geavanceerde analytics zoals individuele kijkers en feedback-analyses zijn mogelijk beperkt tot Pro/Enterprise plannen[34].)

## 4. User Interface beschrijving

Hieronder volgt een gedetailleerde beschrijving van alle belangrijke pagina’s en interfaces van de applicatie, inclusief hun functies en indeling:

### Navigatie & Dashboard (Home)

Navigatiebalk: Bovenaan de webapplicatie bevindt zich een vaste navigatiebalk. Hierop staat links het productlogo/naam, en rechts menu-items/icoontjes: - Documenten/Scribes: een menu naar de lijst van handleidingen (dashboard). - Pages: (indien gebruikt, zie Pages sectie) een menu naar samengestelde documenten. - Team: voor gebruikers in een team, een dropdown om van team te wisselen of naar teaminstellingen te gaan. - Notificaties (bell-icoon): toont ongelezen meldingen (bv. nieuwe commentaren, uitnodigingen, etc.). Een rood bolletje geeft aan als er nieuwe notificaties zijn. - Profiel: een avatar-icoon met dropdown voor profiel- en accountinstellingen, en de logout-knop.

Dashboard inhoud: De dashboardpagina is het startpunt na inloggen. Hier ziet de gebruiker: - Snelle creëren-knoppen: Bovenaan een opvallende knop “Nieuw opnemen” of “+ Nieuwe Scribe”. Als de extensie al geïnstalleerd is, klikt de gebruiker hierop om direct een opname te starten (de extensie opent). Is de extensie nog niet aanwezig, dan krijgt de gebruiker een prompt om deze eerst te installeren. Daarnaast kan er een optie “Pagina maken” staan om een nieuw Page-document te beginnen.
- Mijn Handleidingen: Een sectie die de persoonlijke documenten van de gebruiker toont (voor een free user alle eigen Scribes; voor een team user eventueel filter “Mijn”). Vaak in een tegelvorm of lijst met kolommen: titel, datum laatste bewerking, aantal views, status (concept of gepubliceerd). De gebruiker kan hierop klikken om een handleiding te openen in de viewer of via een bewerk-knop direct naar de editor gaan. Er is ook een zoekbalk waarmee men op titel of inhoud kan zoeken, handig als er veel Scribes zijn.
- Team Handleidingen: Indien de gebruiker bij een team hoort, is er een tab of apart lijstgedeelte met de gedeelde Scribes van het team. Dit kan verder onderverdeeld zijn in mappen of categorieën zoals beheerd door de teamadmin. Bijvoorbeeld mappen “HR”, “IT”, “Sales” die elk de relevante Scribes bevatten. Teamleden kunnen hier doorheen browsen. Toegang tot teamdocumenten is afhankelijk van rechten; bijvoorbeeld een Alleen-lezer zal hier alles kunnen bekijken maar geen “Bewerken” optie zien.
- Statusindicaties: Handleidingen in de lijsten kunnen een label of kleurindicatie hebben, bv. “Concept” voor nog niet afgeronde (privé) documenten, “Gedeeld” of “Publiek” voor wel gedeelde. Zo ziet de gebruiker welke content al beschikbaar is voor anderen. Ook kan een handleiding gemarkeerd zijn als “Uitgelicht” door een admin – die verschijnt dan bovenaan of met een sterretje. - Analytics snippet: Voor Pro/Enterprise gebruikers kan het dashboard in het klein al een paar statistieken tonen, zoals totale views deze maand of top 3 meest bekeken Scribes. Dit is vooral relevant voor teambeheerders die snel trends willen zien zonder in elk document te duiken. - Toegang tot andere functies: Op het dashboard zijn links naar secundaire pagina’s aanwezig, zoals “Team beheren” (voor admins), “Gebruikers uitnodigen”, of “Upgrade nu” (als iemand op free plan zit). Vaak in de vorm van knoppen of banners.

Visueel ontwerp: Het dashboard is overzichtelijk en clean, met duidelijke call-to-action knoppen voor het opnemen van een nieuwe Scribe. Documentenlijsten hebben wellicht een thumbnail (eerste screenshot) naast de titel voor visuele herkenning. De navigatie zorgt dat gebruikers snel kunnen schakelen tussen hun eigen werk en teamcontent. Over het algemeen staat gebruiksgemak voorop: de gebruiker moet vanaf dit scherm intuïtief bij alle belangrijke acties kunnen (nieuw opnemen, bestaande handleiding vinden, notificaties zien, etc.).

### Handleiding Editor (Bewerkscherm)

De editor interface is waar een gebruiker de inhoud van een Scribe-handleiding aanpast. Dit scherm opent automatisch na een opname, of wanneer de gebruiker op “bewerken” klikt bij een bestaande handleiding. De layout van de editor is doorgaans als volgt:

Titel & beschrijving: Bovenaan staat een veld voor de handleiding-titel. Hier kan de gebruiker de naam van de procedure invoeren (bijv. “Hoe reset ik mijn wachtwoord in App X”). Daarnaast kan er een kort beschrijvingsveld zijn voor een samenvatting of introductie. Deze velden worden op de deelpagina ook getoond aan lezers, dus de editor maakt het gemakkelijk ze hier in te vullen. (Eventueel is er een knop “Genereer beschrijving met AI” als hulpfunctie[14].)

Stappenlijst: Het hart van de editor bestaat uit de sequentie van stappen. Elke stap wordt weergegeven als een apart blok met:

Het stapnummer (automatisch gegenummerd).

De schermafbeelding (thumbnail weergave, vaak klikbaar om te vergroten of bewerken).

Het instructietekstveld met de beschrijving van de actie.

Eventuele annotaties of opmerkingen bij de stap (bijv. een tip-icoon als er een extra toelichting is toegevoegd).

Bewerkingstools (bv. icoontjes om stap te bewerken, verwijderen, dupliceren).

De gebruiker kan direct in het tekstveld van elke stap typen om de instructie te wijzigen. Afbeeldingen kunnen aangeklikt worden om een bewerkingsmenu te openen (met opties als Bijsnijden, Blur toepassen, Markering tekenen). Stappen kunnen via drag-and-drop verplaatst worden in de volgorde: vaak kan de gebruiker op een stap “grijpen” en hoger of lager in de lijst slepen, waarbij de andere stappen automatisch opschuiven en hernummeren. - Toolbox/Sidebar: Aan de zijkant kan een toolbox of zijbalk aanwezig zijn met extra functies: - Stappen toevoegen: Een knop “Nieuwe stap toevoegen” waarmee een leeg stapblok ingevoegd wordt. Bij klikken kan de gebruiker een afbeelding uploaden of een screenshot nemen (de extensie kan bijvoorbeeld één screenshot maken als de editor dat vraagt, voor een stap die later toegevoegd wordt). - Samenvoegen/Splitsen: Indien de gebruiker twee stappen wil samenvoegen, kan hij ze selecteren en via de toolbox combineren. Splitsen kan door een stap te dupliceren of te knippen. - Notitie toevoegen: Hiermee voegt men een niet-genummerde tekstsectie toe, bijvoorbeeld een tussentitel of algemene opmerking. - Tip/Alert toevoegen: Hiermee kan in een stap een speciaal opmaakblok ingevoegd worden dat eruitziet als een tip of waarschuwing (meestal een gekleurd kader in de viewer, bv. blauw voor tip, geel voor waarschuwing). De gebruiker typt de aanvullende info hierin. - Branding instellen: (indien rechten) een sectie waar een logo geüpload kan worden of een kleur gekozen kan worden, als dat niet al elders in instellingen was gedaan. Dit kan eenmalig per document of als standaard voor alle documenten van het team.

Bewerkingen op afbeelding: Wanneer de gebruiker op een stap-screenshot klikt, opent vaak een bewerkoverlay of modaal:

Hier kan hij met de muis over het beeld gaan en specifieke elementen blurren door erover te slepen (handmatig redactiegereedschap).

Hij kan vormen tekenen (rechthoek, cirkel, pijl) en eventueel tekstlabels plaatsen als highlight.

Ook is er een optie om belangrijke klikgebieden te benadrukken – mogelijk herkent de software de elementlocatie en markeert die automatisch, maar dit kan handmatig aangepast worden.

Na bewerking slaat hij dit op en keert terug naar de hoofdeditor; de screenshot in de stap wordt dan met die annotaties weergegeven.

Preview mogelijkheid: De editor kan een preview-knop bevatten waarmee de gebruiker zijn handleiding kan bekijken zoals lezers hem zouden zien (in de viewer layout). Dit opent een voorbeeld (mogelijk in een nieuw tabblad of modal) zodat de maker de opmaak en volgorde kan controleren.

Opslaan/Publiceren: Bovenin de editor is er een “Opslaan” knop (al gebeurt opslaan vaak automatisch). Daarnaast is er een knop “Gereed” of “Publiceren”. Als de gebruiker daarmee klaar is, kan hij vanuit de editor direct de handleiding gaan delen (er verschijnt bv. direct het dialoog voor delen met de link/ embed code). In een teamcontext zou hier ook een keuze kunnen zijn om de handleiding te markeren als gedeeld met team of privé houden.

De Editor UI is erop gericht dat niet-technische gebruikers eenvoudig hun documentatie kunnen aanpassen. Alles gebeurt in-line: je ziet de step-by-step opbouw terwijl je die aanpast. Dankzij de WYSIWYG-achtige ervaring en drag-and-drop is het laagdrempelig om de handleiding helemaal kloppend te maken zonder één regel code of opmaaktaal te hoeven schrijven[13].

### Handleiding Weergave (Viewer)

De viewer interface is hoe eindgebruikers de gedeelde handleiding ervaren. Dit is wat iemand ziet als hij via een link een Scribe bekijkt, of een ingelogde gebruiker een handleiding in leesmodus opent. De focus hier ligt op duidelijkheid en eenvoud, zodat de lezer stap voor stap de instructie kan volgen:

Titel en metadata: Bovenaan de viewer staat de titel van de handleiding prominent. Daaronder eventueel de beschrijving/introductie als die is ingevuld, en metadata zoals auteur (bijv. “Gemaakt door John Doe op 12 jan 2026”), laatste update datum, en duur/ aantal stappen (bijv. “10 Stappen – 5 minuten om te lezen”). Indien een bedrijfslogo of branding is ingesteld, wordt dat hier ook weergegeven (bijvoorbeeld logo naast de titel of als header achtergrond).

Inhoudsopgave (optioneel): Bij langere handleidingen kan er links of bovenaan een inhoudsopgave staan, bijvoorbeeld een lijst van staptitels of secties, zodat lezers kunnen navigeren. Vaak zijn stappen genummerd en worden alleen opeenvolgend doorlopen, dus een aparte inhoudsopgave is meestal niet nodig tenzij de handleiding secties bevat.

Stappenweergave: De kern is de sequentie van stappen. Elke stap wordt getoond als:

Afbeelding: een plaatje van de schermafbeelding, doorgaans verkleind tot passend formaat. Als de lezer erop klikt, kan een grotere weergave of zoom verschijnen voor details.

Instructietekst: direct onder of naast het beeld de uitleg (“Klik op Instellingen”, etc.). De tekst is helder opgemaakt (voldoende contrast, goed leesbaar font). Belangrijke UI-termen zijn vet of anders gemarkeerd, bijvoorbeeld de naam van een knop in vet.

Nummering: het stapnummer staat duidelijk bij de stap, bijvoorbeeld “Stap 4”.

Extra notities: Als de maker een tip of waarschuwing bij de stap heeft geplaatst, wordt dat visueel onderscheiden (bv. een gekleurde box met een icoontje en de extra tekst).

De lezer scrollt simpelweg van stap 1 naar beneden tot de laatste stap. Alternatief kan er een “volgende stap” knop of pijltje zijn dat de pagina automatisch naar de volgende stap scrollt. In sommige implementaties kunnen gebruikers ook per stap klikken op “Volgende” om steeds één stap in beeld te krijgen (soort slideshow-modus). - Interactieve modus (Guide Me): Een onderscheidende functie (voor interne gebruikers met de extensie) is de mogelijkheid om een “Guide Me” modus te starten[35]. Hiermee krijgt de lezer geen statische pagina, maar wordt hij begeleid in de eigen applicatieomgeving. Concreet: als de gebruiker de browserextensie heeft en zich op de betreffende webapp bevindt, kan de viewer aanbieden “Guide me through these steps”. Klikt de gebruiker daarop, dan overlayt de extensie op de eigen site en markeert de eerste te klikken knop, met een popup “Stap 1: Klik hier op Instellingen”. Vervolgens gaat het naar stap 2, etc., waardoor de gebruiker letterlijk door het proces geleid wordt in plaats van het alleen te lezen. Dit is vooral bruikbaar voor interne training of onboarding: nieuwe gebruikers kunnen zo de instructie doorlopen met interactieve begeleiding. (In het PRD noemen we dit als optionele advanced feature – voor de exactheid van de clone mag aangenomen worden dat dit kan binnen de scope van de extensiefunctionaliteit.) - Embed-weergave: Wanneer de handleiding is ingesloten in een externe pagina (embed), ziet de viewer er vergelijkbaar uit maar dan gecondenseerd binnen een iframe of integraal onderdeel van die site. De navigatie en branding van de Scribe-app zelf is dan meestal verborgen, zodat het lijkt of de handleiding native op de externe pagina staat. Functionaliteit blijft gelijk (scrollen door stappen, eventueel fullscreen knop om groter te bekijken). - Commentaar en interactie: In de viewer (voor authentieke gebruikers) is er onderaan een sectie voor comments/feedback. Hier kunnen lezers een opmerking plaatsen (“Deze stap is me onduidelijk” of “Werkt perfect, dank!”). Teamleden kunnen ook elkaar in comments mentionen als ze rechten hebben (bijv. @John kijk hier eens naar). De viewer toont bestaande reacties en laat de ingelogde gebruiker nieuwe toevoegen. Dit is onderdeel van de samenwerkingsfeedbackloop. - Voltooiingsactie: Bij het einde van de handleiding kan een indicator staan “Handleiding voltooid!” of een knop “Markeer als afgerond”. Als de lezer die aanklikt, registreert de app een completion (afgeronde view) voor analytics doeleinden. Tevens zou de viewer dan een kleine tevredenheidsvraag kunnen tonen (“Was deze handleiding nuttig? Ja/nee”) voor feedback.

In termen van look & feel is de viewer ontworpen voor leesbaarheid. Dat betekent voldoende witruimte, logische stapindeling, en ondersteuning voor allerlei schermformaten (responsive design, zodat je een Scribe eventueel op mobiel of tablet kunt bekijken). Voor mobiele viewers worden de afbeeldingen geschaald en de layout gestapeld onder elkaar.

De viewer interface is dus de kant waarmee de eindgebruiker (bijvoorbeeld een klant of collega) interactie heeft, en dient daarom simpel en ongeclutterd te zijn. Geen onnodige knoppen – alleen wat nodig is om de instructie te volgen en eventueel feedback te geven.

### Pagina’s (gecombineerde handleidingen)

Naast losse Scribe-handleidingen biedt de software ook de mogelijkheid om Pages te maken. Een Page is een samengesteld document waarmee complexere processen of meerdere gerelateerde procedures in één overzicht kunnen worden gepresenteerd[36]. De UI hiervoor wijkt iets af van de standaard Scribe: het is meer een vrije documenteditor waarin meerdere elementen (inclusief Scribe-handleidingen) gecombineerd kunnen worden.

Pagina-overzicht: In de navigatie is er vaak een aparte sectie “Pages”. Een Page wordt getoond als een afzonderlijk document in de lijst (net als een Scribe), met titel, auteur, etc. Het verschil is dat een Page meerdere secties kan bevatten, waaronder ingesloten Scribes.

Page Editor: De bewerkinterface voor een Page lijkt op een rich-text editor of wiki-editor. De gebruiker kan paragrafen tekst schrijven, koppen toevoegen, bullets, en ook multimedia invoegen. Uniek is de mogelijkheid om bestaande Scribe-handleidingen in te bedden: bv. via een knop “Voeg Scribe in” krijgt de maker een lijst van zijn Scribes en kiest er daar een of meerdere. Deze worden dan als interactieve embeds in de Page geplaatst (zodat een lezer de handleiding binnen de Page kan doornemen). Daarnaast kan men ook losse afbeeldingen of zelfs video’s toevoegen voor extra uitleg.

Structuur: Een Page kan dienen als overkoepelend document voor bijv. “Hoe implementeer ik tool X van start tot finish” waarbij sectie 1 een inleidend verhaal is, sectie 2 een Scribe “Account aanmaken”, sectie 3 een Scribe “Eerste instellingen configureren”, enzovoort. De Page-editor laat de maker dus secties met tekst en Scribe-embeds afwisselen. Bovendien kan AI-assistentie worden geboden om stukken tekst te schrijven op basis van prompts (zoals “Schrijf een intro voor deze procedure”), zoals genoemd in Scribehow’s features[37].

Page Viewer: Voor de lezer verschijnt een Page als een langere scrollbare pagina met verschillende contentblokken. Tekstblokken verschijnen gewoon als uitleg; ingesloten Scribes verschijnen met hun viewercomponent binnen de pagina (vaak met een beperkte hoogte of als uitklapbare elementen). De lezer kan de Scribe in-place doorlopen of fullscreen openen. Omdat Pages bedoeld zijn om langere documentatie te bundelen, is er vaak een inhoudsopgave bovenaan die alle sectiekoppen laat zien voor snelle navigatie.

Toepassing: Deze functionaliteit is handig voor scenario’s als onboarding manuals, uitgebreide standaardprocedures of trainingshandleidingen waar meerdere processen samenkomen. In plaats van losse linkjes naar 5 Scribes te delen, bundelt men ze in één Page met extra toelichting.

Team & rechten: Pages kunnen net als Scribes gedeeld worden via link, embed of PDF. Ze vallen ook onder dezelfde rechtenstructuur – bijvoorbeeld alleen intern beschikbaar of publiek. Als een Page een Scribe bevat die privé is, zal de lezer van de Page die Scribe niet kunnen zien tenzij hij toegang heeft, dus doorgaans zijn Scribes in Pages ook breed gedeeld.

Interface nuance: De Page-editor is wat vrijer dan de strak gestructureerde Scribe-editor. Het voelt als een kleine CMS of documentbewerker. Er is nadruk op consistentie (kopstijlen, paragrafen) zodat de output er professioneel uitziet.

In de clone implementeren we Pages om gebruikers te laten meerdere processen in één “document” uitleggen, zoals Scribehow dat doet[36]. Deze interface complementeert de individuele Scribes en biedt extra flexibiliteit voor documentatie behoeften.

### Teambeheer en Organisatie-instellingen

Voor gebruikers met beheerdersrechten (teamadmins of org-admins) zijn er specifieke UI-secties om gebruikers en instellingen te beheren:

Teaminstellingen pagina: Hier krijgt de teambeheerder een overzicht van zijn team. Belangrijke onderdelen:

Teamlijst: Een tabel of lijst van alle teamleden, met hun naam, e-mail, rol (Admin/Maker/Viewer)[7], en status (actief/uitgenodigd). Bij elk lid staan acties zoals “Rol wijzigen” of “Verwijderen uit team”. De beheerder kan hier bijvoorbeeld een maker degraderen tot alleen-lezer of een tweede admin aanwijzen.

Uitnodigen van nieuwe leden: Bovenaan is een veld om e-mailadressen van nieuwe teamleden in te voeren. De beheerder kan meerdere adressen tegelijk toevoegen en kiezen welke rol ze krijgen. Bij bevestigen verstuurt het systeem uitnodigingsmails. Toegevoegde personen verschijnen als "Uitgenodigd - in afwachting" tot ze accepteren.

Standaard toegangsinstelling: De admin kan instellen of nieuwe Scribes standaard privé zijn of direct gedeeld met het team. Bijvoorbeeld een toggle “Nieuwe documenten standaard delen met team (ja/nee)”. Dit komt voort uit Scribehow’s feature om team default access in te stellen, zodat content automatisch breed beschikbaar is of juist niet[38].

Branding: Indien Pro Team, kan de admin hier het bedrijfslogo uploaden en primaire/sekundaire kleuren instellen. Deze worden toegepast op alle teamdocumenten (logo in header van viewer, kleurtjes voor tip/alert blokken, etc.).

Integraties: Mogelijkheid om integraties te configureren, bijvoorbeeld koppelen van Slack of Confluence. Dit kan een API key of webhook instellen, zodat bijv. nieuwe Scribes automatisch in een Slack-kanaal gepost worden, of zodat Confluence makkers Scribe-codes herkennen. In UI zou dit een submenu zijn waarin de admin tokens invoert of toggles zet (“Schakel Slack-integratie in”) en eventueel knoppen “Test verbinding”.

Verwijder team / gegevens exporteren: onderin of in aparte tab wellicht, opties voor datamanagement. Een admin kan besluiten een team te verwijderen (als het een test-team was bijvoorbeeld), of alle content te exporteren voor archief (safety/export compliance).

Organisatiebeheer (Enterprise): Voor een system admin (enterprise) is er een overkoepelende instellingenpagina:

Teams beheren: lijst van alle teams onder de organisatie, met bij elk het aantal gebruikers, aantal documenten, enz. De org-admin kan hier teams toevoegen, hernoemen, of verwijderen. Multi-team management dus.

Licentiegebruik: weergave van hoeveel licenties in gebruik zijn vs. aangekocht[39]. Bijvoorbeeld “50/60 licenties gebruikt”. Mogelijk met optie om via sales/contact meer licenties aan te vragen.

SSO/SCIM configuratie: instellen van Single Sign-On (SAML, OAuth) zodat enterprise users via hun IdP kunnen inloggen. UI voor uploaden van SAML metadata of toggles voor SCIM user provisioning.

Beveiligingsinstellingen: bijv. organisatiebreed afdwingen van 2-factor-auth (als we dat hebben), of instellen van toegestane domeinen (whitelisting e-mail domeinen die zich mogen registreren bij dit org). Ook admin-enforced redaction: enterprise admin kan centrale regels aanzetten zodat bepaalde gegevens altijd automatisch geblurd worden in screenshots (PII/PHI auto-redaction)[40]. Een UI hiervoor kan een lijst zijn van type gegevens (bvb. gezichten, e-mailadressen, creditcardnummers) met checkboxen voor auto-blur.

Gegevensbeheer: mogelijkheid voor admin om alle documenten te doorzoeken, evt. te verwijderen als nodig (voor compliance bijv.). En een auditlog inzien van gebruiker-activiteit (login attempts, document gedeeld, etc.).

De Team/Org-beheer UI zorgt ervoor dat klanten op team- en bedrijfsniveau controle hebben over hun gebruikers en content. Hoewel dit voor een normaal gebruiker verborgen blijft, is het essentieel voor admins om de tool in lijn met hun organisatiebeleid te houden.

### Profiel & Accountinstellingen

Elke gebruiker (ongeacht rol) heeft toegang tot een profiel/account instellingen scherm:

Profielinformatie: Gebruiker kan hier zijn naam aanpassen, profielfoto uploaden, en eventueel positie of afdeling invullen (voor weergave in teamoverzichten of profielhovercards). Dit is grotendeels cosmetisch en voor identificatie binnen de app.

Inloggegevens: Mogelijkheid om e-mailadres te wijzigen (met bevestiging), wachtwoord te resetten of wijzigen. Als er sociale logins (Google/SSO) zijn gekoppeld, ziet de gebruiker dat ook hier en kan hij eventueel extra aanmeldmethodes koppelen (bijv. “Koppel Google-account”).

Notificatievoorkeuren: Instellingen voor welke e-mails of in-app notificaties de gebruiker wil krijgen. Bijvoorbeeld checkboxes: “Stuur mij een e-mail als iemand een van mijn handleidingen bekijkt voor het eerst”, “Stuur mij een e-mail bij nieuwe commentaar op mijn handleidingen”, “Productnieuws ontvangen ja/nee”. In-app notificaties kan de gebruiker wellicht niet uitzetten, maar hij kan wel bepalen of hij realtime browser push notificaties wil.

Taalinstellingen: Indien de interface meertalig is (Scribehow is voornamelijk Engels; onze clone zou NL en EN kunnen ondersteunen), kan men hier de UI-taal kiezen. Dit staat los van de content-taal van handleidingen uiteraard.

Plan & Billing (voor betaalde accounts): Een Pro-gebruiker ziet hier details van zijn abonnement: welk plan, volgende factuurdatum, aantal team seats in gebruik (voor team admins). Mogelijkheid om betalingsgegevens te beheren of plan te upgraden/downgraden (dit linkt meestal naar een billing portal of geeft instructies). Free users krijgen wellicht een promotie te zien “Upgrade naar Pro voor extra functies” met knop.

API Keys (mogelijk): Indien de software API-toegang biedt (bijv. om Scribes programmatisch uit te lezen of te publiceren), kan een ontwikkelaar hier persoonlijke API keys genereren en beheren. Dit is een wat gevorderd onderdeel en waarschijnlijk alleen voor hoge plannen, dus in de UI mogelijk alleen zichtbaar voor Enterprise of via een feature flag.

Account verwijderen: Tot slot een optie om je account te deactiveren of verwijderen conform GDPR. Dit initiate een proces om alle persoonlijke data te wissen; de UI zal waarschuwen dat dit permanent is en bijvoorbeeld een confirmatie vragen. (In teamverband zou verwijderen betekenen dat de persoon uit alle teams gaat en zijn content naar admin overgaat, zie volgende punt.)

Team wisselen: Als een gebruiker lid is van meerdere teams/organisaties (Enterprise scenario), is er naast profielinstellingen soms een snelle manier om te wisselen. Bijvoorbeeld een dropdown in de nav of een scherm waar je op een andere org kunt klikken om “over te schakelen” – dit verandert de context van de dashboard/documenten die je ziet. Dit hebben we al bij navigatie genoemd (team switch), maar kan ook via een accountmenu.

De profiel/account UI is meestal simpel in een formulier-stijl, gegroepeerd per onderwerp. Het doel is dat gebruikers hun eigen gegevens kunnen beheren en voorkeuren kunnen instellen zonder daarvoor support te hoeven contacten, en dat ze inzicht hebben in hun abonnementstatus.

## 5. Browserextensie functionaliteit

De browserextensie is een cruciaal onderdeel van de user flow en is naadloos geïntegreerd met de webapplicatie. Hier beschrijven we hoe de extensie werkt en hoe gebruikers deze ervaren:

Installatie en onboarding: Gebruikers installeren de extensie vanuit de Chrome Web Store of Edge Add-ons. Na installatie verschijnt er een icoon (het productlogo) naast de adresbalk. Bij eerste keer klikken kan de extensie vragen om in te loggen (gebruikers moeten aan hun account gekoppeld zijn om opnames te kunnen opslaan). Vervolgens doorloopt een korte uitleg mogelijk hoe opname werkt.

Extensie UI bij idle: Als de gebruiker op het extensie-icoon klikt terwijl geen opname actief is, krijgt hij een klein popup-menu. Hierop staat een prominente knop “Start opname”. Mogelijk kan de gebruiker een keuze maken: Alleen deze browser-tab opnemen vs Volledig scherm/alle applicaties. (Als de gebruiker een Pro-licentie heeft en de desktop-app geïnstalleerd, kan de extensie ook detecteren en aanbieden “Wil je een desktop-app opnemen? Zo ja, start de desktop recorder.”) Standaard zal het “browser opnemen” scenario zijn. Verder toont de popup wellicht een tandwieltje voor instellingen (bijv. sneltoets instellen, of default wel/geen highlight-cirkels opnemen).

Tijdens opname: Zodra de gebruiker “Start opname” klikt, verdwijnt het popup-menu en gaat de extensie in record-modus. Visueel merkt de gebruiker dit bijvoorbeeld doordat het extensie-icoon rood kleurt of knippert. Soms verschijnt linksonder een kleine opnamewerkbalk: deze kan een timer of step counter bevatten en knoppen “Pauze”, “Stop”, “Annuleren”. De gebruiker kan deze toolbar verslepen of minimaliseren als hij in de weg zit. Tijdens opname registreert de extensie alle relevante acties in de browser: klikken, pagina URL-veranderingen, scroll-acties, tekstinvoer. De extensie code kan context ophalen, zoals de tekst op knoppen, om later in instructies te gebruiken. Als de gebruiker pauzeert, stopt de registratie tijdelijk (handig om tussenstappen die niet relevant zijn over te slaan).

Opname voltooien: De gebruiker klikt “Stop” op de extensie (of op het extensie-icoon, indien dat als stopknop fungeert). Hierna toont de extensie-popup “Opname voltooid! Handleiding wordt gegenereerd…”. Op de achtergrond stuurt de extensie de verzamelde data naar de webapplicatie. Vervolgens kan de extensie een nieuwe browser-tab openen die direct de zojuist gemaakte handleiding in de Editor laat zien, zodat de gebruiker verder kan met bewerken[13].

Error handling: Als er tijdens de opname iets misgaat (bijv. geen netwerk bij upload), toont de extensie een foutmelding en slaat lokaal de data op, zodat niets verloren gaat. De gebruiker kan later opnieuw proberen te uploaden. De extensie kan de gebruiker ook waarschuwen als hij iets probeert op te nemen terwijl niet ingelogd, etc.

Integratie met webapp: De extensie is gekoppeld aan de webapplicatie. Als de gebruiker vanuit de web UI op “Nieuw opnemen” drukt, kan dat een event sturen naar de extensie om meteen opname te starten (de extensie moet daarvoor actief zijn en toestemming hebben). Omgekeerd opent de extensie na opname automatisch de web UI. Deze strakke integratie maakt de ervaring vloeiend – de gebruiker ziet nauwelijks scheiding tussen extensie en webplatform.

Extra extensie features: Naast opnemen biedt de extensie nog twee functies:

Snelkoppeling handleidingen (Sidekick): De extensie kan dienen als een kleine kennisbank in de browser. Bijvoorbeeld als de gebruiker op een bepaalde website is waarvoor er Scribes bestaan, kan de extensie suggereren “Bekijk hier beschikbare handleidingen voor deze site”. Scribehow noemt dit de Scribe Sidekick of in-context guide access[41][42]. De extensie popup heeft dan een tab waar de gebruiker kan zoeken naar relevante Scribes zonder de site te verlaten.

Guide Me afspelen: Zoals eerder genoemd, als een gebruiker een Scribe in interactieve modus wil doorlopen, gebruikt de extensie dit om de aanwijzingen op het scherm te tonen in plaats van in de viewer pagina. Technisch gezien zal de extensie de stappen kennen (het kan de content via API ophalen) en overlay-bubbels genereren bij de juiste elementen. De UI hiervan: een kleine popup “Stap 1/10: Klik op Instellingen [Volgende >]”. Wanneer de gebruiker de actie uitvoert en op volgende klikt, springt de bubbel naar de volgende element. Dit gaat stap voor stap tot voltooiing, waarna de extensie meldt “Handleiding afgerond!”. Deze mode is alleen beschikbaar als de gebruiker zich op de juiste site/app bevindt en de Scribe daarvoor gemaakt is, en is vooral nuttig binnen teams om training te geven on the job.

Beperkingen: De extensie kan uiteraard alleen web-gebaseerde handelingen direct vastleggen. Voor desktop-apps moet de aparte desktop recorder gebruikt worden (die lijkt qua bediening sterk op de extensie maar dan in een losse applicatie). Onze clone-extensie focust op browsercaptatie; bij gebrek aan desktop app integratie zou men mogelijk via de extensie ook scherm-opname kunnen doen (met de nieuwe Chrome API voor desktop capture), maar dat is een technische nuance. In de gebruikerservaring is het gescheiden: web via extensie, desktop via app.

Samengevat, de browserextensie is de trigger en enabler voor het kernproces van Scribe: record -> upload -> handleiding. Hij opereert geruisloos op de achtergrond tijdens normaal gebruik en springt tevoorschijn alleen wanneer nodig (opname of assistentie). Dit zorgt voor een ergonomische workflow: gebruikers werken in hun eigen omgeving, drukken op record, en laten de tool de rest doen[43].

## 6. Beveiliging en privacy

Gezien dit product wordt gebruikt om potentieel gevoelige procesinformatie te documenteren, zijn beveiliging en privacy van groot belang. Hieronder de maatregelen en features die hiervoor in de software zijn opgenomen:

Toegangscontrole en permissies: Standaard is elke nieuw aangemaakte handleiding privé voor de maker totdat deze expliciet gedeeld wordt. Wanneer gedeeld, kan de maker kiezen uit verschillende toegangsniveaus: Publiek (iedereen met link), Team (alleen ingelogde teamleden), of Specifiek (alleen aangeduide personen). In een team kan de beheerder bovendien de standaard instellen (bv. alles automatisch team-only) zodat er geen per ongeluk openbare data lekt. Enterprise admins kunnen organisatiebreed delen naar buiten zelfs helemaal uitzetten, zodat alle content intern blijft.

Geauthenticeerde toegang: Wanneer een handleiding niet-publiek gedeeld is, moet de ontvanger inloggen om toegang te krijgen. Voor teamdelen betekent dat alleen geregistreerde teamleden de content kunnen bekijken (de link zal hen zo nodig naar een login leiden en daarna zeggen “je hebt hier geen toegang” als ze niet tot de juiste groep behoren). Dit voorkomt dat gevoelige documenten in verkeerde handen vallen.

Encryptie: Alle communicatie tussen extensie, app en server verloopt over HTTPS (TLS). Geüploade screenshots en data worden versleuteld opgeslagen op de server. Scribehow geeft aan enterprise-grade encryption te gebruiken voor data at-rest en in-transit[44]. Onze clone hanteert hetzelfde principe: alle gebruikerscontent (instructies, beelden) wordt veilig opgeslagen, zodat derden er niet bij kunnen.

Gegevensprivacy (GDPR/AVG): Het product is ontworpen conform GDPR-richtlijnen. Dat betekent onder andere: gebruikers hebben recht op inzage in hun persoonlijke gegevens, kunnen hun account (en daarmee hun persoonsgegevens) laten verwijderen, en hun data wordt niet zonder toestemming voor andere doeleinden gebruikt dan voor de dienst zelf. Er zijn duidelijke privacy policies en indien de app wereldwijd gebruikt wordt, houdt men rekening met andere privacywetgevingen (bijv. CCPA, en voor medische gegevens HIPAA – in Enterprise context relevant[45]). In de UI is een optie om persoonlijke data te exporteren (zoals alle eigen documenten) en te verwijderen (account deletion). Ook cookies en tracking worden minimaal gehouden en netjes gemeld (cookiebanner indien nodig).

Redactietools voor gevoelige info: Omdat de software schermen opneemt, kan er gevoelige informatie in screenshots belanden (bijv. klantnamen, e-mailadressen, bedragen). De software biedt daarom uitgebreide redactie-mogelijkheden:

Handmatige blur-functie (zoals eerder beschreven) om direct specifieke details onherkenbaar te maken.

Slimme auto-redaction (Enterprise): In de enterprise-versie kan de software automatisch bepaalde types gevoelige gegevens onherkenbaar maken. Bijvoorbeeld alle numerieke reeksen die op creditcardnummers lijken, of persoonsnamen, kunnen door een AI/algoritme gevonden en geblurd worden zonder dat de gebruiker daar aan hoeft te denken[40]. Dit gebeurt meteen bij het genereren van de handleiding.

Admin-enforced redaction: Een enterprise admin kan afdwingen dat bepaalde elementen altijd geblurd worden. Bijvoorbeeld elke keer dat het bedrijfslogo van een klant (als afbeelding) verschijnt, of bepaalde velden zoals “SSN:” in een formulier, dat die automatisch niet leesbaar zijn. Dit garandeert compliance met bijv. HIPAA als medische data in beeld komt[46].

Het systeem behoudt de originele ongeblurde beelden niet langer dan nodig; zodra een afbeelding is bewerkt of geblurd door de gebruiker, wordt de oude versie overschreven of veilig vernietigd, om datalekken te voorkomen.

Beveiliging van accounts: Accountniveau beveiliging bevat:

Sterk wachtwoordbeleid (minimumeisen aan wachtwoordlengte/complexiteit, eventueel een 2FA mogelijkheid op account).

Optioneel SSO-integratie voor bedrijven, zodat de Identity Provider van de klant (bv. Azure AD, Okta) de toegangscontrole doet[44]. Dit vermindert risico’s omdat wachtwoorden niet door ons beheerd worden in dat scenario en toegang centraal bij de klant reguleerbaar is (bijv. automatische uitschakeling bij uitdiensttreding).

Bescherming tegen brute-force: na X mislukte loginpogingen wordt een account tijdelijk gelocked of komt er een CAPTCHA.

Sessions time-out: een gebruiker wordt na een periode van inactiviteit automatisch uitgelogd (instelbaar, bijv. 24 uur voor normale, korter voor enterprise strenge mode).

Notificatie van nieuwe login: de gebruiker kan een mail krijgen als er een login vanaf een nieuw apparaat plaatsvindt, als extra security alert.

Audit logging: In enterprise omgevingen is er auditing aanwezig: elke belangrijke actie (login, aanmaken/verwijderen document, wijzigen rechten, etc.) wordt gelogd met timestamp en user. Dit log is zichtbaar voor de org-admin en kan gebruikt worden voor compliance controles. Bijvoorbeeld kan men zien “Welke externe links zijn aangemaakt afgelopen maand” of “Wie heeft document X bekeken”. Dit helpt te voldoen aan interne controles en onderzoek bij incidenten.

Data residency en compliance: Voor sommige klanten is van belang waar data staat. Enterprise-klanten kunnen optioneel kiezen voor EU-only data storage om aan EU-richtsnoeren te voldoen, of eigen cloud (als feature). Standaard staat data in een gecertificeerde cloud omgeving met nodige certificaten (ISO27001, SOC2, etc.). Dit soort details vermelden we in PRD om aan te geven dat bedrijfsgegevens veilig en conform industrie-standaarden behandeld worden.

Veiligheid van de extensie: De browserextensie vraagt alleen minimaal noodzakelijke rechten (bij voorkeur slechts toegang tot websites als de gebruiker op “record” klikt, via Chrome’s activeTab permission, of eventueel brede capture voor screenshot). De extensie voert geen ongeautoriseerde acties uit; het is alleen actief op commando van de gebruiker. Dit is belangrijk om vertrouwen te wekken dat de extensie niet stiekem meekijkt. We zullen dit communiceren (bv. “Scribe-extensie is inactief tot jij op opnemen klikt”).

Continued security updates: Het product zal regelmatig beveiligingsupdates krijgen. Bijvoorbeeld als er nieuwe bedreigingen komen (zero-day in Chrome screenshot API etc.), brengen we patches uit. Ook laten we periodiek penetratietests uitvoeren en fixen we eventuele gevonden issues proactief.

Kortom, deze clone neemt dezelfde maatregelen als Scribehow om ervoor te zorgen dat gebruikersdata veilig en privé blijft. Alle gevoelige info kan worden afgeschermd[44], contentdeling is beheersbaar, en het systeem voldoet aan professionele beveiligingsstandaarden. Dit is essentieel om vertrouwen te winnen van bedrijven die hun interne processen met de tool documenteren.

## 7. Notificaties en e-mails

De software communiceert actief met gebruikers via notificaties en e-mails om hen op de hoogte te houden van belangrijke gebeurtenissen. Hier zijn de soorten meldingen die voorzien zijn, en wanneer een gebruiker deze ontvangt:

In-app notificaties (direct in de applicatie):

Commentaar of feedback: Als iemand een opmerking plaatst op een handleiding, krijgt de eigenaar (en eventueel eerdere commenters) een notificatie in de app. Een bel-icoon in de navigatie licht op. Klikken daarop toont bv. “Anna heeft gereageerd op Onboard CRM – “Kun je stap 5 verduidelijken?””. Zo weet de maker dat er actie gevraagd wordt.

Team toevoeging: Wanneer je door een teambeheerder bent uitgenodigd aan een team, zie je een melding zodra je inlogt: “Je bent toegevoegd aan team Marketing. Klik hier om te wisselen.”

Nieuwe handleiding beschikbaar: Afhankelijk van instellingen kan een teamlid een notificatie krijgen als een collega een nieuwe handleiding publiceert voor het team (bijv. “John heeft How to use VPN gedeeld met Team IT”). Dit is handig om op de hoogte te blijven van nieuwe content. (Dit kan voor elke nieuwe Scribe of gebundeld per dag om spam te voorkomen.)

Out-of-date alerts: Zoals eerder genoemd, als het systeem detecteert dat een handleiding mogelijk verouderd is of veel negatieve feedback krijgt, ontvangt de verantwoordelijke een notificatie: “⚠️ Handleiding X vereist mogelijk een update”[33].

Bevestigingen: Wanneer een actie is geslaagd, toont de app soms een eenmalige melding. Bijv. na export: “PDF succesvol gegenereerd en gedownload.” Of na het uitnodigen van leden: “3 nieuwe uitnodigingen verzonden.” Dit zijn tijdelijke pop-ups (toasts) die de gebruiker direct feedback geven op acties.

E-mail notificaties:

Uitnodigingen: Als een beheerder je uitnodigt voor een team, ontvang je een e-mail met een uitnodigingslink. Bijvoorbeeld onderwerp “You’ve been invited to join [TeamNaam] on [ProductNaam]”. De mail bevat een knop om account aan te maken of in te loggen om het team te betreden.

Wachtwoord reset: Als een gebruiker aangeeft zijn wachtwoord vergeten te zijn, wordt er een e-mail verstuurd met een secure reset-link. Dit mailtje heeft een beperkte geldigheid (bijv. 1 uur) en instructies om een nieuw wachtwoord in te stellen.

Nieuwe commentaar: De gebruiker kan instellen of hij per e-mail op de hoogte gehouden wil worden van nieuwe commentaren of vragen op zijn handleidingen. Indien ingeschakeld, ontvangt hij bijv. “Anna commented on your guide ‘Onboard CRM’ : “Kun je stap 5 verduidelijken?” inclusief een link om direct naar die comment te gaan. Zo mist hij geen feedback zelfs als hij niet voortdurend de app checkt.

Handleiding gedeeld met jou: Als iemand specifiek jouw e-mailadres toevoegt om een handleiding te delen (bijv. buiten de app om, via share by email), krijg je een mail: “John shared a Scribe with you: [Titel]. Click here to view it.” Dit scenario is relevant als bv. een klant die geen account heeft toch gemaild wordt via de app.

Team meldingen: In teaminstellingen kan de admin bepaalde e-mail alerts aanzetten, bijv. een dagelijkse of wekelijkse digest. Een wekelijkse e-mail kan bevatten: welke nieuwe Scribes zijn er deze week in je team gemaakt, welke zijn het meest bekeken, etc. Dit houdt teamleden betrokken en herinnert hen aan beschikbare documentatie.

Account/Beveiliging: E-mails voor veiligheidsdoeleinden, zoals “Er is ingelogd op je account vanaf een nieuw apparaat/IP” of “Je wachtwoord is succesvol gewijzigd”. Dit geeft de gebruiker controle en waakzaamheid over zijn account.

Betaal-/abonnement: Indien relevant, ontvangt de betalende gebruiker of admin e-mails omtrent facturatie: factuurontvangst, melding van mislukte betaling, waarschuwing voor verlopen creditcard, of bevestiging van upgrade/downgrade. Deze komen van het betalingssysteem en zijn belangrijk om continuïteit te borgen.

Nieuws en updates: Opt-in e-mails met productupdates, tips of nieuwsbrief. Bijvoorbeeld maandelijks “5 tips om betere Scribes te maken” of aankondiging van nieuwe features. Deze marketinggerichte mails gebeuren alleen als de gebruiker daar toestemming voor heeft gegeven (meteen bij registratie of in profielinstellingen).

Push notificaties: Eventueel (toekomst) kan de app ook browser push notifications sturen voor bepaalde events, als de gebruiker dit toestaat. Dan krijgt hij bv. een desktopmelding “Nieuw commentaar op je Scribe”. In de PRD benoemen we dit als mogelijkheid, maar de kern is in-app en e-mail.

Alle notificaties zijn er op gericht om gebruikers betrokken te houden en direct in te lichten over zaken die hun aandacht vereisen. De toon van communicatie is vriendelijk en to-the-point. Frequente notificaties (zoals comments) zijn realtime, terwijl minder kritieke (zoals wekelijkse overzichten) gegroepeerd worden om spam te vermijden. Gebruikers hebben de controle om bepaalde mails uit te schakelen indien gewenst, om hun inbox schoon te houden.

## 8. Accountbeheer

In dit gedeelte beschrijven we de processen rondom accountregistratie, inloggen, wachtwoordbeheer en teambeheer vanuit gebruikersperspectief:

Registratie: Nieuwe gebruikers kunnen zich aanmelden via de website. Ze vullen een registratieformulier in met naam, e-mailadres en wachtwoord. Na submissie ontvangen ze een bevestigingsmail om hun e-mailadres te verifiëren (click-to-confirm). Alternatief is er optie tot Single Sign-On of social login: bijvoorbeeld een “Sign up with Google” knop die de Google OAuth gebruikt om een account aan te maken (voor snelheid en betrouwbaarheid). In een enterprise setting kunnen accounts ook door een admin worden pre-aangemaakt of via een uitnodiging ontstaan (diegene klikt op uitnodigingslink en stelt dan een wachtwoord in als onderdeel van acceptatie). Het registratieproces is eenvoudig en conform best practices (sterk wachtwoord vereist, akkoord met Terms of Service en Privacy Policy aanvinken, etc.).

Inloggen: Gebruikers loggen in via het login-scherm met hun e-mail en wachtwoord, of via SSO als ingesteld. Er is een “Remember me” optie zodat ze ingelogd blijven op vertrouwde apparaten. Na succesvolle login worden ze naar hun dashboard geleid. Als de login faalt (verkeerd wachtwoord) krijgen ze een foutmelding en de mogelijkheid om wachtwoordherstel te starten. Voor enterprise gebruikers met SSO is er eventueel een apart subdomein of link (“Log in via [Bedrijfsnaam] SSO”) die hen naar de Identity Provider leidt. Inloggen is beveiligd tegen brute force met beperkte pogingen en CAPTCHA indien verdacht verkeer.

Wachtwoordherstel: Mocht een gebruiker zijn wachtwoord vergeten, kan hij op “Wachtwoord vergeten?” klikken op de loginpagina. Hij vult zijn geregistreerde e-mail in en ontvangt direct een e-mail met een wachtwoord-resetlink. Die link leidt naar een veilige pagina waar hij een nieuw wachtwoord kan kiezen (tweemaal invullen voor confirmatie). Na indienen is het wachtwoord gewijzigd en kan hij inloggen. De resetlink is eenmalig te gebruiken en verloopt na bepaalde tijd voor de veiligheid. Ook als een admin SSO gebruikt, kan een user zonder direct wachtwoord meestal geen wachtwoordreset doen (dan gebeurt wachtwoordbeheer via hun bedrijf).

Accountprofiel wijzigen: Zoals genoemd bij de UI, kunnen gebruikers hun profielgegevens aanpassen (naam, avatar) en inloggegevens (e-mail/wachtwoord). Als e-mail wordt gewijzigd, moet de nieuwe e-mail weer geverifieerd worden via mail. Wachtwoord wijzigen vereist het oude wachtwoord ter confirmatie (of een reset-proces als men het oude niet weet). Deze flows volgen standaarden voor security.

Team aanmaken: Wanneer een gebruiker zich registreert, heeft hij standaard alleen een persoonlijke workspace. Indien hij de software binnen een team wil gebruiken, zijn er twee scenario’s:

Uitgenodigd worden: Een bestaande teambeheerder voegt het e-mailadres toe, de gebruiker krijgt een uitnodiging en na accepteren wordt hij lid van dat team (zie Teambeheer hieronder).

Zelf team starten: Een gebruiker kan vanuit zijn account een nieuw team creëren (dit kan vereisen dat hij upgrade naar een betaald plan als teams alleen in Pro beschikbaar zijn). Bij teamcreatie geeft hij een teamnaam op en wordt hij automatisch teambeheerder daarvan. Vanaf dat moment heeft hij zowel zijn persoonlijke ruimte als een teamruimte om te beheren.

Teambeheer (inviteren en verwijderen): De teambeheerder gebruikt de teaminstellingen UI om leden uit te nodigen. Hij typt een of meerdere e-mails, kiest hun rol (Maker of Viewer bijvoorbeeld) en verstuurt de uitnodigingen. Genodigden ontvangen mail en verschijnen pending. Zodra ze de uitnodiging accepteren (door in te loggen of account aan te maken via de link), worden ze actieve teamleden. Als iemand al een account had, voegt de klik op de uitnodigingslink simpelweg het team toe aan zijn account (hij kan dan wisselen tussen geen team/team context).

De beheerder kan ook leden verwijderen via teaminstellingen. Bijvoorbeeld als iemand het bedrijf verlaat: de admin klikt “Verwijder uit team” naast die persoon. Het systeem vraagt bevestiging en eventueel of de documenten van die persoon overgedragen moeten worden. Standaard zal bij verwijderen van een user, alle door die user gemaakte teamdocumenten eigendom worden van een admin zodat er niets verloren gaat[47]. De verwijderde gebruiker verliest toegang tot het team en ziet de teamgegevens niet meer bij inloggen. (Zijn persoonlijke content blijft onaangetast als hij een eigen account had.)

Rollen aanpassen gebeurt soortgelijk: de admin wijzigt bij een gebruiker de rol dropdown van bv. Maker naar Admin of naar Viewer. Rechten veranderen dan onmiddellijk.

Team wisselen: Als een gebruiker lid is van meerdere teams, kan hij via de UI kiezen welk team’s documenten hij wil bekijken. Dit is meestal een dropdown in nav of een switcher pagina. Zijn account is op de achtergrond lid van die meerdere teams. Dit is vooral enterprise scenario (bijv. consultant die in meerdere klant-teams zit, of iemand in een organisatie met sub-teams). De wissel is belangrijk zodat documenten gescheiden blijven per context.

Account opheffen: Gebruikers (of admins voor hun organisatie) kunnen accounts opzeggen. Een individuele gebruiker kan zijn persoonlijke account verwijderen; hierbij worden al zijn persoonlijke Scribes gewist. Als hij in team zat, blijft teamcontent behouden met overdracht aan admin zoals genoemd. Enterprise admins kunnen ook een gebruiker deactiveren in hun organisatie, wat gelijkstaat aan uit alle teams verwijderen in die org. Deze processen zijn irreversibel en conform privacy-wetgeving – er wordt bijv. 30 dagen een backup bewaard maar uiteindelijk wordt data vernietigd.

Betaalinstellingen: (verwijzend naar Betaalmodel) Een accountbeheer aspect is ook het managen van abonnement. Voor Pro Team, een teambeheerder kan via Account/Billing upgraden/downgraden, extra seats kopen, facturen inzien. Dit verloopt via een geïntegreerde billing portal of een settings sectie. Hoewel technisch, noemen we hier dat accountbeheer dat omvat.

Al deze flows zijn erop gericht dat gebruikers zelfredzaam zijn in het beheren van hun account en teams, met zo min mogelijk administratieve rompslomp. Tegelijk zijn kritische acties (zoals verwijderen of beveiligingsinstellingen) goed afgeschermd met bevestigingen om fouten te voorkomen.

## 9. Betaalmodel

Dit product hanteert een freemium-prijsmodel vergelijkbaar met Scribehow, met een gratis instapversie en uitgebreide functionaliteit voor betaalde abonnementen. De plannen zijn als volgt opgebouwd[48]:

Gratis Plan (Basic): Voor individuele gebruikers is er een gratis versie met basisfunctionaliteit. In dit plan kunnen gebruikers onbeperkt handleidingen aanmaken voor persoonlijk gebruik[49]. Belangrijke features die inbegrepen zijn:

Opnemen van processen via de browserextensie (alleen web, geen desktop capture in free).

Automatisch genereren en bewerken van handleidingen (volledige editor beschikbaar).

Delen via link en embed is toegestaan[50], zodat free users hun Scribes openbaar kunnen delen of insluiten.

Basis beeldbewerking (handmatige blur) is beschikbaar, maar mogelijk geen geavanceerde auto-redaction.

Basis analytics: aantal views per Scribe wordt bijgehouden, maar gedetailleerde inzicht-features (zoals wie heeft bekeken) zijn beperkt.

Samenwerking: De gratis versie is primair voor individueel gebruik – officieel ondersteunt Basic geen team werkruimtes (gebruikers kunnen geen teamleden uitnodigen op free). Ze kunnen uiteraard hun links met anderen delen, maar er is geen gezamenlijke contentbibliotheek of commentaarfunctie voor free users.

Het doel van het free plan is gebruikers de kernervaring te bieden ("the magic of Scribe") en waarde te tonen[51]. Er zit geen harde limiet op aantal Scribes of stappen, zodat men echt ermee kan werken. Beperkingen zitten vooral in samenwerking en branding/exports.

Pro Plan (Betaald): Dit plan richt zich op individuele power-users en kleine teams die meer functionaliteit nodig hebben. Het Pro plan bestaat in twee varianten:

Pro Personal: voor één gebruiker.

Pro Team: voor meerdere gebruikers (meestal 3+ seats, met volumekorting per seat). Functioneel zijn deze gelijk, alleen Pro Team omvat multi-user samenwerking.

Functies in Pro (tov Basic):
- Desktop capture: Mogelijkheid om ook desktop-applicaties op te nemen, via de desktop app integratie[10]. Hierdoor kun je alle soorten processen documenteren (web, desktop, en door upload zelfs mobiel screenshots).
- Onbeperkt Scribes én Pages: In Pro kunnen gebruikers ongelimiteerd zowel losse handleidingen als samengestelde Pages maken[11]. (Free users zouden eventueel ook al onbeperkt Scribes hebben, maar Pages zijn wellicht alleen vanaf Pro beschikbaar.)
- Branding & lay-out: Pro gebruikers kunnen hun bedrijfslayout toepassen – logo uploaden, thema-kleur instellen – zodat de gedeelde docs een professioneel uiterlijk krijgen[52].
- Uitgebreide bewerking: Pro biedt de screenshot redactietools volledig aan: je kunt screenshots bewerken, samenvoegen tot GIFs, etc.[26]. Ook de automatische redactiefunctie (Smart Blur van PII) zou al in Pro Personal beschikbaar kunnen zijn als selling point, maar Scribehow lijkt auto-redaction pas in Enterprise te doen[53]. Handmatige blur is in elk geval aanwezig.
- Export naar PDF/HTML/Markdown: Pro gebruikers kunnen hun handleidingen exporteren naar meerdere formaten (Basic heeft geen PDF-export, Pro voegt toe: PDF, HTML, MD)[26]. Dit is handig voor externe documentatie en backups.
- Samenwerking & teams: - Pro Personal is één gebruiker – samenwerking is hier niet van toepassing (al kan die ene gebruiker wel comments van kijkers ontvangen op gedeelde scribes). - Pro Team laat toe om een team aan te maken met meerdere seats. Teamleden kunnen intern handleidingen delen, en er is een commentaarfunctie voor samenwerking[54]. Tevens kunnen teamleiders content en leden beheren. - Insights & analytics: Pro gebruikers krijgen advanced insights: naast view counts ook info over individuele kijkers (voor team) en completions[55]. Comments/feedback verzamelen is onderdeel van Pro. Ze kunnen dus beter meten hoe documenten presteren. - Prioritaire ondersteuning: Betaalde gebruikers krijgen snellere/uitgebreidere support (bv. dedicated email support, mogelijk chat). - Integraties: Basis integraties (Notion, Confluence embed, Slack share) werken al voor free via link/embed. Pro Team mogelijk voegt directe Slack app integratie toe (post notifications in Slack bij nieuwe Scribe etc.), en wellicht andere integraties (bijv. Salesforce in-app guidance, als dat bestaat).

Prijsindicatie: (Hoewel een PRD zich niet op specifieke prijzen fixeert, ter referentie) Scribehow’s Pro personal is bv. ~$29/maand, Pro team ~$12 per gebruiker/maand in team >5[56]. Onze clone zou vergelijkbare prijsniveaus aanhouden. Dit geeft context dat Pro is betaalbaar voor individuele professionals en opschaalbaar voor teams.

Enterprise Plan: Voor grote organisaties of specifieke compliance-eisen is er een Enterprise aanbod. Dit is maatwerk in licentiemodel (vaak priced per seat met volume discount, of custom pricing). Functionaliteit omvat alles van Pro Team, plus:

Geavanceerde beveiliging & integratie: Single Sign-On ondersteuning (SAML/OAuth) voor integratie met bedrijfslogin[44]. Mogelijke SCIM voor user provisioning.

Auto-redaction van PII/PHI: Automatisch gevoelige informatie onherkenbaar maken tijdens opname[53] – een uniek selling point voor enterprise (medische/financiële sector).

Rolonderscheid Creator/Viewer: Mogelijkheid om goedkope “Viewer-only” licenties te hebben voor gebruikers die alleen willen consumeren zonder maken[57]. Dit zit bij Enterprise zodat organisaties betaalbaar honderden mensen toegang kunnen geven als kijker.

Meertaligheid: Enterprise ondersteunt het vertalen van handleidingen in meerdere talen[58]. Bijvoorbeeld een Scribe gemaakt in Engels kan automatisch een vertaalde versie in Frans genereren (met AI) voor internationale teams.

Multi-team management: Een organisatie kan meerdere teams of afdelingen aanmaken onder één contract, met een System Admin rol die overkoepelend alles beheert[59]. Dit is handig voor bv. een corp met divisies die eigen werkruimtes willen maar wel centrale controle.

Geavanceerde analytics: Nog diepere inzichtmogelijkheden, zoals integratie met eigen BI tools, of extra metrics (bijv. gemiddeld tijd besteed per handleiding, funnel drop-off per stap). Eventueel een dashboard export functie.

Service-level & support: Enterprise klanten krijgen vaak een dedicated accountmanager, trainingssessies, hogere SLA’s voor uptime, eventuele on-premise of private cloud opties als nodig.

Compliance garanties: Aparte overeenkomsten mogelijk (DPA’s), ondersteuning voor HIPAA (in USA), ISO-certificering info beschikbaar voor audits van klant.

Enterprise is dus gericht op klanten die schaal, extra beveiliging en maatwerk nodig hebben. De prijs is custom (vaak jaarlijkse contracten).

Overige (addons): Misschien biedt de software nog add-on modules of een intermediate plan. Bijv. Scribehow had iets van “Boost” modules of een mid-tier (Starter), maar uit de huidige info lijkt het Basic/Pro/Enterprise. Als er een Teams Starter plan is, zou dat een lagere prijs met beperkt seats of functionaliteit kunnen zijn. In deze clone echter houden we het simpel bij de hoofdplannen.

Plan-overzicht samengevat[48]: - Basic (Free): onbeperkt Scribes maken (web only), delen via link/embed, basis editor, beperkt branding (geen custom logo), geen PDF-export. Geen teamfuncties. Ideaal voor individuen om te proberen[49].
- Pro (Personal/Team): alles van Basic plus desktop capture, branding, screenshot editing, export naar PDF/HTML/MD, team collaboration (Pro Team variant) incl. comments[60][61]. Geschikt voor professionals en SMB-teams die regelmatig documenteren[62].
- Enterprise: alles van Pro plus enterprise-features: SSO, auto-redact, granular roles, organisatiebeheer, extra compliance & support[59][53]. Voor grote organisaties met strenge eisen.

Gebruikers kunnen zich gratis registreren en het Basic plan gebruiken zolang ze willen. Upgrade naar Pro is mogelijk vanuit de app (self-service met creditcard)[63]. Voor Enterprise meestal “contact sales” voor een op maat aanbod. Dit freemium model laat mensen eerst waarde ervaren en biedt groeipaden zodra ze meer nodig hebben.

Betaalafhandeling: Het pro/team plan zal waarschijnlijk maandelijkse en jaarlijkse betalingsopties bieden (jaarabonnement met korting ~20%). Abonnement is per gebruiker (seat) per maand. In Pro Team scenario’s koopt men een pakket seats; men kan meer leden toevoegen tot die limiet, voor extra leden stijgt de factuur automatisch (of admin koopt extra). Als iemand Pro personal is en later een team wil beginnen, kan hij upgraden naar Pro Team gemakkelijk. Omgekeerd, downgraden naar free is mogelijk maar dan verliest men toegang tot Pro features (bestaande Scribes blijven maar pro-only features zoals branding zouden gedeactiveerd worden of alleen leesbaar).

Conclusie betaalmodel: Het product volgt hiermee een beproefd model waarbij een gratis laag drempel creëert en gevorderde functies monetaire waarde toevoegen. Dit verzekert brede adoptie en tegelijkertijd inkomsten voor de meerwaarde functionaliteiten.

Bron: Scribehow’s eigen indeling bevestigt deze opzet: “Free plan – onbeperkt persoonlijke guides; Pro plan – samenwerking, branding en export features; Enterprise – geavanceerde analytics, permissies en integraties”[64]. Ons product zal deze zelfde structuur inrichten, zodat het een getrouwe kloon is van zowel de functionaliteit als het commercieel model van Scribehow.


[1] [2] [3] [4] [5] [13] [15] [16] [21] [22] [23] [24] [29] [34] [42] [43] [44] [48] [49] [55] [64] What is scribehow used for

https://scribehow.com/page/What_is_scribehow_used_for__bhipdnxWTKalFhKZNNByKw

[6] Sharing your Scribe

https://support.scribehow.com/hc/en-us/articles/7005471657373-Sharing-your-Scribe

[7] [8] [35] [39] [47] Team roles and managing your team – Scribe Support Portal

https://support.scribehow.com/hc/en-us/articles/6853364827293-Team-roles-and-managing-your-team

[9] [26] [27] [28] [41] [50] [51] [52] [53] [54] [57] [58] [60] [61] Pricing

https://scribe.com/pricing

[10] [11] [45] [59] [62] [63] Choosing the right Scribe plan – Scribe Support Portal

https://support.scribehow.com/hc/en-us/articles/8813841761181-Choosing-the-right-Scribe-plan

[12] [14] [17] [18] [19] [20] [30] [31] [32] [33] [36] [37] [40] [46] Scribe Features

https://scribe.com/features

[25] Exporting a Scribe to PDF

https://support.scribehow.com/hc/en-us/articles/9235742409501-Exporting-a-Scribe-to-PDF

[38] Your team's default access setting - Scribe Support Portal

https://support.scribehow.com/hc/en-us/articles/6853328801821-Your-team-s-default-access-setting

[56] What is the best Scribe (scribehow.com) alternative? - Dubble

https://dubble.so/posts/scribe-alternative
