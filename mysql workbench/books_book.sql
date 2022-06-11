-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: books
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `SKU` varchar(13) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `category` varchar(45) NOT NULL,
  `author` varchar(100) DEFAULT NULL,
  `headDescription` varchar(1000) DEFAULT NULL,
  `description` varchar(3000) DEFAULT NULL,
  `oriPrice` double DEFAULT NULL,
  `sellPrice` double DEFAULT NULL,
  PRIMARY KEY (`SKU`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES ('8934986054578','Black Sunday','Crime, Thriller','Thomas Harris',NULL,'The gripping race-against-time debut thriller from the internationally bestselling author of The Silence of the Lambs. Vietnam veteran Michael Lander wants the country that made him suffer to suffer in return. Al-Fatah operative Dahlia Iyad wants to help him turn his bold plan into devastating reality. David Kabakov, Mossad\'s most dedicated soldier, is determined to uncover the plot before it\'s too late. All he and the FBI know is that it will be apocalyptic. They don\'t know about the 1,200 pounds of explosives on their way to the states. The largest, deadliest bomb on American soil. That it will detonate in front of millions at the biggest sporting event of the season. The day of horror is nearly here... Black Sunday.',9,8.3),('9780099528128','The Godfather','Science Fiction, Fantasy, Horror','Mario Puzo',NULL,'A modern masterpiece,The Godfather is a searing portrayal of the 1940s criminal underworld. It is also the intimate story of the Corleone family, at once drawn together and ripped apart by its unique position at the core of the American Mafia. Still shocking forty years after it was first published, this compelling tale of blackmail, murder and family values is a true classic.',9,7.5),('9780099590088','Sapiens : A Brief History of Humankind','History, Archaeology','Yuval Noah Harari',NULL,'This is The Sunday Times Bestseller. Planet Earth is 4.5 billion years old. In just a fraction of that time, one species among countless others has conquered it. Us. We are the most advanced and most destructive animals ever to have lived. What makes us brilliant? What makes us deadly? What makes us Sapiens? In this bold and provocative book, Yuval Noah Harari explores who we are, how we got here and where we\'re going. Sapiens is a thrilling account of humankind\'s extraordinary history - from the Stone Age to the Silicon Age - and our journey from insignificant apes to rulers of the world. \"It tackles the biggest questions of history and of the modern world, and it is written in unforgettably vivid language. You will love it!\" (Jared Diamond, author of Guns, Germs and Steel).',20,10.2),('9780134400785','University Success Reading, Transition Level, With MyEnglishLab','Dictionary, Languages','Lawrence Zwier, Maggie Vosters',NULL,'University Success Reading is designed for English language learners preparing for mainstream academic environments. A flexible three-part approach includes intensive and systematic skill development tied to learning outcomes along with authentic essays written by top professors from Stanford University. The Reading strand provides real-life learning experiences that prepare students to become fluent, automatic, and competent readers who can achieve academic autonomy. Highlights - Each part is a self-contained module allowing teachers to focus on the highest-value skills and content. Topics are aligned around science, technology, engineering, arts, and mathematics (STEAM) content. -- Parts 1 and 2 include challenging readings that allow students to engage with the content as they build essential reading and critical thinking skills. -- Part 3 provides a truly authentic experience with an extended essay that enables students to apply and expand the skills acquired in Parts 1 and 2. - Additional online readings, skill and vocabulary practices, collaboration activities, and assessments. - Strategies for academic success and soft skills delivered via online videos. - NEW! You can now create unique custom University Success content packs with Pearson Collections',14,12.8),('9780194505321','Oxford Picture Dictionary Third Edition: English - Vietnamese Edition','Dictionary, Languages','Oxford',NULL,'Illustrations present over 4,000 English words and phrases within meaningful, real-life contexts 11 new and expanded topics including Job Search, Career Planning, and Digital Literacy prepare students to meet the requirements of their daily lives Updated activities prepare students for work, academic study, and citizenship Oxford 3000™ vocabulary ensures students learn the most useful and important words',21,19),('9780241297940','Facebook: The Inside Story','Business, Finance, Management','	Steven Levy','\'Levy portrays a tech company where no one is taking responsibility for what it has unleashed\' Financial Times-\'This fascinating book reveals the imperial ambitions of Facebook\'s founder\' James Marriott, Sunday Times-\'The inside story of how Facebook went from idealism to scandal\' Laurence Dodds, Telegraph','Today, Facebook is nearly unrecognizable from the simple website Zuckerberg\'s first built from his dorm room in his Sophomore year. It has grown into a tech giant, the largest social media platform and one of the biggest companies in the world, with a valuation of more than $576 billion and almost 3 billion users. There is no denying the power and omnipresence of Facebook in daily life. And in light of recent controversies surrounding election-influencing fake news accounts, the handling of its users\' personal data and growing discontent with the actions of its founder and CEO, never has the company been more central to the national conversation. Based on years of exclusive reporting and interviews with Facebook\'s key executives and employees, including Mark Zuckerberg and Sheryl Sandberg, Steven Levy\'s sweeping narrative digs deep into the whole story of the company that has changed the world and reaped the consequences',15,11.5),('9780241356289','How Technology Works: The Facts Visually Explained','Technology, Engineering','DK','','Have you ever asked yourself how the inventions, gadgets, and devices that surround us actually work? Discover the hidden workings of everyday technology with this graphic guide. How Technology Works demystifies the machinery that keeps the modern world going, from simple objects such as zip fasteners and can openers to the latest, most sophisticated devices of the information age, including smart watches, personal digital assistants, and driverless cars. It includes inventions that have changed the course of history, like the internal combustion engine, as well as technologies that might hold the key to our future survival, including solar cells and new kinds of farming to feed a growing population.',18,16),('9780307387202','City Of The Sun','Crime, Thriller','David Levien',NULL,'Private detective Frank Behr has been perfectly content living a solitary life, working on a few simple cases, and attempting to move on from his painful past. But when Paul and Carol Gabriel ask him to help them find their missing son, he can hardly refuse. Going against everything he fears—Behr\'s been around too long to hope for a happy ending—he enters into an uneasy partnership with Paul on a quest for the truth that will become both dangerous and haunting. Richly textured and crackling with suspense on every page, City of the Sun masterfully takes readers on an investigation like no other.www.davidlevien.com',6,5),('9780399181337','Window On The Bay','Romance','Debbie Macomber','NEW YORK TIMES BESTSELLER - When a single mom becomes an empty nester, she spreads her wings to rediscover herself--and her passions--in this heartwarming novel from #1 New York Times bestselling author Debbie Macomber.','Jenna Boltz\'s life is at a crossroads. After a messy divorce from her surgeon husband nearly twenty years ago, she raised her two children on her own, juggling motherhood with her beloved job as a Seattle intensive-care nurse. Now that Paul and Allie have gone to college and moved out, Jenna can\'t help but wonder what her future holds. Her best friend, Maureen, is excited for Jenna\'s newfound independence. Now is the perfect time to finally book the trip to Paris they\'ve been dreaming of since their college days. But when it comes to life\'s other great adventure--dating--Jenna still isn\'t sure she\'s ready to let love in . . . until an unexpected encounter begins to change her mind. When Jenna\'s elderly mother breaks her hip, Dr. Rowan Lancaster saves the day. Despite his silent, stoic exterior, Rowan is immediately smitten with Jenna. And even though Jenna is hesitant about becoming involved with another surgeon, she has to admit that she\'s more than a little intrigued. But when Jenna\'s children approach her with shocking news, she realizes that she needs to have faith in love and embrace the unexpected--before the life she has always dreamed of passes her by.',20,17),('9780552173742','The One Device: The Secret History of the iPhone','Technology, Engineering','Brian Merchant',NULL,'Discover the true meaning of the holidays as Santa Claus retells the story of the first Christmas in this sweet picture book from Hisako Aoki and Ivan Gantschev. When Santa Claus tells the forest animals that he is not looking forward to delivering all those heavy packages, they are worried that there won\'t be a Christmas anymore. To help everyone understand that Christmas would still come even if he didn\'t, Santa tells the story of the first Christmas, and they all learn a good lesson about the meaning of this special holiday.',8,7.5),('9780593328958','Billion Dollar Burger: Inside Big Tech\'s Race For The Future Of Food','Technology, Engineering','Chase Purdy',NULL,'Drawing from exclusive and unprecedented access to the main players, from polarizing activist-turned-tech CEO Josh Tetrick to lobbyists and regulators on both sides of the issue, Billion Dollar Burger follows the people fighting to upend our food system as they butt up against the entrenched interests fighting viciously to stop them. The stakes are monumentally high: cell-cultured meat is the best hope for sustainable food production, a key to fighting climate change, a gold mine for the companies that make it happen, and an existential threat for the farmers and meatpackers that make our meat today. Are we ready?',12,9.5),('9781250265357','The Mutant Project: Inside The Global Race To Genetically Modify Humans','Technology, Engineering','Eben Kirksey',NULL,'An anthropologist visits the frontiers of genetics, medicine, and technology to ask: Whose values are guiding gene editing experiments? And what does this new era of scientific inquiry mean for the future of the human species?-That rare kind of scholarship that is also a page-turner.',20,18.6),('9781405333078','How to Photograph Absolutely Everything: Successful Pictures from Your Digital Camera','Art, Photography','Tom Ang',NULL,'Whatever you want to photograph, discover how to get it right every time with the expert photographer and bestselling author Tom Ang. From still life to children\'s parties, make sure you\'re picture perfect with Tom Ang\'s guide to taking photographs, now in paperback. You can follow straightforward instructions to discover what equipment you\'ll need, the best approach for each subject and how to compose, light, frame and take great shots. The checklists give instant advice on getting results, while \'tricks of the trade\' show you how to turn a good picture into a great one. Plus pick up valuable tips on everyday photography.',18.8,17),('9781405932660','Some Kind of Wonderful','Romance','Giovanna Fletcher','Happiness can be found where you least expect it . . .________When the love of your life says you\'re not The One, what next?','After celebrating a decade together, everyone thinks Lizzy and Ian are about to get engaged. Instead, a romantic escape to Dubai leaves Lizzy with no ring, no fiancé and no future. Lizzy is heartbroken - but through the tears, she sees an opportunity. This is her moment to discover what she\'s been missing while playing Ian\'s \'better half\'. But how much has Ian changed her, and who is she without him? Lizzy sets out to rediscover the girl she was before - and, in the meantime, have a little fun . . .________',8,6.5),('9781422130032','Capitalism at Risk','Business, Finance, Management','	Joseph L. Bower,Herman B. Leonard,Lynn S. Paine',NULL,'The spread of capitalism worldwide has made people wealthier than ever before. But capitalism’s future is far from assured. The global financial meltdown of 2008 nearly produced a great depression. Economies in Europe are still teetering. Income inequality, resource depletion, mass migrations from poor to rich countries, religious fundamentalism—these are just a few of the threats to continuing prosperity. How can capitalism be sustained? And who should spearhead the effort? Critics turn to government. In Capitalism at Risk, Harvard Business School professors Joseph Bower, Herman Leonard, and Lynn Paine argue that while governments must play a role, businesses should take the lead. For enterprising companies—whether large multinationals, established regional players, or small start-ups—the current threats to market capitalism present important opportunities. Capitalism at Risk draws on discussions with business leaders around the world to identify ten potential disruptors of the global market system. Presenting examples of companies already making a difference, the authors explain how business must serve both as innovator and activist—developing corporate strategies that effect change at the community, national, and international levels. Filled with rich insights, Capitalism at Risk presents a compelling and constructive vision for the future of market capitalism.',28,23.8),('9781422191538','The Risk-Driven Business Model','Business, Finance, Management','	Karan Girotra,Serguei Netessine','Risk has been defined as the potential for losing something of value. In business, that value could be your original investment or your expected future returns.','The Risk-Driven Business Model will help you manage risk better by showing how the key choices you make in designing your business models either increase or reduce two characteristic types of risk—information risk, when you make decisions without enough information, and incentive-alignment risk, when decision makers’ incentives are at odds with the broader goals of the company. Leaders who understand how the structure of their business model affects risk have the power to create wealth, revolutionize industries, and shape a better world. INSEAD’s Karan Girotra and Serguei Netessine, noted operations and innovation professors who have consulted with dozens of companies, walk you through a business model audit to determine what key decisions get made in a business, when they get made, who makes them, and why we make the decisions we do. By changing your company’s key decisions within this framework, you can fundamentally alter the risks that will impact your business. This book is for entrepreneurs and executives in companies involved in dynamic industries where the locus of risk is shifting, and includes lessons from Zipcar, Blockbuster, Apple, Benetton, Kickstarter, Walmart, and dozens of other global companies. The Risk-Driven Business Model demystifies business model risk, with clear directives aimed at improving decision making and driving your business forward.',24,22.5),('9781449401139','Dear Mom: Thank You for Everything','Art, Photography','Bradley Trevor Greive',NULL,'Dear Mom, \"Thank you for letting a chubby-cheeked two-year-old run wild among your most precious possessions. . . . Thank you for being my full-time, on-call, personal chauffeur from day one.\" As the world\'s best-selling author of personal sentiment titles--with more than 20 million books sold worldwide--Bradley Trevor Greive strikes at the heart of the mother-child relationship inside Dear Mom. Now this ode to mom-dom receives an update, featuring special hand-colored enhancements to the book\'s captivating black-and-white photographs, author-illustrated end papers, and a gilt-highlighted cover. Greive\'s signature mix of touching animal photographs paired with his gentle humor and heartfelt words of thanks lets Mom know just how much she\'s loved. Dear Mom serves as a poignant and humorous tribute to mothers of all ages by perfectly capturing those prevalent emotions that moms inspire, namely, love, affection, and sincere gratitude. As Greive concludes, \"Frankly, I\'d be lost without you, Mom, and I only wish I had more than one lifetime to repay the incredible debt I owe you.\"',6.8,6.2),('9781473637467','Factfulness: Ten Reasons We\'re Wrong About The World - And Why Things Are Better Than You Think','Society, Social Sciences','Hans Rosling,Anna Rosling Ronnlund,Ola Rosling','INSTANT NEW YORK TIMES BESTSELLER','When asked simple questions about global trends―what percentage of the world’s population live in poverty; why the world’s population is increasing; how many girls finish school―we systematically get the answers wrong. So wrong that a chimpanzee choosing answers at random will consistently outguess teachers, journalists, Nobel laureates, and investment bankers. In Factfulness, Professor of International Health and global TED phenomenon Hans Rosling, together with his two long-time collaborators, Anna and Ola, offers a radical new explanation of why this happens. They reveal the ten instincts that distort our perspective―from our tendency to divide the world into two camps (usually some version of us and them) to the way we consume media (where fear rules) to how we perceive progress (believing that most things are getting worse). Our problem is that we don’t know what we don’t know, and even our guesses are informed by unconscious and predictable biases. It turns out that the world, for all its imperfections, is in a much better state than we might think.That doesn’t mean there aren’t real concerns. But when we worry about everything all the time instead of embracing a worldview based on facts, we can lose our ability to focus on the things that threaten us most. Inspiring and revelatory, filled with lively anecdotes and moving stories, Factfulness is an urgent and essential book that will change the way you see the world and empower you to respond to the crises and opportunities of the future.',16,13),('9781501139161','Leonardo da Vinci','Art, Photography','Walter Isaacson','The #1 New York Times bestseller from Walter Isaacson brings Leonardo da Vinci to life in this exciting new biography that is \"a study in creativity: how to define it, how to achieve it...Most important, it is a powerful story of an exhilarating mind and life\" (The New Yorker).','Based on thousands of pages from Leonardo da Vinci\'s astonishing notebooks and new discoveries about his life and work, Walter Isaacson \"deftly reveals an intimate Leonardo\" (San Francisco Chronicle) in a narrative that connects his art to his science. He shows how Leonardo\'s genius was based on skills we can improve in ourselves, such as passionate curiosity, careful observation, and an imagination so playful that it flirted with fantasy. He produced the two most famous paintings in history, The Last Supper and the Mona Lisa. With a passion that sometimes became obsessive, he pursued innovative studies of anatomy, fossils, birds, the heart, flying machines, botany, geology, and weaponry. He explored the math of optics, showed how light rays strike the cornea, and produced illusions of changing perspectives in The Last Supper. His ability to stand at the crossroads of the humanities and the sciences, made iconic by his drawing of Vitruvian Man, made him history\'s most creative genius. In the \"luminous\" (Daily Beast) Leonardo da Vinci, Isaacson describes how Leonardo\'s delight at combining diverse passions remains the ultimate recipe for creativity. So, too, does his ease at being a bit of a misfit: illegitimate, gay, vegetarian, left-handed, easily distracted, and at times heretical. His life should remind us of the importance to be imaginative and, like talented rebels in any era, to think different. Here, da Vinci \"comes to life in all his remarkable brilliance and oddity in Walter Isaacson\'s ambitious new biography...a vigorous, insightful portrait\" (The Washington Post).',16,13),('9781524797676','Something In The Water: A Novel','Crime, Thriller','Catherine Steadman','#1 NEW YORK TIMES BESTSELLER ; A shocking discovery on a honeymoon in paradise changes the lives of a picture-perfect couple in this taut psychological thriller debut—for readers of Ruth Ware, Paula Hawkins, and Shari Lapena.','Wonder no longer. Catherine Steadman’s enthralling voice shines throughout this spellbinding debut novel. With piercing insight and fascinating twists, Something in the Water challenges the reader to confront the hopes we desperately cling to, the ideals we’re tempted to abandon, and the perfect lies we tell ourselves.',12,10.5),('9781529110944','When Breath Becomes Air','Biography','Paul Kalanithi','THE NEW YORK TIMES NUMBER ONE BESTSELLER-THE SUNDAY TIMES NUMBER ONE BESTSELLER-SHORTLISTED FOR THE WELLCOME BOOK PRIZE 2017','At the age of thirty-six, on the verge of completing a decade’s training as a neurosurgeon, Paul Kalanithi was diagnosed with inoperable lung cancer. One day he was a doctor treating the dying, the next he was a patient struggling to live. When Breath Becomes Air chronicles Kalanithi’s transformation from a medical student asking what makes a virtuous and meaningful life into a neurosurgeon working in the core of human identity – the brain – and finally into a patient and a new father. What makes life worth living in the face of death? What do you do when when life is catastrophically interrupted? What does it mean to have a child as your own life fades away? Paul Kalanithi died while working on this profoundly moving book, yet his words live on as a guide to us all. When Breath Becomes Air is a life-affirming reflection on facing our mortality and on the relationship between doctor and patient, from a gifted writer who became both.',8,5.2),('9781608873142','Game Of Thrones: A Pop-Up Guide To Westeros','Art, Photography','Matthew Reinhart',NULL,'Inspired by the Emmy(R) Award-winning credits sequence that opens each episode of the hit HBO(R) series, Game of Thrones: A Pop-Up Guide to Westeros is guaranteed to thrill the show\'s legions of fans. Featuring stunning pop-up recreations of several key locations from the series, including the formidable castle of Winterfell, the lavish capital city King\'s Landing, and the Wall\'s stark majesty, this book--designed by renowned paper engineer Matthew Reinhart--takes you into the world of the series like never before. Game of Thrones: A Pop-Up Guide to Westeros features a total of five stunning spreads, which fold out to create a remarkable pop-up map of Westeros that is perfect for displaying. The book also contains numerous mini-pops that bring to life iconic elements of the show, such as direwolves, White Walkers, giants, and dragons. All the pops are accompanied by insightful text that relays the rich history of the Seven Kingdoms and beyond, forming a dynamic reference guide to the world of Game of Thrones. Visually spectacular and enthrallingly interactive, Game of Thrones: A Pop-Up Guide to Westeros sets a new standard for pop-up books and perfectly captures the epic scope and imagination of the series.',50,44.6),('9781633693425','The Mind of the Leader','Business, Finance, Management','Rasmus Hougaard,Jacqueline Carter','Join the global movement that\'s making corporations more people-centric to achieve great results.','The world is facing a global leadership crisis. Seventy-seven percent of leaders think they do a good job of engaging their people, yet 88 percent of employees say their leaders don\'t engage enough. There is also a high level of suffering in the workplace: 35 percent of employees would forgo a pay raise to see their leaders fired. This is an enormous waste of human talent--despite the fact that $46 billion is spent each year on leadership development. Based on extensive research, including assessments of more than 35,000 leaders and interviews with 250 C-level executives, The Mind of the Leader concludes that organizations and leaders aren\'t meeting employees\' basic human needs of finding meaning, purpose, connection, and genuine happiness in their work. But more than a description of the problem, The Mind of the Leader offers a radical, yet practical, solution. To solve the leadership crisis, organizations need to put people at the center of their strategy. They need to develop managers and executives who lead with three core mental qualities: mindfulness, selflessness, and compassion. Using real-world inspirational examples from Marriott, Accenture, McKinsey & Company, LinkedIn, and many more, The Mind of the Leader shows how this new kind of leadership turns conventional leadership thinking upside down. It represents a radical redefinition of what it takes to be an effective leader--and a practical, hard-nosed solution to every organization\'s engagement and execution problems.',24,19.3),('9781641711272','Rick Steves Pocket Paris (Fourth Edition)','Travel, Holiday Guides','Rick Steves, Gene Openshaw','Make the most of every day and every dollar with Rick Steves! This colorful, compact guidebook is perfect for spending a week or less in Paris','City walks and tours: Six detailed tours and walks showcase Paris\'s essential sights, including the Louvre, the Orsay Museum, Notre-Dame, a stroll along the Left Bank, and moreRick\'s strategic advice on what experiences are worth your time and money What to eat and where to stay: Sip café au lait at a sidewalk café, chat with locals over a picnic of camembert and rosé, and admire the lights of the Eiffel Tower from your balcony Day-by-day itineraries to help you prioritize your timeA detailed, detachable fold-out map,plus museum and city maps throughoutFull-color, portable, and slim for exploring on-the-goTrip-planning practicalities like when to go, how to get around on the Métro, basic French phrases, and more Lightweight yet packed with valuable insight into Paris\'s history and culture, Rick Steves Pocket Paris truly is a tour guide in your pocket.',13,10),('9781784708283','21 Lessons for the 21st Century','Society, Social Sciences','Yuval Noah Harari','**THE NUMBER ONE BESTSELLER**-The future is here. Learn to live in it.-In twenty-one bite-sized lessons, Yuval Noah Harari explores what it means to be human in an age of bewilderment.','How can we protect ourselves from nuclear war, ecological cataclysms and technological disruptions? What can we do about the epidemic of fake news or the threat of terrorism? What should we teach our children? Yuval Noah Harari takes us on a thrilling journey through today’s most urgent issues. The golden thread running through his exhilarating new book is the challenge of maintaining our collective and individual focus in the face of constant and disorienting change. Are we still capable of understanding the world we have created?',10,9.2),('9781982124137','Uncompromising Honor: 19 (Honor Harrington)','Science Fiction, Fantasy, Horror','David Weber','TOP TEN NEW YORK TIMES BESTSELLER! Book #19 in the best-selling Honor Harrington series from New York Times, USA Today, Wall Street Journal and international best-selling phenomenon David Weber.','The Solarian League—for hundreds of years they have borne the banner of human civilization. But the bureaucratic Mandarins who rule today’s League are corrupt and looking for scapegoats. They’ve decided the upstart Star Kingdom of Manticore must be annihilated. Honor Harrington has worn the Star Kingdom’s uniform for half a century. So far, hers has been a voice of caution. But now the Mandarins have committed atrocities such as the galaxy has not known in a thousand years. They have finally killed too many of the people Honor Harrington loves. Now Honor Harrington is coming for the Solarian League. And Hell is riding in her wake. ',7,6),('9781984801821','WHEN BREATH BECOMES AIR (EXP)','Society, Social Sciences','Paul Kalanithi','#1 NEW YORK TIMES BESTSELLER • PULITZER PRIZE FINALIST • This exquisite memoir by an idealistic young neurosurgeon asks What makes a life worth living? and makes a profound graduation gift—especially for aspiring doctors and nurses.','Finalist for the PEN Center USA Literary Award in Creative Nonfiction and the Books for a Better Life Award in Inspirational Memoir. At the age of thirty-six, on the verge of completing a decade’s worth of training as a neurosurgeon, Paul Kalanithi was diagnosed with stage IV lung cancer. One day he was a doctor treating the dying, and the next he was a patient struggling to live. And just like that, the future he and his wife had imagined evaporated. When Breath Becomes Air chronicles Kalanithi’s transformation from a naïve medical student “possessed,” as he wrote, “by the question of what, given that all organisms die, makes a virtuous and meaningful life” into a neurosurgeon at Stanford working in the brain, the most critical place for human identity, and finally into a patient and new father confronting his own mortality. What makes life worth living in the face of death? What do you do when the future, no longer a ladder toward your goals in life, flattens out into a perpetual present? What does it mean to have a child, to nurture a new life as another fades away? These are some of the questions Kalanithi wrestles with in this profoundly moving, exquisitely observed memoir. Paul Kalanithi died in March 2015, while working on this book, yet his words live on as a guide and a gift to us all. “I began to realize that coming face to face with my own mortality, in a sense, had changed nothing and everything,” he wrote. “Seven words from Samuel Beckett began to repeat in my head: ‘I can’t go on. I’ll go on.’” When Breath Becomes Air is an unforgettable, life-affirming reflection on the challenge of facing death and on the relationship between doctor and patient, from a brilliant writer who became both. Praise for When Breath Becomes Air',9,6.5),('9781984854858','Educated: A Memoir','Biography','Westover Tara','#1 NEW YORK TIMES BESTSELLER • An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University','Book Club Pick for Now Read This, from PBS NewsHour and The New York Times • Longlisted for the Carnegie Medal for Excellence in Nonfiction. \"A coming-of-age memoir reminiscent of The Glass Castle.\"-O: The Oprah Magazine',10,7.5),('9788957703786','I SPACE Vol. 5: Health Wellness','Art, Photography','Archiworld',NULL,'This book contains the well-known projects implemented in the past year. the health and medical institutions. We use the form of pictures. sketches and hand-painted so that readers can deeply understand and appreciate these characteristics. The book is not only suitable for the students for professional practitioners derive inspiration from the book. and we can comprehend the contemporary interior design trends.',45,34.5);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-09 14:56:48