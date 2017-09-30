import React from 'react';
import {SideNav} from './SideNav';
import { shallow, mount, render } from 'enzyme';
import {expect} from 'chai';
import {
  graphql,
} from 'react-apollo';

import {
  ApolloProvider,
  createNetworkInterface,
  toIdValue,
} from 'react-apollo';
  import ApolloClient from 'apollo-client';
  import gql from 'graphql-tag';
  import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
  import { mockNetworkInterface } from 'apollo-test-utils';


it('executes a query', (done) => {

  const caseStudiesListQuery = gql`
    query CaseStudiesListQuery {
    	caseStudies(locale: "de") {
    	  locale
    	  company
    	  url
    	  image1
    	  image2
    	  shortDescription
    	  industry
    	  languages
    	  textType
    	  volume
    	  longDescription
    	  challenge
    	  solution
    	  valueAdded
    	  position
    	  urlFollowingCaseStudy
    	  urlPreviousCaseStudy
    	}
    }
  `;
  const data =
  {
    "caseStudies": [
      {
        "locale": "de",
        "company": "Thermaflex",
        "url": "thermaflex",
        "image1": "thermaflex.png",
        "image2": "thermaflex_product.png",
        "shortDescription": "Thermaflex entwickelt und produzierte smarte Lösungen für die Verteilung thermaler Energie.",
        "industry": "Materialwissenschaften",
        "languages": "DA, NL, ET, FR, DE, IT, LT, LI, PL, RO, RU, SE, TH, TR, JA, UK, NO",
        "textType": "Webseite, Datenblätter",
        "volume": "500000 Wörter",
        "longDescription": "Knapp die Hälfte der auf der Welt produzierten Energie wird für Heiz- und Kühlzwecke verwendet und der Großteil davon wird immer noch durch die Verbrennung fossiler Brennstoffe erzeugt. Darin begründet liegt die Vision von Thermaflex: „Energieverschwendung minimieren und den Gebrauch erneuerbarer Energie maximieren“ Thermaflex entwickelt und produzierte smarte Lösungen für die Verteilung thermaler Energie. Deren flexible vorisolierte Rohre- und Isoliersysteme zur Beheizung, Kühlung, Belüftung und im Bereich Trinkwasser finden auf der ganzen Welt Anwendung in Wohngebieten, kommerziellen und öffentlichen Gebäuden und in der Industrie. Neben einem angenehmen Innenraumklima, ermöglichen diese System den Gebrauch erneuerbarer Energien und reduzieren die Kohlenstoff-Emission von Gebäuden. Seit der Gründung in den Niederlanden in 1976 ist das Familien geführte Unternehmen zu einem internationalen Technologieführer herangewachsten. Thermaflex betreibt fünf Produktionsstätten und 16 Vertriebsstandorte weltweit und hat bereits Projekte in über 45 Ländern erfolgreich umgesetzt.",
        "challenge": "Wie bei internationalen Konzernen üblich, arbeitete bei Thermaflex vor der Zusammenarbeit mit lengoo jede ausländische Niederlassung mit Ihrem eigenen Übersetzungsbüro vor Ort. Dies führte zu großer Inkonsistenz in Bezug auf die Übersetzung von Fachbegriffe und dem verwendeten Stil. Mit der Einführung der neuen Webseite in 17 Sprachen war die Firma auf der Suche nach einem Partner mit dem der länderübergreifende Übersetzungsbedarf auf einer zentralen Plattform organisiert werden kann. Mit einem starken Fokus auf ökologische Nachhaltigkeit, war Thermaflex auf der Suche nach einem langfristigen Partner, dessen Übersetzer nicht nur mit dem hoch technischen Inhalt der Datenblätter zahlreicher Produktvarianten umgehen können, sondern auch mit der Marketingsprache in diesem Markt vertraut sind, um die Werte und Philosophie des Unternehmens gegenüber seinen Partner richtig zu kommunizieren.",
        "solution": "Die lengoo Übersetzungs-Plattform ermöglicht Thermaflex den gesamten Übersetzungsbedarf konzernweit zentral zu steuern. Die einzelnen Niederlassungen können weiterhin Ihr Wissen über den lokalen Markt mit den Übersetzern teilen und so sicherstellen, dass spezielle Lokalisierungsanforderungen eingehalten werden. Die Prozesse ermöglichen sowohl einen einfachen Revisionsprozess durch die regionalen Marketingverantwortlichen sowie automatischen Import der Übersetzungen in das CMS. Ein Team aus 2-3 bilingualen Ingenieuren und Marketing-Experten pro Zielregion ist für die Mitarbeiter von Thermaflex rund um die Uhr verfügbar und stellt sicher, dass auch große Volumina in nur kurzer Zeit mehrsprachig zur Verfügung gestellt werden können. Unser zentrales Glossar- und Terminologie Management stellt sicher, dass Übersetzungen in allen Sprachen konsistent über alle Dokumente hinweg verwendet werden und dass alle Texte den stilistischen Vorgaben des Kunden entsprechen.",
        "valueAdded": "Die mehrsprachige Webseite des Kunden ist heute bereits in 8 Sprachen verfügbar und unsere Übersetzer arbeiten bereits an den noch ausstehenden Sprachversionen eng mit den jeweiligen Niederlassungen zusammen. Außerdem ist lengoo bei den bestehenden Sprachen bereits fest in die Marketingprozesse eingebunden und übernimmt die Übersetzung kontinuierliche Updates an der Webseite wie z.B. News-Artikel. Die Lokalisierung der Vielzahl an Datenblätter ist bereits in Planung. Mit lengoo hat Thermaflex einen effizienten, bedarfsorientierten Zugang zu globalem Sprachpotential von Fachexperten. Die Möglichkeit derartig große Volumina in viele Sprachen übersetzen schnell übersetzen zu können, stellt für das Unternehmen einen entscheidenden Vorsprung bei der Eroberung des weltweiten Marktes dar. Auf der Webseite unseres Kunden können Sie Teile des Ergebnisses begutachten: www.thermaflex.com",
        "position": 1,
        "urlFollowingCaseStudy": "gigahertzoptik",
        "urlPreviousCaseStudy": "evapp"
      },
      {
        "locale": "de",
        "company": "Gigahertz-Optik GmbH",
        "url": "gigahertzoptik",
        "image1": "gigahertzoptik.jpg",
        "image2": "gigahertzoptik_product.jpg",
        "shortDescription": "Mittelständischer Hersteller anspruchsvoller Lichtmesstechnik.",
        "industry": "Optik",
        "languages": "DE,EN, FR",
        "textType": "Handbücher, Webseite",
        "volume": "500000 Wörter",
        "longDescription": "Gigahertz-Optik ist ein mittelständischer Hersteller anspruchsvoller Lichtmesstechnik für Endanwender und OEM-Kunden. Das Unternehmen ist auf die Lichtmessung im ultravioletten, sichtbaren und nahem Infrarotbereich spezialisiert. Mit lengoo konnte Gigahertz-Optik aus dem Heimatmarkt Deutschland erfolgreich in englisch- und französischsprachige Märkte expandieren.",
        "challenge": "Bis 2012 hat Gigahertz-Optik seine Produkte und Lösungen fast ausschließlich im deutschsprachigen Raum vertrieben. Die geschäftlichen Möglichkeiten im Ausland waren für das Management jedoch schon eine lange Zeit offensichtlich. Um die Größe des Zielmarktes für das Unternehmen zu vervielfachen, war zunächst eine Expansion in die USA und nach Großbritannien geplant. Später sollte der Markteintritt in weitere europäische Länder wie Frankreich und Schweden folgen. Gigahertz-Optik stand nun vor der schwierigen Aufgabe extrem viele, hoch technische Textinhalte aus dem Bereich Elektro- und Lichtmesstechnik zu übersetzen. Bei den Texten handelte es sich vorwiegend um Datenblätter und Bedienungsanleitungen, die sich in unzähligen, über die Jahre entstandenen und verteilten Dateien und Formaten befanden (u.a. MS Word, Excel, Publisher). Eine interne Umsetzung hätte lange Vorlaufzeiten, gebundene Ressourcen und enorme finanzielle Aufwände bedeutet.",
        "solution": "Auf lengoos Übersetzer-Plattform konnte Gigahertz-Optik mit nur wenigen Klicks ein Team hochqualifizierter Übersetzer aus dem speziellen Fachbereich zusammenstellen, welches dynamisch je nach aktuellem Bedarf erweitert werden kann. Über den intuitiven Auftragserfassungsprozess können alle Mitarbeiter rund um die Uhr Preise für die Übersetzung neuer Dokumente automatische anfragen und diese zur Übersetzung freigeben. Im Kundenbereich verfolgen die Mitarbeiter von Gigahertz-Optik den Status einzelner Übersetzungen und finden eine Übersicht aller bereits übersetzten Dokumente. Bei den zahlreichen Ansprechpartnern aus verschiedenen Abteilungen, die Dokumente zur Übersetzung beauftragen, hilft dies enorm den Überblick zu behalten. Des Weiteren stehen die Ingenieure von Gigahertz-Optik über den Chat im engen Kontakt mit dem Übersetzer, um eine optimal Übersetzung zu gewährleisten. Bis heute vertraut Gigahertz-Optik auf lengoo al treuer Partner für die Verarbeitung der Übersetzungsdateien sowie natürlich die Übersetzungen, Korrektorate und Qualitätssicherung der Prozesse.",
        "valueAdded": "Die Sprachdienstleistung von lengoo ist heute unkompliziert und flexibel in die Kommunikation und Redaktion von Gigahertz-Optik integriert. Die Kunden des Unternehmens schätzen sehr, dass ihnen alle Informationen und Dokumente, die mit den Lichtmessgeräten und Komplementärprodukten ausgeliefert werden, nun in ihrer Muttersprache zur Verfügung stehen. Zusammen mit lengoo hat Gigahertz Optik eine umfangreiche, mehrsprachige Dokumentation geschaffen. Auf dieser Basis vertreibt das Unternehmen seine Produkte heute international, stellt diese auf Fachmessen in aller Welt aus und behauptet seine Stellung als einer der weltweit führenden Anbieter von Lichtmesstechnik.",
        "position": 2,
        "urlFollowingCaseStudy": "killerfish",
        "urlPreviousCaseStudy": "thermaflex"
      },
      {
        "locale": "de",
        "company": "Killerfish Germany GmbH",
        "url": "killerfish",
        "image1": "killerfish.jpg",
        "image2": "killerfish_product.jpg",
        "shortDescription": "Produzent einens Lifestyle Energy Drinks.",
        "industry": "Lebensmittel, Marketing",
        "languages": "EN (US), FR, ES, RU, AR",
        "textType": "Label, Webseite, Marketingunterlagen",
        "volume": "100000 Wörter",
        "longDescription": "„Killerfish Hot Energy – Zahm war gestern“! Killerfish Hot Energy ist der neue Energy Drink Made in Germany. Die Killerfish Germany GmbH wurde 2011 gegründet und vertreibt ihren Lifestyle Energy Drink weltweit mit einer frischen und starken Marke, die Herzblut, Leidenschaft und Selbstbewusstsein mit sozialer Verantwortung kombiniert.",
        "challenge": "Im Getränke- und Lebensmittelmarkt hing der frühe Erfolg des neuen Energy Drinks vor allem von der Fähigkeit ab, Killerfish als eine starke Marke zu etablieren. Sie sollte die Werte des Unternehmens transportieren und es von seinen Konkurrenten abheben. Killerfish setzt dafür u.a. auf aufmerksamkeitsstarkes Sponsoring im Wasser- und Funsport. Neben der Markenbildung war es für Killerfish entscheidend, potentielle Märkte effektiv und zeitnah zu erschließen, um möglichst schnell eine große Marktdurchdringung zu erreichen. Ein wichtiger Teil der Strategie des Managements war es, schon früh in fremdsprachige Märkte zu expandieren und damit das Angebot zu lokalisieren. Killerfish stand vor der Aufgabe, Ihre gesamte Kommunikation möglichst schnell in die Sprachen der vielversprechendsten Zielmärkte zu übersetzen.",
        "solution": "Killerfish fand in lengoo einen zuverlässigen Partner. Auf der Plattform findet Killerfish nicht nur einfach Übersetzer die gewünschten Zielsprachen (u.a. Englisch, Spanisch, Französisch, Russisch oder Arabisch) abdecken können, sondern auch Erfahrung mit der Übersetzung der benötigten Textsorten haben. Dabei handelt es sich neben zentralen Inhalten wie der Dosenbeschriftung und der Webseite vor allem um Unterlagen und Verträge für die Vertriebs- und Handelspartner sowie Korrespondenzen mit fremdsprachigen Geschäftspartnern. Enorm wichtig für eine erfolgreiche Lokalisierung von Killerfishs Inhalten ist es, die Übersetzungen perfekt auf den Markenkontext und die junge Zielgruppe abzustimmen. Die im Branchenvergleich verhältnismäßig jungen Übersetzer von lengoo, die oft auch direkt in den Ländern der Zielsprachen leben, sind mit den kulturellen und sozialen Feinheiten bestens vertraut. Die Übersetzungen sind daher inhaltlich und sprachlich optimal auf das Zielland abgestimmt.",
        "valueAdded": "Killerfish Hot Energy ist heute schon in den Getränkeregalen und auf Events in vielen Ländern und an angesagten Orten rund um die Welt erhältlich (z.B. auch in Venezuela). Die Dosen werden neben dem Onlineshop und dem Lebensmitteleinzelhandel (z.B. REWE, Globus) über Handelspartner oder Eventveranstalter auch international in Clubs und Tankstellen vertrieben und durch prominente Persönlichkeiten beworben. Die effektive Kommunikation in verschiedenen Sprachen bildet dabei eine stabile Grundlage für den Erfolg.",
        "position": 3,
        "urlFollowingCaseStudy": "serbot",
        "urlPreviousCaseStudy": "gigahertzoptik"
      },
      {
        "locale": "de",
        "company": "Serbot AG",
        "url": "serbot",
        "image1": "serbot.jpg",
        "image2": "serbot_product.jpg",
        "shortDescription": "Führender Anbieter von automatisierten Systemen zur Reinigung von Photovoltaik-Anlagen und Fassaden.",
        "industry": "Maschinenbau, Elektronik",
        "languages": "FR, IT, EN, AR",
        "textType": "Handbücher, Verträge",
        "volume": "200000 Wörter",
        "longDescription": "Das Schweizer Technologieunternehmen Serbot AG ist der führende Anbieter von automatisierten Systemen zur Reinigung von Photovoltaik-Anlagen und Fassaden. Es produziert intelligente und mobile Kletterroboter, die eine effiziente, umweltschonende Reinigung von anspruchsvollen Oberflächen ermöglichen. Konventionelle Befahranlagen zur Fassadenreinigung, die sich mit den automatisierten Systemen kombinieren lassen, ergänzen das Produktportfolio. Die hoch technischen und mehrfach ausgezeichneten Produkte, welche Serbot eigens entwickelt und fertigt, werden heute über ein großes Netz von Verkaufspartnern weltweit vertrieben. Die für den internationalen Erfolg notwendige Basis mehrsprachiger Inhalte liefert der Sprachdienstleister lengoo.",
        "challenge": "Schon seit ihrem Gründungsjahr 2009 präsentiert die Serbot AG ihre Produkte regelmäßig auf internationalen Fachmessen wie der Hannover Messe oder der Clean Middle East. Eine große Herausforderung im europäischen Markt stellt dabei das weit verbreitet Vorurteil dar, Solar-Paneelen würden kaum verschmutzen und der häufige Regen würde sie von selbst reinigen; in Wahrheit büßen Solaranlagen bis zu 20 % ihrer Leistung während eines einzigen Jahres ein. Diesen unhinterfragten Überzeugungen muss mit einem differenzierten Kommunikationskonzept entgegengetreten werden, das die Firma mit lengoo zusammen entwickelt. Neben dem europäischen Markt wird aufgrund der klimatischen Bedingungen ein großes Absatzpotential vor allem im Nahen Osten und in asiatischen Ländern gesehen. Das Ziel war also, die hoch-innovativen Produkte von Beginn an einem internationalen Publikum vorzustellen. Dazu nutze das Unternehmen den sprachlichen Standortvorteil der Schweiz mit den gängigen Landessprachen Deutsch, Französisch und Italienisch von Beginn an und setze die nötigen Übersetzungen intern um. Mit wachsendem Absatz in fremdsprachigen Märkten bewertete Serbot den steigenden internen Aufwand für die Übersetzung von Marketingmaterialien und technischen Inhalten allerdings bald als zu groß.",
        "solution": "Seit April 2013 vertraut Serbot bei Übersetzungen auf lengoo. Unter der Vielzahl an verschiedenen Texten befinden sich technische anspruchsvolle Dokumentationen, ausführliche Bedienungsanleitungen und Kurzanleitungen der Reinigungsroboter. Für die Produkte und den damit verbundenen Service hat lengoo außerdem den jeweilig am besten geeigneten Übersetzer für Wartungs-, Miet- und Kaufverträge sowie Pressemitteilungen, die interessante Neuigkeiten zu verschiedenen Anlässen an die jeweiligen Zielgruppen kommunizieren. Vor allem bei den technischen Inhalten profitieren lengoos Übersetzer von dem direkten Kontakt mit den Content Ownern, um in kurzen Briefings genau auf die Bedürfnisse der Ingenieure und technischen Redakteure hin arbeiten zu können. Die Layouts und dokumentspezifischen Inhalte erfüllen daher stets die Wünsche der Mitarbeiter. Auf diese Weise sind die Übersetzungen gut in Serbots Prozesse integriert und bedarfsorientiert abrufbar.",
        "valueAdded": "Heute ist die Serbot AG in vielen internationalen Märkten tätig und vertreibt seine Produkte neben dem Heimatmarkt Schweiz u.a. in Deutschland, Österreich, Holland, Frankreich, Italien, USA, Katar und Saudi Arabien. Darüber hinaus verfolgt das Unternehmen weiterhin erfolgreich seine Vermarktung auf internationalen Messen und hat die länderübergreifende Präsenz kontinuierlich z.B. durch Erfolgsgeschichten im Nahen Osten ausgebaut. Die von lengoo übersetzten Inhalte bieten zudem die Basis für medienwirksame Pilotprojekte und die Neukundengewinnung in lukrativen neuen Märkten.",
        "position": 4,
        "urlFollowingCaseStudy": "acbis",
        "urlPreviousCaseStudy": "killerfish"
      },
      {
        "locale": "de",
        "company": "ACBIS GmbH",
        "url": "acbis",
        "image1": "acbis.png",
        "image2": "acbis_product.png",
        "shortDescription": "Die ACBIS GmbH entwickelt und vertreibt Lösungen für die Angebotserstellung und die Auftragsbearbeitung in Unternehmen mit kundenindividuellen Produkten und Dienstleistungen.",
        "industry": "IT & Software",
        "languages": "EN (US)",
        "textType": "Handbücher",
        "volume": "150000 Wörter",
        "longDescription": "Die ACBIS GmbH entwickelt und vertreibt Lösungen für die Angebotserstellung und die Auftragsbearbeitung in Unternehmen mit kundenindividuellen Produkten und Dienstleistungen. Sie vereinfacht, beschleunigt und verbessert den Vertrieb und die Auftragsbearbeitung. Mehr als 130 Unternehmen des Maschinen- und Anlagenbaus, des Fahrzeugbaus, der Elektrotechnik und weiterer Branchen haben sich bereits für die Software der ACBIS GmbH entschieden.",
        "challenge": "Um es auch seinen ausländischen Kunden zu ermöglichen die Software effizient einzusetzen und den internationalen Kundenstamm zu erweitern, musste in kürzester Zeit die gesamte Software Dokumentation der Anwendungssoftware ins Englische übersetzt werden. Da es sich um sehr spezielle Funktionalitäten und Schnittstellenbeschreibungen handelt, die in den Benutzerhandbüchern beschrieben werden, war die ACBIS GmbH auf der Suche nach einer Lösung, die den direkten Kontakt zum Übersetzer ermöglicht um sprachliche Abstimmungen bzgl. der Terminologie vornehmen zu können. Das Auffinden fachlich erfahrener Übersetzer sowie die Koordination der zahlreichen Übersetzer, die für die Einhaltung der Deadline notwendig waren, hätte die internen Kapazitäten bei weitem überstiegen.",
        "solution": "Über die lengoo Übersetzungsplattform wurde der Kunde in kürzester Zeit mit einem Team aus erfahrenen IT-Übersetzern verbunden. Das Übersetzerteam bestand dabei aus Muttersprachlern, die alle bereits selbst bei der Entwicklung von Software beteiligt waren und somit mit den entsprechenden Fachbegriffen bestens vertraut waren. Über eine zentrale Terminologiedatenbank stellten die Übersetzer untereinander einen konsistenten Gebrauch von Fachbegriffen fest, welcher v.a. für die Übersetzung von Software relevanten Teilen, wie Funktionsnamen oder Variablen, entscheidend für den Endbenutzer der Anwendungssoftware sind. In ständiger Rücksprache mit den jeweiligen Mitarbeitern, die für einen bestimmten Bereich verantwortlich waren, wurde die Terminologie weiter ausgebaut und kontinuierlich überprüft.",
        "valueAdded": "Heute steht die gesamte Software Dokumentation den internationalen Kunden der ACBIS GmbH auf Englisch zur Verfügung. Eine Übersetzung in Eigenregie wäre nicht nur deutlich aufwendiger zu koordinieren gewesen, sondern hätte deutlich länger gedauert. Der unkomplizierte direkte Zugang zu den Übersetzern ermöglichte einen reibungslosen Ablauf ohne lange Wartezeiten für Rückmeldungen auf Fragen beider Seiten. Die im Laufe des Übersetzungsprozesses entstandene und von den entsprechenden Mitarbeitern überprüfte Terminologiedatenbank gilt als Basis für zukünftige Übersetzungsarbeiten.",
        "position": 5,
        "urlFollowingCaseStudy": "dienorm",
        "urlPreviousCaseStudy": "serbot"
      },
      {
        "locale": "de",
        "company": "DIE NORM - dabei sein ist alles!",
        "url": "dienorm",
        "image1": "dienorm.png",
        "image2": "dienorm_product.png",
        "shortDescription": "„DIE NORM“ ist eine neuartige Webdokumentation über den härtesten Ausleseprozess der Welt. Sie begleitet ausgewählte Spitzensportler vom Olympiastützpunkt Hamburg/Schleswig-Holstein auf ihrem Weg zu den Olympischen Spielen.",
        "industry": "Sport",
        "languages": "EN (US)",
        "textType": "Webseite, Videos",
        "volume": "2500 Wörter",
        "longDescription": "„DIE NORM“ ist eine neuartige Webdokumentation über den härtesten Ausleseprozess der Welt. Sie begleitet ausgewählte Spitzensportler vom Olympiastützpunkt Hamburg/Schleswig-Holstein auf ihrem Weg zu den Olympischen Spielen. DIE NORM will herausfinden wie Spitzenathleten wirklich sind. Wie sie ihr Leben organisieren, Rückschläge und Misserfolge verarbeiten und zeigen was sie vorantreibt. Dabei werden die Athleten selbst zum Teil des Filmprojekts und beteiligen sich aktiv mit Videotagebüchern und in den sozialen Netzwerken. Produziert wird „DIE NORM“ von Silvia Weihermüller und ihrer Hamburger Produktionsfirma CLOSE DISTANCE PRODUCTIONS, die 2014 mit der Kino-Dokumentation „Wechselzeiten – Auf dem Weg zum ersten Triathlon“ einen Überraschungserfolg in die deutschen Kinos gebracht hat. Der zugehörige Kinofilm DIE NORM wird vom Filmemacher Guido Weihermüller gedreht.",
        "challenge": "Mit den Olympischen Spielen 2016 vor der Tür sowie einem zunehmend medialen Interesse an ihrem Projekt, suchte die Produzentin Silvia Weihermueller nach einem Wegbegleiter im Bereich Übersetzungen, um den einzigartigen Inhalt einem weltweiten Publikum zugänglich zu machen und den Athleten eine noch größere Bühne zu geben. Im ersten Schritt ging es um die Übersetzung des gesamten Inhalts der Webdokumentation inkl. Athletenprofile, Interviews, Videotagebücher etc. Im Anschluss an die Olympischen Spiele muss außerdem der Kinofilm übersetzt werden. Die Herausforderung dabei lag darin die zum Teil sehr privaten Momente mit meist umgangssprachlichen Formulierungen sinngemäß und authentisch in eine andere Sprache zu übertragen und diese neuartige, lebendige und digitale Form des Erzählens aufrecht zu erhalten.",
        "solution": "Die NORM hat in lengoo einen zuverlässigen Partner für Übersetzungen gefunden, der die Koordination mehrerer Übersetzer mit wenigen Klicks ermöglicht. Je nach Bedarf können so auch mehrere Texte schnell übersetzt werden. Die Tatsache, dass lengoo ausschließlich mit Muttersprachlern der Zielsprache zusammenarbeitet eignete sich perfekte für die authentische Übersetzung von gesprochenem Text, wie z.B. in Untertiteln. Zudem wurde bei der Zuteilung der Übersetzer besonderer Wert daraufgelegt, dass die Übersetzer selbst Amateur Sportler sind und somit mit den Athleten “mitfühlen” können, um den Inhalt richtig zu übertragen. Durch die enge Zusammenarbeit mit dem Kunden über die Plattform konnte sichergestellt werden, dass alle Textstellen immer im richtigen Kontext übersetzt wurden. Unklare Stellen konnten auf der Plattform kurz diskutiert und direkt vom Kunden beantwortet werden.",
        "valueAdded": "Die komplette Webdokumentation ist nun auf Englisch verfügbar und die Vorbereitung der Deutschen Athleten kann von der ganzen Welt aus verfolgt werden. Alle Videos von den Athleten sind mit Englischen Untertitel versehen. Weltweit hat das Projekt so Aufsehen auf sich gezogen. Der Gedanke den Athleten eine größere Bühne für Ihre einzigartigen Leistungen zu geben und so die Olympischen Spiele wieder auf dasselbe Niveau wie Fußball zu heben stößt auf großes Interesse. Teile unserer Arbeit sind auf der Webseite unseres Kunden zu finden. Ein Besuch lohnt sich in jedem Fall: http://www.die-norm.de/en/",
        "position": 6,
        "urlFollowingCaseStudy": "evapp",
        "urlPreviousCaseStudy": "acbis"
      },
      {
        "locale": "de",
        "company": "Eve Beauty App | FCS Future Content Solutions GmbH",
        "url": "evapp",
        "image1": "evapp.jpg",
        "image2": "evapp_product.png",
        "shortDescription": "Die FCS Future Content Solutions GmbH ist ein junges Start-up aus Berlin, das seit Juli 2016 die iOS Beauty App Eve betreibt.",
        "industry": "Beauty & Lifestyle",
        "languages": "PT, FR, IT, AR, RU, ES, TR, JA, KO",
        "textType": "App-Oberfläche, Artikelbeschreibungen",
        "volume": "25000 Wörter",
        "longDescription": "Die FCS Future Content Solutions GmbH ist ein junges Start-up aus Berlin, das seit Juli 2016 die iOS Beauty App Eve betreibt. Zusammen mit Make-up-Artisten und Kosmetikern stellt das Startup seinen Nutzern über eine App neue Beauty-Trends und Produkte vor und zeigt in kurzen Videos & Foto-Schritt-für-Schritt-Anleitungen neue Schmink- & Frisur-Looks, die einfach von zu Hause nachgemacht werden können. Die Vision hinter Eve ist es jeder Frau zu ermöglichen sich schön zu fühlen. ",
        "challenge": "Während das Startup die englische Version noch intern übersetzt hat und mit der englischen Version zur \"Besten neuen App\" des Monats Februar von Apple gekürt wurde, war das das Startup auf der Suche nach einem professionellen Partner, um die Übersetzung in 10 weitere Sprachen so schnell wie möglich zu veröffentlichen. Auf Grund des Fachbereichs “Lifestyle & Beauty” ist es dem Kunden wichtig mit Übersetzern zusammenzuarbeiten, die selbst zur potentiellen Zielgruppe gehören, um den jungen, dynamischen Stil der Inhalte treffend zu transportieren. Da die unterschiedlichen Schönheitsprodukte zum Teil von den Herstellern mit verschiedenen Namen in unterschiedlichen Ländern vermarktet werden, ist es darüber hinaus besonders wichtig, dass die Übersetzer aktuell im jeweiligen Zielland leben und mit den lokalen Produkten vertraut sind.",
        "solution": "Über lengoo hat das Startup Zugriff auf eine große Auswahl an erfahrenen Muttersprachlern, aus denen sich das Team genau Ihre Wunschkandidaten auswählen können. Die im Branchenvergleich verhältnismäßig jungen Übersetzer von lengoo, ermöglichten es schnell ein virtuelles Team aus jungen, weiblichen Übersetzern, das bereits große Erfahrung in der Kosmetikbranche gesammelt haben, zusammenzustellen. Auf der lengoo Plattform kann das Startup jederzeit den Fortschritt der Übersetzung der einzelnen Sprachen verfolgen sowie Unklarheiten bzgl. der Übersetzung von Produktnamen direkt mit den Übersetzern über den Chat klären.",
        "valueAdded": "Innerhalb kürzester Zeit konnte das Startup seine App in 10 Sprachen im App Store zur Verfügung stellen und so früh wie möglich beginnen zu erforschen, welche Zielländer am interessantesten für eine Expansion sind. Die reibungslose Zusammenarbeit mit den Übersetzer auf einer zentralen Plattform ermöglicht es dem jungen Startup ohne großen Aufwand internationale Märkte zu erobern. lengoos virtuelles Übersetzerteam ist skalierbar und wird je nach Bedarf für den kontinuierlichen Übersetzungsbedarf mit nur wenigen Klicks um weitere Sprachen erweitert werden.",
        "position": 7,
        "urlFollowingCaseStudy": "thermaflex",
        "urlPreviousCaseStudy": "dienorm"
      }
    ]
  }
  const networkInterface = mockNetworkInterface({ request: { caseStudiesListQuery }, result: { data } });
  const client = new ApolloClient({ networkInterface });

  const withGraphQL = graphql(caseStudiesListQuery);

  // const wrapper = shallow(
  //   <ApolloProvider client={client}>
  //     <SideNav authed={true} />
  //   </ApolloProvider>
  // );
  // expect(wrapper.find('sideNavCaseStudy').exists()).toBe(true);

  class SideNav extends React.Component {
    componentWillReceiveProps(props) {
      expect(props.data.loading).to.be.false;
      expect(props.data.caseStudies).to.deep.equal(data.caseStudies);
      done();
    }
    render() {
      return null;
    }
  };

  const SideNavWithData = withGraphQL(SideNav);

  mount(<ApolloProvider client={client}><SideNavWithData /></ApolloProvider>);

  // it('should render a SideNav component correctly', () => {
  //
  //   const wrapper = shallow(
  //     <SideNav data={data} />,
  //   );
  //
  //   expect(wrapper).toMatchSnapshot();
  // });
  //
  // it('should be the correct query', () => {
  //   expect(bananaQuery).toMatchSnapshot();
  // });

});




// describe("SideNav is mounted", () => {
//   let props;
//   let mountedSideNav;
//   const sideNav = () => {
//     if (!mountedSideNav) {
//       mountedSideNav = mount(
//         <SideNav {...props} />
//       );
//     }
//     return mountedSideNav;
//   }
//
//   // beforeEach(() => {
//   //   props = {
//   //     menues: undefined,
//   //     order: undefined,
//   //     removeFromOrder: undefined,
//   //     placeOrder: undefined
//   //   };
//   //   mountedOrder = undefined
//   // });
//
//   beforeEach(() => {
//     props = {
//       menues: {
//         menu1: {
//           name: 'Pacific Halibut',
//           image: 'http://i.istockimg.com/file_thumbview_approve/36248396/5/stock-photo-36248396-blackened-cajun-sea-bass.jpg',
//           desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
//           price: 1724,
//           status: 'available'
//         },
//
//         menu2: {
//           name: 'Lobster',
//           image: 'http://i.istockimg.com/file_thumbview_approve/32135274/5/stock-photo-32135274-cooked-lobster.jpg',
//           desc: 'These tender, mouth-watering beauties are a fantastic hit at any dinner party.',
//           price: 3200,
//           status: 'available'
//         },
//
//         menu3: {
//           name: 'Sea Scallops',
//           image: 'http://i.istockimg.com/file_thumbview_approve/58624176/5/stock-photo-58624176-scallops-on-black-stone-plate.jpg',
//           desc: 'Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound',
//           price: 1684,
//           status: 'unavailable'
//         },
//
//         menu4: {
//           name: 'Mahi Mahi',
//           image: 'http://i.istockimg.com/file_thumbview_approve/12556651/5/stock-photo-12556651-mahimahi.jpg',
//           desc: 'Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ',
//           price: 1129,
//           status: 'available'
//         },
//
//         menu5: {
//           name: 'King Crab',
//           image: 'http://i.istockimg.com/file_thumbview_approve/18294110/5/stock-photo-18294110-king-crab-legs.jpg',
//           desc: 'Crack these open and enjoy them plain or with one of our cocktail sauces',
//           price: 4234,
//           status: 'available'
//         },
//
//         menu6: {
//           name: 'Atlantic Salmon',
//           image: 'http://i.istockimg.com/file_thumbview_approve/56241842/5/stock-photo-56241842-salmon-menu.jpg',
//           desc: 'This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!',
//           price: 1453,
//           status: 'available'
//         },
//
//         menu7: {
//           name: 'Oysters',
//           image: 'http://i.istockimg.com/file_thumbview_approve/58626682/5/stock-photo-58626682-fresh-oysters-on-a-black-stone-plate-top-view.jpg',
//           desc: 'A soft plump oyster with a sweet salty flavor and a clean finish.',
//           price: 2543,
//           status: 'available'
//         },
//
//         menu8: {
//           name: 'Mussels',
//           image: 'http://i.istockimg.com/file_thumbview_approve/40450406/5/stock-photo-40450406-steamed-mussels.jpg',
//           desc: 'The best mussels from the Pacific Northwest with a full-flavored and complex taste.',
//           price: 425,
//           status: 'available'
//         },
//
//         menu9: {
//           name: 'Jumbo Prawns',
//           image: 'http://i.istockimg.com/file_thumbview_approve/67121439/5/stock-photo-67121439-fresh-tiger-shrimp-on-ice-on-a-black-stone-table.jpg',
//           desc: 'With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.',
//           price: 2250,
//           status: 'available'
//         }
//       },
//       order: {
//         name: 'seunghun Lee',
//         status: 'ordered',
//         option: 'rare',
//         menu1: 3
//       },
//       removeFromOrder: jest.fn(),
//       placeOrder: jest.fn()
//     };
//     mountedSideNav = undefined
//   });
//
//   // All tests will go here
//   describe("the rendered div", () => {
//     it("contains everything else that gets rendered", () => {
//       const divs = sideNav().find("div");
//       // When using .find, enzyme arranges the nodes in order such
//       // that the outermost node is first in the list. So we can
//       // use .first() to get the outermost div.
//       const wrappingDiv = divs.first();
//
//       // Enzyme omits the outermost node when using the .children()
//       // method on lockScreen(). This is annoying, but we can use it
//       // to verify that wrappingDiv contains everything else this
//       // component renders.
//       expect(wrappingDiv.children()).toEqual(sideNav().children());
//     });
//   });
//
//   it("always renders two buttons properly", () => {
//     expect(sideNav().find('RaisedButton').length).toBe(2);
//   });
// // describe("rendered `Order display`", () => {
// //   it("does not receive any props", () => {
// //     const clockDisplay = mountedOrder().find(ClockDisplay);
// //     expect(Object.keys(clockDisplay.props()).length).toBe(0);
// //   });
// // });
//
//   describe("when `handleLanguageChange` is defined", () => {
//     beforeEach(() => {
//       props.handleLanguageChange = jest.fn();
//     });
//
//     it("sets the rendered `SlideToUnlock`'s `onSlide` prop to the same value as `onUnlocked`'", () => {
//       expect(order().props().placeOrder).toBe(props.placeOrder);
//     });
//   });
//
// });
