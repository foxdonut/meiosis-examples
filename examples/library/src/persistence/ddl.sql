CREATE TABLE BOOK (
  ID INTEGER PRIMARY KEY,
  TITLE TEXT NOT NULL,
  GENRE TEXT,
  ISBN TEXT,
  DESCRIPTION TEXT
);

CREATE TABLE AUTHOR (
  ID INTEGER PRIMARY KEY,
  LAST_NAME TEXT,
  FIRST_NAME TEXT
);

CREATE TABLE BOOK_AUTHOR (
  ID INTEGER PRIMARY KEY,
  BOOK_ID INTEGER NOT NULL,
  AUTHOR_ID INTEGER NOT NULL
);

-- sample data credit http://www.travelman.co.uk/list_of_titles.htm and https://msdn.microsoft.com/en-us/library/ms762271(v=vs.85).aspx

INSERT INTO AUTHOR (FIRST_NAME, LAST_NAME) VALUES
  ('Douglas', 'Crockford'),
  ('Fred', 'Daoud'),
  ('Jack', 'Moffitt'),
  ('Saki', 'Saki'),
  ('Muriel', 'Spark'),
  ('Robert Louis', 'Stevenson'),
  ('Bram', 'Stoker'),
  ('William', 'Trevor'),
  ('Jeffrey', 'Archer'),
  ('Ngaio', 'Marsh'),
  ('Guy', 'de Maupassant'),
  ('Ivo', 'Mosley'),
  ('O', 'Henry'),
  ('Dorothy', 'Parker'),
  ('Edgar Allan', 'Poe'),
  ('John', 'Polidori'),
  ('Sir Arthur', 'Conan Doyle'),
  ('Charles', 'Dickens'),
  ('Teresa', 'Waugh'),
  ('Daniel', 'Etessami'),
  ('F. Scott', 'Fitzgerald'),
  ('Ian', 'Fleming'),
  ('C. S.', 'Forester'),
  ('Edna', 'O''Brien'),
  ('Ruth', 'Rendell'),
  ('Evelyn', 'Waugh'),
  ('H.G.', 'Wells'),
  ('Arnold', 'Bennett'),
  ('Ambrose', 'Bierce'),
  ('John', 'Bidwell'),
  ('A. E.', 'Coppard'),
  ('Stephen', 'Crane'),
  ('Roald', 'Dahl'),
  ('Graham', 'Greene'),
  ('Thomas', 'Hardy'),
  ('Jerome K.', 'Jerome'),
  ('D. H.', 'Lawrence'),
  ('Katherine', 'Mansfield'),
  ('Oscar', 'Wilde'),
  ('Wilkie', 'Collins'),
  ('P. G.', 'Wodehouse'),
  ('Matthew', 'Gambardella'),
  ('Kim', 'Ralls'),
  ('Eva', 'Corets'),
  ('Cynthia', 'Randall'),
  ('Paula', 'Thurman'),
  ('Stefan', 'Knorr'),
  ('Peter', 'Kress'),
  ('Tim', 'O''Brien'),
  ('Mike', 'Galos')
;

INSERT INTO BOOK (TITLE, GENRE, ISBN, DESCRIPTION) VALUES

  ('Grass is Always Greener', 'Modern Times', '1-86092-049-7', 'This ingenious tale examines the ambitions and petty jealousies of the staff at Critchley''s Bank. From the doorman to the personnel manager, to Sir William, the bank''s sorrowful chairman. Archer knits a panoply of characters with deft narrative skill in a story which is as revealing as it is observant. Taken from his anthology To Cut a Long Story Short, his other short story anthologies include A Quiver Full of Arrows, Twelve Red Herrings and A Twist in the Tale.'),

  ('Murder!', 'Crime', '1-86092-012-8', 'Two men meet in a seaside resort. What follows is murder. What''s discovered isn''t all it seems to be... Arnold Bennett was born in 1867. He wrote an influential book column for the Evening Standard from 1926 until his death in London in 1931. He was a great admirer of the French realists and his most successful novels, Clayhanger, Hilda Lessways, and These Twain, set in his native Staffordshire, show the literary influence of Flaubert and Balzac on his work. He also wrote plays and essays, as well as many short stories.'),

  ('An Occurrence at Owl Creek Bridge One of the Missing', 'Adventure', '1-86092-006-3', 'Ambrose Bierce was an American journalist, newspaper editor, misanthrope, writer and wit. His two short story masterpieces, An Occurrence at Owl Creek Bridge and One of the Missing, are both brilliant examples of American short fiction at its sharpest. Each is a gripping action tale set in the American Civil War during which Bierce himself saw action at Shiloh and Chickamauga. He was seriously wounded on Kenesaw Mountain in 1864 and promoted to Major in 1867. His death remains an unsolved mystery, - the most likely theory is that he was a fatality of the siege at Ojinaga during the Mexican revolution of 1914.'),

  ('Fear and Loathing in Aspen', 'First Edition', '1-86092-022-5', 'John Bidwell''s two satirical short story journals are loosely based on real incidents in the author''s life. A Boy at Seven is set in a Jesuit boarding school in the early 1960s where some of the boys, fed up with their hateful and sadistic Prefect of Discipline, Father John Kilbracken, hatch a plan to humiliate him in front of all. In Fear and Loathing in Aspen, the author observes the strange behaviour of Americans at the famous Colorado skiing resort of Aspen and follows one of them, a hairy billionaire called Abe Fineblown, on a gung-ho shooting mission to Kenya.'),

  ('The Higgler', 'Romance', '1-86092-010-1', 'Alfred Edgar Coppard, the son of a Kentish journeyman tailor and a hosteler''s daughter, wrote his first short story at the age of 43 and achieved fame in his lifetime, for his vivid depictions of the English countryside and its rural characters. The Higgler, which first appeared in his anthology Fishmonger''s Fiddle in 1925, is one of his finest works; a strangely unpredictable tale of an itinerant dealer in poultry and eggs whose emotional involvement with the mother and daughter of an isolated farmhouse on the moors threatens to become an obsession.'),

  ('The Open Boat', 'Classic', '1-86092-025-x', 'The Open Boat is a captivating short story based on a real-life event. On January 1st 1897, the great American writer, Stephen Crane, was sailing in the steamer, Commadore, which was running arms from Florida to rebels resisting Spanish domination in Cuba. Crane was a war correspondent at the time. The Commodore sank and Crane was cast adrift in an open boat with three or four crew members, including the captain, Edward Murphy. This the dramatic story of what happened next.'),

  ('The Great Switcheroo', 'Biography', '1-86092-034-9', 'Roald Dahl was a master story teller who during his lifetime achieved phenomenal success with tales both for children and adults. The Great Switcheroo, which first appeared in Dahl''s diminutive collection, Switch Bitch, is a decidedly adult fable. Vic Hammond is "churning with lust" for his neighbour, Samantha Rainbow. But Vic is married, and so is Samantha (to Vic''s best friend, Jerry). Undeterred the lecherous Mr Hammond devises a very strange scheme.'),

  ('The Speckled Band', 'Crime', '1-86092-003-9', 'In one of the most thrilling and inventive of all Sherlock Holmes stories, the Baker Street detective and his trusted friend, Dr. Watson, are called to the aid of a mysterious lady who is convinced that her life is in danger. Sir Arthur Conan Doyle creates an inimitable atmosphere of intrigue and suspense leading to an investigation at Stoke Moran, the creepy Surrey mansion of a certain Dr Grimesby Roylott.'),

  ('The Signalman', 'Suspense', '1-86092-038-1', '''The slow touch of a frozen finger'' will trace your spine as the tale of a spectre warning a signalman of impending disaster unfolds. It was first published in the Christmas 1866 edition of All The Year Round - a journal edited by Charles Dickens himself. The timing is significant, as Dickens had been involved in a serious train crash at Staplehurst in the summer of 1865, in which several people died. Obviously deeply affected by the tragedy, he went on to write this classic ghost story.'),

  ('The Five Orange Pips', 'Crime', '1-86092-031-4', 'In this classic Sherlock Holmes mystery the famous Baker Street detective is confronted with one of the most baffling cases of his entire career. Members of the Openshaw family are one-by-one being murdered. Holmes must find a pattern and a motive to these crimes before another member of the family is killed....but there are very few clues. Will the great man fathom the meaning of the five orange pips in time?'),

  ('Cormack''s Black Monday/Gerald''s Day Off/Fat Boy Billy Rules the Middle Lane', 'First Edition', '1-86092-039-X', 'Born in Tehran in 1972, the brilliant young writer Daniel Etessami was brought up in Germany before moving to London. The three extraordinary stories published here share a common theme - obsessiveness. In the first, Cormack aspires to become an international business tycoon; in the second, Gerald strives to come to terms with his addiction to timetables; while, in the final story, Fat Boy Billy risks life and limb to maintain control at his local swimming pool.'),

  ('The Diamond as Big as the Ritz', 'Science Fiction', '1-86092-033-0', 'Scott Fitzgerald''s extraordinary fantasy was written in the winter of 1921-1922. John T. Unger, a middle class American boy from a small town on the Mississippi River goes, for his summer holiday, to stay for the first time with an enigmatic school friend, Percy Washington. On the journey out Percy confides with an abrupt remark: "My father is by far the richest man in the world." "The Schnlitzer Murphys had diamonds as big as walnuts - " "That''s nothing," Percy had leaned forward and dropped his voice to a low whisper. "That''s nothing at all. My father has a diamond bigger than the Ritz-Carlton Hotel."'),

  ('From a View to a Kill', 'Adventure', '1-86092-055-1', 'James Bond is on a mission in France. Ian Fleming, his creator, was a senior naval intelligence officer during World War II, and drew from personal experience in writing his 12 novels and seven short stories featuring the fictional British Secret Service agent, James Bond, 007. Our image of James Bond has been usurped by the world-famous series of films featuring, among others Sean Connery, Roger Moore and Timothy Dalton as Bond. But the real Bond is a far more intriguing character than the films lead us to believe. The spy-thriller, From a View to a Kill, first appeared in Ian Fleming''s short story collection For your Eyes Only in 1962.'),

  ('The Hostage', 'Adventure', '1-86092-014-4', 'Cecil Scott Forester is best known for his historical novels, particularly those about the British naval officer, Horatio Hornblower. The Hostage is a Second World War story taken from the point of view of a German General, Friederich von Dexter, who receives hysterical orders from the Fuehrer, Adolf Hitler, in the dying days of the War. He must obey his orders or face the fatal Nazi punishments for military disobedience, but can he also save the lives of the ten thousand ordinary German soldiers under his command?'),

  ('A Chance for Mr Lever', 'Classic', '1-86092-021-7', 'A Chance for Mr Lever A Chance for Mr Lever is one of Graham Greene''s most memorable short story masterpieces. "I believe I have never written anything better," he wrote in 1975. At a very low ebb Mr Lever, a retired machinery salesman who has lost his money in the depression, rashly accepts a commission-only job which sends him out on a gamble to Africa. He must find a man called Davidson and secure his signature to a contract. Everything depends on finding Davidson. Mr Lever''s once cosy life is now hanging in the balance far, far away in the sweat of a remote African jungle.'),

  ('A Mere Interlude', 'Romance', '1-86092-045-4', 'Thomas Hardy is best remembered for his passionate poems and the series of Wessex novels which included Jude the Obscure, Far from the Madding Crowd and Tess of the Durbevilles. The short story, A Mere Interlude, is an absorbing masterpiece with as many twists and turns as any plot in Hardy. A school teacher from the mainland returns to the island home of her childhood to be married to a man who is not altogether to her liking. But she meets another on her way and, in a moment of wildness, all her plans go seriously awry. This is a story of passion and cover-up; a tale of love, destiny and heroism in the best tradition of Thomas Hardy.'),

  ('The Dancing Partner: Clocks', 'Comedy', '1-86092-050-0', 'Most famous for his classic, comic novel Three Men in a Boat (1889), which describes a rowing holiday on the Thames enjoyed by three men and their dog, Jerome K. Jerome first published The Dancing Partner three years later in Novel Notes. It is about as black as humour can get. An inventor creates a machine that can dance with all the girls at new society balls, but the results are far from satisfactory. Still in mechanical vain, this edition includes Jerome''s little-known short, comic essay, Clocks.'),

  ('The Rocking-Horse Winner', 'Classic', '1-86092-007-1', 'A Fragment of Stained Glass The Rocking-Horse Winner, which first appeared in Cynthia Asquith''s Ghost Book of 1926, is one of D. H Lawrence''s best known stories; an eerily supernatural tale about a small boy who is determined to reverse his family''s continuiing ill-fortune by winning huge amounts of money at the races. In A Fragment of Stained Glass monks at an old abbey believe they have seen the Devil trying to break in through a stained glass window. But what was really happening? Many years later a local parish priest thinks he has the answer.'),

  ('Bliss Feuille d''Album', 'Romance', '1-86092-005-5', 'In Bliss (1920) Bertha Young, a happily married mother, gives a small dinner-party for a theatre director and his wife, a whey-faced poet and a new friend for whom she feels a strange burning affinity. "What can you do if you are thirty and, turning the corner of your own street, you are overcome, suddenly by a feeling of bliss - absolute bliss?". Feuille D''Album is an equally strange and compelling story about a handsome young artist working in Paris. "How could one resist him?" But it does not take people long to notice that the fascinating Mr French is not all that he seems to be.'),

  ('Death on the Air', 'Crime', '1-86092-020-9', 'Featuring the famous detective, Roderick Alleyn, Death on the Air is a classic murder-mystery Who-Dunnit? Septimus Tonks is found dead beside his wireless set. "His hands, the fingers curiously bunched, were on the ledge of the cabinet under the tuning and volume knobs. His chest rested against the shelf below and his head leaned on the front panel." Was it a heart attack? Suspicious Detective Alleyn is searching for a weapon and a motive, he needs to interview everyone in the house - someone must be hiding the truth.'),

  ('Mademoiselle Fifi', 'Classic', '1-86092-009-8', 'Guy de Maupassant''s sharpness, brilliance and wit made him the most popular short story writer of his day. In Mademoiselle Fifi, set during the Franco-Prussian war of 1870-1871, a loutish and destructive band of Prussian officers has taken over a beautiful French Chateau. They call in some prostitutes to eleviate their boredom but the evening goes badly wrong. In The Devil a young peasant farmer, fretting over the expense of his elderly mother''s imminent death, strikes a deal with an odious old ironing woman.'),

  ('Love Poems from the Green Book of Poetry', 'Poetry', '1-86092-026-8', 'Drawn from Ivo Mosley''s hugely successful Green Book of Poetry, Poems of Love are picked from a rich treasury of world verse which includes such wide ranging poets as Shakespeare, Matthew Arnold and Li Po, each extolling the virtues of love in unique and various ways - from the pornographic desires of Robert Burns to the subtle longings of the Japanese poet Hitomaro, this is an absorbing collection. Ivo Mosley is Poetry Editor of The Journal of Consciousness Studies and wrote the best-selling erotic story, Christmas in Africa, for the Travelman Sex series in 1998.'),

  ('The Ransom of Red Chief; Gift of the Magi', 'Crime', '1-86092-011-x', 'O Henry, whose real name was William Sydney Porter, was born in South Carolina, USA. He was convicted on a charge of embezzlement in 1896 and wrote his first short stories from prison. O Henry''s humorous and ingenius plots soon earned him a reputation as one of the most popular short story writers of his day. In The Ransom of Red Chief two outlaws kidnap an unruly child and soon come to regret it. The Gift of Magi is one of O Henry''s most celebrated stories.'),

  ('A Telephone Call', 'Comedy', '1-86092-017-9', 'Dorothy Parker is remembered as much today for her sparkling short stories as for her poems and her witty remarks. In Here We Are a newly wedded couple prepares for the first evening of a honeymoon in New York. Both he and she face the stark possibility that marriage may not be quite as jolly as they had each anticipated. In A Telephone Call Parker''s satiric wit is focussed on a hapless and frantic girl as she waits impatiently by the telephone praying that her lover will ring.'),

  ('The Pit and the Pendulum', 'Suspense', '1-86092-019-5', 'Edgar Allan Poe was born in Boston, his parents were itinerent actors. At the age of two he was taken into care by a wealthy tobacco exporter, John Allan, from whom the author took his middle name. His first collection of stories, Tales of the Grotesque and Arabesque was published in 1840 and contains some of his most famous works. In his classic suspense story, The Pit and the Pendulum, which first appeared in1842, a man awakes from an unconscious state to find himself lying on his back in pitch darkness. He has no idea how he got there; his nightmare begins.'),

  ('The Vampyre', 'Suspense', '1-86092-035-7', 'This fascinating Gothic horror story introduces us to Lord Ruvthen, the father of all vampires, and the future inspiration for Count Dracula and the whole genre of blood sucking thrillers which are still popular today. Polidori was a doctor, of Italian parentage, from Edinburgh. He travelled to Geneva with Lord Byron, but they quarrelled. Returning home, Polidori published The Vampyre in the 1819 issue of the New Monthly Magazine, pretending it was by Byron. The poet refuted it, admitting only that he had been working on a story of the same title. However Polidori''s The Vampyre soon became the talk of Europe and was turned into an opera by the German composer, Heinrich Marschner.'),

  ('Irish Revel', 'Romance', '1-86092-036-5', 'In Irish Revel Edna O''Brien explores the naive world of a young Irish girl, Mary, who is brought up in an isolated farmhouse and invited, aged seventeen, to a party for the first time in her life. Dressed in her mother''s finest lace, she rides her bicycle to the Commercial Hotel in a state of high anticipation, but the party is not all that she expected it to be. Irish Revel first appeared in the short story collection The Love Object in 1968 and is one of Edna O''Brien''s most moving works.'),

  ('Thornapple', 'Crime', '1-86092-032-2', 'Ruth Rendell''s mysteries have become famous throughout the world. In Thornapple James Fyfield, a young boy with an enquiring, scientific mind, takes up a very unusual hobby - making deadly poisons in his mother''s kitchen when she is out. Soon he has a large collection of jars tucked away on a the top shelf in his bedroom - hemlock, henblane and deadly nightshade. But the one of which he is proudest by far is a murky brown concoction, painstakingly prepared from the spiky fruit of the thornapple.'),

  ('Sredni Vashtar, The Secret Sin Septimus Brope,The Lumber Room', 'Comedy', '1-86092-013-6', 'Hector Hugh Monro (alias Saki) was one the most accomplished short story writers of the English language, and the three stories printed here are brilliant examples of his wit and ingenuity in this form. The Secret Sin of Septimus Brope, and Sredni Vashtar both first appeared in the short story collection, The Chronicles of Clovis (1912). The Lumber-Room, an account of a young boy''s escape from the domineering authority of his bossy aunts, was published two years later in Saki''s popular collection entitled Beasts and Super-Beasts.'),

  ('The Young Man who Discovered the Secret of Life', 'First Edition', '1-86092-015-2', 'The Snobs The Pearly Shadow A relationship between a young man and the ghost that haunts his bedroom forms the basis of this brilliant, symbolic little story by Muriel Spark. It is published here, for the first time, in the Travelman First Edition Series. The Snobs is likewise a satire with a twist; set in a French chateau owned by a modest couple under threat of invasion from a pair of castle-crawling snobs. The Pearly Shadow deftly resumes the spirit theme of the first story. Dame Muriel is an honoured member of the Travelman Short Stories Editorial Board.'),

  ('The Body Snatcher', 'Suspense', '1-86092-001-2', 'This gruesome story was first published in the Christmas issue of the Pall Mall Magazine for 1884 and, although it had been written some time earlier, Stevenson initially laid it aside "in justifiable disgust, the tale being horrid." One night Fettes, an old Scotsman at the George Inn, is shocked out of his drunkenness by the sudden appearance of a shady figure from his past, Dr Wolfe Macfarlane. The sight of Macfarlane brings back terrible memories for Fettes, in particular, the nightmarish events of that stormy night in a rustic graveyard at Glencorse.'),

  ('The Judge''s House', 'Suspense', '1-86092-008-x', 'Famous as the author of Dracula, Bram Stoker, the master of terror, was born in Dublin. He could neither stand nor walk until the age of seven but later overcame his physical weaknesses as an outstanding athlete. He worked as a civil servant in Dublin and afterwards as a personal assistant to the celebrated actor, Sir Henry Irving. In The Judge''s House a scholar seeking solitide finds himself in the rustic village of Benchurch. Ignoring the warnings of terrified locals he wilfully takes up residence in a sinister house, once the property of an infamous and evil judge.'),

  ('The Summer Visitor', 'First Edition', '1-86092-041-1', 'Every September for thirteen years Guy has taken Monsieur and Madame Buissonnet out to dinner at M. Perdreau''s delicious hotel-restaurant; but this occasion is different from all the others. Guy will never be able to forget what happened on this particular night and (maybe), if he is lucky, Monsieur and Madame Buissonnet will never know. William Trevor, one of the most distinguished short story writers of our modern age has written this remarkable and moving tale for Travelman Short Story Editions. He is an honoured member of the Travelman Editorial Board.'),

  ('On Guard, Bella Fleace Gave a Party', 'Comedy', '1-86092-000-4', 'In each of these early short stories, Evelyn Waugh''s black humour and satiric skill are both at their sharpest. The poodle, Hector, takes a central role in On Guard (1932), fiercely defending his putty-nosed mistress, Millicent Blade, from the advances of unwanted suitors. In Bella Fleace Gave a Party (1934), an octogenarian Irish aristocrat prepares her crumbling mansion for a great evening of festivities, but things don''t necessarily all go to plan.'),

  ('A Perfect Day', 'First Edition', '1-86092-030-6', 'Teresa Waugh, the celebrated novelist, has written many beautifully crafted short-stories. In this, A Perfect Day, written especially for the Travelman First Edition series, Ellis, a seemingly ordinary man, is killed in a car crash. Celia, his twin sister, comes to the funeral and is visited by a flood of haunting memories which reveal the extraordinarily breathless tale of her brother''s life and the effect that he, and his wicked ways, had on her own peculiar past. Teresa Waugh''s latest novel A Friend Like Harvey is published by Gollancz in June 1999.'),

  ('Country of the Blind', 'Science Fiction', '1-86092-002-0', 'In one of H. G. Wells''s most brilliant and haunting stories, Nunez, a hapless mountaineer falls several thousand feet down the side of an Andean mountain to find himself in the Country of the Blind, a sealed-off valley, where, for fifteen generations, a strange community of congenitally blind human beings has been thriving in complete ignorance of the outside world. Nunez gleefully reminds himself of an old proverb: "In the Country of the Blind, the One-Eyed Man is King," but, to his dismay, things do not happen quite as he had hoped. The Country of the Blind was written in 1904 and first published, in book form, in 1911.'),

  ('Lord Savile''s Crime', 'Classic', '1-86092-016-0', 'Lord Arthur Savile''s Crime, first published in 1887, opens at Lady Windermere''s society soiree in London. A chiromantist, Mr Septimus Podgers, has been brought to the party to entertain the assembled guests. All goes well until he examines Lord Arthur Savile''s hand: "Podgers grew curiously pale, and said nothing. A shudder seemed to pass through him. Then some huge beads of perspiration broke out on his yellow forehead, like a poisonous dew, and his fat fingers grew cold and clammy...."'),

  ('The Traveller''s Story of a Terribly Strange Bed', 'Suspense', '1-86092-042-X', 'A close friend of Charles Dickens, Wilkie Collins became a popular and highly successful writer of Victorian mysteries; his most famous novels being The Woman in White and The Moonstone. In The Traveller''s Story of a Terribly Strange Bed (1852) a young Englishman expresses his desire to experience ''a little genuine, blackguard, poverty-stricken gaming'' during a sojourn in Paris, little realising that his success at the gaming table would lead him into mortal danger.'),

  ('Goodbye to all Cats', 'Comedy', '1-86092-004-7', 'Freddie Widgeon, anxious to make a good impression, visits Matcham Scratchings, the home of his beloved, Dahlia Prenderby. But its animal occupants soon turn his stay into a disastrous and hilarious farce... P. G. Wodehouse is the most popular of all quintessentially English humorists. He wrote over 120 volumes, creating such famous figures as Bertie Wooster and his butler, Jeeves, Lord Emsworth and his famous sow, the Empress of Blandings, Psmith, Mulliner and a host of other memorably comic characters. After a scandal during the Second World War, he moved permanently to America, becoming a US citizen in 1955.'),

  ('XML Developer''s Guide', 'Computer', 'x-xxxxx-xxx-x', 'An in-depth look at creating applications with XML.'),

  ('Midnight Rain', 'Fantasy', 'x-xxxxx-xxx-x', 'A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world.'),

  ('Maeve Ascendant', 'Fantasy', 'x-xxxxx-xxx-x', 'After the collapse of a nanotechnology society in England, the young survivors lay the foundation for a new society.'),

  ('Oberon''s Legacy', 'Fantasy', 'x-xxxxx-xxx-x', 'In post-apocalypse England, the mysterious agent known only as Oberon helps to create a new life for the inhabitants of London. Sequel to Maeve Ascendant.'),

  ('The Sundered Grail', 'Fantasy', 'x-xxxxx-xxx-x', 'The two daughters of Maeve, half-sisters, battle one another for control of England. Sequel to Oberon''s Legacy.'),

  ('Lover Birds', 'Romance', 'x-xxxxx-xxx-x', 'When Carla meets Paul at an ornithology conference, tempers fly as feathers get ruffled.'),

  ('Splish Splash', 'Romance', 'x-xxxxx-xxx-x', 'A deep sea diver finds true love twenty thousand leagues beneath the sea.'),

  ('Creepy Crawlies', 'Horror', 'x-xxxxx-xxx-x', 'An anthology of horror stories about roaches, centipedes, scorpions and other insects.'),

  ('Paradox Lost', 'Science Fiction', 'x-xxxxx-xxx-x', 'After an inadvertant trip through a Heisenberg Uncertainty Device, James Salway discovers the problems of being quantum.'),

  ('Microsoft .NET: The Programming Bible', 'Computer', 'x-xxxxx-xxx-x', 'Microsoft''s .NET initiative is explored in detail in this deep programmer''s reference.'),

  ('MSXML3: A Comprehensive Guide', 'Computer', 'x-xxxxx-xxx-x', 'The Microsoft MSXML3 parser is covered in detail, with attention to XML DOM interfaces, XSLT processing, SAX and more.'),

  ('Visual Studio 7: A Comprehensive Guide', 'Computer', 'x-xxxxx-xxx-x', 'Microsoft Visual Studio 7 is explored in depth, looking at how Visual Basic, Visual C++, C#, and ASP+ are integrated into a comprehensive development environment.'),

  ('JavaScript: The Good Parts', 'Computer', '0-59651-774-2', 'Unearthing the Excellence in JavaScript'),

  ('Seven Web Frameworks in Seven Weeks', 'Computer', '1-93778-563-7', 'Whether you need a new tool or just inspiration, Seven Web Frameworks in Seven Weeks explores modern options, giving you a taste of each with ideas that will help you create better apps. You''ll see frameworks that leverage modern programming languages, employ unique architectures, live client-side instead of server-side, or embrace type systems. You''ll see everything from familiar Ruby and JavaScript to the more exotic Erlang, Haskell, and Clojure.')
;

INSERT INTO BOOK_AUTHOR (BOOK_ID, AUTHOR_ID) SELECT ID, 0 FROM BOOK ;

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Jeffrey' AND LAST_NAME = 'Archer') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Grass is Always Greener');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Arnold' AND LAST_NAME = 'Bennett') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Murder!');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Ambrose' AND LAST_NAME = 'Bierce') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'An Occurrence at Owl Creek Bridge One of the Missing');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'John' AND LAST_NAME = 'Bidwell') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Fear and Loathing in Aspen');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'A. E.' AND LAST_NAME = 'Coppard') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Higgler');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Stephen' AND LAST_NAME = 'Crane') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Open Boat');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Roald' AND LAST_NAME = 'Dahl') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Great Switcheroo');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Sir Arthur' AND LAST_NAME = 'Conan Doyle') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Speckled Band');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Charles' AND LAST_NAME = 'Dickens') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Signalman');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Sir Arthur' AND LAST_NAME = 'Conan Doyle') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Five Orange Pips');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Daniel' AND LAST_NAME = 'Etessami') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Cormack''s Black Monday/Gerald''s Day Off/Fat Boy Billy Rules the Middle Lane');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'F. Scott' AND LAST_NAME = 'Fitzgerald') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Diamond as Big as the Ritz');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Ian' AND LAST_NAME = 'Fleming') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'From a View to a Kill');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'C. S.' AND LAST_NAME = 'Forester') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Hostage');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Graham' AND LAST_NAME = 'Greene') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'A Chance for Mr Lever');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Thomas' AND LAST_NAME = 'Hardy') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'A Mere Interlude');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Jerome K.' AND LAST_NAME = 'Jerome') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Dancing Partner: Clocks');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'D. H.' AND LAST_NAME = 'Lawrence') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Rocking-Horse Winner');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Katherine' AND LAST_NAME = 'Mansfield') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Bliss Feuille d''Album');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Ngaio' AND LAST_NAME = 'Marsh') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Death on the Air');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Guy' AND LAST_NAME = 'de Maupassant') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Mademoiselle Fifi');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Ivo' AND LAST_NAME = 'Mosley') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Love Poems from the Green Book of Poetry');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'O' AND LAST_NAME = 'Henry') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Ransom of Red Chief; Gift of the Magi');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Dorothy' AND LAST_NAME = 'Parker') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'A Telephone Call');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Edgar Allan' AND LAST_NAME = 'Poe') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Pit and the Pendulum');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'John' AND LAST_NAME = 'Polidori') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Vampyre');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Edna' AND LAST_NAME = 'O''Brien') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Irish Revel');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Ruth' AND LAST_NAME = 'Rendell') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Thornapple');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Saki' AND LAST_NAME = 'Saki') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Sredni Vashtar, The Secret Sin Septimus Brope,The Lumber Room');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Muriel' AND LAST_NAME = 'Spark') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Young Man who Discovered the Secret of Life');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Robert Louis' AND LAST_NAME = 'Stevenson') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Body Snatcher');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Bram' AND LAST_NAME = 'Stoker') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Judge''s House');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'William' AND LAST_NAME = 'Trevor') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Summer Visitor');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Evelyn' AND LAST_NAME = 'Waugh') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'On Guard, Bella Fleace Gave a Party');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Teresa' AND LAST_NAME = 'Waugh') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'A Perfect Day');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'H.G.' AND LAST_NAME = 'Wells') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Country of the Blind');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Oscar' AND LAST_NAME = 'Wilde') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Lord Savile''s Crime');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Wilkie' AND LAST_NAME = 'Collins') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Traveller''s Story of a Terribly Strange Bed');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'P. G.' AND LAST_NAME = 'Wodehouse') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Goodbye to all Cats');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Matthew' AND LAST_NAME = 'Gambardella') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'XML Developer''s Guide');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Kim' AND LAST_NAME = 'Ralls') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Midnight Rain');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Eva' AND LAST_NAME = 'Corets') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Maeve Ascendant');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Eva' AND LAST_NAME = 'Corets') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Oberon''s Legacy');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Eva' AND LAST_NAME = 'Corets') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'The Sundered Grail');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Cynthia' AND LAST_NAME = 'Randall') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Lover Birds');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Paula' AND LAST_NAME = 'Thurman') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Splish Splash');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Stefan' AND LAST_NAME = 'Knorr') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Creepy Crawlies');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Peter' AND LAST_NAME = 'Kress') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Paradox Lost');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Tim' AND LAST_NAME = 'O''Brien') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Microsoft .NET: The Programming Bible');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Tim' AND LAST_NAME = 'O''Brien') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'MSXML3: A Comprehensive Guide');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Mike' AND LAST_NAME = 'Galos') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Visual Studio 7: A Comprehensive Guide');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Douglas' AND LAST_NAME = 'Crockford') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'JavaScript: The Good Parts');

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Fred' AND LAST_NAME = 'Daoud') WHERE BOOK_ID = (SELECT ID FROM BOOK WHERE TITLE = 'Seven Web Frameworks in Seven Weeks');

INSERT INTO BOOK_AUTHOR (BOOK_ID, AUTHOR_ID) SELECT ID, 0 FROM BOOK WHERE TITLE = 'Seven Web Frameworks in Seven Weeks';

UPDATE BOOK_AUTHOR SET AUTHOR_ID = (SELECT ID FROM AUTHOR WHERE FIRST_NAME = 'Jack' AND LAST_NAME = 'Moffitt') WHERE ID = LAST_INSERT_ROWID() ;


