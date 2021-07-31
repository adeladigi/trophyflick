

  const movieData =[
    { img: "https://imgtoolkit.culturebase.org/?color=FFFFFF&quality=8&ar_ratio=1.3&format=jpg&file=http%3A%2F%2Fdata.heimat.de%2Fpics%2F3%2F6%2F9%2F3%2Fe%2Fpic_1505222298_3693e325e06cd1a4669d09ca2beba6a7.jpeg&do=cropOut&width=1200&height=585",
      title: "The Pianist",
      about: "In this adaptation of the autobiography The Pianist: The Extraordinary True Story of One Man's Survival in Warsaw, 1939-1945, Wladyslaw Szpilman (Adrien Brody), a Polish Jewish radio station pianist, sees Warsaw change gradually as World War II begins. Szpilman is forced into the Warsaw Ghetto, but is later separated from his family during Operation Reinhard. From this time until the concentration camp prisoners are released, Szpilman hides in various locations among the ruins of Warsaw.",
      trailer: "https://www.youtube.com/embed/BFwGqLa_oAo"
    },
    { img: "https://theplaylist.net/wp-content/uploads/2018/04/Edge-of-Tomorrow-Tom-Cruise-Emily-Blunt-sequel.jpg",
      title: "Edge Of Tomorrow",
      about: "When Earth falls under attack from invincible aliens, no military unit in the world is able to beat them. Maj. William Cage (Tom Cruise), an officer who has never seen combat, is assigned to a suicide mission. Killed within moments, Cage finds himself thrown into a time loop, in which he relives the same brutal fight -- and his death -- over and over again. However, Cage's fighting skills improve with each encore, bringing him and a comrade (Emily Blunt) ever closer to defeating the aliens.",
      trailer: "https://www.youtube.com/embed/vw61gCe2oqI" 
    },
    { img: "https://cdn.onebauer.media/one/empire-tmdb/films/157336/images/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill",
    title: "Interstellar",
    about: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
    trailer: "https://www.youtube.com/embed/Lm8p5rlrSkY"
    },
    { img: "https://m.media-amazon.com/images/I/813vhYB7m-L._SL1500_.jpg",
    title: "Inception",
    about: "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    { img: "https://bestmoviecast.com/wp-content/uploads/2020/07/Archive.jpg",
    title: "Archive",
    about: "2038: George Almore is working on a true human-equivalent AI. His latest prototype is almost ready. This sensitive phase is also the riskiest. Especially as he has a goal that must be hidden at all costs: being reunited with his dead wife.",
    trailer: "https://www.youtube.com/embed/I8WfXdxQ0Cw"
    },
    { img: "https://cdn.onebauer.media/one/empire-tmdb/films/280/images/d9AqtruwS8nljKjL5aYzM42hQJr.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill",
    title: "Terminator 2",
    about: "In this sequel set eleven years after The Terminator, young John Connor (Edward Furlong), the key to civilization's victory over a future robot uprising, is the target of the shape-shifting T-1000 (Robert Patrick), a Terminator sent from the future to kill him. Another Terminator, the revamped T-800 (Arnold Schwarzenegger), has been sent back to protect the boy. As John and his mother (Linda Hamilton) go on the run with the T-800, the boy forms an unexpected bond with the robot.",
    trailer: "https://www.youtube.com/embed/XPtVZ69lomk"
    },
    { img: "https://m.media-amazon.com/images/M/MV5BNDM5MjEwNzA4OF5BMl5BanBnXkFtZTYwMjEzNjE3._V1_.jpg",
    title: "London",
    about: "Upon learning that his ex-lover (Jessica Biel) is leaving New York, a man (Chris Evans) named Syd crashes her going-away party, but once there, he retreats to the bathroom with a stash of cocaine and engages in a drug-fueled conversation with a man (Jason Statham) he hardly knows. All the while, Syd tries to find the courage to confront his ex-lover before it is too late.",
    trailer: "https://www.youtube.com/embed/B5k6xcnm4g0"
    },
    { img: "https://www.denofgeek.com/wp-content/uploads/2021/04/Tom-Hanks-and-Matt-Damon-in-Saving-Private-Ryan.jpeg?fit=1300%2C756",
    title: "Saving Private Ryan",
    about: "Captain John Miller (Tom Hanks) takes his men behind enemy lines to find Private James Ryan, whose three brothers have been killed in combat. Surrounded by the brutal realties of war, while searching for Ryan, each man embarks upon a personal journey and discovers their own strength to triumph over an uncertain future with honor, decency and courage.",
    trailer: "https://www.youtube.com/embed/8EsVtn2GvBo"
    },
    { img: "https://m.media-amazon.com/images/M/MV5BMTc1MDY0MjI4NV5BMl5BanBnXkFtZTgwMzAxNjM3MDE@._V1_.jpg",
    title: "Her",
    about: "A sensitive and soulful man earns a living by writing personal letters for other people. Left heartbroken after his marriage ends, Theodore (Joaquin Phoenix) becomes fascinated with a new operating system which reportedly develops into an intuitive and unique entity in its own right. He starts the program and meets Samantha (Scarlett Johansson), whose bright voice reveals a sensitive, playful personality. Though friends initially, the relationship soon deepens into love.",
    trailer: "https://www.youtube.com/embed/dJTU48_yghs"
    },
    { img: "https://flxt.tmsimg.com/assets/p8702416_p_v10_aa.jpg",
    title: "The Girl with the Dragon Tattoo",
    about: "Disgraced financial reporter Mikael Blomkvist (Daniel Craig) finds a chance to redeem his honor after being hired by wealthy Swedish industrialist Henrik Vanger (Christopher Plummer) to solve the 40-year-old murder of Vanger's niece, Harriet. Vanger believes that Harriet was killed by a member of his own family. Eventually joining Blomkvist on his dangerous quest for the truth is Lisbeth Salander (Rooney Mara), an unusual but ingenious investigator whose fragile trust is not easily won.",
    trailer: "https://www.youtube.com/embed/DqQe3OrsMKI"
    },
    { img: "https://static.highsnobiety.com/thumbor/KT40dXhEOdWAws_rVlLkXlEASpc=/1200x720/static.highsnobiety.com/wp-content/uploads/2019/10/24170132/leon-the-professional-get-the-look-00.jpg",
      title: "Léon: The Professional",
      about: "Mathilda (Natalie Portman) is only 12 years old, but is already familiar with the dark side of life: her abusive father stores drugs for corrupt police officers, and her mother neglects her. Léon (Jean Reno), who lives down the hall, tends to his houseplants and works as a hired hitman for mobster Tony (Danny Aiello). When her family is murdered by crooked DEA agent Stansfield (Gary Oldman), Mathilda joins forces with a reluctant Léon to learn his deadly trade and avenge her family's deaths.",
      trailer: "https://www.youtube.com/embed/jawVxq1Iyl0"
    },
    { img: "https://media.npr.org/assets/img/2020/08/31/heat-photo_wide-1942d8660b2cb653fd293f1b9fff237a0f83f957.jpg",
    title: "Heat",
    about: "Master criminal Neil McCauley (Robert De Niro) is trying to control the rogue actions of one of his men, while also planning one last big heist before retiring. Meanwhile, Lieutenant Hanna (Al Pacino) attempts to track down McCauley as he deals with the chaos in his own life, including the infidelity of his wife (Diane Venora) and the mental health of his stepdaughter (Natalie Portman). McCauley and Hanna discover a mutual respect, even as they try to thwart each other's plans.",
    trailer: "https://www.youtube.com/embed/2GfZl4kuVNI"
    },
    { img: "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F26778bac-6254-43c2-92f0-4c4d2dd39117_1600x900.jpeg",
      title: "Closer",
      about: "Alice (Natalie Portman), an American stripper who has moved to London, meets Dan (Jude Law) on the street. While looking at him, a taxi hits her. After taking her to the hospital, Dan begins dating Alice. A year later, Dan -- who has written a novel about Alice -- is bored. He flirts with photographer Anna (Julia Roberts). Pretending to be her in a chat room, he leads dermatologist Larry (Clive Owen) to an accidental meeting with Anna. As the years pass, both relationships disintegrate.",
      trailer: "https://www.youtube.com/embed/BdmOjfGTUzQ"
    },
    { img: "https://i.insider.com/4fbe94b16bb3f78312000000?width=800&format=jpeg",
      title: "The Dark Knight Rises ",
      about: "It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar (Anne Hathaway) and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.",
      trailer: "https://www.youtube.com/embed/GokKUqLcvD8"
    },
    { img: "https://img.cinemablend.com/quill/0/8/b/4/5/d/08b45df8073086e2aa1f09b83cf21111cd1d388a.jpg",
      title: "500 Days of Summer",
      about: "Tom (Joseph Gordon-Levitt), greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer (Zooey Deschanel), suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.",
      trailer: "https://www.youtube.com/embed/PsD0NpFSADM"
    },
    { img: "https://m.media-amazon.com/images/M/MV5BMjIxNTU2NjI3Nl5BMl5BanBnXkFtZTcwMTk3ODkyMw@@._V1_.jpg",
      title: "Dawn of the Dead",
      about: "When her husband is attacked by a zombified neighbor, Ana (Sarah Polley) manages to escape, only to realize her entire Milwaukee neighborhood has been overrun by the walking dead. After being questioned by cautious policeman Kenneth (Ving Rhames), Ana joins him and a small group that gravitates to the local shopping mall as a bastion of safety. Once they convince suspicious security guards that they are not contaminated, the group bands together to fight the undead hordes.",
      trailer: "https://www.youtube.com/embed/DV8mJcuYVaA"
    },
    { img: "https://upl.roob.la/2011/01/cpzthdsrj4llvnp.jpg",
      title: "Shutter Island",
      about: "The implausible escape of a brilliant murderess brings U.S. Marshal Teddy Daniels (Leonardo DiCaprio) and his new partner (Mark Ruffalo) to Ashecliffe Hospital, a fortress-like insane asylum located on a remote, windswept island. The woman appears to have vanished from a locked room, and there are hints of terrible deeds committed within the hospital walls. As the investigation deepens, Teddy realizes he will have to confront his own dark fears if he hopes to make it off the island alive.",
      trailer: "https://www.youtube.com/embed/5iaYLCiq5RM"
    },  
    { img: "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2014/11/5etxyekj7d8llvpgahrsxzrqqdn34rtl0_rdrnoc1yvhi5ea5gbmojbwnqeafd11o1ywi4aflq7y7x-uuhdamzwtqazl.jpg?quality=100&strip=all&w=512&h=310&crop=1",
     title: "Dumb and Dumber",
     about: "Imbecilic best friends Lloyd Christmas (Jim Carrey) and Harry Dunne (Jeff Daniels) stumble across a suitcase full of money left behind in Harry's car by Mary Swanson (Lauren Holly), who was on her way to the airport. The pair decide to go to Aspen, Colo., to return the money, unaware that it is connected to a kidnapping. As Harry and Lloyd -- who has fallen in love with Mary -- are pursued across the country by hired killers and police, they find both their friendship and their brains tested.",
     trailer: "https://www.youtube.com/embed/l13yPhimE3o"
    },
    { img: "https://www.comingsoon.net/assets/uploads/2021/04/american-psycho-bale-e1619203825116-1280x720.png",
      title: "American Psycho",
      about: "American Psycho is a 2000 American satirical horror film co-written and directed by Mary Harron, based on Bret Easton Ellis's 1991 novel of the same name.",
      trailer: "https://www.youtube.com/embed/81mibtQWWBg"
    },
    { img: "https://media.newyorker.com/photos/590969441c7a8e33fb38db50/master/pass/101206_r20291_p886.jpg",
      title: "Black Swan",
      about: "Nina (Natalie Portman) is a ballerina whose passion for the dance rules every facet of her life. When the company's artistic director decides to replace his prima ballerina for their opening production of Swan Lake, Nina is his first choice. She has competition in newcomer Lily (Mila Kunis) however. While Nina is perfect for the role of the White Swan, Lily personifies the Black Swan. As rivalry between the two dancers transforms into a twisted friendship, Nina's dark side begins to emerge.",
      trailer: "https://www.youtube.com/embed/5jaI1XOB-bs"
    },
    { img: "https://static01.nyt.com/images/2014/04/08/arts/under-3/under-3-superJumbo.jpg",
      title: "Under the Skin",
      about: "Disguising itself as a human female, an extraterrestrial drives around Scotland attempting to lure unsuspecting men into her van. Once there, she seduces and sends them into another dimension where they are nothing more than meat.",
      trailer: "https://www.youtube.com/embed/CcR5KHjoc-0"
    },
    { img: "https://www.indiewire.com/wp-content/uploads/2020/04/shutterstock_editorial_5883926f.jpg?w=780",
     title: "Ex Machina",
     about: "Caleb Smith (Domhnall Gleeson) a programmer at a huge Internet company, wins a contest that enables him to spend a week at the private estate of Nathan Bateman (Oscar Isaac), his firm's brilliant CEO. When he arrives, Caleb learns that he has been chosen to be the human component in a Turing test to determine the capabilities and consciousness of Ava (Alicia Vikander), a beautiful robot. However, it soon becomes evident that Ava is far more self-aware and deceptive than either man imagined.",
     trailer: "https://www.youtube.com/embed/bggUmgeMCdc"
    },
    { img: "https://media1.fdncms.com/ntslo/imager/u/original/7463932/musicartsculture_movies2-1-f8c4a84633d975d3.jpg",
      title: "Drive",
      about: "Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he's been warming up to a pretty neighbor named Irene and her young son, Benicio. When Irene's husband gets out of jail, he enlists Driver's help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery.",
      trailer: "https://www.youtube.com/embed/KBiOF3y1W0Y"
    },
    { img: "https://api.time.com/wp-content/uploads/2014/12/godfather-ii.jpeg",
      title: "The Godfather: Part II",
      about: "The compelling sequel to The Godfather, contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917's Hell's Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.",
      trailer: "https://www.youtube.com/embed/OA1ij0alE0w"
    },
    { img: "https://wiseblog87.files.wordpress.com/2015/07/group.jpg",
     title: "Scarface",
     about: "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana (Al Pacino) stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
     trailer: "https://www.youtube.com/embed/7pQQHnqBa2E"
    },
    { img: "https://m.media-amazon.com/images/M/MV5BNjI0YjM1M2QtZDM0OC00OTQ3LTg0YzktMjM1MzAxNTU0YmQzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    title: "Devils Advocate",
    about: "Aspiring Florida defense lawyer Kevin Lomax (Keanu Reeves) accepts a high-powered position at a New York law firm headed by legal shark John Milton (Al Pacino). As Kevin moves up in the firm's ranks, his wife, Mary Ann (Charlize Theron), has several frightening, mystical experiences that begin to warp her sense of reality. With the stakes getting higher with each case, Kevin quickly learns that his mentor is planning a far greater evil than simply winning without scruples.",
    trailer: "https://www.youtube.com/embed/40hHA9n4C2o"
    },
    { img: "https://i.pinimg.com/originals/a1/cb/a7/a1cba79680480efeb0612a4d833414a6.png",
      title: "Vanilla Sky",
      about: "Tom Cruise and Cameron Crowe reunite after Jerry Maguire for Vanilla Sky, the story of a young New York City publishing magnate who finds himself on an unexpected roller-coaster ride of romance, comedy, suspicion, love, sex and dreams in a mind-bending search for his soul.",
      trailer: "https://www.youtube.com/embed/7w2gRi0170U"
    },
    { img: "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2018/10/fightclub_1280.jpg",
      title: "Fight Club",
      about: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
      trailer: "https://www.youtube.com/embed/6JnN1DmbqoU"
    },
    { img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F08%2Fjim-carrey-truman-show-1-2000.jpg",
      title: "The Truman Show",
      about: "He doesn't know it, but everything in Truman Burbank's (Jim Carrey) life is part of a massive TV set. Executive producer Christof (Ed Harris) orchestrates The Truman Show, a live broadcast of Truman's every move captured by hidden cameras. Cristof tries to control Truman's mind, even removing his true love, Sylvia (Natascha McElhone), from the show and replacing her with Meryl (Laura Linney). As Truman gradually discovers the truth, however, he must decide whether to act on it.",
      trailer: "https://www.youtube.com/embed/dlnmQbPGuls"
    },
    { img: "https://play-lh.googleusercontent.com/proxy/22A2xFu9VF67e_KdcO4lHgcmEsS9PfTIIucnmAlgm5udBzkSePiuozY25RAwawyURoCf9rFugQSyg2quA8LCZvtF7ZKM00-SB-lB0d4cVOBg7DYUtCNb=w720-h405-rw",
      title: "Tropic Thunder",
      about: "Oddball cable installer Chip Douglas (Jim Carrey) attempts to strike up a friendship with customer Steven Kovacs (Matthew Broderick) by offering him premium channels at no cost. When Steven rebuffs Chip's frequent need for companionship, Chip goes from a mildly eccentric acquaintance to a full-fledged psycho stalker. Though it's increasingly apparent to Steven that the cable guy is dangerous, convincing his friends, family and the authorities of that is another matter entirely.",
      trailer: "https://www.youtube.com/embed/9Pl4JNnqNaE"
    },
    { img: "https://www.sbs.com.au/movies/sites/sbs.com.au.film/files/styles/full/public/lord-of-war_704.jpg?itok=8TW8xV4i",
      title: "Lord of War",
      about: "The 20-year arms dealing career of Queens, N.Y., outcast Yuri Orlov (Nicolas Cage) serves as a window onto the end of the Cold War and the emergence of worldwide terrorism. He finds himself reassuring his more ethically challenged younger brother, Vitaly (Jared Leto), while adeptly sidestepping the pursuit of federal agent Jack Lawrence (Ethan Hawke). The globetrotting arms dealer also pursues the woman of his dreams, supermodel Ava Fontaine (Bridget Moynahan).",
      trailer: "https://www.youtube.com/embed/AXgyoER0aRc"
    },
    { img: "https://i.ytimg.com/vi/b4pZLqI6t6E/maxresdefault.jpg",
      title: "Cruel Intentions",
      about: "Cruel Intentions is a 1999 American teen romantic drama film written and directed by Roger Kumble and starring Sarah Michelle Gellar, Ryan Phillippe, Reese Witherspoon, and Selma Blair. The plot adapts the 1782 novel Les Liaisons dangereuses, modernized among wealthy high school teenagers in New York City.",
      trailer: "https://www.youtube.com/embed/UzlKsS-IhEo"
    },
    { img: "https://images.squarespace-cdn.com/content/v1/52d6d1ede4b0b322e9c7a2ea/1594785574533-E21ESB1HOBNS5HTOY9VX/imdb4.jpg?format=1000w",
      title: "Killing Them Softly",
      about: "When rival crook Johnny Amato (Vincent Curatola) hatches a plan to rob a card game run by mob lackey Markie (Ray Liotta), he picks a low-rent thug named Frankie (Scoot McNairy) to do the job. Frankie picks a less-than-ideal partner (Ben Mendelsohn) to help him, but despite their combined incompetence, they manage to make off with the mob's money. In retaliation, Markie's bosses hire Jackie Cogan (Brad Pitt), a mob enforcer, to eradicate those responsible.",
      trailer: "https://www.youtube.com/embed/Bll2p2WhrIA"
    },
    { img: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/11/28/Pictures/_1395fcee-f2fc-11e8-84c6-a70c31b0a588.jpg",
      title: "Troy",
      about: "Based on Homer's Iliad, this epic portrays the battle between the ancient kingdoms of Troy and Sparta. While visiting Spartan King Menelaus (Brendan Gleeson), Trojan prince Paris (Orlando Bloom) falls for Menelaus' wife, Helen (Diane Kruger), and takes her back to Troy. Menelaus' brother, King Agamemnon (Brian Cox), having already defeated every army in Greece, uses his brother's fury as a pretext to declare war against Troy, the last kingdom preventing his control over the Aegean Sea.",
      trailer: "https://www.youtube.com/embed/znTLzRJimeY"
    },
    { img: "https://www.loudandquiet.com/files/2016/10/eminem-8-mile.jpg",
      title: "8 Mile",
      about: "The people of Detroit know 8 Mile as the city limit, a border, a boundary. It is also a psychological dividing line that separates Jimmy Smith Jr. (Eminem) from where and who he wants to be. A provocative fictional examination of a critical week in Jimmy's life.",
      trailer: "https://www.youtube.com/embed/axGVrfwm9L4"
    },
    { img: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/mgm-WICKERPARK-Full-Image_GalleryBackground-en-US-1483993512673._SX1080_.jpg",
      title: "Wicker Park",
      about: "Matthew (Josh Hartnett) and Lisa (Diane Kruger) are madly in love. But one day Lisa vanishes. Simon enters an emotional tailspin and begins an obsessive quest to find her. Years later, Simon's life has stabilized, and he's in a new relationship. Then he thinks he sees Lisa in a restaurant and fixates on her all over again. He snoops around and eventually tracks down the mysterious woman from the restaurant. Her name is Alex (Rose Byrne), but she acts just like Lisa.",
      trailer: "https://www.youtube.com/embed/vFo0u-nXbGk"
    },
    { img: "https://a.ltrbxd.com/resized/sm/upload/om/dz/op/pt/great-expectations-1200-1200-675-675-crop-000000.jpg?k=c668fb8d34",
      title: "Great Expectations",
      about: "This modern adaptation of Dickens' classic coming of age story sees the young and naïve Finn, who falls in love with Estella, a girl raised with the strict intention of breaking men's hearts. When he is grown up and living in New York, having become a successful painter, Estella reappears in his life and Finn falls deeply in love, knowing all the while that it is a feeling that can never be returned.",
      trailer: "https://www.youtube.com/embed/6EugG5ayMfs"
    },
    { img: "https://cdn.onebauer.media/one/empire-tmdb/films/2034/images/A1S9fBzc4Wepc6onnCd9eVR2FLp.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill",
      title: "Training Day",
      about: "Police drama about a veteran officer who escorts a rookie on his first day with the LAPD's tough inner-city narcotics unit. Training Day is a blistering action drama that asks the audience to decide what is necessary, what is heroic and what crosses the line in the harrowing gray zone of fighting urban crime. Does law-abiding law enforcement come at the expense of justice and public safety? If so, do we demand safe streets at any cost?",
      trailer: "https://www.youtube.com/embed/CKxKB3IFdIs"
    },
    { img: "https://variety.com/wp-content/uploads/2017/01/the-departed.jpg",
      title: "The Departed",
      about: "South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jack Nicholson). As Billy gains the mobster's trust, a career criminal named Colin Sullivan (Matt Damon) infiltrates the police department and reports on its activities to his syndicate bosses. When both organizations learn they have a mole in their midst, Billy and Colin must figure out each other's identities to save their own lives.",
      trailer: "https://www.youtube.com/embed/iojhqm0JTW4"
    }, 
    { img: "https://images.squarespace-cdn.com/content/v1/52d6d1ede4b0b322e9c7a2ea/1442286509205-E0F6OP4H7YS4U7MD7W5C/image-asset.jpeg",
      title: "Sicario",
      about: "Sicario ([si. ˈka. ɾjo], Spanish for hitman) is a 2015 action thriller film directed by Denis Villeneuve, written by Taylor Sheridan and starring Emily Blunt, Benicio del Toro, Josh Brolin, and Victor Garber.",
      trailer: "https://www.youtube.com/embed/G8tlEcnrGnU"
    },
    { img: "https://www.indiewire.com/wp-content/uploads/2017/02/christoph-waltz-in-inglourious-basterds.jpg",
      title: "Inglourious Basterds",
      about: "It is the first year of Germany's occupation of France. Allied officer Lt. Aldo Raine (Brad Pitt) assembles a team of Jewish soldiers to commit violent acts of retribution against the Nazis, including the taking of their scalps. He and his men join forces with Bridget von Hammersmark, a German actress and undercover agent, to bring down the leaders of the Third Reich. Their fates converge with theater owner Shosanna Dreyfus, who seeks to avenge the Nazis' execution of her family.",
      trailer: "https://www.youtube.com/embed/KnrRy6kSFF0"
    },
    { img: "https://www.themoviedb.org/t/p/w780/1uKHoFWyYJn060dpIXUCU7Wbc15.jpg",
      title: "Fury",
      about: "In April 1945, the Allies are making their final push in the European theater. A battle-hardened Army sergeant named Don Wardaddy Collier (Brad Pitt), leading a Sherman tank and a five-man crew, undertakes a deadly mission behind enemy lines. Hopelessly outnumbered, outgunned and saddled with an inexperienced soldier (Logan Lerman) in their midst, Wardaddy and his men face overwhelming odds as they move to strike at the heart of Nazi Germany.",
      trailer: "https://www.youtube.com/embed/DNHuK1rteF4"
    },
    { img: "https://i.guim.co.uk/img/media/9139b2ac8621c32ccc78aabf5882a8b3cf599997/151_524_3854_2312/master/3854.jpg?width=700&quality=85&auto=format&fit=max&s=4a409e2bee79ae018aacc253af6966ac",
      title: "There Will Be Blood",
      about: "Ruthless silver miner, turned oil prospector, Daniel Plainview moves to oil-rich California. Using his adopted son HW to project a trustworthy, family-man image, Plainview cons local landowners into selling him their valuable properties for a pittance. However, local preacher Eli Sunday suspects Plainviews motives and intentions, starting a slow-burning feud that threatens both their lives.",
      trailer: "https://www.youtube.com/embed/FeSLPELpMeM"
    },
    { img: "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2018/04/gangsofny_1280.png",
      title: "Gangs of New York",
      about: "Amsterdam Vallon (Leonardo DiCaprio) is a young Irish immigrant released from prison. He returns to the Five Points seeking revenge against his father's killer, William Cutting (Daniel Day-Lewis), a powerful anti-immigrant gang leader. He knows that revenge can only be attained by infiltrating Cutting's inner circle. Amsterdam's journey becomes a fight for personal survival and to find a place for the Irish people in 1860's New York.",
      trailer: "https://www.youtube.com/embed/UYsS_3zdwmA"
    },  
    { img: "http://www.tasteofcinema.com/wp-content/uploads/2016/06/The-Other-Boleyn-Girl.jpg",
      title: "The Other Boleyn Girl",
      about: "King Henry VIII (Eric Bana) lacks an heir. Seeing this as an opportunity for personal gain, the Duke of Norfolk (David Morrissey) and Sir Thomas Boleyn (Mark Rylance) persuade Thomas' daughter Anne (Natalie Portman) to seduce the king. But Henry falls in love with Anne's sister, Mary (Scarlett Johansson), instead. When Mary becomes pregnant, she's confined to bed, with charged with Anne keeping the king from straying -- but the plan backfires when Anne seeks the king's affections for herself.",
      trailer: "https://www.youtube.com/embed/rTqb60gtbAE"
    },
    { img: "https://www.indiewire.com/wp-content/uploads/2017/09/shutterstock_5883971i.jpg",
      title: "Eternal Sunshine of the Spotless Mind",
      about: "After a painful breakup, Clementine (Kate Winslet) undergoes a procedure to erase memories of her former boyfriend Joel (Jim Carrey) from her mind. When Joel discovers that Clementine is going to extremes to forget their relationship, he undergoes the same procedure and slowly begins to forget the woman that he loved. Directed by former music video director Michel Gondry, the visually arresting film explores the intricacy of relationships and the pain of loss.",
      trailer: "https://www.youtube.com/embed/Ps5j7QVWmVk"
    },
    { img: "https://media2.fdncms.com/rochester/imager/brenton-thwaites-and-karen-gillan-in-oculus/u/zoom/2369539/movie_review3-1.jpg",
      title: "Oculus",
      about: "Haunted by the violent demise of their parents 10 years earlier, adult siblings Kaylie (Karen Gillan) and Tim (Brenton Thwaites) are now struggling to rebuild their relationship. Kaylie suspects that their antique mirror, known as the Lasser Glass, is behind the tragedy. The seemingly harmless reflections contain a malevolent, supernatural force that infects the mind of anyone who gazes into it. As Kaylie gets closer to the truth, the siblings become caught in the mirror's evil spell.",
      trailer: "https://www.youtube.com/embed/dYJrxezWLUk"
    },
    { img: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/weinstein-TWC1021-Full-Image_GalleryBackground-en-US-1483993185333._RI_.jpg",
      title: "1408",
      about: "Mike Enslin (John Cusack) is a successful author who enjoys worldwide acclaim debunking supernatural phenomena -- before he checks into the Dolphin Hotel, that is. Ignoring the warnings of the hotel manager (Samuel L. Jackson), he learns the meaning of real terror when he spends the night in a reputedly haunted room.",
      trailer: "https://www.youtube.com/embed/WIASqPZqnhs"
    },
    { img: "https://static.rogerebert.com/uploads/review/primary_image/reviews/nick-and-norahs-infinite-playlist-2008/EB20081002REVIEWS810020305AR.jpg",
      title: "Nick and Norah's Infinite Playlist",
      about: "Nick (Michael Cera) cannot stop obsessing over his ex-girlfriend, Tris (Alexis Dziena), until Tris' friend Norah (Kat Dennings) suddenly shows interest in him at a club. Thus beings an odd night filled with ups and downs as the two keep running into Tris and her new boyfriend while searching for Norah's drunken friend, Caroline (Ari Graynor), with help from Nick's band mates. As the night winds down, the two have to figure out what they want from each other.",
      trailer: "https://www.youtube.com/embed/xxL3Baz-5es"
    },
    { img: "https://images.squarespace-cdn.com/content/v1/59e512ddf43b55c29c71b996/1546287560885-PRQ8NWR6SKJCUN1289Y9/jumper.jpeg?format=1000w",
      title: "Jumper",
      about: "Aimless David Rice (Hayden Christensen) has the ability to instantly transport himself to any place he can imagine. He uses that gift to globe-trot, living on money he steals by jumping into bank vaults. He's captured by the evil Roland Cox (Samuel L. Jackson), who knows how to keep David from jumping. David escapes and reunites with his high school crush, Millie (Rachel Bilson), then forms an alliance with fellow jumper Griffin (Jamie Bell) and prepares for mortal combat with Cox.",
      trailer: "https://www.youtube.com/embed/eLqE8rqNPbk"
    },
    { img: "https://bloximages.newyork1.vip.townnews.com/qconline.com/content/tncms/assets/v3/editorial/2/c9/2c9a691f-2edf-5622-85e8-2aef773c7d31/535e5d906ed03.image.jpg",
      title: "Limitless",
      about: "Facing unemployment and his girlfriend's rejection, writer Eddie Morra (Bradley Cooper) is sure that he has no future. That all changes when an old friend gives him a drug that produces enhanced mental acuity. Stoked on the untested chemical, Eddie rises to the top of the financial world and attracts the attention of a tycoon (Robert De Niro) who intends to use him to make a fortune. But terrible side-effects and a dwindling supply threaten to collapse Eddie's house of cards.",
      trailer: "https://www.youtube.com/embed/4TLppsfzQH8"
     },
     { img: "https://i.ytimg.com/vi/mnJegNyAb1w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJVOambYcy9tgYPPFOuOPLe95VmQ",
       title: "Source Code",
       about: "Helicopter pilot Colter Stevens (Jake Gyllenhaal) is part of a top-secret military operation that enables him to experience the last few minutes in the life of Sean Fentress, a man who died in a commuter-train explosion. The purpose of Colter's mission is to learn the identity of the bomber and prevent a similar catastrophe. As Colter lives Sean's final moments, he becomes more certain that he can prevent the first tragedy from occurring -- as long as he doesn't run out of time.",
       trailer: "https://www.youtube.com/embed/mnJegNyAb1w"
     },
     { img: "https://static.onecms.io/wp-content/uploads/sites/6/2015/08/this-is-the-end_0_0.jpg",
       title: "This Is The End",
       about: "In Hollywood, actor James Franco is throwing a party with a slew of celebrity pals. Among those in attendance are his buddies Jonah Hill, Seth Rogen, Jay Baruchel, Danny McBride and Craig Robinson. Suddenly, an apocalypse of biblical proportions erupts, causing untold carnage among Tinseltown's elite and trapping Franco's party in his home. As the world they knew disintegrates outside, cabin fever and dwindling supplies threaten to tear the six friends apart.",
       trailer: "https://www.youtube.com/embed/RmC34g6tIAI"
     },
     { img: "https://m.media-amazon.com/images/M/MV5BMTcyMzU4NzQ1OF5BMl5BanBnXkFtZTcwMjI2OTAyNw@@._V1_.jpg",
       title: "Gone in 60 Seconds",
       about: "A car thief is forced to steal 50 luxury vehicles in one night in order to save the life of his brother, who has fallen foul of a dangerous crime lord. Once the most successful car thief in California, he must reassemble his old gang to fulfil the almost impossible mission. His task is further hampered by a rival band of thieves and, of course, the local police.",
       trailer: "https://www.youtube.com/embed/ckNQ44qBC5o"
     },
     { img: "https://www.alletop10lijstjes.nl/wp-content/uploads/2020/01/The-Fast-and-the-Furious.jpg",
       title: "The Fast and the Furious",
       about: "Dominic Toretto (Vin Diesel) enjoys the adrenaline of street car racing and his fans treat him like a rock star. After a blazing encounter with the ruthless Johnny Tran, Dom decides to take Brian (Paul Walker), a newcomer to street racing, under his wing. Dom's sister Mia sees something she likes in Brian, too. Trouble is, neither of them realize he's an undercover cop, and Dominic and his rival Johnny Tran are both the prime suspects in a case involving dirty money and big-rig hijacking.",
       trailer: "https://www.youtube.com/embed/ZsJz2TJAPjw"
     },
     { img: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555446602/shape/mentalfloss/579857.png",
       title: "Enemy at the Gates",
       about: "Vassili (Jude Law) is a young Russian sharpshooter who becomes a legend when a savvy polical officer (Joseph Fiennes) makes him the hero of his propaganda campaign. Their friendship is threatened when both men fall in love with a beautiful female soldier (Rachel Weisz). As the battle for the city rages, Vassili faces the ultimate challenge when the Nazi command dispatches its most elite marksman (Ed Harris) to hunt down and kill the man who has become the hope of all Russia.",
       trailer: "https://www.youtube.com/embed/4O-sMh_DO6I"
     },
     { img: "https://i.guim.co.uk/img/media/d2adc7230576dc36fe0b89173caf6ec08e582cac/221_6_4632_2779/master/4632.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=94728a7265d7dedfdcfd71c04394e795",
       title: "Jarhead",
       about: "Jarhead is a 2005 American biographical war drama film based on U.S. Marine Anthony Swofford's 2003 memoir of the same name. The film was directed by Sam Mendes, starring Jake Gyllenhaal as Swofford with Jamie Foxx, Peter Sarsgaard, Lucas Black, and Chris Cooper.",
       trailer: "https://www.youtube.com/embed/-aBP-c28_1M"
     },
     { img: "https://static.onecms.io/wp-content/uploads/sites/6/2002/06/the-bourne-identity-2002-2000.jpg",
       title: "Jason Bourne",
       about: "Bourne films are a series of action thriller films based on the character Jason Bourne, a CIA assassin suffering from dissociative amnesia who must figure out who he is, created by author Robert Ludlum. All three of Ludlum's novels were adapted for the screen, featuring Matt Damon as the title character in each.",
       trailer: "https://www.youtube.com/embed/skODF8w4mMY"
     },
     { img: "https://i1.wp.com/www.qwipster.net/wp-content/uploads/2019/03/thebeach.jpg?fit=1920%2C1080",
       title: "The Beach",
       about: "Richard, a young man, travels to Thailand and finds himself in possession of an odd map which is rumoured to lead to an island paradise. Accompanied by a few friends, he sets out to find it.",
       trailer: "https://www.youtube.com/embed/7vSsx1RkGls"
     },
     { img: "https://udayverma.files.wordpress.com/2015/07/collateral.jpg",
       title: "Collateral",
       about: "After a long day, LA taxi driver Max is about to knock off when sharp-suited Vincent offers him $600 to make five stops. Sounds good until Vincent turns out to be a merciless hitman and each one of those stops involves a hit. As the night goes on, Max starts to wonder if he'll live to see the sunrise, as the pair are hunted by the police and the FBI.",
       trailer: "https://www.youtube.com/embed/Pwrq3O6XDPs"
     },
     { img: "https://media.timeout.com/images/101717925/630/472/image.jpg",
       title: "Miami Vice",
       about: "A case involving drug lords and murder in South Florida takes a personal turn for undercover detectives Sonny Crockett (Colin Farrell) and Ricardo Tubbs (Jamie Foxx). Unorthodox Crockett gets involved romantically with the Chinese-Cuban wife of a trafficker of arms and drugs, while Tubbs deals with an assault on those he loves.",
       trailer: "https://www.youtube.com/embed/6WCKJ7KaIZY"
     },
     { img: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/share_link_image_large/public/screenshots/csm-movie/the-prestige-ss1.jpg?itok=kGYbWv9_",
       title: "The Prestige",
       about: "Period thriller set in Edwardian London where two rival magicians, partners until the tragic death of an assistant during a show, feud bitterly after one of them performs the ultimate magic trick - teleportation. His rival tries desperately to uncover the secret of his routine, experimenting with dangerous new science as his quest takes him to the brink of insanity and jeopardises the lives of everyone around the pair.",
       trailer: "https://www.youtube.com/embed/RLtaA9fFNXU"
     },
     { img: "https://static.rogerebert.com/uploads/review/primary_image/reviews/my-blueberry-nights-2008/EB20080417REVIEWS661147164AR.jpg",
       title: "My Blueberry Nights",
       about: "After her boyfriend of five years breaks up with her, Elizabeth (Norah Jones) consoles herself by consuming creamy confections at a sympathetic cafe owner's (Jude Law) eatery. She sets out on a road trip, supporting herself as a waitress along the way. Elizabeth meets a host of interesting characters on her journey, including an alcoholic policeman (David Strathairn), his unfaithful wife (Rachel Weisz), and a gambler (Natalie Portman).",
       trailer: "https://www.youtube.com/embed/KZ3xJZBej00"
     },
     { img: "https://www.avforums.com/styles/avf/editorial/block//8b3af5397c4ab394263c5b72883896ee_3x3.jpg",
       title: "Alfie",
       about: "British-born ladies' man Alfie (Jude Law) exploits his job as a New York City limousine driver to meet and sleep with attractive women -- which infuriates his pseudo-girlfriend Julie (Marisa Tomei), a single mom. His libertine lifestyle is interrupted, however, when his girl-crazy ways end up hurting his best friend, Marlon (Omar Epps). Desperate, Alfie attempts a go at monogamy with the ravishing Nikki (Sienna Miller), but even her good looks aren't enough to keep him out of trouble for long.",
       trailer: "https://www.youtube.com/embed/T-whOtC8aak"
     },
     { img: "https://enterprise.press/wp-content/uploads/2017/08/HotTubTimeMachine1.jpg",
       title: "Hot Tub Time Machine",
       about: "Four pals are stuck in a rut in adulthood: Adam (John Cusack) has just been dumped, Lou (Rob Corddry) is a hopeless party animal, Craig (Craig Robinson) is a henpecked husband, and Jacob (Clark Duke) does nothing but play video games in his basement. But they get a chance to brighten their future by changing their past after a night of heavy drinking in a ski-resort hot tub results in their waking up in 1986.",
       trailer: "https://www.youtube.com/embed/EM0VwEkxWTg"
     },
     { img: "https://www.si.com/.image/t_share/MTY4MDI4Njc2Njk0MDI1NDg5/waterboy-still-3jpg.jpg",
       title: "The Waterboy",
       about: "Raised by his overprotective mother, Helen (Kathy Bates), Bobby Boucher Jr. (Adam Sandler) is the water boy for a successful college football team coached by Red Beaulieu (Jerry Reed). When Beaulieu fires Bobby, he takes up the same position for a losing rival team, led by despairing Coach Klein (Henry Winkler). After witnessing Bobby beat up a player who teased him too much, Klein adds him to the roster as a linebacker. Soon, Klein's players are championship contenders.",
       trailer: "https://www.youtube.com/embed/vVLvkqfTRVQ"
     },
     { img: "https://4.bp.blogspot.com/-NRqLMmYsDyY/Vtr9CnwPJeI/AAAAAAAAIU0/YkBgnt8Xs6Q/s1600/Just-Friends-DI.jpg",
       title: "Just Friends",
       about: "High school student Chris Brander (Ryan Reynolds) loves his best friend, Jamie Palamino (Amy Smart). He finally confesses his feelings, but she tells him that she just wants to be friends, and he leaves town in shame. Ten years later, Chris is a successful record executive and involved with self-absorbed pop star Samantha James (Anna Faris). He still pines for Jamie, though, and when his plans to go to Paris for the holidays fall through, he returns to his hometown to try and win her heart.",
       trailer: "https://www.youtube.com/embed/vIBBVzy5UoQ"
     },
     { img: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFQBBjSnvLkLRLHbHTxtCw5xW9xA2lE7jyE3qBNvA-XrdhHr2D1pHAJgG74-4RvwjmrFn1y1O4E9V3aKbigr5xplb2b.jpg?r=596",
       title: "Scary Movie 2",
       about: "Professor Oldman convinces four teenagers to spend a night in a haunted house. Once there, they encounter strange happenings and decide to get rid of the ghost.",
       trailer: "https://www.youtube.com/embed/zCFZUZxBVuI"
     },
     { img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1051,w_1872,x_0,y_28/f_auto,q_auto,w_1100/v1596744567/shape/mentalfloss/627135-macall_polay_-_c_2010_columbia_tristar_marketing_group_inc._all_rights_reserved.jpg",
       title: "The Other Guys",
       about: "Unlike their heroic counterparts on the force, desk-bound NYPD detectives Gamble (Will Ferrell) and Hoitz (Mark Wahlberg) garner no headlines as they work day to day. Gamble relishes his job as a paper pusher, but Hoitz is itching to get back on the street and make a name for himself. When a seemingly minor case turns out to be a big deal, the two cops get the opportunity to finally prove to their comrades that they have the right stuff.",
       trailer: "https://www.youtube.com/embed/kGO9IF67lqw"
     },
     { img: "https://cdn.mos.cms.futurecdn.net/03fad4d3f43c4f4dddbcf7e5ca6a57d4.jpg",
       title: "Triple 9",
       about: "Bullets fly on the Atlanta freeway as armed thieves make their getaway following a bank robbery in broad daylight. Unhappy with the results, ruthless gangster Irina Vlaslov orders the men to pull off another job. One member of the team is Marcus Belmont (Anthony Mackie), a crooked cop who gets saddled with Chris Allen (Casey Affleck), his new but incorruptible police partner. As Belmont and his cohorts lay the groundwork for the heist, they come up with a devious plan to use Allen as their pawn.",
       trailer: "https://www.youtube.com/embed/JzUtr5sjRvU"
     },
     { img: "https://www.slantmagazine.com/wp-content/uploads/2016/03/waroftheworlds.jpg",
       title: "War of the Worlds",
       about: "Dockworker Ray Ferrier (Tom Cruise) struggles to build a positive relationship with his two children, Rachel (Dakota Fanning) and Robbie (Justin Chatwin). When his ex-wife, Mary Ann (Miranda Otto), drops them off at Ferrier's house, it seems as though it will be just another tension-filled weekend. However, when electromagnetic pulses of lightning strike the area, the strange event turns out to be the beginning of an alien invasion, and Ferrier must now protect his children as they seek refuge.",
       trailer: "https://www.youtube.com/embed/SM6aEEjc5hA" 
     },
     { img: "https://www.highonfilms.com/wp-content/uploads/2017/03/Two-For-The-Money-featured.jpg",
       title: "Two for the Money",
       about: "After suffering a career-ending injury, a former college football star aligns himself with one of the most renowned touts in the sports-gambling business.",
       trailer: "https://www.youtube.com/embed/vcsdAwqZ-WI"
     },
     { img: "https://www.tri-cityherald.com/latest-news/6epkn0/picture247929630/alternates/FREE_768/Film-Family-Man-1.jpg",
       title: "The Family Man",
       about: "Jack's lavish, fast-paced lifestyle changes one Christmas night when he stumbles into a grocery store holdup and disarms the gunman. The next morning he wakes up in bed lying next to Kate (Tea Leoni), his college sweetheart he left in order to pursue his career, and to the horrifying discovery that his former life no longer exists. As he stumbles through this alternate suburban universe, Jack finds himself at a crossroad where he must choose between his high-power career and the woman he loves.",
       trailer: "https://www.youtube.com/embed/OnouJoQs52c"
     },
     
    { img: "https://images.squarespace-cdn.com/content/v1/54fb76f1e4b0d3db827c6b07/1426886835821-D9QNNL9XX54ERRD73RYY/Glory-6.jpg",
      title: "Glory",
      about: "Following the Battle of Antietam, Col. Robert Gould Shaw (Matthew Broderick) is offered command of the United States' first all-African-American regiment, the 54th Massachusetts Volunteer Infantry. With junior officer Cabot Forbes (Cary Elwes), Shaw puts together a strong and proud unit, including the escaped slave Trip (Denzel Washington) and the wise gravedigger John Rawlins (Morgan Freeman). At first limited to menial manual tasks, the regiment fights to be placed in the heat of battle.",
      trailer: "https://www.youtube.com/embed/0hVrYRqeT5M"
    }

  ]

//   { img: "",
//   title: "",
//   about: "",
//   trailer: ""
//   }


  export default movieData;