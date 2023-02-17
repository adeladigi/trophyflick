




const recList = [
   { img: "https://static01.nyt.com/images/2019/01/25/arts/25io/merlin_149493936_dbf13c6c-8b81-45f4-932d-f8ae88772797-superJumbo.jpg",
     title: "IO",
     about: "In a post-apocalyptic time, the earth has been rendered toxic, and most of humanity has abandoned the planet and colonised one of Jupiter's moons, IO. But young scientist Sam Walden has stayed behind and dedicated herself to finding a way for human beings to survive on Earth. After sending out a radio transmission to see if she can locate anyone else, a man named Micah arrives. He believes there is no hope of survival and intends to take the final shuttle to IO in 48 hours.",
     trailer: "https://www.youtube.com/embed/y3GLhAumiec",
     posted: "2/17/2023"
   },
   { img: "https://consequence.net/wp-content/uploads/2019/02/warriors-e1549315454315.jpg?quality=80",
     title: "The Warriors",
     about: "A turf battle between New York City street gangs that rages from Coney Island to the Bronx. The Warriors are mistakenly fingered for the killing of a gang leader. Soon they have every gang in the city out to get revenge and they must make their way across the city to their own turf.",
     trailer: "https://www.youtube.com/embed/--gdB-nnQkU",
     posted: "2/17/2023"
   },
   { img: "https://i0.wp.com/fugitives.com/wp-content/uploads/2022/07/ezgif-1-56f8773921.jpg?resize=696%2C391&ssl=1",
     title: "The Black Phone",
     about: "Finney Shaw is a shy but clever 13-year-old boy who's being held in a soundproof basement by a sadistic, masked killer. When a disconnected phone on the wall starts to ring, he soon discovers that he can hear the voices of the murderer's previous victims -- and they are dead set on making sure that what happened to them doesn't happen to Finney",
     trailer: "https://www.youtube.com/embed/3eGP6im8AZA",
     posted: "2/17/2023"
   },
   { img: "https://www.hollywoodreporter.com/wp-content/uploads/2022/12/Print-Issue-38-biz_screen-Puss-In-Boots-MAIN-Publicity-H-2022.jpg?w=1024",
     title: "Puss in Boots: The Last Wishs",
     about: "Puss in Boots discovers that his passion for adventure has taken its toll when he learns that he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
     trailer: "https://www.youtube.com/embed/TGqWphOB9io",
     posted: "2/17/2023"
   },
   { img: "https://i.guim.co.uk/img/media/9ad395fbcc31f8f1870305b2ed01343a4611d034/20_0_860_516/master/860.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=be214c3fefd3070499788b9a361de253",
     title: "A Scanner Darkly",
     about: "In the near future, as America virtually loses the war on drugs, Robert Arctor, a narcotics cop in Orange County, Calif., becomes an addict when he goes under cover. He is wooing Donna, a dealer, to ferret out her supplier. At the same time, he receives orders to spy on his housemates, one of whom is suspected of being Donna's biggest customer.",
     trailer: "https://www.youtube.com/embed/l1-xKcf9Q4s",
     posted: "2/17/2023"
   },
   { img: "https://thisorthatedition.com/wp-content/uploads/2016/05/darkcity-head.jpg",
     title: "Dark City",
     about: "John Murdoch (Rufus Sewell) awakens alone in a strange hotel to find that he is wanted for a series of brutal murders. The problem is that he can't remember whether he committed the murders or not. For one brief moment, he is convinced that he has gone completely mad. Murdoch seeks to unravel the twisted riddle of his identity. As he edges closer to solving the mystery, he stumbles upon a fiendish underworld controlled by a group of ominous beings collectively known as the Strangers.",
     trailer: "https://www.youtube.com/embed/gt9HkO-cGGo",
     posted: "2/17/2023"
  },
   { 
     img: "https://i-viaplay-com.akamaized.net/viaplay-prod/275/804/1489674481-ae1c1b1a2c4d222744f5659731f0c902b8990837.jpg?width=1600&height=900",
     title: "The Autopsy Of Jane Doe",
     about: "A team of father and son coroners investigate the death of a beautiful `Jane Doe'. As they aim to ascertain who she is and how she died they find an increasingly bizarre sequence of clues.",
     trailer: "https://www.youtube.com/embed/mtTAhXuiRTc",
     posted: "1/7/2022"
   },
   {
     img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/79CA/production/_118687113_thewarrens.jpg",
     title: "The Conjuring",
     about: "In 1970, paranormal investigators and demonologists Lorraine (Vera Farmiga) and Ed (Patrick Wilson) Warren are summoned to the home of Carolyn (Lili Taylor) and Roger (Ron Livingston) Perron. The Perrons and their five daughters have recently moved into a secluded farmhouse, where a supernatural presence has made itself known. Though the manifestations are relatively benign at first, events soon escalate in horrifying fashion, especially after the Warrens discover the house's macabre history.",
     trailer: "https://www.youtube.com/embed/k10ETZ41q5o",
     posted: "10/23/2021"
   },
   { 
     img: "https://www.indiewire.com/wp-content/uploads/2021/09/halloween-kills.jpg",
     title: "Halloween Kills",
     about: "Michael Myers is a fictional character from the Halloween series of slasher films. He first appears in 1978 in John Carpenter's Halloween as a young boy who murders his elder sister, Judith Myers. Fifteen years later, he returns home to Haddonfield to murder more teenagers",
     trailer: "https://www.youtube.com/embed/hL6R3HmQfPc",
     posted: "10/16/2021"
   },
   {
     img: "https://api.time.com/wp-content/uploads/2016/11/manchester-by-the-sea.jpg",
     title: "Manchester by the Sea",
     about: "After the death of his older brother Joe, Lee Chandler (Casey Affleck) is shocked that Joe has made him sole guardian of his teenage nephew Patrick. Taking leave of his job as a janitor in Boston, Lee reluctantly returns to Manchester-by-the-Sea, the fishing village where his working-class family has lived for generations. There, he is forced to deal with a past that separated him from his wife, Randi (Michelle Williams), and the community where he was born and raised.",
     trailer: "https://www.youtube.com/embed/gsVoD0pTge0",
     posted: "10/13/2021"
   },
   { img: "https://cdn.vox-cdn.com/thumbor/CFBo3ciH3HdFZ7zW4F00HWohnjk=/0x43:1860x1017/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21973662/1_08izsKCWOghcdIPAZsT2Eg.png",
     title: "Jennifer's Body",
     about: "When a demon takes possession of her, high-school hottie Jennifer (Megan Fox) turns a hungry eye on guys who never stood a chance with her before. While evil Jennifer satisfies her appetite for human flesh with the school's male population, her nerdy friend, Needy (Amanda Seyfried), learns what's happening and vows to put an end to the carnage.",
     trailer: "https://www.youtube.com/embed/ia38f-pdZGA",
     posted: "10/4/2021"
   },
   {
     img: "https://d279m997dpfwgl.cloudfront.net/wp/2020/03/hunt-4-5e42fb34edb63-1.jpg",
     title: "The Hunt",
     about: "Twelve strangers wake up in a clearing. They don't know where they are -- or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted, Crystal, turns the tables on her pursuers.",
     trailer: "https://www.youtube.com/embed/sowGYbxTPgU",
     posted: "10/3/2021"
   },
   { img: "https://viewerscommentary.files.wordpress.com/2016/10/the-final-girls-angela-trimbur-malin-c3a5kerman-tory-n-thompson-adam-devine-e1476519833705.jpg",
   title: "The Final Girls",
   about: "Max, recently orphaned, goes to see a screening of a B-horror movie that her mother made 20 years earlier. When Max and her friends find themselves in the world of the film itself, they must apply their knowledge of horror tropes to survive.",
   trailer: "https://www.youtube.com/embed/zreNh78kTjg",
   posted: "9/21/2021"
  },
  { img: "https://www.cinematographe.it/wp-content/uploads/2021/07/Boss-Level-Film.jpg",
  title: "Boss Level",
  about: "A former special forces agent is trapped in a time loop and relives his death over and over again. To escape the terrible situation, he must track down those responsible and stop them.",
  trailer: "https://www.youtube.com/embed/LfRCwf1VtBE",
  posted: "9/21/2021"
  },
   { img: "https://br.web.img3.acsta.net/r_1280_720/pictures/20/06/23/12/04/3838441.jpg",
   title: "Coma",
   about: "A man awakens in a chaotic dystopian world filled with memories of comatose patients and nonexistent laws of physics.",
   trailer: "https://www.youtube.com/embed/QG7cWYyNN8I",
   posted: "9/25/2021"
   },
   { img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F02%2F17%2FWillys_Wonderland_2.jpg",
   title: "Willy's Wonderland",
   about: "When his car breaks down, a quiet loner agrees to clean an abandoned family fun center in exchange for repairs. He soon finds himself waging war against possessed animatronic mascots while trapped inside Willy's Wonderland.",
   trailer: "https://www.youtube.com/embed/0v27rfaoB2Y",
   posted: "9/25/2021"
   },
  { img: "https://variety.com/wp-content/uploads/2014/04/gone-girl-davide-finsher-ben-affleck.jpg?w=681&h=383&crop=1",
  title: "Gone Girl",
  about: "In Carthage, Mo., former New York-based writer Nick Dunne (Ben Affleck) and his glamorous wife Amy (Rosamund Pike) present a portrait of a blissful marriage to the public. However, when Amy goes missing on the couple's fifth wedding anniversary, Nick becomes the prime suspect in her disappearance. The resulting police pressure and media frenzy cause the Dunnes' image of a happy union to crumble, leading to tantalizing questions about who Nick and Amy truly are.",
  trailer: "https://www.youtube.com/embed/0VGD_jLyE9Y",
  posted: "9/24/2021"
  },
  { img: "https://cdn.theatlantic.com/thumbor/JuRr5O23Oqvdz8KgPM68BbGqxQ8=/79x44:1843x1036/1600x900/media/img/mt/2016/03/memento/original.jpg",
  title: "Memento",
  about: "Leonard (Guy Pearce) is tracking down the man who raped and murdered his wife. The difficulty, however, of locating his wife's killer is compounded by the fact that he suffers from a rare, untreatable form of memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.",
  trailer: "https://www.youtube.com/embed/4CV41hoyS8A",
  posted: "9/20/2021"
  },
    {  img: "https://www.indiewire.com/wp-content/uploads/2021/07/Blood-Red-Sky.jpeg",
       title: "Blood Red Sky",
       about: "When a group of terrorists hijacks an overnight transatlantic flight, a mysteriously ill woman must unleash a monstrous secret to protect her young son.",
       trailer: "https://www.youtube.com/embed/U8M_1eyrBtQ",
       posted: "9/1/2021"
    },
    { img: "https://christhilk.files.wordpress.com/2010/09/buried-pic.jpg",
      title: "Buried",
      about: "A civilian truck driver in Iraq, Paul Conroy (Ryan Reynolds) falls victim to a band of insurgents. An unknown length of time later, Paul awakes in a coffin, with little more than a lighter, a cell phone, and his ever-growing anxiety. Faced with a dwindling oxygen supply and a dying battery, Paul must fight panic, despair and delirium as he awaits a rescue that might not arrive in time.",
      trailer: "https://www.youtube.com/embed/d8KBYAvYpO4",
      posted: "8/20/2021"
    },
    { img: "https://images-na.ssl-images-amazon.com/images/I/81sACBsugfS._SL1500_.jpg",
    title: "A Quite Place Part 2",
    about: "Following the deadly events at home, the Abbott family must now face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they quickly realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
    trailer: "https://www.youtube.com/embed/BpdDN9d9Jio",
    posted: "8/15/2021"
    },
    { img: "https://1.bp.blogspot.com/-eiN1hLLtufo/YN1emiKkqBI/AAAAAAAAIBU/adhG95txAVkXMitynyxY5p05NRa7qpwFACLcBGAsYHQ/s1588/IMG_20210701_114852.jpg",
      title: "The Tomorrow War",
      about: "The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war against a deadly alien species.",
      trailer: "https://www.youtube.com/embed/RQjEbkV-9ZM",
      posted: "8/1/2021"
    },
    { img: "https://media.criticalhit.net/2021/05/The-House-Next-Door-1.jpg",
      title: "The House Next Door: Meet the Blacks 2",
      about: "After surviving a night of terror on the West Coast, author Carl Black moves his family back to his childhood home in Chicago. His quest to find peace and quiet takes an unexpected turn when he meets the eccentric new homeowner next door. Convinced that the man is a vampire, Carl and his oddball neighbors join forces to save themselves from the bloodsucking undead.",
      trailer: "https://www.youtube.com/embed/U1rmjEn6wnQ",
      posted: "7/27/2021"
    },
    { img: "https://www.indiewire.com/wp-content/uploads/2019/07/moon_black_us_blank_with_title.0.jpg",
      title: "Moon",
      about: "Astronaut Sam Bell's (Sam Rockwell) three-year shift at a lunar mine is finally coming to an end, and he's looking forward to his reunion with his wife (Dominique McElligott) and young daughter. Suddenly, Sam's health takes a drastic turn for the worse. He suffers painful headaches and hallucinations, and almost has a fatal accident. He meets what appears to be a younger version of himself, possibly a clone. With time running out, Sam must solve the mystery before the company crew arrives.",
      trailer: "https://www.youtube.com/embed/WWoDBcSW4_c",
      posted: "7/24/2021"
    },
    { img: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/nbcu-02490-Full-Image_GalleryCover-en-US-1533338466920._UY500_UX667_RI_VEkXjGJRLcZF2FGNTtBv52YZormmcHt15_TTW_.jpg",
      title: "Upgrade",
      about: "A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead. A billionaire inventor soon offers Trace a cure -- an artificial intelligence implant called STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman strength and agility -- skills he uses to seek revenge against the thugs who destroyed his life.",
      trailer: "https://www.youtube.com/embed/ZjwlPsqm3Sc",
      posted: "7/24/2021"
    },
    { img: "https://api.time.com/wp-content/uploads/2016/09/nocturnal-animals-facebook.jpg?quality=85",
      title: "Nocturnal Animals",
      about: "A successful Los Angeles art-gallery owner's idyllic life is marred by the constant traveling of her handsome second husband. While he is away, she is shaken by the arrival of a manuscript written by her first husband, who she has not seen in years. The manuscript tells the story of a teacher who finds a trip with his family turning into a nightmare. As Susan reads the book, it forces her to examine her past and confront some dark truths.",
      trailer: "https://www.youtube.com/embed/-H1Ii1LjyFU",
      posted: "7/20/2021"
    },
    { img: "https://static01.nyt.com/images/2020/03/26/arts/26vivarium/26vivarium-videoSixteenByNineJumbo1600.jpg",
      title: "Vivarium",
      about: "Hoping to find the perfect place to live, a couple travel to a suburban neighbourhood in which all the houses look identical. But when they try to leave the labyrinth-like development, each road mysteriously takes them back to where they started.",
      trailer: "https://www.youtube.com/embed/4FtHOApNMV4",
      posted: "7/15/2021"
    },
    { img: "https://www.indiewire.com/wp-content/uploads/2020/04/shutterstock_editorial_5883926f.jpg?w=780",
      title: "Ex Machina",
      about: "Caleb Smith (Domhnall Gleeson) a programmer at a huge Internet company, wins a contest that enables him to spend a week at the private estate of Nathan Bateman (Oscar Isaac), his firm's brilliant CEO. When he arrives, Caleb learns that he has been chosen to be the human component in a Turing test to determine the capabilities and consciousness of Ava (Alicia Vikander), a beautiful robot. However, it soon becomes evident that Ava is far more self-aware and deceptive than either man imagined.",
      trailer: "https://www.youtube.com/embed/bggUmgeMCdc",
      posted: "7/15/2021"
    },
    { img: "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdxwLoIkY2Vdp02EsCpBZ8sz2FvQD5kythUdxthlipUhDGMdj8LdNDimK941FhDhSj7IwQ--vYZ1LTVFeCYAN-IOsycP.jpg?r=2be",
      title: "The Discovery",
      about: "In the near future, due to a breakthrough scientific discovery by Dr. Thomas Harbor, there is now definitive proof of an afterlife. While countless people have chosen suicide to reset their existence, others try to decide what it all means. Among them is Dr. Harbor's son Will, who has arrived at his father's isolated compound with a mysterious young woman named Isla. There, they discover the strange acolytes who help Dr. Harbor with his experiments.",
      trailer: "https://www.youtube.com/embed/rm-FjYW24JY",
      posted: "7/15/2021"
    },
    { img: "https://media.wired.com/photos/5926c4e1cfe0d93c4743150d/master/w_2560%2Cc_limit/DontBreatheTA.jpg",
      title: "Don't Breathe",
      about: "Rocky (Jane Levy), Alex and Money are three Detroit thieves who get their kicks by breaking into the houses of wealthy people. Money gets word about a blind veteran who won a major cash settlement following the death of his only child. Figuring he's an easy target, the trio invades the man's secluded home in an abandoned neighborhood. Finding themselves trapped inside, the young intruders must fight for their lives after making a shocking discovery about their supposedly helpless victim.",
      trailer: "https://www.youtube.com/embed/76yBTNDB6vU",
      posted: "7/10/2021"
    },
    { img: "https://static01.nyt.com/images/2019/11/08/arts/06doctorsleep1/merlin_163597410_3fac8c5c-878d-4ce5-a9de-87e753bfc144-superJumbo.jpg",
      title: "Doctor Sleep",
      about: "Struggling with alcoholism, Dan Torrance remains traumatized by the sinister events that occurred at the Overlook Hotel when he was a child. His hope for a peaceful existence soon becomes shattered when he meets Abra, a teen who shares his extrasensory gift of the shine. Together, they form an unlikely alliance to battle the True Knot, a cult whose members try to feed off the shine of innocents to become immortal.",
      trailer: "https://www.youtube.com/embed/BOzFZxB-8cw",
      posted: "7/10/2021"
    },
    {
       img: "https://images.mubicdn.net/images/film/3513/cache-10182-1603805271/image-w1280.jpg",
       title: "Bronson",
       about: "In this drama based on a true story, there's no one tougher or more brutal in the English penal system than prisoner Michael Peterson, aka Charles Bronson (Tom Hardy). First incarcerated after robbing a jewelry store, the married Bronson is sentenced to seven years. But his incorrigible, savage behavior quickly gets him in trouble with guards, fellow inmates and even a dog. The only place where Bronson can't do any harm is in solitary confinement, where he spends most of his time.",
       trailer: "https://www.youtube.com/embed/g4PyMY--RnU",
       posted: "7/7/2021"
    },
    {
       img: "https://flickandmix.files.wordpress.com/2015/04/phone-booth-cover1.jpg?w=1200",
       title: "Phone Booth",
       about: "Cynical, smarmy PR man Stu Shepard picks up a ringing phone in a booth in a busy New York street to find a killer on the line. Armed with a high-powered sniper's rifle, the anonymous caller soon proves his prowess and presents Shepard with a choice - convince the police of his story before they shoot him or drop the phone and be shot. His only hope lies in self abasement and facing up to the truths of his life",
       trailer: "https://www.youtube.com/embed/JiI91igl180",
       posted: "7/5/2021"
    },
    {
       img: "https://m.media-amazon.com/images/M/MV5BNGUzN2NhZDQtZWE5YS00MGY5LWE5ZmItMDVmNDZjNjA3YzE5XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
       title: "ATM",
       about: "A murderous assailant traps three people (Alice Eve, Josh Peck, Brian Geraghty) in a small kiosk containing an automatic teller machine.",
       trailer: "https://www.youtube.com/embed/sbr2uCMJde8",
       posted: "7/5/2021"
    },
    { 
      img: "https://pyxis.nymag.com/v1/imgs/add/166/74b5b49b6b2e11e5c35b2a0be039816588-04-the-endless.rsocial.w1200.jpg",
      title: "The Endless",
      about: "Two brothers receive a cryptic video message inspiring them to revisit the UFO death cult they escaped a decade earlier. Hoping to find the closure that they couldn't find as young men, they're forced to reconsider the cult's beliefs when confronted with unexplainable phenomena surrounding the camp. As the members prepare for the coming of a mysterious event, the brothers race to unravel the seemingly impossible truth before their lives become permanently entangled with the cult.",
      trailer: "https://www.youtube.com/embed/reMwL8uYXps",
      posted: "7/2/2021"
    },
    { 
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwheresthejump.com%2Fwp-content%2Fuploads%2F2015%2F09%2FCube-1.jpg&f=1&nofb=1",
      title: "Cube",
      about: "Without remembering how they got there, several strangers awaken in a prison of cubic cells, some of them booby-trapped. There's onetime cop Quentin (Maurice Dean Wint), scientist Holloway (Nicky Guadagni), young math genius Leaven (Nicole de Boer), master of escapes Rennes (Wayne Robson), autistic savant Kazan (Andrew Miller) and architect Worth (David Hewlett), who might have more information on the maze than he lets on. The prisoners must use their combined skills if they are to escape.",
      trailer: "https://www.youtube.com/embed/Esjc0rPj3K4",
      posted: "7/2/2021"
    },

]



// { img: "",
// title: "",
// about: "",
// trailer: "",
// posted: ""
// },


export default recList;


