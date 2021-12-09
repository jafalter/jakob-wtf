INSERT INTO ResourceTypes (id, value, createdAt, updatedAt)
VALUES (1, 'Article', '2021-11-13 11:11:47', '2021-11-13 11:11:51');

INSERT INTO ResourceTypes (id, value, createdAt, updatedAt)
VALUES (2, 'Book', '2021-11-13 11:11:58', '2021-11-13 11:12:01');

INSERT INTO ResourceTypes (id, value, createdAt, updatedAt)
VALUES (3, 'Talk', '2021-11-13 11:12:15', '2021-11-13 11:12:17');

INSERT INTO ResourceTypes (id, value, createdAt, updatedAt)
VALUES (4, 'Documentary', '2021-12-08 16:21:20', '2021-12-08 16:21:21');

INSERT INTO Texts (id, createdAt, updatedAt)
VALUES (1, '2021-10-03 12:56:29', '2021-10-03 12:56:31');

INSERT INTO Texts (id, createdAt, updatedAt)
VALUES (2, '2021-10-03 12:56:35', '2021-10-03 12:56:37');

INSERT INTO Texts (id, createdAt, updatedAt)
VALUES (3, '2021-10-03 12:56:42', '2021-10-03 12:56:44');

INSERT INTO Texts (id, createdAt, updatedAt)
VALUES (4, '2021-10-16 11:52:33', '2021-10-16 11:52:36');

INSERT INTO Texts (id, createdAt, updatedAt)
VALUES (5, '2021-10-16 11:53:41', '2021-10-16 11:53:43');

INSERT INTO Texts (id, createdAt, updatedAt)
VALUES (6, '2021-10-16 11:57:47', '2021-10-16 11:57:49');

INSERT INTO Texts (id, createdAt, updatedAt)
VALUES (7, '2021-10-24 12:38:13', '2021-10-24 12:38:15');

INSERT INTO Texts (id, createdAt, updatedAt)
VALUES (8, '2021-10-24 12:38:21', '2021-10-24 12:38:22');

INSERT INTO Texts (id, createdAt, updatedAt)
VALUES (9, '2021-10-24 12:38:25', '2021-10-24 12:38:26');

INSERT INTO Languages (id, value, createdAt, updatedAt)
VALUES (1, 'EN', '2021-10-03 12:55:24', '2021-10-03 12:55:26');

INSERT INTO Languages (id, value, createdAt, updatedAt)
VALUES (2, 'DE', '2021-10-03 12:57:53', '2021-10-03 12:57:55');

INSERT INTO Categories (id, value, createdAt, updatedAt)
VALUES (1, 'Health & Nutrition', '2021-10-03 12:54:28', '2021-10-03 12:54:30');

INSERT INTO Categories (id, value, createdAt, updatedAt)
VALUES (2, 'Psychology', '2021-10-03 12:54:44', '2021-10-03 12:54:46');

INSERT INTO Categories (id, value, createdAt, updatedAt)
VALUES (3, 'Bitcoin & Economics', '2021-10-03 12:55:02', '2021-10-03 12:55:04');

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (1, 'The Weston Price Study of Traditional Diets', '2021-10-03 12:58:03', '2021-10-03 12:58:05', 1, 1);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (2, 'Die Weston Price Studie über traditionelle Ernährung', '2021-10-03 12:58:40', '2021-10-03 12:58:42', 1, 2);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (4,
        'Weston Price was a pioneer in nutrition research. His study on primitive diets, on which he worked for 20 years, was published in 1939 and is still highly relevant to today''s research on nutrition and physical health.',
        '2021-10-03 12:59:17', '2021-10-03 12:59:19', 2, 1);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (5, 'Weston Price war ein Pionier der Ernährungsforschung. Seine Studien, an der er 20 Jahre lang arbeitete, wurde 1939 veröffentlicht und sind auch heute noch von Bedeutung für die Erforschung des
 Zusammenhangs von Ernährung und körperlicher Gesundheit.', '2021-10-03 13:05:34', '2021-10-03 13:05:36', 2, 2);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (6, 'weston-price-traditional-diets', '2021-10-03 13:09:55', '2021-10-03 13:09:58', 3, 1);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (7, 'weston-price-traditional-diets', '2021-10-03 13:10:00', '2021-10-03 13:10:02', 3, 2);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (8, 'An Analogy Between Bitcoin and Chess', '2021-10-16 11:53:09', '2021-10-16 11:52:18', 4, 1);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (9, 'Eine Analogie zwischen Bitcoin und Schach', '2021-10-16 11:53:09', '2021-10-16 11:53:14', 4, 2);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (10,
        'Why can we be sure that Bitcoin''s protocol rules are not changes? By looking at the game chess as an analogy, we can answer this question. ',
        '2021-10-16 11:56:25', '2021-10-16 11:56:27', 5, 1);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (11,
        'Warum können wir sicher sein, dass die Regeln des Bitcoin-Protokolls nicht geändert werden? Wenn wir das Schachspiel als Analogie betrachten, können wir diese Frage beantworten. ',
        '2021-10-16 11:57:31', '2021-10-16 11:57:32', 5, 2);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (12, 'analogy-between-bitcoin-and-chess', '2021-10-16 11:58:18', '2021-10-16 11:58:20', 6, 1);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (13, 'analogy-between-bitcoin-and-chess', '2021-10-16 11:58:33', '2021-10-16 11:58:35', 6, 2);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (14, 'Article - Lyn Alden - Bitcoin’s Energy Usage Isn’t a Problem. Here’s Why.', '2021-10-24 12:38:38',
        '2021-10-24 12:38:40', 7, 1);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (15, 'Arikel - Lyn Alden - Der Energieverbrauch von Bitcoin ist kein Problem. Hier ist der Grund.',
        '2021-10-24 12:40:30', '2021-10-24 12:40:38', 7, 2);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (16, 'Article - Denise Minger - The China Study: Fact or Fallacy', '2021-10-24 12:41:59', '2021-10-24 12:42:02',
        8, 1);

INSERT INTO RegionalTexts (id, value, createdAt, updatedAt, textId, languageId)
VALUES (17, 'Artikel - Denise Minger - Die China-Studie: Tatsache oder Trugschluss', '2021-10-24 12:43:13',
        '2021-10-24 12:43:14', 8, 2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (1, 'https://www.lynalden.com/bitcoin-energy/',
        'https://open.spotify.com/episode/6dX8j22Mdg2Q7UgoNXMY6P?si=5970a0a6000b475b',
        'Bitcoin’s Energy Usage Isn’t a Problem. Here’s Why.', '2021-10-31 12:01:10', '2021-10-31 12:01:12', 3,
        'Lyn Alden', 1);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (2, 'https://www.uncerto.com/only-the-strong-survive',
        'https://open.spotify.com/episode/7u8mzgKk1nQcwpz9EjIiet?si=0b3d4b1a7d1144b4',
        'Only The Strong Survive - A Philosophical, Technical, and Economic Critiqueof Prospects in “Crypto” Beyond Bitcoin',
        '2021-10-31 12:05:58', '2021-10-31 12:05:59', 3, 'Allen Farrington & Big Al', 1);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (3, 'https://deniseminger.com/2010/07/07/the-china-study-fact-or-fallac/', null,
        'The Chin Study: Fact or fallacy?', '2021-10-31 12:06:41', '2021-10-31 12:06:42', 1, 'Denise Minger', 1);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (4,
        'https://rosemarycottageclinic.co.uk/blog/2017/07/28/how-can-bitter-foods-be-good-for-us-when-they-taste-so-bad-tackling-the-paradox/',
        null, 'How can bitter foods be good for us when they taste so bad?', '2021-11-09 14:12:18',
        '2021-11-09 14:12:20', 1, 'Afifah Hamilton', 1);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (5, 'https://open.spotify.com/episode/2uKx68x6BYIMmY7P0FZwlL?si=qGP9ZgIgR325RoG-agTE1w', null,
        'A Psychoanalytical Interpretation of The Lion King', '2022-11-01 00:00:00', '2021-12-08 16:04:41', 2,
        'Jordan B. Peterson', 3);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (6, 'https://www.youtube.com/watch?v=f-wWBGo6a2w&list=PL22J3VaeABQD_IZs7y60I3lUrrFTzkpat', null,
        'The Psychological Significance of the Biblical Stories: Genesis', '2021-12-08 16:09:08', '2021-12-08 16:09:09',
        2, 'Jordan B. Peterson', 3);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (7, 'https://open.spotify.com/episode/6iM3bT9Rfu3D4NbiVbxijx?si=EddM0DbGQbmpJEV_P6Hssw', null,
        'Is Bitcoin democratic? Debate with Alex Gladstein', '2021-12-08 16:13:21', '2021-12-08 16:13:26', 3,
        'The Bitcoin Standard Podcast', 3);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (8, 'https://open.spotify.com/episode/2OYm5fOyIzhqLfHMvEb6Wg?si=30d9568abc814649', null,
        'Bitcoin Difficulty Adjustment', '2021-12-08 16:15:42', '2021-12-08 16:15:48', 3,
        'The Bitcoin Standard Podcast', 3);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (9, 'https://www.youtube.com/watch?v=cNWLZDvCkOs', null, 'Bitcoin is Power - Power is Everything',
        '2021-12-08 16:19:39', '2021-12-08 16:19:40', 3, 'Speaking of Bitcoin Podcast', 3);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (10, 'https://www.arte.tv/de/videos/RC-021581/mysterium-satoshi/', null, 'Mysterium Satoshi
Bitcoin - Wie alles begann', '2021-12-08 16:21:45', '2021-12-08 16:21:46', 3, 'ARTE', 3);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (11, 'https://www.amazon.com/Nutrition-Physical-Degeneration-Weston-Price/dp/0916764206/ref=sr_1_1', null,
        'Nutrition and Physical Degeneration 8th Edition', '2021-12-08 16:28:14', '2021-12-08 16:28:16', 1,
        'Weston A. Price', 2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (12, 'https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861/ref=sr_1_1',
        'https://www.audible.com/pd/The-Bitcoin-Standard-Audiobook/B07D7ZRKLJ',
        'The Bitcoin Standard: The Decentralized Alternative to Central Banking', '2021-12-08 16:29:24',
        '2021-12-08 16:29:25', 3, 'Saifedean Ammous', 2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (13, 'https://archive.org/details/interpretationof1913freu',
        'https://www.audible.com/pd/The-Interpretation-of-Dreams-Audiobook/B004TC0U3C', 'The Interpretation of Dreams',
        '2021-12-08 16:34:58', '2021-12-08 16:34:59', 2, 'Sigmund Freud', 2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (14, 'https://archive.org/details/in.ernet.dli.2015.278046', null, 'Introductory Lectures On Psycho Analysis',
        '2021-12-08 16:37:21', '2021-12-08 16:37:24', 2, 'Sigmund Freud', 2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (15, 'https://archive.org/details/newintroductoryl00freu', null, 'New introductory lectures on psychoanalysis',
        '2021-12-08 16:38:16', '2021-12-08 16:38:17', 2, 'Sigmund Freud', 2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (16, 'https://www.amazon.com/Ego-Mechanisms-Defence-Anna-Freud/dp/1855750384/ref=sr_1_fkmr0_1', null,
        'The Ego and the Mechanisms of Defence', '2021-12-08 16:40:11', '2021-12-08 16:40:12', 2, 'Anna Freud', 2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (17, 'https://www.amazon.com/Trigger-Point-Therapy-Workbook-Self-Treatment/dp/1608824942/ref=sr_1_1', null,
        'Trigger Point Therapy Workbook', '2021-12-08 16:41:10', '2021-12-08 16:41:11', 1, 'Clair Davies, Amber Davies',
        2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (18, 'https://archive.org/details/HumanAction', 'https://mises.org/library/human-action-audiobook',
        'Human Action - A Treatise on Economics', '2021-12-08 16:43:02', '2021-12-08 16:43:03', 3, 'Ludwig von Mises',
        2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (19, 'https://nakamotoinstitute.org/static/docs/denationalisation.pdf', null,
        'Denationalisation of Money: The Argument Refined', '2021-12-08 16:44:44', '2021-12-08 16:44:45', 3,
        'Friedrich A. Hayek', 2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (20, 'https://www.amazon.com/Discovery-Unconscious-History-Evolution-Psychiatry/dp/0465016731/ref=sr_1_1', null,
        'The Discovery of the Unconscious: The History and Evolution of Dynamic Psychiatry', '2021-12-08 16:46:44',
        '2021-12-08 16:46:45', 2, 'Henri F. Ellenberger', 2);

INSERT INTO Resources (id, url, audio, title, createdAt, updatedAt, categoryId, author, typeId)
VALUES (21, 'https://www.amazon.com/The-Sovereign-Individual-audiobook/dp/B07TWNP9NB/ref=sr_1_1',
        'https://www.audible.com/pd/The-Sovereign-Individual-Audiobook/1797103385',
        'The Sovereign Individual: Mastering the Transition to the Information Age', '2021-12-08 19:08:54',
        '2021-12-08 19:08:55', 3, 'James Dale Davidson, William Rees-Mogg', 2);

INSERT INTO Articles (id, image, createdAt, updatedAt, categoryId, titleId, subtextId, keyId, author)
VALUES (1, 'WestonPrice.jpg', '2021-12-08 12:57:16', '2021-10-03 12:57:18', 1, 1, 2, 3, 'Jakob Abfalter');

INSERT INTO Articles (id, image, createdAt, updatedAt, categoryId, titleId, subtextId, keyId, author)
VALUES (2, 'BitcoinChess.jpg', '2020-08-24 11:59:05', '2021-10-16 11:59:12', 3, 4, 5, 6, 'Jakob Abfalter');