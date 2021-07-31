
const recList = [
    {  img: "https://www.indiewire.com/wp-content/uploads/2021/07/Blood-Red-Sky.jpeg",
       title: "Blood Red Sky",
       about: "When a group of terrorists hijacks an overnight transatlantic flight, a mysteriously ill woman must unleash a monstrous secret to protect her young son.",
       trailer: "https://www.youtube.com/embed/U8M_1eyrBtQ"
    },
    { img: "https://images-na.ssl-images-amazon.com/images/I/81sACBsugfS._SL1500_.jpg",
    title: "A Quite Place Part 2",
    about: "Following the deadly events at home, the Abbott family must now face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they quickly realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
    trailer: "https://www.youtube.com/embed/BpdDN9d9Jio"
    },
    { img: "https://1.bp.blogspot.com/-eiN1hLLtufo/YN1emiKkqBI/AAAAAAAAIBU/adhG95txAVkXMitynyxY5p05NRa7qpwFACLcBGAsYHQ/s1588/IMG_20210701_114852.jpg",
      title: "The Tomorrow War",
      about: "The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war against a deadly alien species.",
      trailer: "https://www.youtube.com/embed/RQjEbkV-9ZM"
    },
    { img: "https://www.themearound.com/wp-content/uploads/2021/06/1.jpg",
      title: "The House Next Door: Meet the Blacks 2",
      about: "After surviving a night of terror on the West Coast, author Carl Black moves his family back to his childhood home in Chicago. His quest to find peace and quiet takes an unexpected turn when he meets the eccentric new homeowner next door. Convinced that the man is a vampire, Carl and his oddball neighbors join forces to save themselves from the bloodsucking undead.",
      trailer: "https://www.youtube.com/embed/U1rmjEn6wnQ"
    },
    { img: "https://www.indiewire.com/wp-content/uploads/2019/07/moon_black_us_blank_with_title.0.jpg",
      title: "Moon",
      about: "Astronaut Sam Bell's (Sam Rockwell) three-year shift at a lunar mine is finally coming to an end, and he's looking forward to his reunion with his wife (Dominique McElligott) and young daughter. Suddenly, Sam's health takes a drastic turn for the worse. He suffers painful headaches and hallucinations, and almost has a fatal accident. He meets what appears to be a younger version of himself, possibly a clone. With time running out, Sam must solve the mystery before the company crew arrives.",
      trailer: "https://www.youtube.com/embed/WWoDBcSW4_c"
    },
    { img: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/nbcu-02490-Full-Image_GalleryCover-en-US-1533338466920._UY500_UX667_RI_VEkXjGJRLcZF2FGNTtBv52YZormmcHt15_TTW_.jpg",
      title: "Upgrade",
      about: "A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead. A billionaire inventor soon offers Trace a cure -- an artificial intelligence implant called STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman strength and agility -- skills he uses to seek revenge against the thugs who destroyed his life.",
      trailer: "https://www.youtube.com/embed/ZjwlPsqm3Sc"
    },
    { img: "https://api.time.com/wp-content/uploads/2016/09/nocturnal-animals-facebook.jpg?quality=85",
      title: "Nocturnal Animals",
      about: "A successful Los Angeles art-gallery owner's idyllic life is marred by the constant traveling of her handsome second husband. While he is away, she is shaken by the arrival of a manuscript written by her first husband, who she has not seen in years. The manuscript tells the story of a teacher who finds a trip with his family turning into a nightmare. As Susan reads the book, it forces her to examine her past and confront some dark truths.",
      trailer: "https://www.youtube.com/embed/-H1Ii1LjyFU"
    },
    { img: "https://static01.nyt.com/images/2020/03/26/arts/26vivarium/26vivarium-videoSixteenByNineJumbo1600.jpg",
      title: "Vivarium",
      about: "Hoping to find the perfect place to live, a couple travel to a suburban neighbourhood in which all the houses look identical. But when they try to leave the labyrinth-like development, each road mysteriously takes them back to where they started.",
      trailer: "https://www.youtube.com/embed/4FtHOApNMV4"
    },
    { img: "https://www.indiewire.com/wp-content/uploads/2020/04/shutterstock_editorial_5883926f.jpg?w=780",
      title: "Ex Machina",
      about: "Caleb Smith (Domhnall Gleeson) a programmer at a huge Internet company, wins a contest that enables him to spend a week at the private estate of Nathan Bateman (Oscar Isaac), his firm's brilliant CEO. When he arrives, Caleb learns that he has been chosen to be the human component in a Turing test to determine the capabilities and consciousness of Ava (Alicia Vikander), a beautiful robot. However, it soon becomes evident that Ava is far more self-aware and deceptive than either man imagined.",
      trailer: "https://www.youtube.com/embed/bggUmgeMCdc"
    },
    { img: "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdxwLoIkY2Vdp02EsCpBZ8sz2FvQD5kythUdxthlipUhDGMdj8LdNDimK941FhDhSj7IwQ--vYZ1LTVFeCYAN-IOsycP.jpg?r=2be",
      title: "The Discovery",
      about: "In the near future, due to a breakthrough scientific discovery by Dr. Thomas Harbor, there is now definitive proof of an afterlife. While countless people have chosen suicide to reset their existence, others try to decide what it all means. Among them is Dr. Harbor's son Will, who has arrived at his father's isolated compound with a mysterious young woman named Isla. There, they discover the strange acolytes who help Dr. Harbor with his experiments.",
      trailer: "https://www.youtube.com/embed/rm-FjYW24JY"
    },
    { img: "https://media.wired.com/photos/5926c4e1cfe0d93c4743150d/master/w_2560%2Cc_limit/DontBreatheTA.jpg",
      title: "Don't Breathe",
      about: "Rocky (Jane Levy), Alex and Money are three Detroit thieves who get their kicks by breaking into the houses of wealthy people. Money gets word about a blind veteran who won a major cash settlement following the death of his only child. Figuring he's an easy target, the trio invades the man's secluded home in an abandoned neighborhood. Finding themselves trapped inside, the young intruders must fight for their lives after making a shocking discovery about their supposedly helpless victim.",
      trailer: "https://www.youtube.com/embed/76yBTNDB6vU"
    },
    { img: "https://static01.nyt.com/images/2019/11/08/arts/06doctorsleep1/merlin_163597410_3fac8c5c-878d-4ce5-a9de-87e753bfc144-superJumbo.jpg",
      title: "Doctor Sleep",
      about: "Struggling with alcoholism, Dan Torrance remains traumatized by the sinister events that occurred at the Overlook Hotel when he was a child. His hope for a peaceful existence soon becomes shattered when he meets Abra, a teen who shares his extrasensory gift of the shine. Together, they form an unlikely alliance to battle the True Knot, a cult whose members try to feed off the shine of innocents to become immortal.",
      trailer: "https://www.youtube.com/embed/BOzFZxB-8cw"
    },
    { img: "https://images.mubicdn.net/images/film/3513/cache-10182-1603805271/image-w1280.jpg",
      title: "Bronson",
      about: "In this drama based on a true story, there's no one tougher or more brutal in the English penal system than prisoner Michael Peterson, aka Charles Bronson (Tom Hardy). First incarcerated after robbing a jewelry store, the married Bronson is sentenced to seven years. But his incorrigible, savage behavior quickly gets him in trouble with guards, fellow inmates and even a dog. The only place where Bronson can't do any harm is in solitary confinement, where he spends most of his time.",
      trailer: "https://www.youtube.com/embed/g4PyMY--RnU"
    },
    { img: "https://flickandmix.files.wordpress.com/2015/04/phone-booth-cover1.jpg?w=1200",
      title: "Phone Booth",
      about: "Cynical, smarmy PR man Stu Shepard picks up a ringing phone in a booth in a busy New York street to find a killer on the line. Armed with a high-powered sniper's rifle, the anonymous caller soon proves his prowess and presents Shepard with a choice - convince the police of his story before they shoot him or drop the phone and be shot. His only hope lies in self abasement and facing up to the truths of his life",
      trailer: "https://www.youtube.com/embed/JiI91igl180"
    },
    { img: "https://m.media-amazon.com/images/M/MV5BNGUzN2NhZDQtZWE5YS00MGY5LWE5ZmItMDVmNDZjNjA3YzE5XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
      title: "ATM",
      about: "A murderous assailant traps three people (Alice Eve, Josh Peck, Brian Geraghty) in a small kiosk containing an automatic teller machine.",
      trailer: "https://www.youtube.com/embed/sbr2uCMJde8"
    },
    { img: "https://pyxis.nymag.com/v1/imgs/add/166/74b5b49b6b2e11e5c35b2a0be039816588-04-the-endless.rsocial.w1200.jpg",
      title: "The Endless",
      about: "Two brothers receive a cryptic video message inspiring them to revisit the UFO death cult they escaped a decade earlier. Hoping to find the closure that they couldn't find as young men, they're forced to reconsider the cult's beliefs when confronted with unexplainable phenomena surrounding the camp. As the members prepare for the coming of a mysterious event, the brothers race to unravel the seemingly impossible truth before their lives become permanently entangled with the cult.",
      trailer: "https://www.youtube.com/embed/reMwL8uYXps"
    },

]

//  { img: "",
//    title: "",
//    about: "",
//    trailer: ""
//  },


export default recList;
