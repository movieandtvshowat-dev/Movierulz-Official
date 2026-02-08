// import { MediaItem } from "../types";

// const API_KEY = (import.meta as any).env?.VITE_TMDB_API_KEY || "";
// const BASE_URL = "https://api.themoviedb.org/3";
// const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
// const BACKDROP_BASE = "https://image.tmdb.org/t/p/original";

// // STATIC TIME - NO DYNAMIC CALCULATION
// // These times are fixed and will not change on page refresh
// const getFixedMatchTime = (hoursAdd: number, minutesSet: number = 0) => {
//   // Return a static base time: Jan 29, 2026 08:00 UTC + offset
//   const baseTime = new Date("2026-01-30T08:00:00.000Z");
//   baseTime.setHours(baseTime.getHours() + hoursAdd);
//   baseTime.setMinutes(minutesSet);
//   return baseTime.toISOString();
// };

// // Helper for Specific UTC Time (static, no runtime calculation)
// const getSpecificTime = (hour: number, minute: number = 0) => {
//     const date = new Date("2026-01-30T00:00:00.000Z");
//     date.setUTCHours(hour, minute, 0, 0);
//     return date.toISOString();
// }

// export const UNIQUE_SPORTS: MediaItem[] = [
//   {
//     id: "comming-soon",
//     title: "Coming Soon: New Sports Content",
//     poster_path: "https://www.shutterstock.com/image-vector/speedinspired-coming-soon-typography-dynamic-260nw-2654096517.jpg",
//     backdrop_path: "https://www.shutterstock.com/shutterstock/videos/3646580559/thumb/1.jpg?ip=x480",
//     // Fixed Time: Current Hour - 1 (e.g. if now is 14:20, this was 13:00). Ensures it is LIVE.
//     release_date: getFixedMatchTime(6, 30), 
//     vote_average: 9.2,
//     duration: "Live",
//     media_type: 'sports',
//     genres: ["Sports", "Live Sports"],
//     streams: {
//       "Server 1 (Main)": "",
//       "Server 2 (Backup)": "",
//       "Server 3 (Backup)": "",
//       "Server 4 (Backup)": "",
//       "Server 5 (Backup)": "",
//     },
//     overview: "Coming Soon: Server are getting ready to stream live sports content. Stay tuned for thrilling matches and exciting sports action, all available in high definition on 7Movierulz Stream.",
//   }
 
// ];

// // Live TV content
// export const UNIQUE_TV_LIVE: MediaItem[] = [
  
// ];
// // 15 UNIQUE MOVIES (ALL FROM TMDB)
// export const UNIQUE_MOVIES: MediaItem[] = [
//  {
//     id: "maaldar-2026",
//     title: "Maaldar (2026)",
//     poster_path: "/images/movie/mal.jpg",
//     backdrop_path: "/images/movie/maldar.jpg",
//     release_date: "2026-01-26",
//     vote_average: 6.2,
//     duration: "1h 19m",
//     media_type: 'movie',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//       "Server 1": "https://stmix.io/e/lYENS9mtvukML",
//       "Server 2": "https://byseqekaho.com/e/aq6rr0tgebsi",
//     },
//     overview: "Lena and Mara are drawn into a secret affair that defies boundaries and threatens everything they've built. When Mara uncovers her groom's betrayal, she finds solace in Lena, a newfound friend who soon becomes something more. As passion and secrecy collide, their choices endanger careers, fracture relationships, and lead to devastating consequences.",
//   },
//   {
//     id: "patikim-ni-robb-guinto-2026",
//     title: "Patikim ni Robb Guinto (2026)",
//     poster_path: "https://media.themoviedb.org/t/p/w500/4rL4XpHnngzElgdYDqaDtZnmtEH.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/AarN9NHen3V3z2H4Naw5Izc11x.jpg",
//     release_date: "2026-01-26",
//     vote_average: 6.2,
//     duration: "1h 19m",
//     media_type: 'movie',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//       "Server 1": "https://stmix.io/e/7tyq4fhUZ3xx",
//       "Server 2": "https://www.vidking.net/embed/movie/1559596?autoPlay=true&nextEpisode=true&episodeSelector=true",
//       "Server 3": "https://cinemaos.tech/player/1559596",
//       "Server 4": "https://xprime.today/watch/1559596",
      
//     },
//     overview: "VMX hottie Christy Imperial gives fans a taste of VMX GL Crush Robb Guinto's spiciest and tastiest scenes",
//   },
//   {
//     id: "audacity-2026",
//     title: "Audacity (2026)",
//     poster_path: "https://www.coolmoviez.baby/files/images/Audacity_(2026)_Part_2_Atrangii_Hindi_Unrated_Webseries.jpg",
//     backdrop_path: "https://i.ytimg.com/vi/tULnumoXoWk/maxresdefault.jpg",
//     release_date: "2026-01-26",
//     vote_average: 6.2,
//     duration: "1h 19m",
//     media_type: 'movie',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//       "Server 1": "https://stmix.io/e/jOktxgon2ZQlO",
//       "Server 2": "https://byseqekaho.com/e/zldtte3alzfk/",
//       },
//     overview: "VMX hottie Christy Imperial gives fans a taste of VMX GL Crush Robb Guinto's spiciest and tastiest scenes",
//   },
//   {
//     id: "speed-faster-2026",
//     title: "Speed Faster (2026) ",
//     poster_path: "https://media.themoviedb.org/t/p/w500/dKYp9uUlDufvL0gWHve8nuzePdk.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/nUMclZJRRwREfeP8liJ7LOddjnY.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Adventure ", "Comedy", "Mystery"],
//     streams: {
//       "Server 1": "https://stmix.io/e/cTWgLAJ4I50v7",
//       "Server 2": "https://byseqekaho.com/e/ptpj1jv2799q",
//       "Server 3": "https://www.vidking.net/embed/movie/1617852?autoPlay=true&nextEpisode=true&episodeSelector=true",
//       "Server 4": "https://cinemaos.tech/player/1617852",
//       "Server 5": "https://xprime.today/watch/1617852",
//       "Server 6": "https://www.cinezo.net/watch/movie/1617852",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1617852",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1617852",
      
//     },
//     overview: "Ace and his crew of elite street racers are forced into a high-stakes mission when a shadowy organization threatens someone close to him. In the aftermath of Four Amigos, they find themselves working for the infamous Church of Assassins, tasked with pulling off an impossible job. But as they push their limits, they uncover a chilling truth-failure was always part of the plan. Betrayal, speed, and survival collide in this adrenaline-fueled thriller where the real race isn't just for victory, but for their lives.",
//   },
//   {
//     id: "missing-the-boat-2026",
//     title: "Missing the Boat (2026) ",
//     poster_path: "https://media.themoviedb.org/t/p/w500/2Lw8nVKLNvvfAG46fn2nAJwBrPg.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/5Xiqdj6eiitWtyPmy0zakV3GYf.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Adventure ", "Comedy", "Mystery"],
//     streams: {
//       "Server 1": "https://stmix.io/e/acWrQSPMfmrqZ",
//       "Server 2": "https://byseqekaho.com/e/vo038510cxcp",
//       "Server 3": "https://www.vidking.net/embed/movie/1592019?autoPlay=true&nextEpisode=true&episodeSelector=true",
//       "Server 4": "https://cinemaos.tech/player/1592019",
//       "Server 5": "https://xprime.today/watch/1592019",
//       "Server 6": "https://www.cinezo.net/watch/movie/1592019",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1592019",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1592019",
//     },
//     overview: "Strangers Kelly and Parker both end up on the same Italian cruise, but after missing the boat during a stop, they're forced to team up and race across southern Italy to catch up.",
//   },
//   {
//     id: "delivery-boy-pizza-on-time-2026",
//     title: "Delivery Boy Pizza On Time (2026) ",
//     poster_path: "https://media.themoviedb.org/t/p/w500/iy7UrpXGCcSpBqpY4yM9a0oU1Gm.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/rugUejUyBcQct1t6b2ysz3rrsjm.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Mystery", "Drama", "Thriller"],
//     streams: {
//       "Server 1": "https://stmix.io/e/9QQnTyfcCRiB",
//       "Server 2": "https://byseqekaho.com/e/4l8x3qvzikp0/",
//     },
//     overview: "When Riya's husband is away, an ordinary evening takes an unexpected turn. Out of boredom, she begins chatting online with a stranger — someone charming yet mysterious. But soon, a pizza delivery boy shows up at her door with an order she never placed. As the night progresses, strange events begin to unfold. The delivery boy insists she accept the pizza, and the online stranger seems to know more about her than she ever shared. Caught between reality and suspicion, Riya must uncover who is behind the web of deceit — the delivery boy, the man on the cam, or someone else entirely. A gripping mystery–thriller where every message, every knock, and every face hides a secret.",
//   },
//   {
//     id: "tu-meri-main-tera-main-tera-tu-meri-2026",
//     title: "Tu Meri Main Tera Main Tera Tu Meri (2025) ",
//     poster_path: "https://media.themoviedb.org/t/p/w500/4mJ4xhjBTBF8GOtsfr78Ebp76vS.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/iQGmmI5VwNW2cjrF2uQF8VhBGcw.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Romance", "Drama", "Thriller"],
//     streams: {
//       "Server 1": "https://stmix.io/e/DoMsumAkAZVA",
//       "Server 2": "https://byseqekaho.com/e/ibdepxzeu8vz/",
      
//     },
//     overview: "When a carefree NRI wedding planner and a headstrong novelist collide during a wild summer in Croatia, sparks fly in ways neither expected. What begins as playful clashes soon transforms into something deeper – only to be tested when love, family, and tradition pull them in opposite directions.",
//   },
//   {
//     id: "human-cocaine-2026",
//     title: "Human Cocaine (2026) ", 
//     poster_path: "https://media.themoviedb.org/t/p/w500/5u4PzItZ835kr7PyT6yuR5gI9p0.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/ado1wdhkVOOUkDnRP0mnJmQ5iWC.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Action", "Crime", "Thriller"],
//     streams: {
//       "Server 1": "https://stmix.io/e/5FigxkywkeEG",
//       "Server 2": "https://www.vidking.net/embed/movie/1568964?autoPlay=true&nextEpisode=true&episodeSelector=true",
//       "Server 3": "https://cinemaos.tech/player/1568964",
//       "Server 4": "https://xprime.today/watch/1568964",
//       "Server 5": "https://www.cinezo.net/watch/movie/1568964",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1568964",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1568964",
//     },
//     overview: "Arjun, a UK based cab driver who is financially struggling to get his estranged wife and daughter back, finds an opportunity to make GBP 25,000 The job is simple: Deliver a parcel to a given address. Along the way, helps a hitchhiker Liza by giving her a ride. But what he doesn't know is how he is endangering both their lives.",
//   },
//   {
//     id: "vadh-2-2026",
//     title: "Vadh 2 (2026) ", 
//     poster_path: "https://media.themoviedb.org/t/p/w500/pOJAaLMsc7T5rwVDTA7SRg9SAEU.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/5z7eorMubo7nB11P8s5a0GMXf2D.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Action", "Crime", "Thriller"],
//     streams: {
//       "Server 1": "https://stmix.io/e/3tIsnubKKjK2",
//       "Server 2": "https://byseqekaho.com/e/aclqmbxitdv4/",
//       "Server 3": "https://www.vidking.net/embed/movie/1595507?autoPlay=true&nextEpisode=true&episodeSelector=true",
//       "Server 4": "https://cinemaos.tech/player/1595507",
//       "Server 5": "https://xprime.today/watch/1595507",
//       "Server 6": "https://www.cinezo.net/watch/movie/1595507",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1595507",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1595507",
//     },
//     overview: "A police officer's pursuit of truth in a shocking prison crime intertwines with the lives of a widowed prison guard and a soon to be released inmate, unravelling a web of morality and redemption.",
//   },
//   {
//     id: "bhabiji-ghar-par-hain-2026",
//     title: "VBhabiji Ghar Par Hain! (2026) ", 
//     poster_path: "https://media.themoviedb.org/t/p/w500/v8G1NudtXq7BP56TgmAfpDx10FQ.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/g3varY1uTosvAheX729NY2g9EKv.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Comedy", "Family", "Drama"],
//     streams: {
//       "Server 1": "https://stmix.io/e/PIwgWmce3PzM",
//       "Server 2": "https://byseqekaho.com/e/4p0e0o3vtyn0/",
//       "Server 3": "https://www.vidking.net/embed/movie/1587124?autoPlay=true&nextEpisode=true&episodeSelector=true",
//       "Server 4": "https://cinemaos.tech/player/1587124",
//       "Server 5": "https://xprime.today/watch/1587124",
//       "Server 6": "https://www.cinezo.net/watch/movie/1587124",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1587124",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1587124",
//     },
//     overview: "In a whirlwind of misunderstandings, two rival neighbours, Vibhuti and Tiwari, find themselves on a riotous road trip with their wives, only to get tangled up with lovable gangster brothers, Shanti and Kranti, who turn a simple journey into an unforgettable comedy of errors.",
//   }, 
//   {
//     id: "relationship-goals-2026-multi-lang",
//     title: "Relationship Goals (2026) Multi-Lang",
//     poster_path: "https://media.themoviedb.org/t/p/w500/o7dVxvZIKnAB7k1eeeWp2k14Es7.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/6zaQ1ffMOXjBdeg0gKd6OxUvT4C.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Romance ", "Comedy", "Drama"],
//     streams: {
//       "Server 1 - Multi-Lang": "https://stmix.io/e/fzh60cMcTmlf",
//       "Server 2 - Multi-Lang": "https://byseqekaho.com/e/1hppdabczy1n/",
//     },
//     overview: "When TV producer Leah Caldwell aims to become the first woman running New York's top morning show, her ex competes for the same role. Leah stays focused on her career, until chemistry with her ex challenges her priorities.",
//   },
//   {
//     id: "even-if-this-love-disappears-tonight-2026-multi-lang",
//     title: "Even if This Love Disappears Tonight (2026) Multi-Lang",
//     poster_path: "https://media.themoviedb.org/t/p/w500/5eNN8KLDPUXDqIkTdCbmn1gx5P7.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/iL5eGI9ctHdUOV4yG6dyGKctSEX.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Romance ", "Comedy", "Drama"],
//     streams: {
//       "Server 1 - Multi-Lang": "https://stmix.io/e/TP5qsutqmLRk",
//       "Server 2 - Multi-Lang": "https://byseqekaho.com/e/4xk7wo9mqyg0/",
//     },
//     overview: "A high school girl wakes up each day with no memory of yesterday. When she agrees to date a shy classmate, can their love grow with every new beginning?",
//   },
//   {
//     id: "nari-nari-naduma-murari-2026-multi-lang",
//     title: "Nari Nari Naduma Murari (2026) Multi-Lang",
//     poster_path: "https://media.themoviedb.org/t/p/w500/jFBu7tS0mlEZwYTkjJcKH48bV4m.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/8o1b4G5Uv5EFQ64Sicz1ae7WLsT.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Romance ", "Comedy", "Drama"],
//     streams: {
//       "Server 1 - Multi-Lang": "https://stmix.io/e/CiPRB7uPObye",
//       "Server 2 - Multi-Lang": "https://byseqekaho.com/e/ffypfpdjkg6v/",
//     },
//     overview: "A young man's life turns upside down when he finds himself caught between two women, leading to an unexpected love triangle filled with emotions, misunderstandings, and tough decisions. As relationships intertwine, he must confront his feelings, face reality, and choose what truly matters, blending romance with heartfelt family drama.",
//   },
//   {
//     id: "the-investigation-of-lucy-letby-2026-multi-lang",
//     title: "The Investigation of Lucy Letby (2026) Multi-Lang",
//     poster_path: "https://media.themoviedb.org/t/p/w500/qhNThwc72GqihJhXaP29Af5hJ2A.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/qhSfXdkrIzwYsyQ3Z9ehFmO3zjy.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Crime ", "Documentary", "Drama"],
//     streams: {
//       "Server 1 - Multi-Lang": "https://stmix.io/e/84Xt99ybdoYAo",
//       "Server 2 - Multi-Lang": "https://byseqekaho.com/e/u50jr9d6b0tx/",
//       "Server 3": "https://www.vidking.net/embed/movie/1620991?autoPlay=true&nextEpisode=true&episodeSelector=true",
//       "Server 4": "https://cinemaos.tech/player/1620991",
//       "Server 5": "https://xprime.today/watch/1620991",
//       "Server 6": "https://www.cinezo.net/watch/movie/1620991",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1620991",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1620991",
//     },
//     overview: "An engaging and thought-provoking look at Lucy Letby, the former nurse serving life in prison after being convicted of the murders of seven infants and the attempted murders of seven others.",
//   },
//   {
//     id: "840464",
//     title: "Greenland-2 Migration (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/dtPwBZjzqTaObjG4fKStRkBq1uu.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/tyjXlexbNZQ0ZT1KEJslQtBirqc.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Adventure", "Thriller", "Mystery"],
//     streams: {
//       "Server 1": "https://stmix.io/e/SalwmX8W01k4B",
//       "Server 2": "https://cinemaos.tech/player/840464",
//       "Server 3 ": "https://xprime.today/watch/840464",
//       "Server 4": "https://www.cinezo.net/watch/movie/840464",
//       "Server 5": "https://vidsrc-embed.ru/embed/movie/840464",
//       "Server 6": "https://api.cinezo.net/embed/tmdb-movie-840464",
//     },
//     overview:
//       "Having found the safety of the Greenland bunker after the comet Clarke decimated the Earth, the Garrity family must now risk everything to embark on a perilous journey across the wasteland of Europe to find a new home.",
//   },
//   {
//     id: "1249508",
//     title: "Grizzly Night (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/3ppOwa6PEtGsIiDPdZHUbEqgIY7.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/i275mAQP4KhPtYUpMUgBGMmK4WN.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Horror", "Adventure", "Mystery"],
//     streams: {
//       "Server 1": "https://stmix.io/e/7GZi2cqHskcwn",
//       "Server 2": "https://cinemaos.tech/player/1249508",
//       "Server 3 ": "https://xprime.today/watch/1249508",
//       "Server 4": "https://www.cinezo.net/watch/movie/1249508",
//       "Server 5": "https://vidsrc-embed.ru/embed/movie/1249508",
//       "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1249508",
//     },
//     overview:
//       "On August 12th, 1967, in Montana's Glacier National Park, the unthinkable happened: On the same night, nine miles apart, there were not one-but two-fatal grizzly bear attacks.",
//   },
//   {
//     id: "1234731",
//     title: "Anaconda (2025)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/qxMv3HwAB3XPuwNLMhVRg795Ktp.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/swxhEJsAWms6X1fDZ4HdbvYBSf9.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Adventure ", "Comedy", "Mystery"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1234731",
//       "Server 2": "https://cinemaos.tech/player/1234731",
//       "Server 3 - Multi-Lang": "https://stmix.io/e/wSmdv3CDpCNml",
//       "Server 4": "https://www.cinezo.net/watch/movie/1234731",
//       "Server 5": "https://vidsrc-embed.ru/embed/movie/1234731",
//       "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1234731",
//     },
//     overview:
//       "A group of friends facing mid-life crises head to the rainforest with the intention of remaking their favorite movie from their youth, only to find themselves in a fight for their lives against natural disasters, giant snakes and violent criminals",
//   },
//   {
//     id: "chemistry-part-2",
//     title: "Chemistry Part 2 (2026)",
//     poster_path:
//       "https://m.media-amazon.com/images/M/MV5BYzBiMWY2ZWEtYTNjOC00ZTg0LWJlMGQtODU1N2UwYWM3MDAyXkEyXkFqcGc@._V1_.jpg",
//     backdrop_path:
//       "https://media-files.atrangii.in/media-metadata/6979de0ef60fc20caae469ce",
//     release_date: "2026-01-26",
//     vote_average: 6.2,
//     duration: "1h 19m",
//     media_type: 'movie',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//      "Server 1": "https://stmix.io/e/PNUePFxDwvjVx",
//       "Server 2": "https://short.icu/QYmidACiu?thumbnail=https://media-files.atrangii.in/media-metadata/6979de0ef60fc20caae469ce",
//       "Server 3": "https://byseqekaho.com/e/9a650rp8vdaa",
//       },
//     overview:
//       "When a reluctant student goes to study Chemistry from an enigmatic, isolated teacher, her attraction slowly overpowers his reluctance. A forbidden chemistry builds, threatening to change lives forever.",
//   },
//   {
//     id: "generation-gap-part-2",
//     title: "Generation Gap Part 2 (2026)",
//     poster_path:
//       "https://m.media-amazon.com/images/M/MV5BMGFhYWQ3YjktNzg3OC00NmJlLTg4NWQtMzcyYWIwNjNkYTIwXkEyXkFqcGc@._V1_.jpg",
//     backdrop_path:
//       "https://i.ytimg.com/vi/ID1smTZldw0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3JVPV9kENRBn5u8fWkxQdl4K0_w",
//     release_date: "2026-01-26",
//     vote_average: 6.2,
//     duration: "1h 19m",
//     media_type: 'movie',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//       "Server 1": "https://stmix.io/e/nKnly2xFa69Fs",
//       "Server 2": "https://short.icu/nzkD33Ujr?thumbnail=https://img.youtube.com/vi/ID1smTZldw0/maxresdefault.jpg",
//       "Server 3": "https://byseqekaho.com/e/w0nud4ssbmbt",
//       },
//     overview:
//       "A steamy affair between Mrs. Poonam and her nephew (Vipin) begins to develop a gap when they both have different expectations from each other.",
//   },
//   {
//     id: "1339876",
//     title: "Mardaani 3 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/jLo8qcDOw9CD1COzMLBouOqHtqX.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/q0aIpg6hiM9PafhGUknEPDBA6bW.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Crime ", "Action", "Mystery"],
//     streams: {
//       "Server 1": "https://stmix.io/e/kYuQQzKDopYa",
//       "Server 2": "https://cinemaos.tech/player/1339876-3",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1339876-3/hindi?autoplay=false&back=true&server=0",
//       "Server 4 - MAIN":
//         "https://short.icu/LmIsiliv6?thumbnail=https://media.themoviedb.org/t/p/w780/q0aIpg6hiM9PafhGUknEPDBA6bW.jpg",
//       "Server 5": "https://byseqekaho.com/e/8ekaiu3dgz0r",
//       "Server 6": "https://www.cinezo.net/watch/movie/1339876-3",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1339876-3",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1339876-3",
//     },
//     overview:
//       "Officer Shivani Shivaji Roy returns to hunt down those behind the disappearance of young girls, risking everything to bring them back alive.",
//   },
//   {
//     id: "786567",
//     title: "Gandhi Talks (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/p4iQT3s97T3gQOLhTj0UplzYMOj.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/4Cqad6ZpWJRhBumGE1QwHs9pVuB.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Drama ", "Silence", "Mystery"],
//     streams: {
//       "Server 1": "https://stmix.io/e/BbQpHGHdJKZGn",
//       "Server 2": "https://cinemaos.tech/player/786567",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/786567/english?autoplay=false&back=true&server=0",
//       "Server 4 - MAIN":
//         "https://short.icu/PhuS5WVOq?thumbnail=https://media.themoviedb.org/t/p/w780/4Cqad6ZpWJRhBumGE1QwHs9pVuB.jpg",
//       "Server 5": "https://byseqekaho.com/e/oi0zc05mbgjt",
//       "Server 6": "https://www.cinezo.net/watch/movie/786567",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/786567",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-786567",
//     },
//     overview:
//       "A silent black comedy, about the monetary needs of a character & how it impacts the others. A young, unemployed graduate Mahadev’s struggle to land a job through any means possible and crosses paths with a businessman and petty thief. A subject wherein silence speaks much louder than words. Although a work of fiction by the writer, all the characters in the film are sketched out to seem very real and relatable ensuring an enriching journey as well a laugh riot as the cat and mouse guffaws amongst them unfold. Gandhi Talks aims at telling a story by switching off the device of dialogue, which is not only scary but also interesting and challenging.",
//   },
//   {
//     id: "1112564",
//     title: "Vaa Vaathiyaar (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/47uIUf9KCfDzxQXixw8lrvYl8C8.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/qPNIwdR3y965KMsiweyuXdjDRXR.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Comedy ", "Drama", "Romance"],
//     streams: {
//       "Server 1- Multi-Lang":
//         "https://stmix.io/e/XvqZsVUzrTfYy",
//         },
//     overview:
//       "After being raised as the reincarnation of a famous actor, a man finds himself clashing with his grandfather's expectations of him.",
//   },
//   {
//     id: "1168190",
//     title: "The Wrecking Crew (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/gbVwHl4YPSq6BcC92TQpe7qUTh6.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/cz4vLJrmaV1zJlRYbxqtvLzeLWB.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Crime ", "Action", "Mystery"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1168190",
//       "Server 2": "https://cinemaos.tech/player/1168190",
//       "Server 3 - Multi-Lang": "https://streamix.so/e/LOMcIVE2bYo9n",
//       "Server 4": "https://www.cinezo.net/watch/movie/1168190",
//       "Server 5": "https://vidsrc-embed.ru/embed/movie/1168190",
//       "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1168190",
//     },
//     overview:
//       "Estranged half-brothers Jonny and James reunite after their father's mysterious death. As they search for the truth, buried secrets reveal a conspiracy threatening to tear their family apart. Multi language Available [Tam + Tel + Hin + Mal + Kan + Eng] Apply Settings",
//   },
//   {
//     id: "1552952",
//     title: "Dhraupathi 2 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/vojJemS5USdagshMLWS8JyrU8x6.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/vojJemS5USdagshMLWS8JyrU8x6.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Action ", "Drama", "History"],
//     streams: {
//       "Server 1":
//         "https://short.icu/11VUo0mkc?thumbnail=https://media.themoviedb.org/t/p/w780/vojJemS5USdagshMLWS8JyrU8x6.jpg",
//       "Server 2": "https://byseqekaho.com/e/q96pfror03po",
//     },
//     overview:
//       " 14th century AD, people were suffering from the brutality of the Madurai Sultanate and the Delhi Sultan. The Hoysala Emperor Vallalar III protected his empire and people with diplomacy. The sacrifice and betrayal of some changed the course of a kingdom. Insidious interventions disrupt the lives of people and the stability of the state.",
//   },
//   {
//     id: "1552952",
//     title: "Jockey (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/69zi48P9NIwPq7qdssxQ8qqbBNG.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/69zi48P9NIwPq7qdssxQ8qqbBNG.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Action ", "Drama", "Thriller"],
//     streams: {
//       "Server 1":
//         "https://short.icu/8W2HhRv30?thumbnail=https://media.themoviedb.org/t/p/w780/69zi48P9NIwPq7qdssxQ8qqbBNG.jpg",
//       "Server 2": "https://byseqekaho.com/e/a1p51n0oaksv",
//     },
//     overview:
//       "We don't have an overview translated in English. Help us expand our database by adding one.",
//   },
//   {
//     id: "1613346",
//     title: "Landlord (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/l3NGOzBnchp957poN8mBoZuWVHX.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/irXzev38Yf3UJ25PXtsnFg6KVQC.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Action ", "Drama", "Thriller"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1613346",
//       "Server 2": "https://cinemaos.tech/player/1613346",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1613346/kannada?autoplay=false&back=true&server=0",
//       "Server 4":
//         "https://short.icu/OHi7E2c2Q?thumbnail=https://media.themoviedb.org/t/p/w780/irXzev38Yf3UJ25PXtsnFg6KVQC.jpg",
//       "Server 5": "https://byseqekaho.com/e/4dsgif4rh5lc",
//       "Server 6": "https://www.cinezo.net/watch/movie/1613346",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1613346",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1613346",
//     },
//     overview:
//       "In a village crushed under a brutal landlord's rule, fear silences the poor, and justice is denied. When a young woman constable challenges the system and an innocent family is burnt alive, outrage erupts into a violent uprising. What follows is a costly fight to reclaim dignity, justice, and the power of the Constitution.",
//   },
//   {
//     id: "1236153",
//     title: "Mercy (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/pyok1kZJCfyuFapYXzHcy7BLlQa.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/pyok1kZJCfyuFapYXzHcy7BLlQa.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Action ", "Adventure", "Comedy"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1236153",
//       "Server 2": "https://cinemaos.tech/player/1236153",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1236153/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://short.icu/AanpBKBQc?thumbnail=https://media.themoviedb.org/t/p/w780/mHC8tSRYfAKGh2jaSNQMSzGdbOW.jpg",
//       "Server 5 - HINDI": "https://byseqekaho.com/e/j1pt36tomnsn",
//       "Server 6": "https://www.cinezo.net/watch/movie/1236153",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1236153",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1236153",
//     },
//     overview:
//       "In the near future, a detective stands on trial accused of murdering his wife. He has ninety minutes to prove his innocence to the advanced AI Judge he once championed, before it determines his fate.",
//   },
//   {
//     id: "1584215",
//     title: "The Internship (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/fYqSOkix4rbDiZW0ACNnvZCpT6X.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/fYqSOkix4rbDiZW0ACNnvZCpT6X.jpg",
//     release_date: "2026-01-16",
//     vote_average: 5.6,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Action ", "Adventure", "Thriller"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1584215",
//       "Server 2": "https://cinemaos.tech/player/1584215",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1584215/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI": "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5": "https://www.cinezo.net/watch/movie/1584215",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1584215",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1584215",
//     },
//     overview:
//       "A CIA-trained assassin recruits other graduates from her secret childhood program, The Internship, to violently destroy the organization. The CIA fights back with deadly force.",
//   },
//   {
//     id: "1412598",
//     title: "Killer Whale (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/cqbXxAw9sUr4tJ5ffEwtnz6IL9o.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/cqbXxAw9sUr4tJ5ffEwtnz6IL9o.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.5,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Thriller ", "Horror", "Action"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1412598",
//       "Server 2": "https://cinemaos.tech/player/1412598",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1412598/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5": "https://www.cinezo.net/watch/movie/1412598",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1412598",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1412598",
//     },
//     overview:
//       "Follows best friends Maddie and Trish as they find themselves trapped in a remote lagoon with the dangerous killer whale named Ceto.",
//   },
//   {
//     id: "1443762",
//     title: "The Big Fake (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/qNEL6chkH2s6gwvt0Jt9NfiXG8m.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/qNEL6chkH2s6gwvt0Jt9NfiXG8m.jpg",
//     release_date: "2026-01-16",
//     vote_average: 4.6,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Thriller ", "Horror", "Action"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1443762",
//       "Server 2": "https://cinemaos.tech/player/1443762",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1443762/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://short.icu/lfpJnzkNlk?thumbnail=https://media.themoviedb.org/t/p/w780/uHavtqbnMDcwqVK9Y94ZQSWxtCw.jpg",
//       "Server 5 - HINDI": "https://byseqekaho.com/e/09jtnsnu0bwp",
//       "Server 6": "https://www.cinezo.net/watch/movie/1443762",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1443762",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1443762",
//     },
//     overview:
//       "Toni Chichiarelli arrives in Rome with the dream of becoming a painter, but his talent leads him elsewhere — from art galleries to state secrets. Between art, crime, and power, his signature ends up everywhere — even in the history of Italy.",
//   },
//   {
//     id: "1306368",
//     title: "The Rip (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg",
//     release_date: "2026-01-16",
//     vote_average: 5.6,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Action ", "Adventure", "Comedy"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1306368",
//       "Server 2": "https://cinemaos.tech/player/1306368",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1306368/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://short.icu/XQE80AhAa?thumbnail=https://media.themoviedb.org/t/p/w500/3F2EXWF1thX0BdrVaKvnm6mAhqh.jpg",
//       "Server 5 - HINDI": "https://byseqekaho.com/e/faaqrf79oazr",
//       "Server 6": "https://www.cinezo.net/watch/movie/1306368",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1306368",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1306368",
//     },
//     overview:
//       "Trust frays when a team of Miami cops discovers millions in cash inside a run-down stash house, calling everyone — and everything — into question.",
//   },
//   {
//     id: "1034716",
//     title: "People We Meet on Vacation (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/xzZaU0MN6L9oc1pl0RUXSB7hWwD.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/xzZaU0MN6L9oc1pl0RUXSB7hWwD.jpg",
//     release_date: "2026-01-16",
//     vote_average: 7.4,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Comedy ", "Drama", "Romance"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1034716",
//       "Server 2": "https://cinemaos.tech/player/1034716",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1034716/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://short.icu/Ca642R4QZ?thumbnail=https://media.themoviedb.org/t/p/w780/qth56RA3rkUlhbDRDKGeMJEssdi.jpg",
//       "Server 5 - HINDI": "https://byseqekaho.com/e/8anidmdjsvs4",
//       "Server 6": "https://www.cinezo.net/watch/movie/1034716",
//       "Server 7": "https://vidsrc-embed.ru/embed/movie/1034716",
//       "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1034716",
//     },
//     overview:
//       "Poppys a free spirit. Alex loves a plan. After years of summer vacations, these polar-opposite pals wonder if they could be a perfect romantic match.",
//   },
//   {
//     id: "1614077",
//     title: "Sulutan (2025)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/kd11696ab32WhHUeq5ZkWi9k09Y.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/kd11696ab32WhHUeq5ZkWi9k09Y.jpg",
//     release_date: "2026-01-26",
//     vote_average: 6.2,
//     duration: "1h 19m",
//     media_type: 'movie',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//       "Server 1": "https://stmix.io/e/KzdrsSXHjFgKS",
//       "Server 2": "https://cinemaos.tech/player/1614077",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1614077/tagalog?autoplay=false&back=true&server=0",
//       "Server 4": "https://xprime.today/watch/1614077",
//       "Server 5": "https://www.cinezo.net/watch/movie/1614077",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1614077",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1614077",   
//     },
//     overview:
//       "Lena and Mara are drawn into a secret affair that defies boundaries and threatens everything they’ve built. When Mara uncovers her groom’s betrayal, she finds solace in Lena, a newfound friend who soon becomes something more. As passion and secrecy collide, their choices endanger careers, fracture relationships, and lead to devastating consequences.",
//   },
//   {
//     id: "1555917",
//     title: "The Secret of Maria Makinang (2025)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/aaIyWoyk13wp2SmzVTA1X2VSLaz.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/aaIyWoyk13wp2SmzVTA1X2VSLaz.jpg",
//     release_date: "2025-10-22",
//     vote_average: 5.1,
//     duration: "1h 19m",
//     media_type: 'movie',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//       "Server 1": "https://stmix.io/v/BA8XvvvsU7zmm",
//       "Server 2": "https://cinemaos.tech/player/1555917",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1555917/tagalog?autoplay=false&back=true&server=0",
//       "Server 4": "https://xprime.today/watch/1555917",
//       "Server 5": "https://www.cinezo.net/watch/movie/1555917",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1555917",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1555917",
//       "Server 8": "http://byseqekaho.com/e/h4zfrz9rchim/",
//     },
//     overview:
//       "It tells the story of Maria, a young woman who appears only during the full moon. She falls for a man named Danilo, and their love is tested through time, because for Danilo, decades have passed, but for Maria, it has only been a few moments.",
//   },
//   {
//     id: "1597538",
//     title: "Angkinin Mo Ako (2025)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/2YZ24F49pRkNb45YWI6yckrTYE.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/2YZ24F49pRkNb45YWI6yckrTYE.jpg",
//     release_date: "2025-10-23",
//     vote_average: 5.1,
//     duration: "1h 10m",
//     media_type: 'movie',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//       "Server 1": "https://stmix.io/e/vAlUJTcd8elxH",
//       "Server 2": "https://cinemaos.tech/player/1597538",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1597538/tagalog?autoplay=false&back=true&server=0",
//       "Server 4": "https://xprime.today/watch/1597538",
//       "Server 5": "https://www.cinezo.net/watch/movie/1597538",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1597538",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1597538",
//       "Server 8": "https://byseqekaho.com/e/7j7jdm0pcl8o",
//     },
//     overview:
//       "Cess Garcia and VMX’s next big thing Dara Lima star in a steamy drama about two sisters and the man who sparks their sensual awakening. A female lawyer hires a young man as tutor for her younger sister but unknown to her, their review sessions are becoming wild",
//   },
//   {
//     id: "1612071",
//     title: "Elaichi: Ek Prem Katha (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/uaHRJYzURYiNyZmF0p0bTiQMpOK.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/uaHRJYzURYiNyZmF0p0bTiQMpOK.jpg",
//     release_date: "2025-10-23",
//     vote_average: 5.1,
//     duration: "1h 10m",
//     media_type: 'movie',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//       "Server 1": "https://stmix.io/e/M9m0Jl0lnhqy",
//       "Server 2": "https://cinemaos.tech/player/1612071",
//       "Server 3": "https://zxcstream.xyz/player/movie/1612071/tagalog?autoplay=false&back=true&server=0",
//       "Server 4": "https://xprime.today/watch/1612071",
//       "Server 5": "https://www.cinezo.net/watch/movie/1612071",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1612071",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1612071",
//     },
//     overview:
//       "In Elaichi, the spice of desire, Sonal’s quiet domestic life explodes into nights of burning lust when a chance encounter with a younger actor turns into a frivolous sexual affair - pushing her deeper into obsession until her family, her body, and her soul are scorched by betrayal.`",
//   },
//   {
//     id: "1213898",
//     title: "Border 2 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/hju9XncHxUxUS1GAJ4YqpdFCa5t.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/hju9XncHxUxUS1GAJ4YqpdFCa5t.jpg",
//     release_date: "2026-01-23",
//     vote_average: 5.1,
//     duration: "3h 19m",
//     media_type: 'movie',
//     genres: ["War", "Action", "Drama"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1213898",
//       "Server 2": "https://cinemaos.tech/player/1213898",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1213898/hindi?autoplay=false&back=true&server=0",
//       "Server 4":
//         "https://short.icu/fCjlBHVLI?thumbnail=https://media.themoviedb.org/t/p/w780/nPuXMmWmHJySh0cyOs0MjEQA67w.jpg",
//       "Server 5": "https://www.cinezo.net/watch/movie/1213898",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1213898",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1213898",
//     },
//     overview:
//       "During the events of the 1971 Indo-Pak war, a new generation of young Indian warriors were getting ready to defend the nation from an even bigger threat to the Indian motherland.",
//   },
//   {
//     id: "1617536",
//     title: "One Two Cha Cha Chaa (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/cWfX0Pog0ZHgTKY3glhIjvkWxgB.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/cWfX0Pog0ZHgTKY3glhIjvkWxgB.jpg",
//     release_date: "2026-01-16",
//     vote_average: 5.1,
//     duration: "2h 40m",
//     media_type: 'movie',
//     genres: ["Action ", "Adventure", "Comedy"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1617536",
//       "Server 2": "https://cinemaos.tech/player/1617536",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1617536/hindi?autoplay=false&back=true&server=0",
//       "Server 4":
//         "https://short.icu/fbGaNUQgw?thumbnail=https://media.themoviedb.org/t/p/w780/pWq3jl2WBlD17x1CkprNeCe2cGG.jpg",
//       "Server 5": "https://www.cinezo.net/watch/movie/1617536",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1617536",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1617536",
//     },
//     overview:
//       "So, Fuel Up, Gear Up, Level Up and Fasten your seat belts for the wildest and wackiest road trip of all time.",
//   },
//   {
//     id: "1282440",
//     title: "Happy Patel: Khatarnak Jasoos (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/vsCkxiY2c26C6y4RyTVkpdXIfCW.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/vsCkxiY2c26C6y4RyTVkpdXIfCW.jpg",
//     release_date: "2026-01-23",
//     vote_average: 5.1,
//     duration: "2h 02m",
//     media_type: 'movie',
//     genres: ["Comedy ", "Action", "Romance"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1282440",
//       "Server 2": "https://cinemaos.tech/player/1282440",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1282440/hindi?autoplay=false&back=true&server=0",
//       "Server 4":
//         "https://short.icu/mNw3SxUtx?thumbnail=https://media.themoviedb.org/t/p/w780/gsLYR8uALrt2p33iOpqReNW6XyQ.jpg",
//       "Server 5": "https://www.cinezo.net/watch/movie/1282440",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1282440",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1282440",
//     },
//     overview:
//       "Happy Patel, a chronically unsuccessful MI7 operative, is finally assigned a mission in Goa, where he uncovers his Indian roots and must rescue a high-profile scientist from crime lord Mama. Unaware of his Indian heritage and armed with a comically British accent, Happy’s blunders trigger a string of chaotic mishaps that could lead him to expose a criminal network.",
//   },
//   {
//     id: "1599099",
//     title: "Azad Bharat (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/zeUHs0NACraRyOPlUyuuBC0Iarz.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/zeUHs0NACraRyOPlUyuuBC0Iarz.jpg",
//     release_date: "2026-01-16",
//     vote_average: 5.1,
//     duration: "2h 20m",
//     media_type: 'movie',
//     genres: ["Adventure", "Comedy", "Fantasy"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1599099",
//       "Server 2": "https://cinemaos.tech/player/1599099",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1599099/hindi?autoplay=false&back=true&server=0",
//       "Server 4":
//         "https://short.icu/D2auhaVWv?thumbnail=https://media.themoviedb.org/t/p/w780/zmJqRGyI9SuZOPrGq0gZSiv2wMR.jpg",
//       "Server 5": "https://www.cinezo.net/watch/movie/1599099",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1599099",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1599099",
//     },
//     overview:
//       "Freedom fighter Neera Arya joins India's first women's army founded by Subhas Chandra Bose, highlighting untold stories from India's independence movement and themes of courage and patriotism.",
//   },
//   {
//     id: "1382160",
//     title: "45 (2025)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/luDTygZ6uAwaknc2isXZcz8YMvE.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/luDTygZ6uAwaknc2isXZcz8YMvE.jpg",
//     release_date: "2025-12-25",
//     vote_average: 5.1,
//     duration: "2h 24m",
//     media_type: 'movie',
//     genres: ["Action", "Drama", "Thriller"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1382160",
//       "Server 2": "https://cinemaos.tech/player/1382160",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1382160/hindi?autoplay=false&back=true&server=0",
//       "Server 4 - Kannada": "https://byseqekaho.com/e/eo0jjw0mwg9t",
//       "Server 5 - Hindi": "https://byseqekaho.com/e/rfifotoan62n",
//     },
//     overview:
//       "A captivating new project by Suraj Production and the Magical Composer’s Debut film, #45Themovie is set to redefine the cinema-watching experience with its unique narrative and compelling performances.",
//   },
//   {
//     id: "1510339",
//     title: "Mark (2025)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/6LTDv6XHiHN0N77QIFg2tidVvhh.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/6LTDv6XHiHN0N77QIFg2tidVvhh.jpg",
//     release_date: "2025-12-25",
//     vote_average: 5.1,
//     duration: "2h 24m",
//     media_type: 'movie',
//     genres: ["Action", "Drama", "Thriller"],
//     streams: {
//       "Server 1(Telugu)": "https://xprime.today/watch/1510339",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1510339/hindi?autoplay=false&back=true&server=0",
//       "Server 4 (Kannada)": "https://byseqekaho.com/e/se2m96qhd0jh",
//       "Server 5 (Hindi)": "https://byseqekaho.com/e/7g36yabhfauq",
//     },
//     overview:
//       "Mark is suspended from his police duties for his unruly yet effective ways of operating, but when 18 children are abducted and found dead, races to catch the criminals. With only 18 hours left, he must confront powerful foes and use unconventional tactics to succeed.",
//   },
//   {
//     id: "1457939",
//     title: "Rahu Ketu (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/zjgWWOIsEqYNSa1fGRr82mBo3gv.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/zjgWWOIsEqYNSa1fGRr82mBo3gv.jpg",
//     release_date: "2026-01-16",
//     vote_average: 5.1,
//     duration: "2h 20m",
//     media_type: 'movie',
//     genres: ["Adventure", "Comedy", "Fantasy"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1457939",
//       "Server 2": "https://cinemaos.tech/player/1457939",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1457939/hindi?autoplay=false&back=true&server=0",
//       "Server 4": "https://byseqekaho.com/e/mecoep0szpat",
//       "Server 5": "https://www.cinezo.net/watch/movie/1457939",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1457939",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1599099",
//     },
//     overview:
//       "Rahu Ketu (2026) In the magical world of writer Churu Lal Sharma, his unlucky creations Rahu and Ketu spring to life, causing hilarious chaos instead of fighting corruption. When the mischievous Meenu Taxi steals Churus mystical notebook, the bumbling duo are dragged into absurd adventures that land them in the middle of a drug mafia.",
//   },
//   {
//     id: "1594670",
//     title: "Psych Siddhartha (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/9UZrHOeryYvgVaEfUMY3hk1OWg0.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/rHFjswQM8tdAL8RYqRJDsJBCngY.jpg",
//     release_date: "2026-01-01",
//     vote_average: 8.1,
//     duration: "2h 27m",
//     media_type: 'movie',
//     genres: ["Comedy", "Romance"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1594670",
//       "Server 2": "https://cinemaos.tech/player/1594670",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1594670/hindi?autoplay=false&back=true&server=0",
//       "Server 4": "https://www.cinezo.net/watch/movie/1594670",
//       "Server 5": "https://vidsrc-embed.ru/embed/movie/1594670",
//       "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1594670",
//     },
//     overview:
//       "Psych Siddhartha (2026) is a layered psychological drama that explores emotional collapse, fragile hope, and the enduring scars of unresolved trauma. At its center is Siddharth, a man battered by repeated personal losses that have left him isolated, financially strained, and emotionally exhausted. Life has reduced him to survival mode, where every attempt to move forward seems to be met with another setback.  ",
//   },
//   {
//     id: "1196946",
//     title: "Ikkis (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/8PWu0V10nMqG5SrA13wLRXTD2fH.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/wbhoYwvqgadchfMgUOfOp87QZDS.jpg",
//     release_date: "2026-01-01",
//     vote_average: 8.1,
//     duration: "2h 27m",
//     media_type: 'movie',
//     genres: ["War", "History", "Biography"],
//     streams: {
//       "Server 1": "https://xprime.today/watch/1196946",
//       "Server 2": "https://cinemaos.tech/player/1196946",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/1196946/hindi?autoplay=false&back=true&server=0",
//       "Server 4":
//         "https://short.icu/_iVjlYQ_U?thumbnail=https://media.themoviedb.org/t/p/w780/wbhoYwvqgadchfMgUOfOp87QZDS.jpg",
//       "Server 5": "https://www.cinezo.net/watch/movie/1196946",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/1196946",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1196946",
//     },
//     overview:
//       "Second Lieutenant and Indias youngest Param Vir Chakra recipient, Arun Khetarpal, gave his life fighting for his battalion and the country during the 1971 Battle of Basantar. Ikkis also takes a reflective look at the futility of war through the eyes of Khetarpals father, who visits his ancestral home in Sargodha and Alma Mater for reunion, which now happens to be in post-partition Pakistan, 30 years later.",
//   },
//   {
//     id: "872585",
//     title: "Oppenheimer",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaB0.jpg",
//     release_date: "2023-07-21",
//     vote_average: 8.1,
//     duration: "3h 0m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/872585",
//       "Server 2": "https://cinemaos.tech/player/872585",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/872585/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/872585",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/872585",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-872585",
//     },
//     genres: ["Drama", "History", "Biography"],
//     overview:
//       "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
//   },
//   {
//     id: "346698",
//     title: "Barbie",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
//     release_date: "2023-07-21",
//     vote_average: 7.2,
//     duration: "1h 54m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/346698",
//       "Server 2": "https://cinemaos.tech/player/346698",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/346698/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/346698",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/346698",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-346698",
//     },
//     genres: ["Comedy", "Adventure", "Fantasy"],
//     overview:
//       "Barbie and Ken are having the time of their lives in the colorful world of Barbie Land.",
//   },
//   {
//     id: "569094",
//     title: "Spider-Man: Across the Spider-Verse",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4hD5ri.jpg",
//     release_date: "2023-06-02",
//     vote_average: 8.7,
//     duration: "2h 20m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/569094",
//       "Server 2": "https://cinemaos.tech/player/569094",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/569094/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/569094",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/569094",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-569094",
//     },
//     genres: ["Animation", "Action", "Adventure"],
//     overview:
//       "Miles Morales returns for an epic adventure across the multiverse.",
//   },
//   {
//     id: "447365",
//     title: "Guardians of the Galaxy Vol. 3",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
//     release_date: "2023-05-05",
//     vote_average: 8.0,
//     duration: "2h 30m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/447365",
//       "Server 2": "https://cinemaos.tech/player/447365",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/447365/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/447365",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/447365",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-447365",
//     },
//     genres: ["Action", "Adventure", "Comedy"],
//     overview: "Peter Quill must rally his team to defend the universe.",
//   },
//   {
//     id: "385687",
//     title: "Fast X",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4hD5ri.jpg",
//     release_date: "2023-05-19",
//     vote_average: 7.2,
//     duration: "2h 21m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/385687",
//       "Server 2": "https://cinemaos.tech/player/385687",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/385687/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/385687",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/385687",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-385687",
//     },
//     genres: ["Action", "Crime", "Thriller"],
//     overview: "Dom Toretto and his family are targeted by a vengeful son.",
//   },
//   {
//     id: "603692",
//     title: "John Wick: Chapter 4",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
//     release_date: "2023-03-24",
//     vote_average: 7.8,
//     duration: "2h 49m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/603692",
//       "Server 2": "https://cinemaos.tech/player/603692",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/603692/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/603692",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/603692",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-603692",
//     },
//     genres: ["Action", "Crime", "Thriller"],
//     overview: "John Wick uncovers a path to defeating The High Table.",
//   },
//   {
//     id: "667538",
//     title: "Transformers: Rise of the Beasts",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
//     release_date: "2023-06-09",
//     vote_average: 7.3,
//     duration: "2h 7m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/667538",
//       "Server 2": "https://cinemaos.tech/player/667538",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/667538/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/667538",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/667538",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-667538",
//     },
//     genres: ["Action", "Adventure", "Sci-Fi"],
//     overview: "Optimus Prime and the Autobots take on their biggest challenge.",
//   },
//   {
//     id: "298618",
//     title: "The Flash",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
//     release_date: "2023-06-16",
//     vote_average: 6.9,
//     duration: "2h 24m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/298618",
//       "Server 2": "https://cinemaos.tech/player/298618",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/298618/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/298618",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/298618",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-298618",
//     },
//     genres: ["Action", "Adventure", "Fantasy"],
//     overview: "Barry Allen uses his super speed to change the past.",
//   },
//   {
//     id: "575264",
//     title: "Mission: Impossible - Dead Reckoning Part One",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
//     release_date: "2023-07-14",
//     vote_average: 7.7,
//     duration: "2h 43m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/575264",
//       "Server 2": "https://cinemaos.tech/player/575264",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/575264/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/575264",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/575264",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-575264",
//     },
//     genres: ["Action", "Adventure", "Thriller"],
//     overview: "Ethan Hunt and his IMF team must track down a dangerous weapon.",
//   },
//   {
//     id: "447277",
//     title: "The Little Mermaid",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/7pFwXl9QqgU7wQeQ5tCgxArqMFH.jpg",
//     release_date: "2023-05-26",
//     vote_average: 6.7,
//     duration: "2h 15m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/447277",
//       "Server 2": "https://cinemaos.tech/player/447277",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/447277/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/447277",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/447277",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-447277",
//     },
//     genres: ["Adventure", "Family", "Fantasy"],
//     overview: "A young mermaid trades her voice for human legs.",
//   },
//   {
//     id: "157336",
//     title: "Interstellar",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     release_date: "2014-11-07",
//     vote_average: 8.4,
//     duration: "2h 49m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/157336",
//       "Server 2": "https://cinemaos.tech/player/157336",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/157336/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/157336",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/157336",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-157336",
//     },
//     genres: ["Adventure", "Drama", "Sci-Fi"],
//     overview: "A team of explorers travel through a wormhole in space.",
//   },
//   {
//     id: "27205",
//     title: "Inception",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
//     release_date: "2010-07-16",
//     vote_average: 8.4,
//     duration: "2h 28m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/27205",
//       "Server 2": "https://cinemaos.tech/player/27205",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/27205/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/27205",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/27205",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-27205",
//     },
//     genres: ["Action", "Sci-Fi", "Thriller"],
//     overview: "A thief who steals corporate secrets through dream-sharing.",
//   },
//   {
//     id: "155",
//     title: "The Dark Knight",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg",
//     release_date: "2008-07-18",
//     vote_average: 8.5,
//     duration: "2h 32m",
//     media_type: 'movie',
//     streams: {
//       "Server 1": "https://xprime.today/watch/155",
//       "Server 2": "https://cinemaos.tech/player/155",
//       "Server 3":
//         "https://zxcstream.xyz/player/movie/155/english?autoplay=false&back=true&server=0",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//       "Server 5 ": "https://www.cinezo.net/watch/movie/155",
//       "Server 6": "https://vidsrc-embed.ru/embed/movie/155",
//       "Server 7": "https://api.cinezo.net/embed/tmdb-movie-155",
//     },
//     genres: ["Action", "Crime", "Drama"],
//     overview: "Batman faces the Joker in Gotham City.",
//   },
// ];


// // 15 UNIQUE TV SHOWS (ALL FROM TMDB)
// export const UNIQUE_TV_SHOWS: MediaItem[] = [
//  {
//     id: "mayasabha-s01-2026-multi-lang",
//     title: "Mayasabha S01 (2026) Multi-Lang",
//     poster_path: "https://media.themoviedb.org/t/p/w500/ddhOEoAqefgzcxlx5hIvkFpF9cw.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/nofMFwwxPMkv76NqrbvoAVwiH4J.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'tv',
//     genres: ["War ", "Political", "Drama"],
//     streams: {
//       "Server 1 - Multi-Lang": "https://stmix.io/e/Bc7L0bPOfyok",
//       "Server 2 - Multi-Lang": "https://byseqekaho.com/e/57tgagfdddcd",
//     },
//     overview: "Mayasabha is a period political drama set in Mid 70s Andhra Pradesh. Krishnama Naidu, an idealistic student leader and a charismatic MS Rami Reddy wade into the world of Andhra politics. As they turn thick friends, they strive to use politics as a means to achieve public good. But caste fault lines erupt, loyalties are tested and their bond is pushed to the brink. Will their friendship sustain the brutal ascent of power where there is place for only one at the summit?",
//   },
//   {
//     id: "unfamiliar-s01-2026-multi-lang",
//     title: "Unfamiliar S01 (2026) Multi-Lang",
//     poster_path: "https://media.themoviedb.org/t/p/w500/fX0Kvvo6hj9feqS3JyFpVmscz2Y.jpg",
//     backdrop_path: "https://media.themoviedb.org/t/p/w780/qDq3dG4ElRohih5fUGNQRLHuBaC.jpg",
//     release_date: "2026-01-16",
//     vote_average: 6.4,
//     duration: "2h 40m",
//     media_type: 'tv',
//     genres: ["Crime ", "Action", "Drama"],
//     streams: {
//       "Server 1 - Multi-Lang": "https://stmix.io/e/of0qQX1SdWpvo",
//       "Server 2 - Multi-Lang": "https://byseqekaho.com/e/ajssdlwajoj4/",
//       "Server 3": "https://api.cinezo.net/embed/tmdb-tv-274776",
//     },
//     overview: "When the past catches up with two former spies, their biggest challenge isn't car chases, shootouts or fistfights — it's telling each other the truth.",
//   },
//   {
//     id: "249766",
//     title: "Daldal S01 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/wvAwkKeIs7bkb6EJAYRzpANhfxM.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/bd0usdz6dgmEE6HVhEhepR5r6MP.jpg",
//     release_date: "2025-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1": "https://stmix.io/e/4OtUU7kOtUK87",
//       "Server 2": "https://xprime.today/watch/249766/1/1",
//       },
//     genres: ["Drama", "Thriller", "Mystery"],
//     overview:
//       "Haunted by the guilt of her past and dealing with the demons of her present, a newly-appointed DCP, Rita Ferreira, must embark on an investigation of a series of murders that puts her on a collision course with a cold-blooded serial killer.",
//   },
//   {
//     id: "91239",
//     title: "Bridgerton S04 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/uXTg565ahu9RwonCX1V2Hex1NU6.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/6umsRLI7t0ydFwCl0JNEIO0q2LH.jpg",
//     release_date: "2026-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://zxcstream.xyz/player/tv/91239/s=1/e=1/english?autoplay=false&back=true&server=0",
//       "Server 2": "https://xprime.today/watch/91239/1/1",
//       "Server 3 - HINDI": "https://stmix.io/e/hriMo9qTXqA9U",
//       "Server 4": "https://api.cinezo.net/embed/tmdb-tv-91239/1/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/91239?season=1&episode=1",
//     },
//     genres: ["Crime", "Drama", "Mystery"],
//     overview:
//       "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
//   },
//   {
//     id: "198178",
//     title: "Wonder Man S01 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/6yy9nQlFt2l6UVWzrfhszFCaZ5C.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/3xdtP9D78ZFFBwIBXf3XWWQiqMB.jpg",
//     release_date: "2026-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://zxcstream.xyz/player/tv/198178/s=1/e=1/english?autoplay=false&back=true&server=0",
//       "Server 2": "https://xprime.today/watch/198178/1/1",
//       "Server 3 ": "https://api.cinezo.net/embed/tmdb-tv-198178/1/1",
//       "Server 4 ": "https://www.cinezo.net/watch/tv/198178?season=1&episode=1",
//       "Server 5 - HINDI": "https://stmix.io/e/HJEtGuVS1yBo",   
//     },
//     genres: ["Comedy", "Drama", "Thriller"],
//     overview:
//       "Simon and Trevor, two actors at opposite ends of their careers, chase life-changing roles.",
//   },
//   {
//     id: "254071",
//     title: "Steal S01 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/6KmlaPhsohh3Ki9XJUq0jiUYbf3.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/6KmlaPhsohh3Ki9XJUq0jiUYbf3.jpg",
//     release_date: "2026-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://zxcstream.xyz/player/tv/254071/s=1/e=1/english?autoplay=false&back=true&server=0",
//       "Server 2": "https://xprime.today/watch/254071/1/1",
//       "Server 3 - HINDI": "https://stmix.io/e/zd1Y3sArA3bs",
//       "Server 4": "https://api.cinezo.net/embed/tmdb-tv-254071/1/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/254071?season=1&episode=1",
//       "Server 6 - HINDI":
//         "https://short.icu/kB0-DCujU?thumbnail=https://media.themoviedb.org/t/p/w780/cm17eZBEI0jAsuwlIrw9L7K5lY2.jpg",
//     },
//     genres: ["Crime", "Drama", "Mystery"],
//     overview:
//       "A typical day at Lochmill Capital is upended when armed thieves burst in and force Zara and her best friend Luke to execute their demands. In the aftermath, conflicted detective Rhys races against time to find out who stole £4 billion pounds of people's pensions and why.",
//   },
//   {
//     id: "311632",
//     title: "Space Gen: Chandrayaan S01 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/d6WIr1vycFCCdYewgRf8dpWxQQE.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/d6WIr1vycFCCdYewgRf8dpWxQQE.jpg",
//     release_date: "2026-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1": "https://stmix.io/e/2zYH1fFQgKys",
//       "Server 2": "https://xprime.today/watch/311632/1/1",
//       "Server 3": "https://byseqekaho.com/e/yxv57pc9qtxs",
//       "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-311632/1/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/311632?season=1&episode=1",
//     },
//     genres: ["Sci-Fi", "Drama", "Mystery"],
//     overview:
//       "Indian space engineers face mounting pressure to redeem themselves following the Chandrayaan 2 lunar mission's unexpected outcome.",
//   },
//   {
//     id: "308482",
//     title: 'Taskaree: The Smuggler"s Web S01 (2026)',
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/25fKRXvQLBq4nXu9vjOVJcvCiiD.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/25fKRXvQLBq4nXu9vjOVJcvCiiD.jpg",
//     release_date: "2026-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":"https://stmix.io/e/YJ80jBb6C9B5",
//       "Server 2": "https://xprime.today/watch/308482/1/1",
//       "Server 3": "https://byseqekaho.com/e/wrnmbynqqeyk",
//       "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-308482/1/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/308482?season=1&episode=1",
//     },
//     genres: ["Crime", "Drama", "Mystery"],
//     overview:
//       "A dedicated customs officer and his team take on a notorious smuggler leading a powerful syndicate, but unexpected obstacles threaten their mission.",
//   },
//   {
//     id: "297594",
//     title: "Bindiya Ke Bahubali S02 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/eSJGKRff52Pg2SfOiIdC4IlMMQR.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/eSJGKRff52Pg2SfOiIdC4IlMMQR.jpg",
//     release_date: "2026-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1": "https://stmix.io/e/PaMIpZTnAE7b",
//       "Server 2": "https://xprime.today/watch/297594/2/1",
//       "Server 3": "https://byseqekaho.com/e/hv81w9p30urb",
//       "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-297594/2/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/297594?season=2&episode=1",
//     },
//     genres: ["Drama", "Crime", "Mystery"],
//     overview:
//       "With humour, absurdity and family cat and mouse at its center, this is a tale of family gangsters in a fictitious madhouse city, Bindiya. As the current Don is put behind bars, the gangster familys alliances shift, new love, friendships, and betrayals explode until Bindiya becomes a full-blown circus-where love is a deal, power is personal, and every one has a card and blood on their hands.",
//   },
//   {
//     id: "311171",
//     title: "Bhootiyapa (2025)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/4NGdzyuffqhb1jMEvTfri3jn5Fj.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/4NGdzyuffqhb1jMEvTfri3jn5Fj.jpg",
//     release_date: "2025-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://stmix.io/e/euvvLY1BD8F7",
//       "Server 2": "https://xprime.today/watch/311171/1/1",
//       "Server 3": "https://byseqekaho.com/e/f1i18ua20w0r",
//       "Server 4": "https://short.icu/5ALJ-TlBZ?thumbnail=https://media.themoviedb.org/t/p/w780/eQJUKQMl0SvoHiYwAW2E0VoAwR2.jpg"
//     },
//     genres: ["Drama", "Crime", "Mystery"],
//     overview:
//       "Bhootiyapa revolves around a film crew documenting the untold stories of these ghosts, who, despite their spectral existence, have tales to tell about love, loss and laughter. Each ghost, from a different era, adds a layer of mystery and mirth to the story, revealing how life after death can be as vibrant and surprising as mortal life itself.",
//   },
//   {
//     id: "243826",
//     title: "Pharma (2025)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/hQWT47GFQyvO1tFqx6IgCOvrrr8.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/hQWT47GFQyvO1tFqx6IgCOvrrr8.jpg",
//     release_date: "2025-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//       "https://zxcstream.xyz/player/tv/243826/s=1/e=1/hindi?autoplay=false&back=true&server=0",
//       "Server 2 - Only Malayalam": "https://xprime.today/watch/243826/1/1",
//       "Server 3 - HINDI": "https://short.icu/PqYLFFeKU?thumbnail=https://media.themoviedb.org/t/p/w780/n1qDEYpr3pq7bJ9GGaF9zVNjdNq.jpg"
//     },
//     genres: ["Drama", "Crime", "Mystery"],
//     overview:
//       "A young medical representative struggles against the pharma game, masters it and eventually fights against it.",
//   },
//   {
//     id: "61859",
//     title: "The Night Manager S02 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/1MccRnw41qQjREuZkovqP2UX1i3.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/lJoaiZcYMc8RkmPLROcdS2WQxn9.jpg",
//     release_date: "2026-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://zxcstream.xyz/player/tv/61859/s=1/e=1/english?autoplay=false&back=true&server=0",
//       "Server 2": "https://xprime.today/watch/61859/2/1",
//       "Server 3": "https://vidsrc-embed.ru/embed/tv/61859",
//       "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-61859/2/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/61859?season=1&episode=1",
//       "Server 6 - HINDI": "https://byseqekaho.com/e/p9vhhvpow8rk",
//       "Server 7 - HINDI":
//         "https://short.icu/ndrmOyAuX?thumbnail=https://media.themoviedb.org/t/p/w780/lJoaiZcYMc8RkmPLROcdS2WQxn9.jpg",
//     },
//     genres: ["Spy", "Crime", "Mystery"],
//     overview:
//       "Former British soldier Jonathan Pine navigates the shadowy recesses of Whitehall and Washington where an unholy alliance operates between the intelligence community and the secret arms trade. To infiltrate the inner circle of lethal arms dealer Richard Onslow Roper, Pine must himself become a criminal.",
//   },
//   {
//     id: "259731",
//     title: "His & Hers S01 (2026)",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/cDSXLVQLkCSBIpBx3UW04TsfZ5c.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/n4hJLZmBG8kZccNn7bNgBDsVQ6a.jpg",
//     release_date: "2026-01-08",
//     vote_average: 7.2,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://zxcstream.xyz/player/tv/259731/s=1/e=1/english?autoplay=false&back=true&server=0",
//       "Server 2": "https://xprime.today/watch/259731/1/1",
//       "Server 3": "https://vidsrc-embed.ru/embed/tv/259731",
//       "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-259731/1/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/259731?season=1&episode=1",
//       "Server 6 - HINDI":
//         "https://short.icu/tyiiqPGLF?thumbnail=https://media.themoviedb.org/t/p/w780/n4hJLZmBG8kZccNn7bNgBDsVQ6a.jpg",
//     },
//     genres: ["Drama", "Crime", "Mystery"],
//     overview:
//       "Two estranged spouses — one a detective, the other a news reporter — vie to solve a murder in which each believes the other is a prime suspect.",
//   },
//   {
//     id: "100088",
//     title: "The Last of Us",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
//     release_date: "2023-01-15",
//     vote_average: 8.8,
//     duration: "50m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://zxcstream.xyz/player/tv/100088/s=1/e=1/english?autoplay=false&back=true&server=0",
//       "Server 2": "https://vidsrc-embed.ru/embed/tv/100088",
//       "Server 3": "https://xprime.today/watch/100088/2/1",
//       "Server 4": "https://api.cinezo.net/embed/tmdb-tv-100088/2/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/100088?season=2&episode=1",
//       "Server 6 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//     },
//     genres: ["Drama", "Action", "Sci-Fi"],
//     overview: "After a global pandemic destroys civilization.",
//   },
//   {
//     id: "94997",
//     title: "House of the Dragon",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
//     release_date: "2022-08-21",
//     vote_average: 8.5,
//     duration: "55m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://www.zxcstream.xyz/player/tv/94997/2/1?autoplay=false&back=true&server=0",
//       "Server 2": "https://vidsrc-embed.ru/embed/tv/94997",
//       "Server 3": "https://xprime.today/watch/94997/2/1",
//       "Server 4": "https://api.cinezo.net/embed/tmdb-tv-94997/2/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/94997?season=2&episode=1",
//       "Server 6 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//     },
//     genres: ["Drama", "Action", "Adventure"],
//     overview:
//       "The story of House Targaryen set 200 years before Game of Thrones.",
//   },
//   {
//     id: "119051",
//     title: "Wednesday",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/9G3mCR9qQ8U7Oi2f7nPmNpXMGFA.jpg",
//     release_date: "2022-11-23",
//     vote_average: 8.5,
//     duration: "45m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://www.zxcstream.xyz/player/tv/119051/2/1?autoplay=false&back=true&server=0",
//       "Server 2": "https://vidsrc-embed.ru/embed/tv/119051",
//       "Server 3": "https://xprime.today/watch/119051/2/1",
//       "Server 4": "https://api.cinezo.net/embed/tmdb-tv-119051/2/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/119051?season=2&episode=1",
//       "Server 6 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//     },
//     genres: ["Comedy", "Crime", "Fantasy"],
//     overview: "Wednesday Addams attempts to master her psychic ability.",
//   },
//   {
//     id: "1399",
//     title: "Game of Thrones",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg",
//     release_date: "2011-04-17",
//     vote_average: 8.5,
//     duration: "1h",
//     media_type: 'tv',
//     streams: {
//       "Server 1": "https://vidsrc.cc/v2/embed/tv/1399",
//       "Server 2":
//         "https://zxcstream.xyz/player/tv/1399/s=1/e=1/english?autoplay=false&back=true&server=0",
//       "Server 3":
//         "https://apicinetaro.falex43350.workers.dev/tv/1399/1/1/english",
//       "Server 4 - HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",  
//     },
//     genres: ["Drama", "Fantasy", "Adventure"],
//     overview: "Nine noble families fight for control over Westeros.",
//   },
//   {
//     id: "66732",
//     title: "Stranger Things",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
//     release_date: "2016-07-15",
//     vote_average: 8.7,
//     duration: "50m",
//     media_type: 'tv',
//     streams: {
//       "Server 1":
//         "https://www.zxcstream.xyz/player/tv/66732/5/1?autoplay=false&back=true&server=0",
//       "Server 2": "https://vidsrc-embed.ru/embed/tv/66732",
//       "Server 3": "https://xprime.today/watch/66732/5/1",
//       "Server 4": "https://api.cinezo.net/embed/tmdb-tv-66732/5/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/66732?season=5&episode=1",
//       "Server 6- HINDI":
//         "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//     },
//     genres: ["Drama", "Fantasy", "Horror"],
//     overview: "When a young boy vanishes, a small town uncovers a mystery.",
//   },
//   {
//     id: "71912",
//     title: "The Witcher",
//     poster_path:
//       "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
//     backdrop_path:
//       "https://image.tmdb.org/t/p/original/7vBpX7e4Dp3dG2c5QZ6w4qyY6qy.jpg",
//     release_date: "2019-12-20",
//     vote_average: 8.2,
//     duration: "1h",
//     media_type: 'tv',
//     genres: ["Action", "Adventure", "Drama"],
//     streams: {
//       "Server 1":
//         "https://www.zxcstream.xyz/player/tv/71912/4/1?autoplay=false&back=true&server=0",
//       "Server 2": "https://vidsrc-embed.ru/embed/tv/71912",
//       "Server 3": "https://xprime.today/watch/71912/4/1",
//       "Server 4": "https://api.cinezo.net/embed/tmdb-tv-71912/4/1",
//       "Server 5 ": "https://www.cinezo.net/watch/tv/71912?season=4&episode=1",
//       "Server 6 - HINDI": "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
//     },
//     overview: "Geralt of Rivia, a mutated monster-hunter for hire.",
//   }
// ];


// // Fetch functions to simulate API calls
// export const fetchMovies = async (): Promise<MediaItem[]> => {
//   return UNIQUE_MOVIES;
// };

// export const fetchTVShows = async (): Promise<MediaItem[]> => {
//   return UNIQUE_TV_SHOWS;
// };

// export const fetchSports = async (): Promise<MediaItem[]> => {
//   return UNIQUE_SPORTS;
// };

// export const fetchTVLive = async (): Promise<MediaItem[]> => {
//   return UNIQUE_TV_LIVE;
// };

// export const fetchById = async (id: string, type: string): Promise<MediaItem | null> => {
//   let source: MediaItem[] = [];
  
//   if (type === 'movie') source = UNIQUE_MOVIES;
//   else if (type === 'tv') source = UNIQUE_TV_SHOWS;
//   else if (type === 'sports') source = UNIQUE_SPORTS;
//   else if (type === 'tv_live') source = UNIQUE_TV_LIVE;
  
//   const item = source.find(i => i.id === id);
//   return item || null;
// };







































































// import { MediaItem } from "../types";

// const API_KEY = 'be3e130c5ee08bf14bc9078514f1999a';
// const BASE_URL = "https://api.themoviedb.org/3";
// const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
// const BACKDROP_BASE = "https://image.tmdb.org/t/p/original";

// const getFixedMatchTime = (hoursAdd: number, minutesSet: number = 0) => {
//   const baseTime = new Date("2026-01-30T08:00:00.000Z");
//   baseTime.setHours(baseTime.getHours() + hoursAdd);
//   baseTime.setMinutes(minutesSet);
//   return baseTime.toISOString();
// };

// // SEARCH RESULT STREAMS - FIXED
// const getSearchMovieStreams = (tmdbId: string) => {
//   return {
//     "Server 1": `https://xprime.today/watch/${tmdbId}`,
//     "Server 2": `https://www.vidking.net/embed/movie/${tmdbId}?autoPlay=true&nextEpisode=true&episodeSelector=true`,
//     "Server 3": `https://cinemaos.tech/player/${tmdbId}`,
//     "Server 4": `https://api.cinezo.net/embed/tmdb-movie-${tmdbId}`,
//     "Server 5": `https://vidsrc-embed.ru/embed/movie/${tmdbId}`,
//   };
// };

// // TV SHOW STREAMS EXACTLY AS YOU WANT
// const getSearchTVStreams = (tmdbId: string, season: string = "1", episode: string = "1") => {
//   return {
//     "Server 1": `https://xprime.today/watch/${tmdbId}/${season}/${episode}`,
//     "Server 2": `https://www.vidking.net/embed/tv/${tmdbId}/${season}/${episode}?autoPlay=true&nextEpisode=true&episodeSelector=true`,
//     "Server 3": `https://api.cinezo.net/embed/tmdb-tv-${tmdbId}/${season}/${episode}`,
//     "Server 4": `https://www.cinezo.net/watch/tv/${tmdbId}?season=${season}&episode=${episode}`,
//     "Server 5": `https://vidsrc-embed.ru/embed/tv/${tmdbId}/${season}/${episode}`,
//   };
// };

// // LOCAL MOVIES - ADD ALL YOUR MOVIES HERE
// export const UNIQUE_MOVIES: MediaItem[] = [
  //      {
  //   id: "maaldar-2026",
  //   title: "Maaldar (2026)",
  //   poster_path: "/images/movie/mal.jpg",
  //   backdrop_path: "/images/movie/maldar.jpg",
  //   release_date: "2026-01-26",
  //   vote_average: 6.2,
  //   duration: "1h 19m",
  //   media_type: 'movie',
  //   genres: ["Adult", "Romance", "Drama"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/lYENS9mtvukML",
  //     "Server 2": "https://byseqekaho.com/e/aq6rr0tgebsi",
  //   },
  //   overview: "Lena and Mara are drawn into a secret affair that defies boundaries and threatens everything they've built. When Mara uncovers her groom's betrayal, she finds solace in Lena, a newfound friend who soon becomes something more. As passion and secrecy collide, their choices endanger careers, fracture relationships, and lead to devastating consequences.",
  // },
  // {
  //   id: "patikim-ni-robb-guinto-2026",
  //   title: "Patikim ni Robb Guinto (2026)",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/4rL4XpHnngzElgdYDqaDtZnmtEH.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/AarN9NHen3V3z2H4Naw5Izc11x.jpg",
  //   release_date: "2026-01-26",
  //   vote_average: 6.2,
  //   duration: "1h 19m",
  //   media_type: 'movie',
  //   genres: ["Adult", "Romance", "Drama"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/7tyq4fhUZ3xx",
  //     "Server 2": "https://www.vidking.net/embed/movie/1559596?autoPlay=true&nextEpisode=true&episodeSelector=true",
  //     "Server 3": "https://cinemaos.tech/player/1559596",
  //     "Server 4": "https://xprime.today/watch/1559596",
      
  //   },
  //   overview: "VMX hottie Christy Imperial gives fans a taste of VMX GL Crush Robb Guinto's spiciest and tastiest scenes",
  // },
  // {
  //   id: "audacity-2026",
  //   title: "Audacity (2026)",
  //   poster_path: "https://www.coolmoviez.baby/files/images/Audacity_(2026)_Part_2_Atrangii_Hindi_Unrated_Webseries.jpg",
  //   backdrop_path: "https://i.ytimg.com/vi/tULnumoXoWk/maxresdefault.jpg",
  //   release_date: "2026-01-26",
  //   vote_average: 6.2,
  //   duration: "1h 19m",
  //   media_type: 'movie',
  //   genres: ["Adult", "Romance", "Drama"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/jOktxgon2ZQlO",
  //     "Server 2": "https://byseqekaho.com/e/zldtte3alzfk/",
  //     },
  //   overview: "VMX hottie Christy Imperial gives fans a taste of VMX GL Crush Robb Guinto's spiciest and tastiest scenes",
  // },
  // {
  //   id: "speed-faster-2026",
  //   title: "Speed Faster (2026) ",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/dKYp9uUlDufvL0gWHve8nuzePdk.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/nUMclZJRRwREfeP8liJ7LOddjnY.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Adventure ", "Comedy", "Mystery"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/cTWgLAJ4I50v7",
  //     "Server 2": "https://byseqekaho.com/e/ptpj1jv2799q",
  //     "Server 3": "https://www.vidking.net/embed/movie/1617852?autoPlay=true&nextEpisode=true&episodeSelector=true",
  //     "Server 4": "https://cinemaos.tech/player/1617852",
  //     "Server 5": "https://xprime.today/watch/1617852",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1617852",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1617852",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1617852",
      
  //   },
  //   overview: "Ace and his crew of elite street racers are forced into a high-stakes mission when a shadowy organization threatens someone close to him. In the aftermath of Four Amigos, they find themselves working for the infamous Church of Assassins, tasked with pulling off an impossible job. But as they push their limits, they uncover a chilling truth-failure was always part of the plan. Betrayal, speed, and survival collide in this adrenaline-fueled thriller where the real race isn't just for victory, but for their lives.",
  // },
  // {
  //   id: "missing-the-boat-2026",
  //   title: "Missing the Boat (2026) ",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/2Lw8nVKLNvvfAG46fn2nAJwBrPg.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/5Xiqdj6eiitWtyPmy0zakV3GYf.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Adventure ", "Comedy", "Mystery"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/acWrQSPMfmrqZ",
  //     "Server 2": "https://byseqekaho.com/e/vo038510cxcp",
  //     "Server 3": "https://www.vidking.net/embed/movie/1592019?autoPlay=true&nextEpisode=true&episodeSelector=true",
  //     "Server 4": "https://cinemaos.tech/player/1592019",
  //     "Server 5": "https://xprime.today/watch/1592019",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1592019",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1592019",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1592019",
  //   },
  //   overview: "Strangers Kelly and Parker both end up on the same Italian cruise, but after missing the boat during a stop, they're forced to team up and race across southern Italy to catch up.",
  // },
  // {
  //   id: "delivery-boy-pizza-on-time-2026",
  //   title: "Delivery Boy Pizza On Time (2026) ",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/iy7UrpXGCcSpBqpY4yM9a0oU1Gm.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/rugUejUyBcQct1t6b2ysz3rrsjm.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Mystery", "Drama", "Thriller"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/9QQnTyfcCRiB",
  //     "Server 2": "https://byseqekaho.com/e/4l8x3qvzikp0/",
  //   },
  //   overview: "When Riya's husband is away, an ordinary evening takes an unexpected turn. Out of boredom, she begins chatting online with a stranger — someone charming yet mysterious. But soon, a pizza delivery boy shows up at her door with an order she never placed. As the night progresses, strange events begin to unfold. The delivery boy insists she accept the pizza, and the online stranger seems to know more about her than she ever shared. Caught between reality and suspicion, Riya must uncover who is behind the web of deceit — the delivery boy, the man on the cam, or someone else entirely. A gripping mystery–thriller where every message, every knock, and every face hides a secret.",
  // },
  // {
  //   id: "tu-meri-main-tera-main-tera-tu-meri-2026",
  //   title: "Tu Meri Main Tera Main Tera Tu Meri (2025) ",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/4mJ4xhjBTBF8GOtsfr78Ebp76vS.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/iQGmmI5VwNW2cjrF2uQF8VhBGcw.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Romance", "Drama", "Thriller"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/DoMsumAkAZVA",
  //     "Server 2": "https://byseqekaho.com/e/ibdepxzeu8vz/",
      
  //   },
  //   overview: "When a carefree NRI wedding planner and a headstrong novelist collide during a wild summer in Croatia, sparks fly in ways neither expected. What begins as playful clashes soon transforms into something deeper – only to be tested when love, family, and tradition pull them in opposite directions.",
  // },
  // {
  //   id: "human-cocaine-2026",
  //   title: "Human Cocaine (2026) ", 
  //   poster_path: "https://media.themoviedb.org/t/p/w500/5u4PzItZ835kr7PyT6yuR5gI9p0.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/ado1wdhkVOOUkDnRP0mnJmQ5iWC.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Action", "Crime", "Thriller"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/5FigxkywkeEG",
  //     "Server 2": "https://www.vidking.net/embed/movie/1568964?autoPlay=true&nextEpisode=true&episodeSelector=true",
  //     "Server 3": "https://cinemaos.tech/player/1568964",
  //     "Server 4": "https://xprime.today/watch/1568964",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1568964",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1568964",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1568964",
  //   },
  //   overview: "Arjun, a UK based cab driver who is financially struggling to get his estranged wife and daughter back, finds an opportunity to make GBP 25,000 The job is simple: Deliver a parcel to a given address. Along the way, helps a hitchhiker Liza by giving her a ride. But what he doesn't know is how he is endangering both their lives.",
  // },
  // {
  //   id: "vadh-2-2026",
  //   title: "Vadh 2 (2026) ", 
  //   poster_path: "https://media.themoviedb.org/t/p/w500/pOJAaLMsc7T5rwVDTA7SRg9SAEU.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/5z7eorMubo7nB11P8s5a0GMXf2D.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Action", "Crime", "Thriller"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/3tIsnubKKjK2",
  //     "Server 2": "https://byseqekaho.com/e/aclqmbxitdv4/",
  //     "Server 3": "https://www.vidking.net/embed/movie/1595507?autoPlay=true&nextEpisode=true&episodeSelector=true",
  //     "Server 4": "https://cinemaos.tech/player/1595507",
  //     "Server 5": "https://xprime.today/watch/1595507",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1595507",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1595507",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1595507",
  //   },
  //   overview: "A police officer's pursuit of truth in a shocking prison crime intertwines with the lives of a widowed prison guard and a soon to be released inmate, unravelling a web of morality and redemption.",
  // },
  // {
  //   id: "bhabiji-ghar-par-hain-2026",
  //   title: "VBhabiji Ghar Par Hain! (2026) ", 
  //   poster_path: "https://media.themoviedb.org/t/p/w500/v8G1NudtXq7BP56TgmAfpDx10FQ.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/g3varY1uTosvAheX729NY2g9EKv.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Comedy", "Family", "Drama"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/PIwgWmce3PzM",
  //     "Server 2": "https://byseqekaho.com/e/4p0e0o3vtyn0/",
  //     "Server 3": "https://www.vidking.net/embed/movie/1587124?autoPlay=true&nextEpisode=true&episodeSelector=true",
  //     "Server 4": "https://cinemaos.tech/player/1587124",
  //     "Server 5": "https://xprime.today/watch/1587124",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1587124",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1587124",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1587124",
  //   },
  //   overview: "In a whirlwind of misunderstandings, two rival neighbours, Vibhuti and Tiwari, find themselves on a riotous road trip with their wives, only to get tangled up with lovable gangster brothers, Shanti and Kranti, who turn a simple journey into an unforgettable comedy of errors.",
  // }, 
  // {
  //   id: "relationship-goals-2026-multi-lang",
  //   title: "Relationship Goals (2026) Multi-Lang",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/o7dVxvZIKnAB7k1eeeWp2k14Es7.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/6zaQ1ffMOXjBdeg0gKd6OxUvT4C.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Romance ", "Comedy", "Drama"],
  //   streams: {
  //     "Server 1 - Multi-Lang": "https://stmix.io/e/fzh60cMcTmlf",
  //     "Server 2 - Multi-Lang": "https://byseqekaho.com/e/1hppdabczy1n/",
  //   },
  //   overview: "When TV producer Leah Caldwell aims to become the first woman running New York's top morning show, her ex competes for the same role. Leah stays focused on her career, until chemistry with her ex challenges her priorities.",
  // },
  // {
  //   id: "even-if-this-love-disappears-tonight-2026-multi-lang",
  //   title: "Even if This Love Disappears Tonight (2026) Multi-Lang",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/5eNN8KLDPUXDqIkTdCbmn1gx5P7.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/iL5eGI9ctHdUOV4yG6dyGKctSEX.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Romance ", "Comedy", "Drama"],
  //   streams: {
  //     "Server 1 - Multi-Lang": "https://stmix.io/e/TP5qsutqmLRk",
  //     "Server 2 - Multi-Lang": "https://byseqekaho.com/e/4xk7wo9mqyg0/",
  //   },
  //   overview: "A high school girl wakes up each day with no memory of yesterday. When she agrees to date a shy classmate, can their love grow with every new beginning?",
  // },
  // {
  //   id: "nari-nari-naduma-murari-2026-multi-lang",
  //   title: "Nari Nari Naduma Murari (2026) Multi-Lang",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/jFBu7tS0mlEZwYTkjJcKH48bV4m.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/8o1b4G5Uv5EFQ64Sicz1ae7WLsT.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Romance ", "Comedy", "Drama"],
  //   streams: {
  //     "Server 1 - Multi-Lang": "https://stmix.io/e/CiPRB7uPObye",
  //     "Server 2 - Multi-Lang": "https://byseqekaho.com/e/ffypfpdjkg6v/",
  //   },
  //   overview: "A young man's life turns upside down when he finds himself caught between two women, leading to an unexpected love triangle filled with emotions, misunderstandings, and tough decisions. As relationships intertwine, he must confront his feelings, face reality, and choose what truly matters, blending romance with heartfelt family drama.",
  // },
  // {
  //   id: "the-investigation-of-lucy-letby-2026-multi-lang",
  //   title: "The Investigation of Lucy Letby (2026) Multi-Lang",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/qhNThwc72GqihJhXaP29Af5hJ2A.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/qhSfXdkrIzwYsyQ3Z9ehFmO3zjy.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Crime ", "Documentary", "Drama"],
  //   streams: {
  //     "Server 1 - Multi-Lang": "https://stmix.io/e/84Xt99ybdoYAo",
  //     "Server 2 - Multi-Lang": "https://byseqekaho.com/e/u50jr9d6b0tx/",
  //     "Server 3": "https://www.vidking.net/embed/movie/1620991?autoPlay=true&nextEpisode=true&episodeSelector=true",
  //     "Server 4": "https://cinemaos.tech/player/1620991",
  //     "Server 5": "https://xprime.today/watch/1620991",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1620991",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1620991",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1620991",
  //   },
  //   overview: "An engaging and thought-provoking look at Lucy Letby, the former nurse serving life in prison after being convicted of the murders of seven infants and the attempted murders of seven others.",
  // },
  // {
  //   id: "840464",
  //   title: "Greenland-2 Migration (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/dtPwBZjzqTaObjG4fKStRkBq1uu.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/tyjXlexbNZQ0ZT1KEJslQtBirqc.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Adventure", "Thriller", "Mystery"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/SalwmX8W01k4B",
  //     "Server 2": "https://cinemaos.tech/player/840464",
  //     "Server 3 ": "https://xprime.today/watch/840464",
  //     "Server 4": "https://www.cinezo.net/watch/movie/840464",
  //     "Server 5": "https://vidsrc-embed.ru/embed/movie/840464",
  //     "Server 6": "https://api.cinezo.net/embed/tmdb-movie-840464",
  //   },
  //   overview:
  //     "Having found the safety of the Greenland bunker after the comet Clarke decimated the Earth, the Garrity family must now risk everything to embark on a perilous journey across the wasteland of Europe to find a new home.",
  // },
  // {
  //   id: "1249508",
  //   title: "Grizzly Night (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/3ppOwa6PEtGsIiDPdZHUbEqgIY7.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/i275mAQP4KhPtYUpMUgBGMmK4WN.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Horror", "Adventure", "Mystery"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/7GZi2cqHskcwn",
  //     "Server 2": "https://cinemaos.tech/player/1249508",
  //     "Server 3 ": "https://xprime.today/watch/1249508",
  //     "Server 4": "https://www.cinezo.net/watch/movie/1249508",
  //     "Server 5": "https://vidsrc-embed.ru/embed/movie/1249508",
  //     "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1249508",
  //   },
  //   overview:
  //     "On August 12th, 1967, in Montana's Glacier National Park, the unthinkable happened: On the same night, nine miles apart, there were not one-but two-fatal grizzly bear attacks.",
  // },
  // {
  //   id: "1234731",
  //   title: "Anaconda (2025)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/qxMv3HwAB3XPuwNLMhVRg795Ktp.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/swxhEJsAWms6X1fDZ4HdbvYBSf9.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Adventure ", "Comedy", "Mystery"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1234731",
  //     "Server 2": "https://cinemaos.tech/player/1234731",
  //     "Server 3 - Multi-Lang": "https://stmix.io/e/wSmdv3CDpCNml",
  //     "Server 4": "https://www.cinezo.net/watch/movie/1234731",
  //     "Server 5": "https://vidsrc-embed.ru/embed/movie/1234731",
  //     "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1234731",
  //   },
  //   overview:
  //     "A group of friends facing mid-life crises head to the rainforest with the intention of remaking their favorite movie from their youth, only to find themselves in a fight for their lives against natural disasters, giant snakes and violent criminals",
  // },
  // {
  //   id: "chemistry-part-2",
  //   title: "Chemistry Part 2 (2026)",
  //   poster_path:
  //     "https://m.media-amazon.com/images/M/MV5BYzBiMWY2ZWEtYTNjOC00ZTg0LWJlMGQtODU1N2UwYWM3MDAyXkEyXkFqcGc@._V1_.jpg",
  //   backdrop_path:
  //     "https://media-files.atrangii.in/media-metadata/6979de0ef60fc20caae469ce",
  //   release_date: "2026-01-26",
  //   vote_average: 6.2,
  //   duration: "1h 19m",
  //   media_type: 'movie',
  //   genres: ["Adult", "Romance", "Drama"],
  //   streams: {
  //    "Server 1": "https://stmix.io/e/PNUePFxDwvjVx",
  //     "Server 2": "https://short.icu/QYmidACiu?thumbnail=https://media-files.atrangii.in/media-metadata/6979de0ef60fc20caae469ce",
  //     "Server 3": "https://byseqekaho.com/e/9a650rp8vdaa",
  //     },
  //   overview:
  //     "When a reluctant student goes to study Chemistry from an enigmatic, isolated teacher, her attraction slowly overpowers his reluctance. A forbidden chemistry builds, threatening to change lives forever.",
  // },
  // {
  //   id: "generation-gap-part-2",
  //   title: "Generation Gap Part 2 (2026)",
  //   poster_path:
  //     "https://m.media-amazon.com/images/M/MV5BMGFhYWQ3YjktNzg3OC00NmJlLTg4NWQtMzcyYWIwNjNkYTIwXkEyXkFqcGc@._V1_.jpg",
  //   backdrop_path:
  //     "https://i.ytimg.com/vi/ID1smTZldw0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3JVPV9kENRBn5u8fWkxQdl4K0_w",
  //   release_date: "2026-01-26",
  //   vote_average: 6.2,
  //   duration: "1h 19m",
  //   media_type: 'movie',
  //   genres: ["Adult", "Romance", "Drama"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/nKnly2xFa69Fs",
  //     "Server 2": "https://short.icu/nzkD33Ujr?thumbnail=https://img.youtube.com/vi/ID1smTZldw0/maxresdefault.jpg",
  //     "Server 3": "https://byseqekaho.com/e/w0nud4ssbmbt",
  //     },
  //   overview:
  //     "A steamy affair between Mrs. Poonam and her nephew (Vipin) begins to develop a gap when they both have different expectations from each other.",
  // },
  // {
  //   id: "1339876",
  //   title: "Mardaani 3 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/jLo8qcDOw9CD1COzMLBouOqHtqX.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/q0aIpg6hiM9PafhGUknEPDBA6bW.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Crime ", "Action", "Mystery"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/kYuQQzKDopYa",
  //     "Server 2": "https://cinemaos.tech/player/1339876-3",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1339876-3/hindi?autoplay=false&back=true&server=0",
  //     "Server 4 - MAIN":
  //       "https://short.icu/LmIsiliv6?thumbnail=https://media.themoviedb.org/t/p/w780/q0aIpg6hiM9PafhGUknEPDBA6bW.jpg",
  //     "Server 5": "https://byseqekaho.com/e/8ekaiu3dgz0r",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1339876-3",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1339876-3",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1339876-3",
  //   },
  //   overview:
  //     "Officer Shivani Shivaji Roy returns to hunt down those behind the disappearance of young girls, risking everything to bring them back alive.",
  // },
  // {
  //   id: "786567",
  //   title: "Gandhi Talks (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/p4iQT3s97T3gQOLhTj0UplzYMOj.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/4Cqad6ZpWJRhBumGE1QwHs9pVuB.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Drama ", "Silence", "Mystery"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/BbQpHGHdJKZGn",
  //     "Server 2": "https://cinemaos.tech/player/786567",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/786567/english?autoplay=false&back=true&server=0",
  //     "Server 4 - MAIN":
  //       "https://short.icu/PhuS5WVOq?thumbnail=https://media.themoviedb.org/t/p/w780/4Cqad6ZpWJRhBumGE1QwHs9pVuB.jpg",
  //     "Server 5": "https://byseqekaho.com/e/oi0zc05mbgjt",
  //     "Server 6": "https://www.cinezo.net/watch/movie/786567",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/786567",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-786567",
  //   },
  //   overview:
  //     "A silent black comedy, about the monetary needs of a character & how it impacts the others. A young, unemployed graduate Mahadev’s struggle to land a job through any means possible and crosses paths with a businessman and petty thief. A subject wherein silence speaks much louder than words. Although a work of fiction by the writer, all the characters in the film are sketched out to seem very real and relatable ensuring an enriching journey as well a laugh riot as the cat and mouse guffaws amongst them unfold. Gandhi Talks aims at telling a story by switching off the device of dialogue, which is not only scary but also interesting and challenging.",
  // },
  // {
  //   id: "1112564",
  //   title: "Vaa Vaathiyaar (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/47uIUf9KCfDzxQXixw8lrvYl8C8.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/qPNIwdR3y965KMsiweyuXdjDRXR.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Comedy ", "Drama", "Romance"],
  //   streams: {
  //     "Server 1- Multi-Lang":
  //       "https://stmix.io/e/XvqZsVUzrTfYy",
  //       },
  //   overview:
  //     "After being raised as the reincarnation of a famous actor, a man finds himself clashing with his grandfather's expectations of him.",
  // },
  // {
  //   id: "1168190",
  //   title: "The Wrecking Crew (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/gbVwHl4YPSq6BcC92TQpe7qUTh6.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/cz4vLJrmaV1zJlRYbxqtvLzeLWB.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Crime ", "Action", "Mystery"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1168190",
  //     "Server 2": "https://cinemaos.tech/player/1168190",
  //     "Server 3 - Multi-Lang": "https://streamix.so/e/LOMcIVE2bYo9n",
  //     "Server 4": "https://www.cinezo.net/watch/movie/1168190",
  //     "Server 5": "https://vidsrc-embed.ru/embed/movie/1168190",
  //     "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1168190",
  //   },
  //   overview:
  //     "Estranged half-brothers Jonny and James reunite after their father's mysterious death. As they search for the truth, buried secrets reveal a conspiracy threatening to tear their family apart. Multi language Available [Tam + Tel + Hin + Mal + Kan + Eng] Apply Settings",
  // },
  // {
  //   id: "1552952",
  //   title: "Dhraupathi 2 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/vojJemS5USdagshMLWS8JyrU8x6.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/vojJemS5USdagshMLWS8JyrU8x6.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Action ", "Drama", "History"],
  //   streams: {
  //     "Server 1":
  //       "https://short.icu/11VUo0mkc?thumbnail=https://media.themoviedb.org/t/p/w780/vojJemS5USdagshMLWS8JyrU8x6.jpg",
  //     "Server 2": "https://byseqekaho.com/e/q96pfror03po",
  //   },
  //   overview:
  //     " 14th century AD, people were suffering from the brutality of the Madurai Sultanate and the Delhi Sultan. The Hoysala Emperor Vallalar III protected his empire and people with diplomacy. The sacrifice and betrayal of some changed the course of a kingdom. Insidious interventions disrupt the lives of people and the stability of the state.",
  // },
  // {
  //   id: "1552952",
  //   title: "Jockey (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/69zi48P9NIwPq7qdssxQ8qqbBNG.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/69zi48P9NIwPq7qdssxQ8qqbBNG.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Action ", "Drama", "Thriller"],
  //   streams: {
  //     "Server 1":
  //       "https://short.icu/8W2HhRv30?thumbnail=https://media.themoviedb.org/t/p/w780/69zi48P9NIwPq7qdssxQ8qqbBNG.jpg",
  //     "Server 2": "https://byseqekaho.com/e/a1p51n0oaksv",
  //   },
  //   overview:
  //     "We don't have an overview translated in English. Help us expand our database by adding one.",
  // },
  // {
  //   id: "1613346",
  //   title: "Landlord (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/l3NGOzBnchp957poN8mBoZuWVHX.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/irXzev38Yf3UJ25PXtsnFg6KVQC.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Action ", "Drama", "Thriller"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1613346",
  //     "Server 2": "https://cinemaos.tech/player/1613346",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1613346/kannada?autoplay=false&back=true&server=0",
  //     "Server 4":
  //       "https://short.icu/OHi7E2c2Q?thumbnail=https://media.themoviedb.org/t/p/w780/irXzev38Yf3UJ25PXtsnFg6KVQC.jpg",
  //     "Server 5": "https://byseqekaho.com/e/4dsgif4rh5lc",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1613346",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1613346",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1613346",
  //   },
  //   overview:
  //     "In a village crushed under a brutal landlord's rule, fear silences the poor, and justice is denied. When a young woman constable challenges the system and an innocent family is burnt alive, outrage erupts into a violent uprising. What follows is a costly fight to reclaim dignity, justice, and the power of the Constitution.",
  // },
  // {
  //   id: "1236153",
  //   title: "Mercy (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/pyok1kZJCfyuFapYXzHcy7BLlQa.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/pyok1kZJCfyuFapYXzHcy7BLlQa.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Action ", "Adventure", "Comedy"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1236153",
  //     "Server 2": "https://cinemaos.tech/player/1236153",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1236153/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://short.icu/AanpBKBQc?thumbnail=https://media.themoviedb.org/t/p/w780/mHC8tSRYfAKGh2jaSNQMSzGdbOW.jpg",
  //     "Server 5 - HINDI": "https://byseqekaho.com/e/j1pt36tomnsn",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1236153",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1236153",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1236153",
  //   },
  //   overview:
  //     "In the near future, a detective stands on trial accused of murdering his wife. He has ninety minutes to prove his innocence to the advanced AI Judge he once championed, before it determines his fate.",
  // },
  // {
  //   id: "1584215",
  //   title: "The Internship (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/fYqSOkix4rbDiZW0ACNnvZCpT6X.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/fYqSOkix4rbDiZW0ACNnvZCpT6X.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 5.6,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Action ", "Adventure", "Thriller"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1584215",
  //     "Server 2": "https://cinemaos.tech/player/1584215",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1584215/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI": "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1584215",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1584215",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1584215",
  //   },
  //   overview:
  //     "A CIA-trained assassin recruits other graduates from her secret childhood program, The Internship, to violently destroy the organization. The CIA fights back with deadly force.",
  // },
  // {
  //   id: "1412598",
  //   title: "Killer Whale (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/cqbXxAw9sUr4tJ5ffEwtnz6IL9o.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/cqbXxAw9sUr4tJ5ffEwtnz6IL9o.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.5,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Thriller ", "Horror", "Action"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1412598",
  //     "Server 2": "https://cinemaos.tech/player/1412598",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1412598/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1412598",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1412598",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1412598",
  //   },
  //   overview:
  //     "Follows best friends Maddie and Trish as they find themselves trapped in a remote lagoon with the dangerous killer whale named Ceto.",
  // },
  // {
  //   id: "1443762",
  //   title: "The Big Fake (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/qNEL6chkH2s6gwvt0Jt9NfiXG8m.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/qNEL6chkH2s6gwvt0Jt9NfiXG8m.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 4.6,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Thriller ", "Horror", "Action"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1443762",
  //     "Server 2": "https://cinemaos.tech/player/1443762",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1443762/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://short.icu/lfpJnzkNlk?thumbnail=https://media.themoviedb.org/t/p/w780/uHavtqbnMDcwqVK9Y94ZQSWxtCw.jpg",
  //     "Server 5 - HINDI": "https://byseqekaho.com/e/09jtnsnu0bwp",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1443762",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1443762",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1443762",
  //   },
  //   overview:
  //     "Toni Chichiarelli arrives in Rome with the dream of becoming a painter, but his talent leads him elsewhere — from art galleries to state secrets. Between art, crime, and power, his signature ends up everywhere — even in the history of Italy.",
  // },
  // {
  //   id: "1306368",
  //   title: "The Rip (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 5.6,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Action ", "Adventure", "Comedy"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1306368",
  //     "Server 2": "https://cinemaos.tech/player/1306368",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1306368/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://short.icu/XQE80AhAa?thumbnail=https://media.themoviedb.org/t/p/w500/3F2EXWF1thX0BdrVaKvnm6mAhqh.jpg",
  //     "Server 5 - HINDI": "https://byseqekaho.com/e/faaqrf79oazr",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1306368",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1306368",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1306368",
  //   },
  //   overview:
  //     "Trust frays when a team of Miami cops discovers millions in cash inside a run-down stash house, calling everyone — and everything — into question.",
  // },
  // {
  //   id: "1034716",
  //   title: "People We Meet on Vacation (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/xzZaU0MN6L9oc1pl0RUXSB7hWwD.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/xzZaU0MN6L9oc1pl0RUXSB7hWwD.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 7.4,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Comedy ", "Drama", "Romance"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1034716",
  //     "Server 2": "https://cinemaos.tech/player/1034716",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1034716/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://short.icu/Ca642R4QZ?thumbnail=https://media.themoviedb.org/t/p/w780/qth56RA3rkUlhbDRDKGeMJEssdi.jpg",
  //     "Server 5 - HINDI": "https://byseqekaho.com/e/8anidmdjsvs4",
  //     "Server 6": "https://www.cinezo.net/watch/movie/1034716",
  //     "Server 7": "https://vidsrc-embed.ru/embed/movie/1034716",
  //     "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1034716",
  //   },
  //   overview:
  //     "Poppys a free spirit. Alex loves a plan. After years of summer vacations, these polar-opposite pals wonder if they could be a perfect romantic match.",
  // },
  // {
  //   id: "1614077",
  //   title: "Sulutan (2025)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/kd11696ab32WhHUeq5ZkWi9k09Y.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/kd11696ab32WhHUeq5ZkWi9k09Y.jpg",
  //   release_date: "2026-01-26",
  //   vote_average: 6.2,
  //   duration: "1h 19m",
  //   media_type: 'movie',
  //   genres: ["Adult", "Romance", "Drama"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/KzdrsSXHjFgKS",
  //     "Server 2": "https://cinemaos.tech/player/1614077",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1614077/tagalog?autoplay=false&back=true&server=0",
  //     "Server 4": "https://xprime.today/watch/1614077",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1614077",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1614077",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1614077",   
  //   },
  //   overview:
  //     "Lena and Mara are drawn into a secret affair that defies boundaries and threatens everything they’ve built. When Mara uncovers her groom’s betrayal, she finds solace in Lena, a newfound friend who soon becomes something more. As passion and secrecy collide, their choices endanger careers, fracture relationships, and lead to devastating consequences.",
  // },
  // {
  //   id: "1555917",
  //   title: "The Secret of Maria Makinang (2025)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/aaIyWoyk13wp2SmzVTA1X2VSLaz.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/aaIyWoyk13wp2SmzVTA1X2VSLaz.jpg",
  //   release_date: "2025-10-22",
  //   vote_average: 5.1,
  //   duration: "1h 19m",
  //   media_type: 'movie',
  //   genres: ["Adult", "Romance", "Drama"],
  //   streams: {
  //     "Server 1": "https://stmix.io/v/BA8XvvvsU7zmm",
  //     "Server 2": "https://cinemaos.tech/player/1555917",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1555917/tagalog?autoplay=false&back=true&server=0",
  //     "Server 4": "https://xprime.today/watch/1555917",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1555917",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1555917",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1555917",
  //     "Server 8": "http://byseqekaho.com/e/h4zfrz9rchim/",
  //   },
  //   overview:
  //     "It tells the story of Maria, a young woman who appears only during the full moon. She falls for a man named Danilo, and their love is tested through time, because for Danilo, decades have passed, but for Maria, it has only been a few moments.",
  // },
  // {
  //   id: "1597538",
  //   title: "Angkinin Mo Ako (2025)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/2YZ24F49pRkNb45YWI6yckrTYE.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/2YZ24F49pRkNb45YWI6yckrTYE.jpg",
  //   release_date: "2025-10-23",
  //   vote_average: 5.1,
  //   duration: "1h 10m",
  //   media_type: 'movie',
  //   genres: ["Adult", "Romance", "Drama"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/vAlUJTcd8elxH",
  //     "Server 2": "https://cinemaos.tech/player/1597538",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1597538/tagalog?autoplay=false&back=true&server=0",
  //     "Server 4": "https://xprime.today/watch/1597538",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1597538",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1597538",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1597538",
  //     "Server 8": "https://byseqekaho.com/e/7j7jdm0pcl8o",
  //   },
  //   overview:
  //     "Cess Garcia and VMX’s next big thing Dara Lima star in a steamy drama about two sisters and the man who sparks their sensual awakening. A female lawyer hires a young man as tutor for her younger sister but unknown to her, their review sessions are becoming wild",
  // },
  // {
  //   id: "1612071",
  //   title: "Elaichi: Ek Prem Katha (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/uaHRJYzURYiNyZmF0p0bTiQMpOK.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/uaHRJYzURYiNyZmF0p0bTiQMpOK.jpg",
  //   release_date: "2025-10-23",
  //   vote_average: 5.1,
  //   duration: "1h 10m",
  //   media_type: 'movie',
  //   genres: ["Adult", "Romance", "Drama"],
  //   streams: {
  //     "Server 1": "https://stmix.io/e/M9m0Jl0lnhqy",
  //     "Server 2": "https://cinemaos.tech/player/1612071",
  //     "Server 3": "https://zxcstream.xyz/player/movie/1612071/tagalog?autoplay=false&back=true&server=0",
  //     "Server 4": "https://xprime.today/watch/1612071",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1612071",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1612071",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1612071",
  //   },
  //   overview:
  //     "In Elaichi, the spice of desire, Sonal’s quiet domestic life explodes into nights of burning lust when a chance encounter with a younger actor turns into a frivolous sexual affair - pushing her deeper into obsession until her family, her body, and her soul are scorched by betrayal.`",
  // },
  // {
  //   id: "1213898",
  //   title: "Border 2 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/hju9XncHxUxUS1GAJ4YqpdFCa5t.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/hju9XncHxUxUS1GAJ4YqpdFCa5t.jpg",
  //   release_date: "2026-01-23",
  //   vote_average: 5.1,
  //   duration: "3h 19m",
  //   media_type: 'movie',
  //   genres: ["War", "Action", "Drama"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1213898",
  //     "Server 2": "https://cinemaos.tech/player/1213898",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1213898/hindi?autoplay=false&back=true&server=0",
  //     "Server 4":
  //       "https://short.icu/fCjlBHVLI?thumbnail=https://media.themoviedb.org/t/p/w780/nPuXMmWmHJySh0cyOs0MjEQA67w.jpg",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1213898",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1213898",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1213898",
  //   },
  //   overview:
  //     "During the events of the 1971 Indo-Pak war, a new generation of young Indian warriors were getting ready to defend the nation from an even bigger threat to the Indian motherland.",
  // },
  // {
  //   id: "1617536",
  //   title: "One Two Cha Cha Chaa (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/cWfX0Pog0ZHgTKY3glhIjvkWxgB.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/cWfX0Pog0ZHgTKY3glhIjvkWxgB.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 5.1,
  //   duration: "2h 40m",
  //   media_type: 'movie',
  //   genres: ["Action ", "Adventure", "Comedy"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1617536",
  //     "Server 2": "https://cinemaos.tech/player/1617536",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1617536/hindi?autoplay=false&back=true&server=0",
  //     "Server 4":
  //       "https://short.icu/fbGaNUQgw?thumbnail=https://media.themoviedb.org/t/p/w780/pWq3jl2WBlD17x1CkprNeCe2cGG.jpg",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1617536",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1617536",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1617536",
  //   },
  //   overview:
  //     "So, Fuel Up, Gear Up, Level Up and Fasten your seat belts for the wildest and wackiest road trip of all time.",
  // },
  // {
  //   id: "1282440",
  //   title: "Happy Patel: Khatarnak Jasoos (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/vsCkxiY2c26C6y4RyTVkpdXIfCW.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/vsCkxiY2c26C6y4RyTVkpdXIfCW.jpg",
  //   release_date: "2026-01-23",
  //   vote_average: 5.1,
  //   duration: "2h 02m",
  //   media_type: 'movie',
  //   genres: ["Comedy ", "Action", "Romance"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1282440",
  //     "Server 2": "https://cinemaos.tech/player/1282440",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1282440/hindi?autoplay=false&back=true&server=0",
  //     "Server 4":
  //       "https://short.icu/mNw3SxUtx?thumbnail=https://media.themoviedb.org/t/p/w780/gsLYR8uALrt2p33iOpqReNW6XyQ.jpg",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1282440",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1282440",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1282440",
  //   },
  //   overview:
  //     "Happy Patel, a chronically unsuccessful MI7 operative, is finally assigned a mission in Goa, where he uncovers his Indian roots and must rescue a high-profile scientist from crime lord Mama. Unaware of his Indian heritage and armed with a comically British accent, Happy’s blunders trigger a string of chaotic mishaps that could lead him to expose a criminal network.",
  // },
  // {
  //   id: "1599099",
  //   title: "Azad Bharat (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/zeUHs0NACraRyOPlUyuuBC0Iarz.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/zeUHs0NACraRyOPlUyuuBC0Iarz.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 5.1,
  //   duration: "2h 20m",
  //   media_type: 'movie',
  //   genres: ["Adventure", "Comedy", "Fantasy"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1599099",
  //     "Server 2": "https://cinemaos.tech/player/1599099",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1599099/hindi?autoplay=false&back=true&server=0",
  //     "Server 4":
  //       "https://short.icu/D2auhaVWv?thumbnail=https://media.themoviedb.org/t/p/w780/zmJqRGyI9SuZOPrGq0gZSiv2wMR.jpg",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1599099",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1599099",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1599099",
  //   },
  //   overview:
  //     "Freedom fighter Neera Arya joins India's first women's army founded by Subhas Chandra Bose, highlighting untold stories from India's independence movement and themes of courage and patriotism.",
  // },
  // {
  //   id: "1382160",
  //   title: "45 (2025)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/luDTygZ6uAwaknc2isXZcz8YMvE.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/luDTygZ6uAwaknc2isXZcz8YMvE.jpg",
  //   release_date: "2025-12-25",
  //   vote_average: 5.1,
  //   duration: "2h 24m",
  //   media_type: 'movie',
  //   genres: ["Action", "Drama", "Thriller"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1382160",
  //     "Server 2": "https://cinemaos.tech/player/1382160",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1382160/hindi?autoplay=false&back=true&server=0",
  //     "Server 4 - Kannada": "https://byseqekaho.com/e/eo0jjw0mwg9t",
  //     "Server 5 - Hindi": "https://byseqekaho.com/e/rfifotoan62n",
  //   },
  //   overview:
  //     "A captivating new project by Suraj Production and the Magical Composer’s Debut film, #45Themovie is set to redefine the cinema-watching experience with its unique narrative and compelling performances.",
  // },
  // {
  //   id: "1510339",
  //   title: "Mark (2025)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/6LTDv6XHiHN0N77QIFg2tidVvhh.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/6LTDv6XHiHN0N77QIFg2tidVvhh.jpg",
  //   release_date: "2025-12-25",
  //   vote_average: 5.1,
  //   duration: "2h 24m",
  //   media_type: 'movie',
  //   genres: ["Action", "Drama", "Thriller"],
  //   streams: {
  //     "Server 1(Telugu)": "https://xprime.today/watch/1510339",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1510339/hindi?autoplay=false&back=true&server=0",
  //     "Server 4 (Kannada)": "https://byseqekaho.com/e/se2m96qhd0jh",
  //     "Server 5 (Hindi)": "https://byseqekaho.com/e/7g36yabhfauq",
  //   },
  //   overview:
  //     "Mark is suspended from his police duties for his unruly yet effective ways of operating, but when 18 children are abducted and found dead, races to catch the criminals. With only 18 hours left, he must confront powerful foes and use unconventional tactics to succeed.",
  // },
  // {
  //   id: "1457939",
  //   title: "Rahu Ketu (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/zjgWWOIsEqYNSa1fGRr82mBo3gv.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/zjgWWOIsEqYNSa1fGRr82mBo3gv.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 5.1,
  //   duration: "2h 20m",
  //   media_type: 'movie',
  //   genres: ["Adventure", "Comedy", "Fantasy"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1457939",
  //     "Server 2": "https://cinemaos.tech/player/1457939",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1457939/hindi?autoplay=false&back=true&server=0",
  //     "Server 4": "https://byseqekaho.com/e/mecoep0szpat",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1457939",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1457939",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1599099",
  //   },
  //   overview:
  //     "Rahu Ketu (2026) In the magical world of writer Churu Lal Sharma, his unlucky creations Rahu and Ketu spring to life, causing hilarious chaos instead of fighting corruption. When the mischievous Meenu Taxi steals Churus mystical notebook, the bumbling duo are dragged into absurd adventures that land them in the middle of a drug mafia.",
  // },
  // {
  //   id: "1594670",
  //   title: "Psych Siddhartha (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/9UZrHOeryYvgVaEfUMY3hk1OWg0.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/rHFjswQM8tdAL8RYqRJDsJBCngY.jpg",
  //   release_date: "2026-01-01",
  //   vote_average: 8.1,
  //   duration: "2h 27m",
  //   media_type: 'movie',
  //   genres: ["Comedy", "Romance"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1594670",
  //     "Server 2": "https://cinemaos.tech/player/1594670",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1594670/hindi?autoplay=false&back=true&server=0",
  //     "Server 4": "https://www.cinezo.net/watch/movie/1594670",
  //     "Server 5": "https://vidsrc-embed.ru/embed/movie/1594670",
  //     "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1594670",
  //   },
  //   overview:
  //     "Psych Siddhartha (2026) is a layered psychological drama that explores emotional collapse, fragile hope, and the enduring scars of unresolved trauma. At its center is Siddharth, a man battered by repeated personal losses that have left him isolated, financially strained, and emotionally exhausted. Life has reduced him to survival mode, where every attempt to move forward seems to be met with another setback.  ",
  // },
  // {
  //   id: "1196946",
  //   title: "Ikkis (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/8PWu0V10nMqG5SrA13wLRXTD2fH.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/wbhoYwvqgadchfMgUOfOp87QZDS.jpg",
  //   release_date: "2026-01-01",
  //   vote_average: 8.1,
  //   duration: "2h 27m",
  //   media_type: 'movie',
  //   genres: ["War", "History", "Biography"],
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/1196946",
  //     "Server 2": "https://cinemaos.tech/player/1196946",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/1196946/hindi?autoplay=false&back=true&server=0",
  //     "Server 4":
  //       "https://short.icu/_iVjlYQ_U?thumbnail=https://media.themoviedb.org/t/p/w780/wbhoYwvqgadchfMgUOfOp87QZDS.jpg",
  //     "Server 5": "https://www.cinezo.net/watch/movie/1196946",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/1196946",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1196946",
  //   },
  //   overview:
  //     "Second Lieutenant and Indias youngest Param Vir Chakra recipient, Arun Khetarpal, gave his life fighting for his battalion and the country during the 1971 Battle of Basantar. Ikkis also takes a reflective look at the futility of war through the eyes of Khetarpals father, who visits his ancestral home in Sargodha and Alma Mater for reunion, which now happens to be in post-partition Pakistan, 30 years later.",
  // },
  // {
  //   id: "872585",
  //   title: "Oppenheimer",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaB0.jpg",
  //   release_date: "2023-07-21",
  //   vote_average: 8.1,
  //   duration: "3h 0m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/872585",
  //     "Server 2": "https://cinemaos.tech/player/872585",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/872585/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/872585",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/872585",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-872585",
  //   },
  //   genres: ["Drama", "History", "Biography"],
  //   overview:
  //     "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  // },
  // {
  //   id: "346698",
  //   title: "Barbie",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
  //   release_date: "2023-07-21",
  //   vote_average: 7.2,
  //   duration: "1h 54m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/346698",
  //     "Server 2": "https://cinemaos.tech/player/346698",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/346698/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/346698",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/346698",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-346698",
  //   },
  //   genres: ["Comedy", "Adventure", "Fantasy"],
  //   overview:
  //     "Barbie and Ken are having the time of their lives in the colorful world of Barbie Land.",
  // },
  // {
  //   id: "569094",
  //   title: "Spider-Man: Across the Spider-Verse",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4hD5ri.jpg",
  //   release_date: "2023-06-02",
  //   vote_average: 8.7,
  //   duration: "2h 20m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/569094",
  //     "Server 2": "https://cinemaos.tech/player/569094",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/569094/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/569094",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/569094",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-569094",
  //   },
  //   genres: ["Animation", "Action", "Adventure"],
  //   overview:
  //     "Miles Morales returns for an epic adventure across the multiverse.",
  // },
  // {
  //   id: "447365",
  //   title: "Guardians of the Galaxy Vol. 3",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
  //   release_date: "2023-05-05",
  //   vote_average: 8.0,
  //   duration: "2h 30m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/447365",
  //     "Server 2": "https://cinemaos.tech/player/447365",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/447365/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/447365",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/447365",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-447365",
  //   },
  //   genres: ["Action", "Adventure", "Comedy"],
  //   overview: "Peter Quill must rally his team to defend the universe.",
  // },
  // {
  //   id: "385687",
  //   title: "Fast X",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4hD5ri.jpg",
  //   release_date: "2023-05-19",
  //   vote_average: 7.2,
  //   duration: "2h 21m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/385687",
  //     "Server 2": "https://cinemaos.tech/player/385687",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/385687/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/385687",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/385687",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-385687",
  //   },
  //   genres: ["Action", "Crime", "Thriller"],
  //   overview: "Dom Toretto and his family are targeted by a vengeful son.",
  // },
  // {
  //   id: "603692",
  //   title: "John Wick: Chapter 4",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
  //   release_date: "2023-03-24",
  //   vote_average: 7.8,
  //   duration: "2h 49m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/603692",
  //     "Server 2": "https://cinemaos.tech/player/603692",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/603692/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/603692",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/603692",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-603692",
  //   },
  //   genres: ["Action", "Crime", "Thriller"],
  //   overview: "John Wick uncovers a path to defeating The High Table.",
  // },
  // {
  //   id: "667538",
  //   title: "Transformers: Rise of the Beasts",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
  //   release_date: "2023-06-09",
  //   vote_average: 7.3,
  //   duration: "2h 7m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/667538",
  //     "Server 2": "https://cinemaos.tech/player/667538",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/667538/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/667538",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/667538",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-667538",
  //   },
  //   genres: ["Action", "Adventure", "Sci-Fi"],
  //   overview: "Optimus Prime and the Autobots take on their biggest challenge.",
  // },
  // {
  //   id: "298618",
  //   title: "The Flash",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
  //   release_date: "2023-06-16",
  //   vote_average: 6.9,
  //   duration: "2h 24m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/298618",
  //     "Server 2": "https://cinemaos.tech/player/298618",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/298618/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/298618",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/298618",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-298618",
  //   },
  //   genres: ["Action", "Adventure", "Fantasy"],
  //   overview: "Barry Allen uses his super speed to change the past.",
  // },
  // {
  //   id: "575264",
  //   title: "Mission: Impossible - Dead Reckoning Part One",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
  //   release_date: "2023-07-14",
  //   vote_average: 7.7,
  //   duration: "2h 43m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/575264",
  //     "Server 2": "https://cinemaos.tech/player/575264",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/575264/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/575264",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/575264",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-575264",
  //   },
  //   genres: ["Action", "Adventure", "Thriller"],
  //   overview: "Ethan Hunt and his IMF team must track down a dangerous weapon.",
  // },
  // {
  //   id: "447277",
  //   title: "The Little Mermaid",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/7pFwXl9QqgU7wQeQ5tCgxArqMFH.jpg",
  //   release_date: "2023-05-26",
  //   vote_average: 6.7,
  //   duration: "2h 15m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/447277",
  //     "Server 2": "https://cinemaos.tech/player/447277",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/447277/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/447277",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/447277",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-447277",
  //   },
  //   genres: ["Adventure", "Family", "Fantasy"],
  //   overview: "A young mermaid trades her voice for human legs.",
  // },
  // {
  //   id: "157336",
  //   title: "Interstellar",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  //   release_date: "2014-11-07",
  //   vote_average: 8.4,
  //   duration: "2h 49m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/157336",
  //     "Server 2": "https://cinemaos.tech/player/157336",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/157336/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/157336",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/157336",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-157336",
  //   },
  //   genres: ["Adventure", "Drama", "Sci-Fi"],
  //   overview: "A team of explorers travel through a wormhole in space.",
  // },
  // {
  //   id: "27205",
  //   title: "Inception",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
  //   release_date: "2010-07-16",
  //   vote_average: 8.4,
  //   duration: "2h 28m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/27205",
  //     "Server 2": "https://cinemaos.tech/player/27205",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/27205/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/27205",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/27205",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-27205",
  //   },
  //   genres: ["Action", "Sci-Fi", "Thriller"],
  //   overview: "A thief who steals corporate secrets through dream-sharing.",
  // },
  // {
  //   id: "155",
  //   title: "The Dark Knight",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg",
  //   release_date: "2008-07-18",
  //   vote_average: 8.5,
  //   duration: "2h 32m",
  //   media_type: 'movie',
  //   streams: {
  //     "Server 1": "https://xprime.today/watch/155",
  //     "Server 2": "https://cinemaos.tech/player/155",
  //     "Server 3":
  //       "https://zxcstream.xyz/player/movie/155/english?autoplay=false&back=true&server=0",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //     "Server 5 ": "https://www.cinezo.net/watch/movie/155",
  //     "Server 6": "https://vidsrc-embed.ru/embed/movie/155",
  //     "Server 7": "https://api.cinezo.net/embed/tmdb-movie-155",
  //   },
  //   genres: ["Action", "Crime", "Drama"],
  //   overview: "Batman faces the Joker in Gotham City.",
  // },

// ];

// // LOCAL TV SHOWS - ADD ALL YOUR TV SHOWS HERE
// export const UNIQUE_TV_SHOWS: MediaItem[] = [
  //    {
  //   id: "mayasabha-s01-2026-multi-lang",
  //   title: "Mayasabha S01 (2026) Multi-Lang",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/ddhOEoAqefgzcxlx5hIvkFpF9cw.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/nofMFwwxPMkv76NqrbvoAVwiH4J.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'tv',
  //   genres: ["War ", "Political", "Drama"],
  //   streams: {
  //     "Server 1 - Multi-Lang": "https://stmix.io/e/Bc7L0bPOfyok",
  //     "Server 2 - Multi-Lang": "https://byseqekaho.com/e/57tgagfdddcd",
  //   },
  //   overview: "Mayasabha is a period political drama set in Mid 70s Andhra Pradesh. Krishnama Naidu, an idealistic student leader and a charismatic MS Rami Reddy wade into the world of Andhra politics. As they turn thick friends, they strive to use politics as a means to achieve public good. But caste fault lines erupt, loyalties are tested and their bond is pushed to the brink. Will their friendship sustain the brutal ascent of power where there is place for only one at the summit?",
  // },
  // {
  //   id: "unfamiliar-s01-2026-multi-lang",
  //   title: "Unfamiliar S01 (2026) Multi-Lang",
  //   poster_path: "https://media.themoviedb.org/t/p/w500/fX0Kvvo6hj9feqS3JyFpVmscz2Y.jpg",
  //   backdrop_path: "https://media.themoviedb.org/t/p/w780/qDq3dG4ElRohih5fUGNQRLHuBaC.jpg",
  //   release_date: "2026-01-16",
  //   vote_average: 6.4,
  //   duration: "2h 40m",
  //   media_type: 'tv',
  //   genres: ["Crime ", "Action", "Drama"],
  //   streams: {
  //     "Server 1 - Multi-Lang": "https://stmix.io/e/of0qQX1SdWpvo",
  //     "Server 2 - Multi-Lang": "https://byseqekaho.com/e/ajssdlwajoj4/",
  //     "Server 3": "https://api.cinezo.net/embed/tmdb-tv-274776",
  //   },
  //   overview: "When the past catches up with two former spies, their biggest challenge isn't car chases, shootouts or fistfights — it's telling each other the truth.",
  // },
  // {
  //   id: "249766",
  //   title: "Daldal S01 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/wvAwkKeIs7bkb6EJAYRzpANhfxM.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/bd0usdz6dgmEE6HVhEhepR5r6MP.jpg",
  //   release_date: "2025-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1": "https://stmix.io/e/4OtUU7kOtUK87",
  //     "Server 2": "https://xprime.today/watch/249766/1/1",
  //     },
  //   genres: ["Drama", "Thriller", "Mystery"],
  //   overview:
  //     "Haunted by the guilt of her past and dealing with the demons of her present, a newly-appointed DCP, Rita Ferreira, must embark on an investigation of a series of murders that puts her on a collision course with a cold-blooded serial killer.",
  // },
  // {
  //   id: "91239",
  //   title: "Bridgerton S04 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/uXTg565ahu9RwonCX1V2Hex1NU6.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/6umsRLI7t0ydFwCl0JNEIO0q2LH.jpg",
  //   release_date: "2026-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://zxcstream.xyz/player/tv/91239/s=1/e=1/english?autoplay=false&back=true&server=0",
  //     "Server 2": "https://xprime.today/watch/91239/1/1",
  //     "Server 3 - HINDI": "https://stmix.io/e/hriMo9qTXqA9U",
  //     "Server 4": "https://api.cinezo.net/embed/tmdb-tv-91239/1/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/91239?season=1&episode=1",
  //   },
  //   genres: ["Crime", "Drama", "Mystery"],
  //   overview:
  //     "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
  // },
  // {
  //   id: "198178",
  //   title: "Wonder Man S01 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/6yy9nQlFt2l6UVWzrfhszFCaZ5C.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/3xdtP9D78ZFFBwIBXf3XWWQiqMB.jpg",
  //   release_date: "2026-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://zxcstream.xyz/player/tv/198178/s=1/e=1/english?autoplay=false&back=true&server=0",
  //     "Server 2": "https://xprime.today/watch/198178/1/1",
  //     "Server 3 ": "https://api.cinezo.net/embed/tmdb-tv-198178/1/1",
  //     "Server 4 ": "https://www.cinezo.net/watch/tv/198178?season=1&episode=1",
  //     "Server 5 - HINDI": "https://stmix.io/e/HJEtGuVS1yBo",   
  //   },
  //   genres: ["Comedy", "Drama", "Thriller"],
  //   overview:
  //     "Simon and Trevor, two actors at opposite ends of their careers, chase life-changing roles.",
  // },
  // {
  //   id: "254071",
  //   title: "Steal S01 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/6KmlaPhsohh3Ki9XJUq0jiUYbf3.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/6KmlaPhsohh3Ki9XJUq0jiUYbf3.jpg",
  //   release_date: "2026-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://zxcstream.xyz/player/tv/254071/s=1/e=1/english?autoplay=false&back=true&server=0",
  //     "Server 2": "https://xprime.today/watch/254071/1/1",
  //     "Server 3 - HINDI": "https://stmix.io/e/zd1Y3sArA3bs",
  //     "Server 4": "https://api.cinezo.net/embed/tmdb-tv-254071/1/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/254071?season=1&episode=1",
  //     "Server 6 - HINDI":
  //       "https://short.icu/kB0-DCujU?thumbnail=https://media.themoviedb.org/t/p/w780/cm17eZBEI0jAsuwlIrw9L7K5lY2.jpg",
  //   },
  //   genres: ["Crime", "Drama", "Mystery"],
  //   overview:
  //     "A typical day at Lochmill Capital is upended when armed thieves burst in and force Zara and her best friend Luke to execute their demands. In the aftermath, conflicted detective Rhys races against time to find out who stole £4 billion pounds of people's pensions and why.",
  // },
  // {
  //   id: "311632",
  //   title: "Space Gen: Chandrayaan S01 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/d6WIr1vycFCCdYewgRf8dpWxQQE.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/d6WIr1vycFCCdYewgRf8dpWxQQE.jpg",
  //   release_date: "2026-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1": "https://stmix.io/e/2zYH1fFQgKys",
  //     "Server 2": "https://xprime.today/watch/311632/1/1",
  //     "Server 3": "https://byseqekaho.com/e/yxv57pc9qtxs",
  //     "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-311632/1/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/311632?season=1&episode=1",
  //   },
  //   genres: ["Sci-Fi", "Drama", "Mystery"],
  //   overview:
  //     "Indian space engineers face mounting pressure to redeem themselves following the Chandrayaan 2 lunar mission's unexpected outcome.",
  // },
  // {
  //   id: "308482",
  //   title: 'Taskaree: The Smuggler"s Web S01 (2026)',
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/25fKRXvQLBq4nXu9vjOVJcvCiiD.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/25fKRXvQLBq4nXu9vjOVJcvCiiD.jpg",
  //   release_date: "2026-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":"https://stmix.io/e/YJ80jBb6C9B5",
  //     "Server 2": "https://xprime.today/watch/308482/1/1",
  //     "Server 3": "https://byseqekaho.com/e/wrnmbynqqeyk",
  //     "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-308482/1/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/308482?season=1&episode=1",
  //   },
  //   genres: ["Crime", "Drama", "Mystery"],
  //   overview:
  //     "A dedicated customs officer and his team take on a notorious smuggler leading a powerful syndicate, but unexpected obstacles threaten their mission.",
  // },
  // {
  //   id: "297594",
  //   title: "Bindiya Ke Bahubali S02 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/eSJGKRff52Pg2SfOiIdC4IlMMQR.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/eSJGKRff52Pg2SfOiIdC4IlMMQR.jpg",
  //   release_date: "2026-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1": "https://stmix.io/e/PaMIpZTnAE7b",
  //     "Server 2": "https://xprime.today/watch/297594/2/1",
  //     "Server 3": "https://byseqekaho.com/e/hv81w9p30urb",
  //     "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-297594/2/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/297594?season=2&episode=1",
  //   },
  //   genres: ["Drama", "Crime", "Mystery"],
  //   overview:
  //     "With humour, absurdity and family cat and mouse at its center, this is a tale of family gangsters in a fictitious madhouse city, Bindiya. As the current Don is put behind bars, the gangster familys alliances shift, new love, friendships, and betrayals explode until Bindiya becomes a full-blown circus-where love is a deal, power is personal, and every one has a card and blood on their hands.",
  // },
  // {
  //   id: "311171",
  //   title: "Bhootiyapa (2025)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/4NGdzyuffqhb1jMEvTfri3jn5Fj.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/4NGdzyuffqhb1jMEvTfri3jn5Fj.jpg",
  //   release_date: "2025-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://stmix.io/e/euvvLY1BD8F7",
  //     "Server 2": "https://xprime.today/watch/311171/1/1",
  //     "Server 3": "https://byseqekaho.com/e/f1i18ua20w0r",
  //     "Server 4": "https://short.icu/5ALJ-TlBZ?thumbnail=https://media.themoviedb.org/t/p/w780/eQJUKQMl0SvoHiYwAW2E0VoAwR2.jpg"
  //   },
  //   genres: ["Drama", "Crime", "Mystery"],
  //   overview:
  //     "Bhootiyapa revolves around a film crew documenting the untold stories of these ghosts, who, despite their spectral existence, have tales to tell about love, loss and laughter. Each ghost, from a different era, adds a layer of mystery and mirth to the story, revealing how life after death can be as vibrant and surprising as mortal life itself.",
  // },
  // {
  //   id: "243826",
  //   title: "Pharma (2025)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/hQWT47GFQyvO1tFqx6IgCOvrrr8.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/hQWT47GFQyvO1tFqx6IgCOvrrr8.jpg",
  //   release_date: "2025-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //     "https://zxcstream.xyz/player/tv/243826/s=1/e=1/hindi?autoplay=false&back=true&server=0",
  //     "Server 2 - Only Malayalam": "https://xprime.today/watch/243826/1/1",
  //     "Server 3 - HINDI": "https://short.icu/PqYLFFeKU?thumbnail=https://media.themoviedb.org/t/p/w780/n1qDEYpr3pq7bJ9GGaF9zVNjdNq.jpg"
  //   },
  //   genres: ["Drama", "Crime", "Mystery"],
  //   overview:
  //     "A young medical representative struggles against the pharma game, masters it and eventually fights against it.",
  // },
  // {
  //   id: "61859",
  //   title: "The Night Manager S02 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/1MccRnw41qQjREuZkovqP2UX1i3.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/lJoaiZcYMc8RkmPLROcdS2WQxn9.jpg",
  //   release_date: "2026-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://zxcstream.xyz/player/tv/61859/s=1/e=1/english?autoplay=false&back=true&server=0",
  //     "Server 2": "https://xprime.today/watch/61859/2/1",
  //     "Server 3": "https://vidsrc-embed.ru/embed/tv/61859",
  //     "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-61859/2/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/61859?season=1&episode=1",
  //     "Server 6 - HINDI": "https://byseqekaho.com/e/p9vhhvpow8rk",
  //     "Server 7 - HINDI":
  //       "https://short.icu/ndrmOyAuX?thumbnail=https://media.themoviedb.org/t/p/w780/lJoaiZcYMc8RkmPLROcdS2WQxn9.jpg",
  //   },
  //   genres: ["Spy", "Crime", "Mystery"],
  //   overview:
  //     "Former British soldier Jonathan Pine navigates the shadowy recesses of Whitehall and Washington where an unholy alliance operates between the intelligence community and the secret arms trade. To infiltrate the inner circle of lethal arms dealer Richard Onslow Roper, Pine must himself become a criminal.",
  // },
  // {
  //   id: "259731",
  //   title: "His & Hers S01 (2026)",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/cDSXLVQLkCSBIpBx3UW04TsfZ5c.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/n4hJLZmBG8kZccNn7bNgBDsVQ6a.jpg",
  //   release_date: "2026-01-08",
  //   vote_average: 7.2,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://zxcstream.xyz/player/tv/259731/s=1/e=1/english?autoplay=false&back=true&server=0",
  //     "Server 2": "https://xprime.today/watch/259731/1/1",
  //     "Server 3": "https://vidsrc-embed.ru/embed/tv/259731",
  //     "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-259731/1/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/259731?season=1&episode=1",
  //     "Server 6 - HINDI":
  //       "https://short.icu/tyiiqPGLF?thumbnail=https://media.themoviedb.org/t/p/w780/n4hJLZmBG8kZccNn7bNgBDsVQ6a.jpg",
  //   },
  //   genres: ["Drama", "Crime", "Mystery"],
  //   overview:
  //     "Two estranged spouses — one a detective, the other a news reporter — vie to solve a murder in which each believes the other is a prime suspect.",
  // },
  // {
  //   id: "100088",
  //   title: "The Last of Us",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
  //   release_date: "2023-01-15",
  //   vote_average: 8.8,
  //   duration: "50m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://zxcstream.xyz/player/tv/100088/s=1/e=1/english?autoplay=false&back=true&server=0",
  //     "Server 2": "https://vidsrc-embed.ru/embed/tv/100088",
  //     "Server 3": "https://xprime.today/watch/100088/2/1",
  //     "Server 4": "https://api.cinezo.net/embed/tmdb-tv-100088/2/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/100088?season=2&episode=1",
  //     "Server 6 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //   },
  //   genres: ["Drama", "Action", "Sci-Fi"],
  //   overview: "After a global pandemic destroys civilization.",
  // },
  // {
  //   id: "94997",
  //   title: "House of the Dragon",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
  //   release_date: "2022-08-21",
  //   vote_average: 8.5,
  //   duration: "55m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://www.zxcstream.xyz/player/tv/94997/2/1?autoplay=false&back=true&server=0",
  //     "Server 2": "https://vidsrc-embed.ru/embed/tv/94997",
  //     "Server 3": "https://xprime.today/watch/94997/2/1",
  //     "Server 4": "https://api.cinezo.net/embed/tmdb-tv-94997/2/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/94997?season=2&episode=1",
  //     "Server 6 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //   },
  //   genres: ["Drama", "Action", "Adventure"],
  //   overview:
  //     "The story of House Targaryen set 200 years before Game of Thrones.",
  // },
  // {
  //   id: "119051",
  //   title: "Wednesday",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/9G3mCR9qQ8U7Oi2f7nPmNpXMGFA.jpg",
  //   release_date: "2022-11-23",
  //   vote_average: 8.5,
  //   duration: "45m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://www.zxcstream.xyz/player/tv/119051/2/1?autoplay=false&back=true&server=0",
  //     "Server 2": "https://vidsrc-embed.ru/embed/tv/119051",
  //     "Server 3": "https://xprime.today/watch/119051/2/1",
  //     "Server 4": "https://api.cinezo.net/embed/tmdb-tv-119051/2/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/119051?season=2&episode=1",
  //     "Server 6 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //   },
  //   genres: ["Comedy", "Crime", "Fantasy"],
  //   overview: "Wednesday Addams attempts to master her psychic ability.",
  // },
  // {
  //   id: "1399",
  //   title: "Game of Thrones",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg",
  //   release_date: "2011-04-17",
  //   vote_average: 8.5,
  //   duration: "1h",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1": "https://vidsrc.cc/v2/embed/tv/1399",
  //     "Server 2":
  //       "https://zxcstream.xyz/player/tv/1399/s=1/e=1/english?autoplay=false&back=true&server=0",
  //     "Server 3":
  //       "https://apicinetaro.falex43350.workers.dev/tv/1399/1/1/english",
  //     "Server 4 - HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",  
  //   },
  //   genres: ["Drama", "Fantasy", "Adventure"],
  //   overview: "Nine noble families fight for control over Westeros.",
  // },
  // {
  //   id: "66732",
  //   title: "Stranger Things",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
  //   release_date: "2016-07-15",
  //   vote_average: 8.7,
  //   duration: "50m",
  //   media_type: 'tv',
  //   streams: {
  //     "Server 1":
  //       "https://www.zxcstream.xyz/player/tv/66732/5/1?autoplay=false&back=true&server=0",
  //     "Server 2": "https://vidsrc-embed.ru/embed/tv/66732",
  //     "Server 3": "https://xprime.today/watch/66732/5/1",
  //     "Server 4": "https://api.cinezo.net/embed/tmdb-tv-66732/5/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/66732?season=5&episode=1",
  //     "Server 6- HINDI":
  //       "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //   },
  //   genres: ["Drama", "Fantasy", "Horror"],
  //   overview: "When a young boy vanishes, a small town uncovers a mystery.",
  // },
  // {
  //   id: "71912",
  //   title: "The Witcher",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
  //   backdrop_path:
  //     "https://image.tmdb.org/t/p/original/7vBpX7e4Dp3dG2c5QZ6w4qyY6qy.jpg",
  //   release_date: "2019-12-20",
  //   vote_average: 8.2,
  //   duration: "1h",
  //   media_type: 'tv',
  //   genres: ["Action", "Adventure", "Drama"],
  //   streams: {
  //     "Server 1":
  //       "https://www.zxcstream.xyz/player/tv/71912/4/1?autoplay=false&back=true&server=0",
  //     "Server 2": "https://vidsrc-embed.ru/embed/tv/71912",
  //     "Server 3": "https://xprime.today/watch/71912/4/1",
  //     "Server 4": "https://api.cinezo.net/embed/tmdb-tv-71912/4/1",
  //     "Server 5 ": "https://www.cinezo.net/watch/tv/71912?season=4&episode=1",
  //     "Server 6 - HINDI": "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
  //   },
  //   overview: "Geralt of Rivia, a mutated monster-hunter for hire.",
  // },

// ];

// // SPORTS
// export const UNIQUE_SPORTS: MediaItem[] = [
//   {
//     id: "comming-soon",
//     title: "Coming Soon: New Sports Content",
//     poster_path: "https://www.shutterstock.com/image-vector/speedinspired-coming-soon-typography-dynamic-260nw-2654096517.jpg",
//     backdrop_path: "https://www.shutterstock.com/shutterstock/videos/3646580559/thumb/1.jpg?ip=x480",
//     release_date: getFixedMatchTime(6, 30), 
//     vote_average: 9.2,
//     duration: "Live",
//     media_type: 'sports',
//     genres: ["Sports", "Live Sports"],
//     streams: {
//       "Server 1": "",
//       "Server 2": "",
//     },
//     overview: "Coming Soon: Server are getting ready to stream live sports content.",
//   }
// ];

// // LIVE TV - ADD ALL YOUR LIVE TV HERE
// export const UNIQUE_TV_LIVE: MediaItem[] = [
//       {
//     id: "alzazeera-news-channel-hd",
//     title: "Al Jazeera News Live HD",
//     poster_path: "https://www.vhv.rs/dpng/d/492-4928236_al-jazeera-news-logo-hd-png-download.png",
//     backdrop_path: "https://www.vhv.rs/dpng/d/492-4928236_al-jazeera-news-logo-hd-png-download.png",
//     release_date: "2026-01-20",
//     vote_average: 7.8,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Al Jazeera", "Live", "News"],
//     streams: {
//       "Server 1": "https://d1cy85syyhvqz5.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/aljazeeraLive/AJE/index.m3u8",
//     },
//     overview:
//       "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
//   },
//   {
//     id: "cnn-international-channel-hd",
//     title: "CNN International Live HD",
//     poster_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/960px-CNN_International_logo.svg.png",
//     backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/960px-CNN_International_logo.svg.png",
//     release_date: "2026-01-20",
//     vote_average: 7.8,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["CNN", "Live", "News"],
//     streams: {
//       "Server 1": "https://amg01918-cnnus-amg01918c1-vizio-us-1813.playouts.now.amagi.tv/playlist/amg01918-cnnus-cnnheadlines-vizious/playlist.m3u8",
//     },
//     overview:
//       "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
//   },
//   {
//     id: "abc-channel-hd",
//     title: "ABC Live HD",
//     poster_path: "https://i.pinimg.com/736x/16/3b/41/163b41fe4cc84461bfa46445bb7e8e04.jpg",
//     backdrop_path: "https://i.pinimg.com/736x/16/3b/41/163b41fe4cc84461bfa46445bb7e8e04.jpg",
//     release_date: "2026-01-20",
//     vote_average: 7.8,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["ABC", "Live", "News"],
//     streams: {
//       "Server 1": "https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8",
//     },
//     overview:
//       "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
//   },
//   {
//     id: "euronews-channel-hd",
//     title: "Euronews Live HD",
//     poster_path: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Euronews_Logo_2025.svg",
//     backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Euronews_Logo_2025.svg",
//     release_date: "2026-01-20",
//     vote_average: 7.8,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Euronews", "Live", "News"],
//     streams: {
//       "Server 1": "https://amg00882-amg00882c2-lg-au-4259.playouts.now.amagi.tv/playlist.m3u8",
//     },
//     overview:
//       "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
//   },
//   {
//     id: "bbcnews-channel-hd",
//     title: "BBC News Live HD",
//     poster_path: "https://i.pinimg.com/736x/59/98/4d/59984d90139cb8e9ac6bbed0e849efc8.jpg",
//     backdrop_path: "https://i.pinimg.com/736x/59/98/4d/59984d90139cb8e9ac6bbed0e849efc8.jpg",
//     release_date: "2026-01-20",
//     vote_average: 7.8,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["BBC News", "Live", "News"],
//     streams: {
//       "Server 1": "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8",
//     },
//     overview:
//       "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
//   },
//   {
//     id: "reuters-news-channel-hd",
//     title: "Reuters News Live HD",
//     poster_path: "https://i.pinimg.com/564x/25/03/11/250311255660f18f2d603fa7e415a82f.jpg",
//     backdrop_path: "https://i.pinimg.com/564x/25/03/11/250311255660f18f2d603fa7e415a82f.jpg",
//     release_date: "2026-01-20",
//     vote_average: 7.8,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Reuters News", "Live", "News"],
//     streams: {
//       "Server 1": "https://amg00453-reuters-amg00453c1-vizio-us-2107.playouts.now.amagi.tv/playlist/amg00453-reuters-reuters-vizious/playlist.m3u8",
//     },
//     overview:
//       "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
//   },
//   {
//     id: "usa-today-news-channel-hd",
//     title: "USA Today News Live HD",
//     poster_path: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
//     backdrop_path: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
//     release_date: "2026-01-20",
//     vote_average: 7.8,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["USA Today News", "Live", "News"],
//     streams: {
//       "Server 1": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00731-gannettcoinc-usatodaynews-vizious/playlist.m3u8",
//     },
//     overview:
//       "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
//   },
//   {
//     id: "fox-weather-channel-hd",
//     title: "Fox Weather Live HD",
//     poster_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fox_Weather_logo.svg/500px-Fox_Weather_logo.svg.png",
//     backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fox_Weather_logo.svg/500px-Fox_Weather_logo.svg.png",
//     release_date: "2026-01-20",
//     vote_average: 7.8,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Fox Weather", "Live", "News"],
//     streams: {
//       "Server 1": "https://247wlive.foxweather.com/stream/index.m3u8",
//     },
//     overview:
//       "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
//   },
//   {
//     id: "go2travel-live-channel",
//     title: "Go2Travel Live Channel",
//     poster_path: "https://play-lh.googleusercontent.com/fAQewlj4O6OWRCReMV-ysG2Ip3i7Yz3TBxhFEeipV0BqK9nQk_siCt36ksBIZGmglGUt",
//     backdrop_path: "https://play-lh.googleusercontent.com/fAQewlj4O6OWRCReMV-ysG2Ip3i7Yz3TBxhFEeipV0BqK9nQk_siCt36ksBIZGmglGUt",
//     release_date: "2026-01-20",
//     vote_average: 8.3,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Go2Travel", "Live", "Entertainment"],
//     streams: {
//       "Server 1": "https://go2thls.wns.live/hls/stream.m3u8"
     
//     },
//     overview: "Live comedy shows, stand-up specials, and funny content 24/7.",
//   },
//    {
//     id: "crime-investigation-live-channel",
//     title: "Crime + Investigation",
//     poster_path: "/images/tv/investigationdiscovery.jpg",
//     backdrop_path: "/images/tv/investigationdiscovery.jpg",
//     release_date: "2026-01-20",
//     vote_average: 8.3,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Drama", "Live", "Entertainment"],
//     streams: {
//       "Server 1": "https://fl31.moveonjoy.com/Crime_and_Investigation_Network/tracks-v1a1/mono.ts.m3u8",
//       "Server 2": "https://amg00376-magellan-amg00376c12-samsung-au-1725.playouts.now.amagi.tv/ts-us-w2-n1/playlist/amg00376-magellantv-truecrimenowaunzin-samsungau/cb433e4f7b7b6fdccb993e6cd3f715a0d1076a8b5d32d03765f95cb52abc4013dce0ad92f24ef1684c8778873f5e32161e77b57dce7d01d9de71b8366d2211709188fa7ddd800278f298537f4de6286508ba1110d3224d218fa95223ad0998554953e400655372aab80af6294bd5f352c92074deb2dc653d635a419f435df5c30ff5aea3045add6fa6af1f4e873b47e5864498861bbb9d82539b469b77f0429d8fa2d886129f85c46aff53b330080b7224ccb246f9b1353771070b43fe441b047360e8aa87fb4a7cb5534248fdecb9c70f9d3deff9e805fd55c16db6409624822b8b04a2f347a3acc1bf08216be1ac5f10a4651e04ca7b1713c4fec8212c26674439bc7b594acc7fd1212a77b3f5c21785c41aac7b42efbb441222c99d499ad2e7cdbff0c57d952bcec8e38b7d6c7a235552c80df9da5ad2278b2cf38e0b770804048c8a45c883ee5b32494692cf0b874455ea8dcbcbf4260fe74c571ae469d25e454bc9376773ac6dda922e63842345d46169b5087bd00cacf81ff4a1daf70f74e08d900cac399dc060b8c10ba769334e11f3a37c2d22624990bf36436003802f82f4c5ee7005059687eef6d25c3502795a123b82ece37f8c9d824e3913d258326f641a75c45136087eace4ab482d8153dd9acf43dd2308337c976c284a/25/1920x1080_5500000/index.m3u8",
//       "Server 3": "https://a-cdn.klowdtv.com/live3/law_720p/playlist.m3u8",
//       "Server 4": "https://langleyproductions-cops-2-eu.rakuten.wurl.tv/playlist.m3u8",
//       "Server 5": "https://daddyhd.com/stream/stream-332.php",
//       "Server 6": "https://daddyhd.com/stream/stream-665.php",
//     },
//     overview: "Live comedy shows, stand-up specials, and funny content 24/7.",
//   },
//   {
//     id: "hallmark-movies",
//     title: "Hallmark Movies Mysteries",
//     poster_path: "https://i.ebayimg.com/images/g/ePMAAOSwTgxnQ2mv/s-l1200.jpg",
//     backdrop_path: "https://i.ebayimg.com/images/g/ePMAAOSwTgxnQ2mv/s-l1200.jpg",
//     release_date: "2024-01-20",
//     vote_average: 8.3,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Movies", "Live", "Entertainment"],
//     streams: {
//       "Server 1": "https://fl61.moveonjoy.com/HALLMARK_MOVIES_MYSTERIES/tracks-v1a1/mono.ts.m3u8"     
//     },
//     overview: "Live comedy shows, stand-up specials, and funny content 24/7.",
//   },
//   {
//     id: "history-usa-channel",
//     title: "History USA Channel",
//     poster_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/250px-History_%282021%29.svg.png",
//     backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/250px-History_%282021%29.svg.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["History USA", "Educational", "Live"],
//     streams: {
//       "Server 1": "https://fl7.moveonjoy.com/history_channel/tracks-v1a1/mono.ts.m3u8"
//     },
//     overview:
//       "Live documentary channel featuring nature, science, and history content.",
//   },
//   {
//     id: "bbc-earth-channel",
//     title: "BBC Earth Channel",
//     poster_path: "https://yt3.googleusercontent.com/EsHioubXC-qfNdbHyThN7rDTF7rfTzhl5A5u4hHuUAzslx9jgwtxl_2TN4RFqt3hA1jEwAGVgg=s900-c-k-c0x00ffffff-no-rj",
//     backdrop_path: "https://yt3.googleusercontent.com/EsHioubXC-qfNdbHyThN7rDTF7rfTzhl5A5u4hHuUAzslx9jgwtxl_2TN4RFqt3hA1jEwAGVgg=s900-c-k-c0x00ffffff-no-rj",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["BBC Earth", "Educational", "Live"],
//     streams: {
//       "Server 1": "https://amg00793-amg00793c6-firetv-us-4067.playouts.now.amagi.tv/playlist.m3u8"
//     },
//     overview:
//       "Live documentary channel featuring nature, science, and history content.",
//   },
//   {
//     id: "awe-channel",
//     title: "AWE Channel",
//     poster_path: "https://image.roku.com/developer_channels/prod/72cd4b2a026d9d68fadaae3b12227b2425bf28400a9fd8e679088d3b49c460d4.png",
//     backdrop_path: "https://image.roku.com/developer_channels/prod/72cd4b2a026d9d68fadaae3b12227b2425bf28400a9fd8e679088d3b49c460d4.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["BBC Earth", "Educational", "Live"],
//     streams: {
//       "Server 1": "https://a-cdn.klowdtv.com/live1/awe_720p/chunks.m3u8"
//     },
//     overview:
//       "Live documentary channel featuring nature, science, and history content.",
//   },
//   {
//     id: "law-and-crime-channel",
//     title: "Law and Crime Channel",
//     poster_path: "https://yt3.googleusercontent .com/CRP3YudPa55QypbDnIvuh3erLZTsn2HK8ESR-2fJFFiLJVf7US2CKQELCKK_UowmHA3wCjAdxg=s900-c-k-c0x00ffffff-no-rj",
//     backdrop_path: "https://yt3.googleusercontent.com/CRP3YudPa55QypbDnIvuh3erLZTsn2HK8ESR-2fJFFiLJVf7US2CKQELCKK_UowmHA3wCjAdxg=s900-c-k-c0x00ffffff-no-rj",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Law and Crime", "Educational", "Live"],
//     streams: {
//       "Server 1": "https://a-cdn.klowdtv.com/live3/law_720p/playlist.m3u8"
//     },
//     overview:
//       "Live documentary channel featuring nature, science, and history content.",
//   },
// {
//     id: "crime-investigation-channel",
//     title: "Crime + Investigation Channel",
//     poster_path: "https://www.crimeandinvestigation.co.uk/themes/custom/crimeandinvestigation/images/social-cards/ci-homepage.jpg",
//     backdrop_path: "https://www.crimeandinvestigation.co.uk/themes/custom/crimeandinvestigation/images/social-cards/ci-homepage.jpg",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Crime + Investigation", "Educational", "Live"],
//     streams: {
//       "Server 1": "https://fl31.moveonjoy.com/Crime_and_Investigation_Network/tracks-v1a1/mono.ts.m3u8"
//     },
//     overview:
//       "Live documentary channel featuring nature, science, and history content.",
//   },
// {
//     id: "true-crime-now-channel",
//     title: "True Crime Now Channel",
//     poster_path: "https://cdn.realscreen.com/wp/wp-content/uploads/2021/10/true-crime-now-logo-1.jpg",
//     backdrop_path: "https://cdn.realscreen.com/wp/wp-content/uploads/2021/10/true-crime-now-logo-1.jpg",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["True Crime Now", "Educational", "Live"],
//     streams: {
//       "Server 1": "https://amg00376-magellan-amg00376c12-samsung-au-1725.playouts.now.amagi.tv/ts-us-w2-n1/playlist/amg00376-magellantv-truecrimenowaunzin-samsungau/cb433e4f7b7b6fdccb993e6cd3f715a0d1076a8b5d32d03765f95cb52abc4013dce0ad92f24ef1684c8778873f5e32161e77b57dce7d01d9de71b8366d2211709188fa7ddd800278f298537f4de6286508ba1110d3224d218fa95223ad0998554953e400655372aab80af6294bd5f352c92074deb2dc653d635a419f435df5c30ff5aea3045add6fa6af1f4e873b47e5864498861bbb9d82539b469b77f0429d8fa2d886129f85c46aff53b330080b7224ccb246f9b1353771070b43fe441b047360e8aa87fb4a7cb5534248fdecb9c70f9d3deff9e805fd55c16db6409624822b8b04a2f347a3acc1bf08216be1ac5f10a4651e04ca7b1713c4fec8212c26674439bc7b594acc7fd1212a77b3f5c21785c41aac7b42efbb441222c99d499ad2e7cdbff0c57d952bcec8e38b7d6c7a235552c80df9da5ad2278b2cf38e0b770804048c8a45c883ee5b32494692cf0b874455ea8dcbcbf4260fe74c571ae469d25e454bc9376773ac6dda922e63842345d46169b5087bd00cacf81ff4a1daf70f74e08d900cac399dc060b8c10ba769334e11f3a37c2d22624990bf36436003802f82f4c5ee7005059687eef6d25c3502795a123b82ece37f8c9d824e3913d258326f641a75c45136087eace4ab482d8153dd9acf43dd2308337c976c284a/25/1920x1080_5500000/index.m3u8"
//     },
//     overview:
//       "Live documentary channel featuring nature, science, and history content.",
//   },
//   {
//     id: "investigation-discovery-channel",
//     title: "Investigation Discovery Channel",
//     poster_path: "https://variety.com/wp-content/uploads/2014/07/investigation-discovery-logo.jpg?w=1000&h=563&crop=1",
//     backdrop_path: "https://variety.com/wp-content/uploads/2014/07/investigation-discovery-logo.jpg?w=1000&h=563&crop=1",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Investigation Discovery", "Educational", "Live"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-324.php",
//     },
//     overview:
//       "Live documentary channel featuring nature, science, and history content.",
//   },
//   {
//     id: "amc-channel",
//     title: "AMC Channel",
//     poster_path: "https://play-lh.googleusercontent.com/g7K2KCxcNoOV4bgerqP5yDmRpBImqMGcV99Zvd9vYOQ-v6zDj9f_gyU0EaE5OM2yBrU=w600-h300-pc0xffffff-pd",
//     backdrop_path: "https://play-lh.googleusercontent.com/g7K2KCxcNoOV4bgerqP5yDmRpBImqMGcV99Zvd9vYOQ-v6zDj9f_gyU0EaE5OM2yBrU=w600-h300-pc0xffffff-pd",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Investigation Discovery", "Educational", "Live"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-303.php",
//     },
//     overview:
//       "Live documentary channel featuring nature, science, and history content.",
//   },  
// {
//     id: "adult-channel-01",
//     title: "Adult Channel 01",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-501.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-02",
//     title: "Adult Channel 02",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-502.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-03",
//     title: "Adult Channel 03",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-503.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-04",
//     title: "Adult Channel 04",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-504.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-05",
//     title: "Adult Channel 05",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-505.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-06",
//     title: "Adult Channel 06",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-506.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-07",
//     title: "Adult Channel 07",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-507.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-08",
//     title: "Adult Channel 08",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-508.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-09",
//     title: "Adult Channel 09",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-509.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-10",
//     title: "Adult Channel 10",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-510.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-11",
//     title: "Adult Channel 11",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-511.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-12",
//     title: "Adult Channel 12",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-512.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-13",
//     title: "Adult Channel 13",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-513.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-14",
//     title: "Adult Channel 14",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-514.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-15",
//     title: "Adult Channel 15",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-515.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-16",
//     title: "Adult Channel 16",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-516.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-17",
//     title: "Adult Channel 17",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-517.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-18",
//     title: "Adult Channel 18",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-518.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-19",
//     title: "Adult Channel 19",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-519.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
//   {
//     id: "adult-channel-20",
//     title: "Adult Channel 20",
//     poster_path: "/18only.png",
//     backdrop_path: "/18only.png",
//     release_date: "2024-01-20",
//     vote_average: 8.4,
//     duration: "24/7",
//     media_type: 'tv_live',
//     genres: ["Adult", "Romance", "Drama"],
//     streams: {
//     "Server 1": "https://daddyhd.com/stream/stream-520.php",
//     },
//     overview:
//       "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
//   },
// ];

// // GET ALL LOCAL ITEMS
// const getAllLocalItems = (): MediaItem[] => {
//   return [
//     ...UNIQUE_MOVIES,
//     ...UNIQUE_TV_SHOWS,
//     ...UNIQUE_SPORTS,
//     ...UNIQUE_TV_LIVE
//   ];
// };

// // FIXED: WORKING SEARCH FUNCTION THAT DISPLAYS BOTH MOVIES AND TV SHOWS
// export const searchContent = async (query: string): Promise<MediaItem[]> => {
//   console.log("🔍 SEARCH STARTED FOR:", query);
  
//   if (!query || query.trim().length < 2) {
//     console.log("❌ Query too short");
//     return [];
//   }

//   const searchTerm = query.toLowerCase().trim();
//   const allResults: MediaItem[] = [];
  
//   try {
//     // 1. SEARCH LOCAL DATA FIRST
//     const allLocalItems = getAllLocalItems();
    
//     const localResults = allLocalItems.filter(item => {
//       const titleMatch = item.title.toLowerCase().includes(searchTerm);
//       const genreMatch = item.genres?.some(g => g.toLowerCase().includes(searchTerm));
//       const overviewMatch = item.overview?.toLowerCase().includes(searchTerm);
//       return titleMatch || genreMatch || overviewMatch;
//     });
    
//     console.log("📊 Local results:", localResults.length);
//     allResults.push(...localResults);
    
//     // 2. SEARCH TMDB API - SEPARATE CALLS FOR MOVIES AND TV
//     console.log("🌐 Fetching from TMDB API...");
    
//     const searchQuery = encodeURIComponent(query);
    
//     // PROMISE ALL FOR BOTH MOVIES AND TV SHOWS
//     const [movieResponse, tvResponse] = await Promise.allSettled([
//       fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false&language=en-US`),
//       fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false&language=en-US`)
//     ]);
    
//     // PROCESS MOVIE RESULTS
//     if (movieResponse.status === 'fulfilled' && movieResponse.value.ok) {
//       const movieData = await movieResponse.value.json();
//       console.log("🎬 Movie API results:", movieData.results?.length || 0);
      
//       if (movieData.results && movieData.results.length > 0) {
//         const movieResults = movieData.results
//           .filter((item: any) => item.poster_path)
//           .map((item: any) => {
//             // Check if already in local results
//             const existing = allResults.find(r => 
//               r.title.toLowerCase() === item.title.toLowerCase() || 
//               r.id === `tmdb-movie-${item.id}`
//             );
            
//             if (existing) return null;
            
//             return {
//               id: `tmdb-movie-${item.id}`,
//               title: item.title || 'Untitled Movie',
//               poster_path: `${IMAGE_BASE}${item.poster_path}`,
//               backdrop_path: item.backdrop_path ? `${BACKDROP_BASE}${item.backdrop_path}` : '',
//               release_date: item.release_date || '2024-01-01',
//               vote_average: item.vote_average || 0,
//               duration: '2h',
//               media_type: 'movie',
//               genres: item.genre_ids?.slice(0, 3).map(() => 'General') || ['General'],
//               streams: getSearchMovieStreams(item.id.toString()),
//               overview: item.overview || 'No description available.'
//             };
//           })
//           .filter((item: any) => item !== null);
        
//         console.log("✅ Added API movies:", movieResults.length);
//         allResults.push(...movieResults);
//       }
//     } else {
//       console.log("❌ Movie API failed:", movieResponse.status);
//     }
    
//     // PROCESS TV SHOW RESULTS
//     if (tvResponse.status === 'fulfilled' && tvResponse.value.ok) {
//       const tvData = await tvResponse.value.json();
//       console.log("📺 TV API results:", tvData.results?.length || 0);
      
//       if (tvData.results && tvData.results.length > 0) {
//         const tvResults = tvData.results
//           .filter((item: any) => item.poster_path)
//           .map((item: any) => {
//             // Check if already in local results
//             const existing = allResults.find(r => 
//               r.title.toLowerCase() === item.name.toLowerCase() || 
//               r.id === `tmdb-tv-${item.id}`
//             );
            
//             if (existing) return null;
            
//             return {
//               id: `tmdb-tv-${item.id}`,
//               title: item.name || 'Untitled TV Show',
//               poster_path: `${IMAGE_BASE}${item.poster_path}`,
//               backdrop_path: item.backdrop_path ? `${BACKDROP_BASE}${item.backdrop_path}` : '',
//               release_date: item.first_air_date || '2024-01-01',
//               vote_average: item.vote_average || 0,
//               duration: 'Series',
//               media_type: 'tv',
//               genres: item.genre_ids?.slice(0, 3).map(() => 'General') || ['General'],
//               streams: getSearchTVStreams(item.id.toString()), // FIXED: Using simplified TV streams
//               overview: item.overview || 'No description available.'
//             };
//           })
//           .filter((item: any) => item !== null);
        
//         console.log("✅ Added API TV shows:", tvResults.length);
//         allResults.push(...tvResults);
//       }
//     } else {
//       console.log("❌ TV API failed:", tvResponse.status);
//     }
    
//     // 3. RETURN RESULTS - SHOW BOTH MOVIES AND TV SHOWS TOGETHER
//     console.log("🎯 TOTAL RESULTS BEFORE DEDUP:", allResults.length);
    
//     // Remove duplicates by ID
//     const uniqueResults = Array.from(new Map(allResults.map(item => [item.id, item])).values());
    
//     // SORT BY TYPE: MOVIES FIRST, THEN TV SHOWS
//     uniqueResults.sort((a, b) => {
//       if (a.media_type === 'movie' && b.media_type !== 'movie') return -1;
//       if (a.media_type !== 'movie' && b.media_type === 'movie') return 1;
//       return 0;
//     });
    
//     console.log("🎯 FINAL UNIQUE RESULTS:", uniqueResults.length);
//     console.log("🎯 MOVIES:", uniqueResults.filter(r => r.media_type === 'movie').length);
//     console.log("🎯 TV SHOWS:", uniqueResults.filter(r => r.media_type === 'tv').length);
    
//     return uniqueResults;
    
//   } catch (error) {
//     console.error("🔥 SEARCH FAILED:", error);
    
//     // Fallback to local search only
//     const allLocalItems = getAllLocalItems();
//     const localResults = allLocalItems.filter(item => {
//       const titleMatch = item.title.toLowerCase().includes(searchTerm);
//       const genreMatch = item.genres?.some(g => g.toLowerCase().includes(searchTerm));
//       const overviewMatch = item.overview?.toLowerCase().includes(searchTerm);
//       return titleMatch || genreMatch || overviewMatch;
//     });
    
//     console.log("🔄 Fallback results:", localResults.length);
//     return localResults;
//   }
// };

// // Simple fetch functions
// export const fetchMovies = async (): Promise<MediaItem[]> => {
//   return UNIQUE_MOVIES;
// };

// export const fetchTVShows = async (): Promise<MediaItem[]> => {
//   return UNIQUE_TV_SHOWS;
// };

// export const fetchSports = async (): Promise<MediaItem[]> => {
//   return UNIQUE_SPORTS;
// };

// export const fetchTVLive = async (): Promise<MediaItem[]> => {
//   return UNIQUE_TV_LIVE;
// };

// export const fetchById = async (id: string, type: string): Promise<MediaItem | null> => {
//   // Check local data first
//   let source: MediaItem[] = [];
  
//   if (type === 'movie') source = UNIQUE_MOVIES;
//   else if (type === 'tv') source = UNIQUE_TV_SHOWS;
//   else if (type === 'sports') source = UNIQUE_SPORTS;
//   else if (type === 'tv_live') source = UNIQUE_TV_LIVE;
  
//   const localItem = source.find(i => i.id === id);
//   if (localItem) return localItem;
  
//   // Check all local items
//   const allLocalItems = getAllLocalItems();
//   const itemInAll = allLocalItems.find(i => i.id === id);
//   if (itemInAll) return itemInAll;
  
//   // If it's a TMDB item
//   if (id.startsWith('tmdb-')) {
//     const parts = id.split('-');
//     const tmdbId = parts[2];
//     const mediaType = parts[1] || 'movie';
    
//     try {
//       const url = `${BASE_URL}/${mediaType}/${tmdbId}?api_key=${API_KEY}&language=en-US`;
//       const response = await fetch(url);
      
//       if (response.ok) {
//         const data = await response.json();
        
//         // Get streams
//         let streams = {};
//         if (mediaType === 'movie') {
//           streams = getSearchMovieStreams(tmdbId);
//         } else if (mediaType === 'tv') {
//           streams = getSearchTVStreams(tmdbId); // Use simplified TV streams
//         }
        
//         return {
//           id: id,
//           title: data.title || data.name || 'Untitled',
//           poster_path: data.poster_path ? `${IMAGE_BASE}${data.poster_path}` : '',
//           backdrop_path: data.backdrop_path ? `${BACKDROP_BASE}${data.backdrop_path}` : '',
//           release_date: data.release_date || data.first_air_date || '2024-01-01',
//           vote_average: data.vote_average || 0,
//           duration: mediaType === 'movie' ? '2h' : 'Series',
//           media_type: mediaType,
//           genres: data.genres?.map((g: any) => g.name) || ['General'],
//           streams: streams,
//           overview: data.overview || 'No description available.'
//         };
//       }
//     } catch (error) {
//       console.error("Error fetching TMDB details:", error);
//     }
//   }
  
//   return null;
// };

// // GET ALL LOCAL CONTENT
// export const getAllContent = (): MediaItem[] => {
//   return getAllLocalItems();
// };

// // GET ITEM BY ID AND TYPE
// export const getContentByIdAndType = (id: string, type: string): MediaItem | null => {
//   const allItems = getAllLocalItems();
//   return allItems.find(item => item.id === id) || null;
// };





import { MediaItem } from "../types";

const API_KEY = 'be3e130c5ee08bf14bc9078514f1999a';
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const BACKDROP_BASE = "https://image.tmdb.org/t/p/original";

const getFixedMatchTime = (hoursAdd: number, minutesSet: number = 0) => {
  const baseTime = new Date("2026-01-30T08:00:00.000Z");
  baseTime.setHours(baseTime.getHours() + hoursAdd);
  baseTime.setMinutes(minutesSet);
  return baseTime.toISOString();
};

// SEARCH RESULT STREAMS - FIXED
const getSearchMovieStreams = (tmdbId: string) => {
  return {
    "Server 1": `https://xprime.today/watch/${tmdbId}`,
    "Server 2": `https://www.vidking.net/embed/movie/${tmdbId}?autoPlay=true&nextEpisode=true&episodeSelector=true`,
    "Server 3": `https://cinemaos.tech/player/${tmdbId}`,
    "Server 4": `https://api.cinezo.net/embed/tmdb-movie-${tmdbId}`,
    "Server 5": `https://vidsrc-embed.ru/embed/movie/${tmdbId}`,
  };
};

const getSearchTVStreams = (tmdbId: string, season: string = "1", episode: string = "1") => {
  return {
    "Server 1": `https://xprime.today/watch/${tmdbId}/${season}/${episode}`,
    "Server 2": `https://www.vidking.net/embed/tv/${tmdbId}/${season}/${episode}?autoPlay=true&nextEpisode=true&episodeSelector=true`,
    "Server 3": `https://api.cinezo.net/embed/tmdb-tv-${tmdbId}/${season}/${episode}`,
    "Server 4": `https://www.cinezo.net/watch/tv/${tmdbId}?season=${season}&episode=${episode}`,
    "Server 5": `https://vidsrc-embed.ru/embed/tv/${tmdbId}/${season}/${episode}`,
  };
};

// LOCAL MOVIES - YOUR ACTUAL DATA
export const UNIQUE_MOVIES: MediaItem[] = [
         {
    id: "maaldar-2026",
    title: "Maaldar (2026)",
    poster_path: "/images/movie/mal.jpg",
    backdrop_path: "/images/movie/maldar.jpg",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/lYENS9mtvukML",
      "Server 2": "https://byseqekaho.com/e/aq6rr0tgebsi",
    },
    overview: "Lena and Mara are drawn into a secret affair that defies boundaries and threatens everything they've built. When Mara uncovers her groom's betrayal, she finds solace in Lena, a newfound friend who soon becomes something more. As passion and secrecy collide, their choices endanger careers, fracture relationships, and lead to devastating consequences.",
  },
  {
    id: "patikim-ni-robb-guinto-2026",
    title: "Patikim ni Robb Guinto (2026)",
    poster_path: "https://media.themoviedb.org/t/p/w500/4rL4XpHnngzElgdYDqaDtZnmtEH.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/AarN9NHen3V3z2H4Naw5Izc11x.jpg",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/7tyq4fhUZ3xx",
      "Server 2": "https://www.vidking.net/embed/movie/1559596?autoPlay=true&nextEpisode=true&episodeSelector=true",
      "Server 3": "https://cinemaos.tech/player/1559596",
      "Server 4": "https://xprime.today/watch/1559596",
      
    },
    overview: "VMX hottie Christy Imperial gives fans a taste of VMX GL Crush Robb Guinto's spiciest and tastiest scenes",
  },
  {
    id: "audacity-2026",
    title: "Audacity (2026)",
    poster_path: "https://www.coolmoviez.baby/files/images/Audacity_(2026)_Part_2_Atrangii_Hindi_Unrated_Webseries.jpg",
    backdrop_path: "https://i.ytimg.com/vi/tULnumoXoWk/maxresdefault.jpg",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/jOktxgon2ZQlO",
      "Server 2": "https://byseqekaho.com/e/zldtte3alzfk/",
      },
    overview: "VMX hottie Christy Imperial gives fans a taste of VMX GL Crush Robb Guinto's spiciest and tastiest scenes",
  },
  {
    id: "speed-faster-2026",
    title: "Speed Faster (2026) ",
    poster_path: "https://media.themoviedb.org/t/p/w500/dKYp9uUlDufvL0gWHve8nuzePdk.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/nUMclZJRRwREfeP8liJ7LOddjnY.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Adventure ", "Comedy", "Mystery"],
    streams: {
      "Server 1": "https://stmix.io/e/cTWgLAJ4I50v7",
      "Server 2": "https://byseqekaho.com/e/ptpj1jv2799q",
      "Server 3": "https://www.vidking.net/embed/movie/1617852?autoPlay=true&nextEpisode=true&episodeSelector=true",
      "Server 4": "https://cinemaos.tech/player/1617852",
      "Server 5": "https://xprime.today/watch/1617852",
      "Server 6": "https://www.cinezo.net/watch/movie/1617852",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1617852",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1617852",
      
    },
    overview: "Ace and his crew of elite street racers are forced into a high-stakes mission when a shadowy organization threatens someone close to him. In the aftermath of Four Amigos, they find themselves working for the infamous Church of Assassins, tasked with pulling off an impossible job. But as they push their limits, they uncover a chilling truth-failure was always part of the plan. Betrayal, speed, and survival collide in this adrenaline-fueled thriller where the real race isn't just for victory, but for their lives.",
  },
  {
    id: "missing-the-boat-2026",
    title: "Missing the Boat (2026) ",
    poster_path: "https://media.themoviedb.org/t/p/w500/2Lw8nVKLNvvfAG46fn2nAJwBrPg.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/5Xiqdj6eiitWtyPmy0zakV3GYf.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Adventure ", "Comedy", "Mystery"],
    streams: {
      "Server 1": "https://stmix.io/e/acWrQSPMfmrqZ",
      "Server 2": "https://byseqekaho.com/e/vo038510cxcp",
      "Server 3": "https://www.vidking.net/embed/movie/1592019?autoPlay=true&nextEpisode=true&episodeSelector=true",
      "Server 4": "https://cinemaos.tech/player/1592019",
      "Server 5": "https://xprime.today/watch/1592019",
      "Server 6": "https://www.cinezo.net/watch/movie/1592019",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1592019",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1592019",
    },
    overview: "Strangers Kelly and Parker both end up on the same Italian cruise, but after missing the boat during a stop, they're forced to team up and race across southern Italy to catch up.",
  },
  {
    id: "delivery-boy-pizza-on-time-2026",
    title: "Delivery Boy Pizza On Time (2026) ",
    poster_path: "https://media.themoviedb.org/t/p/w500/iy7UrpXGCcSpBqpY4yM9a0oU1Gm.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/rugUejUyBcQct1t6b2ysz3rrsjm.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Mystery", "Drama", "Thriller"],
    streams: {
      "Server 1": "https://stmix.io/e/9QQnTyfcCRiB",
      "Server 2": "https://byseqekaho.com/e/4l8x3qvzikp0/",
    },
    overview: "When Riya's husband is away, an ordinary evening takes an unexpected turn. Out of boredom, she begins chatting online with a stranger — someone charming yet mysterious. But soon, a pizza delivery boy shows up at her door with an order she never placed. As the night progresses, strange events begin to unfold. The delivery boy insists she accept the pizza, and the online stranger seems to know more about her than she ever shared. Caught between reality and suspicion, Riya must uncover who is behind the web of deceit — the delivery boy, the man on the cam, or someone else entirely. A gripping mystery–thriller where every message, every knock, and every face hides a secret.",
  },
  {
    id: "tu-meri-main-tera-main-tera-tu-meri-2026",
    title: "Tu Meri Main Tera Main Tera Tu Meri (2025) ",
    poster_path: "https://media.themoviedb.org/t/p/w500/4mJ4xhjBTBF8GOtsfr78Ebp76vS.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/iQGmmI5VwNW2cjrF2uQF8VhBGcw.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Romance", "Drama", "Thriller"],
    streams: {
      "Server 1": "https://stmix.io/e/DoMsumAkAZVA",
      "Server 2": "https://byseqekaho.com/e/ibdepxzeu8vz/",
      
    },
    overview: "When a carefree NRI wedding planner and a headstrong novelist collide during a wild summer in Croatia, sparks fly in ways neither expected. What begins as playful clashes soon transforms into something deeper – only to be tested when love, family, and tradition pull them in opposite directions.",
  },
  {
    id: "human-cocaine-2026",
    title: "Human Cocaine (2026) ", 
    poster_path: "https://media.themoviedb.org/t/p/w500/5u4PzItZ835kr7PyT6yuR5gI9p0.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/ado1wdhkVOOUkDnRP0mnJmQ5iWC.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Action", "Crime", "Thriller"],
    streams: {
      "Server 1": "https://stmix.io/e/5FigxkywkeEG",
      "Server 2": "https://www.vidking.net/embed/movie/1568964?autoPlay=true&nextEpisode=true&episodeSelector=true",
      "Server 3": "https://cinemaos.tech/player/1568964",
      "Server 4": "https://xprime.today/watch/1568964",
      "Server 5": "https://www.cinezo.net/watch/movie/1568964",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1568964",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1568964",
    },
    overview: "Arjun, a UK based cab driver who is financially struggling to get his estranged wife and daughter back, finds an opportunity to make GBP 25,000 The job is simple: Deliver a parcel to a given address. Along the way, helps a hitchhiker Liza by giving her a ride. But what he doesn't know is how he is endangering both their lives.",
  },
  {
    id: "vadh-2-2026",
    title: "Vadh 2 (2026) ", 
    poster_path: "https://media.themoviedb.org/t/p/w500/pOJAaLMsc7T5rwVDTA7SRg9SAEU.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/5z7eorMubo7nB11P8s5a0GMXf2D.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Action", "Crime", "Thriller"],
    streams: {
      "Server 1": "https://stmix.io/e/3tIsnubKKjK2",
      "Server 2": "https://byseqekaho.com/e/aclqmbxitdv4/",
      "Server 3": "https://www.vidking.net/embed/movie/1595507?autoPlay=true&nextEpisode=true&episodeSelector=true",
      "Server 4": "https://cinemaos.tech/player/1595507",
      "Server 5": "https://xprime.today/watch/1595507",
      "Server 6": "https://www.cinezo.net/watch/movie/1595507",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1595507",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1595507",
    },
    overview: "A police officer's pursuit of truth in a shocking prison crime intertwines with the lives of a widowed prison guard and a soon to be released inmate, unravelling a web of morality and redemption.",
  },
  {
    id: "bhabiji-ghar-par-hain-2026",
    title: "VBhabiji Ghar Par Hain! (2026) ", 
    poster_path: "https://media.themoviedb.org/t/p/w500/v8G1NudtXq7BP56TgmAfpDx10FQ.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/g3varY1uTosvAheX729NY2g9EKv.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Comedy", "Family", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/PIwgWmce3PzM",
      "Server 2": "https://byseqekaho.com/e/4p0e0o3vtyn0/",
      "Server 3": "https://www.vidking.net/embed/movie/1587124?autoPlay=true&nextEpisode=true&episodeSelector=true",
      "Server 4": "https://cinemaos.tech/player/1587124",
      "Server 5": "https://xprime.today/watch/1587124",
      "Server 6": "https://www.cinezo.net/watch/movie/1587124",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1587124",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1587124",
    },
    overview: "In a whirlwind of misunderstandings, two rival neighbours, Vibhuti and Tiwari, find themselves on a riotous road trip with their wives, only to get tangled up with lovable gangster brothers, Shanti and Kranti, who turn a simple journey into an unforgettable comedy of errors.",
  }, 
  {
    id: "relationship-goals-2026-multi-lang",
    title: "Relationship Goals (2026) Multi-Lang",
    poster_path: "https://media.themoviedb.org/t/p/w500/o7dVxvZIKnAB7k1eeeWp2k14Es7.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/6zaQ1ffMOXjBdeg0gKd6OxUvT4C.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Romance ", "Comedy", "Drama"],
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/fzh60cMcTmlf",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/1hppdabczy1n/",
    },
    overview: "When TV producer Leah Caldwell aims to become the first woman running New York's top morning show, her ex competes for the same role. Leah stays focused on her career, until chemistry with her ex challenges her priorities.",
  },
  {
    id: "even-if-this-love-disappears-tonight-2026-multi-lang",
    title: "Even if This Love Disappears Tonight (2026) Multi-Lang",
    poster_path: "https://media.themoviedb.org/t/p/w500/5eNN8KLDPUXDqIkTdCbmn1gx5P7.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/iL5eGI9ctHdUOV4yG6dyGKctSEX.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Romance ", "Comedy", "Drama"],
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/TP5qsutqmLRk",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/4xk7wo9mqyg0/",
    },
    overview: "A high school girl wakes up each day with no memory of yesterday. When she agrees to date a shy classmate, can their love grow with every new beginning?",
  },
  {
    id: "nari-nari-naduma-murari-2026-multi-lang",
    title: "Nari Nari Naduma Murari (2026) Multi-Lang",
    poster_path: "https://media.themoviedb.org/t/p/w500/jFBu7tS0mlEZwYTkjJcKH48bV4m.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/8o1b4G5Uv5EFQ64Sicz1ae7WLsT.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Romance ", "Comedy", "Drama"],
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/CiPRB7uPObye",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/ffypfpdjkg6v/",
    },
    overview: "A young man's life turns upside down when he finds himself caught between two women, leading to an unexpected love triangle filled with emotions, misunderstandings, and tough decisions. As relationships intertwine, he must confront his feelings, face reality, and choose what truly matters, blending romance with heartfelt family drama.",
  },
  {
    id: "the-investigation-of-lucy-letby-2026-multi-lang",
    title: "The Investigation of Lucy Letby (2026) Multi-Lang",
    poster_path: "https://media.themoviedb.org/t/p/w500/qhNThwc72GqihJhXaP29Af5hJ2A.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/qhSfXdkrIzwYsyQ3Z9ehFmO3zjy.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Crime ", "Documentary", "Drama"],
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/84Xt99ybdoYAo",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/u50jr9d6b0tx/",
      "Server 3": "https://www.vidking.net/embed/movie/1620991?autoPlay=true&nextEpisode=true&episodeSelector=true",
      "Server 4": "https://cinemaos.tech/player/1620991",
      "Server 5": "https://xprime.today/watch/1620991",
      "Server 6": "https://www.cinezo.net/watch/movie/1620991",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1620991",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1620991",
    },
    overview: "An engaging and thought-provoking look at Lucy Letby, the former nurse serving life in prison after being convicted of the murders of seven infants and the attempted murders of seven others.",
  },
  {
    id: "840464",
    title: "Greenland-2 Migration (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/dtPwBZjzqTaObjG4fKStRkBq1uu.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/tyjXlexbNZQ0ZT1KEJslQtBirqc.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Adventure", "Thriller", "Mystery"],
    streams: {
      "Server 1": "https://stmix.io/e/SalwmX8W01k4B",
      "Server 2": "https://cinemaos.tech/player/840464",
      "Server 3 ": "https://xprime.today/watch/840464",
      "Server 4": "https://www.cinezo.net/watch/movie/840464",
      "Server 5": "https://vidsrc-embed.ru/embed/movie/840464",
      "Server 6": "https://api.cinezo.net/embed/tmdb-movie-840464",
    },
    overview:
      "Having found the safety of the Greenland bunker after the comet Clarke decimated the Earth, the Garrity family must now risk everything to embark on a perilous journey across the wasteland of Europe to find a new home.",
  },
  {
    id: "1249508",
    title: "Grizzly Night (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/3ppOwa6PEtGsIiDPdZHUbEqgIY7.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/i275mAQP4KhPtYUpMUgBGMmK4WN.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Horror", "Adventure", "Mystery"],
    streams: {
      "Server 1": "https://stmix.io/e/7GZi2cqHskcwn",
      "Server 2": "https://cinemaos.tech/player/1249508",
      "Server 3 ": "https://xprime.today/watch/1249508",
      "Server 4": "https://www.cinezo.net/watch/movie/1249508",
      "Server 5": "https://vidsrc-embed.ru/embed/movie/1249508",
      "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1249508",
    },
    overview:
      "On August 12th, 1967, in Montana's Glacier National Park, the unthinkable happened: On the same night, nine miles apart, there were not one-but two-fatal grizzly bear attacks.",
  },
  {
    id: "1234731",
    title: "Anaconda (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/qxMv3HwAB3XPuwNLMhVRg795Ktp.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/swxhEJsAWms6X1fDZ4HdbvYBSf9.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Adventure ", "Comedy", "Mystery"],
    streams: {
      "Server 1": "https://xprime.today/watch/1234731",
      "Server 2": "https://cinemaos.tech/player/1234731",
      "Server 3 - Multi-Lang": "https://stmix.io/e/wSmdv3CDpCNml",
      "Server 4": "https://www.cinezo.net/watch/movie/1234731",
      "Server 5": "https://vidsrc-embed.ru/embed/movie/1234731",
      "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1234731",
    },
    overview:
      "A group of friends facing mid-life crises head to the rainforest with the intention of remaking their favorite movie from their youth, only to find themselves in a fight for their lives against natural disasters, giant snakes and violent criminals",
  },
  {
    id: "chemistry-part-2",
    title: "Chemistry Part 2 (2026)",
    poster_path:
      "https://m.media-amazon.com/images/M/MV5BYzBiMWY2ZWEtYTNjOC00ZTg0LWJlMGQtODU1N2UwYWM3MDAyXkEyXkFqcGc@._V1_.jpg",
    backdrop_path:
      "https://media-files.atrangii.in/media-metadata/6979de0ef60fc20caae469ce",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
     "Server 1": "https://stmix.io/e/PNUePFxDwvjVx",
      "Server 2": "https://short.icu/QYmidACiu?thumbnail=https://media-files.atrangii.in/media-metadata/6979de0ef60fc20caae469ce",
      "Server 3": "https://byseqekaho.com/e/9a650rp8vdaa",
      },
    overview:
      "When a reluctant student goes to study Chemistry from an enigmatic, isolated teacher, her attraction slowly overpowers his reluctance. A forbidden chemistry builds, threatening to change lives forever.",
  },
  {
    id: "generation-gap-part-2",
    title: "Generation Gap Part 2 (2026)",
    poster_path:
      "https://m.media-amazon.com/images/M/MV5BMGFhYWQ3YjktNzg3OC00NmJlLTg4NWQtMzcyYWIwNjNkYTIwXkEyXkFqcGc@._V1_.jpg",
    backdrop_path:
      "https://i.ytimg.com/vi/ID1smTZldw0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3JVPV9kENRBn5u8fWkxQdl4K0_w",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/nKnly2xFa69Fs",
      "Server 2": "https://short.icu/nzkD33Ujr?thumbnail=https://img.youtube.com/vi/ID1smTZldw0/maxresdefault.jpg",
      "Server 3": "https://byseqekaho.com/e/w0nud4ssbmbt",
      },
    overview:
      "A steamy affair between Mrs. Poonam and her nephew (Vipin) begins to develop a gap when they both have different expectations from each other.",
  },
  {
    id: "1339876",
    title: "Mardaani 3 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/jLo8qcDOw9CD1COzMLBouOqHtqX.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/q0aIpg6hiM9PafhGUknEPDBA6bW.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Crime ", "Action", "Mystery"],
    streams: {
      "Server 1": "https://stmix.io/e/kYuQQzKDopYa",
      "Server 2": "https://cinemaos.tech/player/1339876-3",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1339876-3/hindi?autoplay=false&back=true&server=0",
      "Server 4 - MAIN":
        "https://short.icu/LmIsiliv6?thumbnail=https://media.themoviedb.org/t/p/w780/q0aIpg6hiM9PafhGUknEPDBA6bW.jpg",
      "Server 5": "https://byseqekaho.com/e/8ekaiu3dgz0r",
      "Server 6": "https://www.cinezo.net/watch/movie/1339876-3",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1339876-3",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1339876-3",
    },
    overview:
      "Officer Shivani Shivaji Roy returns to hunt down those behind the disappearance of young girls, risking everything to bring them back alive.",
  },
  {
    id: "786567",
    title: "Gandhi Talks (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/p4iQT3s97T3gQOLhTj0UplzYMOj.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/4Cqad6ZpWJRhBumGE1QwHs9pVuB.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Drama ", "Silence", "Mystery"],
    streams: {
      "Server 1": "https://stmix.io/e/BbQpHGHdJKZGn",
      "Server 2": "https://cinemaos.tech/player/786567",
      "Server 3":
        "https://zxcstream.xyz/player/movie/786567/english?autoplay=false&back=true&server=0",
      "Server 4 - MAIN":
        "https://short.icu/PhuS5WVOq?thumbnail=https://media.themoviedb.org/t/p/w780/4Cqad6ZpWJRhBumGE1QwHs9pVuB.jpg",
      "Server 5": "https://byseqekaho.com/e/oi0zc05mbgjt",
      "Server 6": "https://www.cinezo.net/watch/movie/786567",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/786567",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-786567",
    },
    overview:
      "A silent black comedy, about the monetary needs of a character & how it impacts the others. A young, unemployed graduate Mahadev’s struggle to land a job through any means possible and crosses paths with a businessman and petty thief. A subject wherein silence speaks much louder than words. Although a work of fiction by the writer, all the characters in the film are sketched out to seem very real and relatable ensuring an enriching journey as well a laugh riot as the cat and mouse guffaws amongst them unfold. Gandhi Talks aims at telling a story by switching off the device of dialogue, which is not only scary but also interesting and challenging.",
  },
  {
    id: "1112564",
    title: "Vaa Vaathiyaar (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/47uIUf9KCfDzxQXixw8lrvYl8C8.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/qPNIwdR3y965KMsiweyuXdjDRXR.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Comedy ", "Drama", "Romance"],
    streams: {
      "Server 1- Multi-Lang":
        "https://stmix.io/e/XvqZsVUzrTfYy",
        },
    overview:
      "After being raised as the reincarnation of a famous actor, a man finds himself clashing with his grandfather's expectations of him.",
  },
  {
    id: "1168190",
    title: "The Wrecking Crew (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/gbVwHl4YPSq6BcC92TQpe7qUTh6.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/cz4vLJrmaV1zJlRYbxqtvLzeLWB.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Crime ", "Action", "Mystery"],
    streams: {
      "Server 1": "https://xprime.today/watch/1168190",
      "Server 2": "https://cinemaos.tech/player/1168190",
      "Server 3 - Multi-Lang": "https://streamix.so/e/LOMcIVE2bYo9n",
      "Server 4": "https://www.cinezo.net/watch/movie/1168190",
      "Server 5": "https://vidsrc-embed.ru/embed/movie/1168190",
      "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1168190",
    },
    overview:
      "Estranged half-brothers Jonny and James reunite after their father's mysterious death. As they search for the truth, buried secrets reveal a conspiracy threatening to tear their family apart. Multi language Available [Tam + Tel + Hin + Mal + Kan + Eng] Apply Settings",
  },
  {
    id: "1552952",
    title: "Dhraupathi 2 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/vojJemS5USdagshMLWS8JyrU8x6.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/vojJemS5USdagshMLWS8JyrU8x6.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Action ", "Drama", "History"],
    streams: {
      "Server 1":
        "https://short.icu/11VUo0mkc?thumbnail=https://media.themoviedb.org/t/p/w780/vojJemS5USdagshMLWS8JyrU8x6.jpg",
      "Server 2": "https://byseqekaho.com/e/q96pfror03po",
    },
    overview:
      " 14th century AD, people were suffering from the brutality of the Madurai Sultanate and the Delhi Sultan. The Hoysala Emperor Vallalar III protected his empire and people with diplomacy. The sacrifice and betrayal of some changed the course of a kingdom. Insidious interventions disrupt the lives of people and the stability of the state.",
  },
  {
    id: "1552952",
    title: "Jockey (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/69zi48P9NIwPq7qdssxQ8qqbBNG.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/69zi48P9NIwPq7qdssxQ8qqbBNG.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Action ", "Drama", "Thriller"],
    streams: {
      "Server 1":
        "https://short.icu/8W2HhRv30?thumbnail=https://media.themoviedb.org/t/p/w780/69zi48P9NIwPq7qdssxQ8qqbBNG.jpg",
      "Server 2": "https://byseqekaho.com/e/a1p51n0oaksv",
    },
    overview:
      "We don't have an overview translated in English. Help us expand our database by adding one.",
  },
  {
    id: "1613346",
    title: "Landlord (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/l3NGOzBnchp957poN8mBoZuWVHX.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/irXzev38Yf3UJ25PXtsnFg6KVQC.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Action ", "Drama", "Thriller"],
    streams: {
      "Server 1": "https://xprime.today/watch/1613346",
      "Server 2": "https://cinemaos.tech/player/1613346",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1613346/kannada?autoplay=false&back=true&server=0",
      "Server 4":
        "https://short.icu/OHi7E2c2Q?thumbnail=https://media.themoviedb.org/t/p/w780/irXzev38Yf3UJ25PXtsnFg6KVQC.jpg",
      "Server 5": "https://byseqekaho.com/e/4dsgif4rh5lc",
      "Server 6": "https://www.cinezo.net/watch/movie/1613346",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1613346",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1613346",
    },
    overview:
      "In a village crushed under a brutal landlord's rule, fear silences the poor, and justice is denied. When a young woman constable challenges the system and an innocent family is burnt alive, outrage erupts into a violent uprising. What follows is a costly fight to reclaim dignity, justice, and the power of the Constitution.",
  },
  {
    id: "1236153",
    title: "Mercy (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/pyok1kZJCfyuFapYXzHcy7BLlQa.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/pyok1kZJCfyuFapYXzHcy7BLlQa.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Action ", "Adventure", "Comedy"],
    streams: {
      "Server 1": "https://xprime.today/watch/1236153",
      "Server 2": "https://cinemaos.tech/player/1236153",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1236153/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://short.icu/AanpBKBQc?thumbnail=https://media.themoviedb.org/t/p/w780/mHC8tSRYfAKGh2jaSNQMSzGdbOW.jpg",
      "Server 5 - HINDI": "https://byseqekaho.com/e/j1pt36tomnsn",
      "Server 6": "https://www.cinezo.net/watch/movie/1236153",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1236153",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1236153",
    },
    overview:
      "In the near future, a detective stands on trial accused of murdering his wife. He has ninety minutes to prove his innocence to the advanced AI Judge he once championed, before it determines his fate.",
  },
  {
    id: "1584215",
    title: "The Internship (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/fYqSOkix4rbDiZW0ACNnvZCpT6X.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/fYqSOkix4rbDiZW0ACNnvZCpT6X.jpg",
    release_date: "2026-01-16",
    vote_average: 5.6,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Action ", "Adventure", "Thriller"],
    streams: {
      "Server 1": "https://xprime.today/watch/1584215",
      "Server 2": "https://cinemaos.tech/player/1584215",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1584215/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI": "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5": "https://www.cinezo.net/watch/movie/1584215",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1584215",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1584215",
    },
    overview:
      "A CIA-trained assassin recruits other graduates from her secret childhood program, The Internship, to violently destroy the organization. The CIA fights back with deadly force.",
  },
  {
    id: "1412598",
    title: "Killer Whale (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/cqbXxAw9sUr4tJ5ffEwtnz6IL9o.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/cqbXxAw9sUr4tJ5ffEwtnz6IL9o.jpg",
    release_date: "2026-01-16",
    vote_average: 6.5,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Thriller ", "Horror", "Action"],
    streams: {
      "Server 1": "https://xprime.today/watch/1412598",
      "Server 2": "https://cinemaos.tech/player/1412598",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1412598/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5": "https://www.cinezo.net/watch/movie/1412598",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1412598",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1412598",
    },
    overview:
      "Follows best friends Maddie and Trish as they find themselves trapped in a remote lagoon with the dangerous killer whale named Ceto.",
  },
  {
    id: "1443762",
    title: "The Big Fake (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/qNEL6chkH2s6gwvt0Jt9NfiXG8m.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/qNEL6chkH2s6gwvt0Jt9NfiXG8m.jpg",
    release_date: "2026-01-16",
    vote_average: 4.6,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Thriller ", "Horror", "Action"],
    streams: {
      "Server 1": "https://xprime.today/watch/1443762",
      "Server 2": "https://cinemaos.tech/player/1443762",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1443762/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://short.icu/lfpJnzkNlk?thumbnail=https://media.themoviedb.org/t/p/w780/uHavtqbnMDcwqVK9Y94ZQSWxtCw.jpg",
      "Server 5 - HINDI": "https://byseqekaho.com/e/09jtnsnu0bwp",
      "Server 6": "https://www.cinezo.net/watch/movie/1443762",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1443762",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1443762",
    },
    overview:
      "Toni Chichiarelli arrives in Rome with the dream of becoming a painter, but his talent leads him elsewhere — from art galleries to state secrets. Between art, crime, and power, his signature ends up everywhere — even in the history of Italy.",
  },
  {
    id: "1306368",
    title: "The Rip (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg",
    release_date: "2026-01-16",
    vote_average: 5.6,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Action ", "Adventure", "Comedy"],
    streams: {
      "Server 1": "https://xprime.today/watch/1306368",
      "Server 2": "https://cinemaos.tech/player/1306368",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1306368/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://short.icu/XQE80AhAa?thumbnail=https://media.themoviedb.org/t/p/w500/3F2EXWF1thX0BdrVaKvnm6mAhqh.jpg",
      "Server 5 - HINDI": "https://byseqekaho.com/e/faaqrf79oazr",
      "Server 6": "https://www.cinezo.net/watch/movie/1306368",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1306368",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1306368",
    },
    overview:
      "Trust frays when a team of Miami cops discovers millions in cash inside a run-down stash house, calling everyone — and everything — into question.",
  },
  {
    id: "1034716",
    title: "People We Meet on Vacation (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/xzZaU0MN6L9oc1pl0RUXSB7hWwD.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/xzZaU0MN6L9oc1pl0RUXSB7hWwD.jpg",
    release_date: "2026-01-16",
    vote_average: 7.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Comedy ", "Drama", "Romance"],
    streams: {
      "Server 1": "https://xprime.today/watch/1034716",
      "Server 2": "https://cinemaos.tech/player/1034716",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1034716/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://short.icu/Ca642R4QZ?thumbnail=https://media.themoviedb.org/t/p/w780/qth56RA3rkUlhbDRDKGeMJEssdi.jpg",
      "Server 5 - HINDI": "https://byseqekaho.com/e/8anidmdjsvs4",
      "Server 6": "https://www.cinezo.net/watch/movie/1034716",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/1034716",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-1034716",
    },
    overview:
      "Poppys a free spirit. Alex loves a plan. After years of summer vacations, these polar-opposite pals wonder if they could be a perfect romantic match.",
  },
  {
    id: "1614077",
    title: "Sulutan (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/kd11696ab32WhHUeq5ZkWi9k09Y.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/kd11696ab32WhHUeq5ZkWi9k09Y.jpg",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/KzdrsSXHjFgKS",
      "Server 2": "https://cinemaos.tech/player/1614077",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1614077/tagalog?autoplay=false&back=true&server=0",
      "Server 4": "https://xprime.today/watch/1614077",
      "Server 5": "https://www.cinezo.net/watch/movie/1614077",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1614077",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1614077",   
    },
    overview:
      "Lena and Mara are drawn into a secret affair that defies boundaries and threatens everything they’ve built. When Mara uncovers her groom’s betrayal, she finds solace in Lena, a newfound friend who soon becomes something more. As passion and secrecy collide, their choices endanger careers, fracture relationships, and lead to devastating consequences.",
  },
  {
    id: "1555917",
    title: "The Secret of Maria Makinang (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/aaIyWoyk13wp2SmzVTA1X2VSLaz.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/aaIyWoyk13wp2SmzVTA1X2VSLaz.jpg",
    release_date: "2025-10-22",
    vote_average: 5.1,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/v/BA8XvvvsU7zmm",
      "Server 2": "https://cinemaos.tech/player/1555917",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1555917/tagalog?autoplay=false&back=true&server=0",
      "Server 4": "https://xprime.today/watch/1555917",
      "Server 5": "https://www.cinezo.net/watch/movie/1555917",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1555917",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1555917",
      "Server 8": "http://byseqekaho.com/e/h4zfrz9rchim/",
    },
    overview:
      "It tells the story of Maria, a young woman who appears only during the full moon. She falls for a man named Danilo, and their love is tested through time, because for Danilo, decades have passed, but for Maria, it has only been a few moments.",
  },
  {
    id: "1597538",
    title: "Angkinin Mo Ako (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/2YZ24F49pRkNb45YWI6yckrTYE.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/2YZ24F49pRkNb45YWI6yckrTYE.jpg",
    release_date: "2025-10-23",
    vote_average: 5.1,
    duration: "1h 10m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/vAlUJTcd8elxH",
      "Server 2": "https://cinemaos.tech/player/1597538",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1597538/tagalog?autoplay=false&back=true&server=0",
      "Server 4": "https://xprime.today/watch/1597538",
      "Server 5": "https://www.cinezo.net/watch/movie/1597538",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1597538",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1597538",
      "Server 8": "https://byseqekaho.com/e/7j7jdm0pcl8o",
    },
    overview:
      "Cess Garcia and VMX’s next big thing Dara Lima star in a steamy drama about two sisters and the man who sparks their sensual awakening. A female lawyer hires a young man as tutor for her younger sister but unknown to her, their review sessions are becoming wild",
  },
  {
    id: "1612071",
    title: "Elaichi: Ek Prem Katha (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/uaHRJYzURYiNyZmF0p0bTiQMpOK.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/uaHRJYzURYiNyZmF0p0bTiQMpOK.jpg",
    release_date: "2025-10-23",
    vote_average: 5.1,
    duration: "1h 10m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/M9m0Jl0lnhqy",
      "Server 2": "https://cinemaos.tech/player/1612071",
      "Server 3": "https://zxcstream.xyz/player/movie/1612071/tagalog?autoplay=false&back=true&server=0",
      "Server 4": "https://xprime.today/watch/1612071",
      "Server 5": "https://www.cinezo.net/watch/movie/1612071",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1612071",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1612071",
    },
    overview:
      "In Elaichi, the spice of desire, Sonal’s quiet domestic life explodes into nights of burning lust when a chance encounter with a younger actor turns into a frivolous sexual affair - pushing her deeper into obsession until her family, her body, and her soul are scorched by betrayal.`",
  },
  {
    id: "1213898",
    title: "Border 2 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/hju9XncHxUxUS1GAJ4YqpdFCa5t.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/hju9XncHxUxUS1GAJ4YqpdFCa5t.jpg",
    release_date: "2026-01-23",
    vote_average: 5.1,
    duration: "3h 19m",
    media_type: 'movie',
    genres: ["War", "Action", "Drama"],
    streams: {
      "Server 1": "https://xprime.today/watch/1213898",
      "Server 2": "https://cinemaos.tech/player/1213898",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1213898/hindi?autoplay=false&back=true&server=0",
      "Server 4":
        "https://short.icu/fCjlBHVLI?thumbnail=https://media.themoviedb.org/t/p/w780/nPuXMmWmHJySh0cyOs0MjEQA67w.jpg",
      "Server 5": "https://www.cinezo.net/watch/movie/1213898",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1213898",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1213898",
    },
    overview:
      "During the events of the 1971 Indo-Pak war, a new generation of young Indian warriors were getting ready to defend the nation from an even bigger threat to the Indian motherland.",
  },
  {
    id: "1617536",
    title: "One Two Cha Cha Chaa (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/cWfX0Pog0ZHgTKY3glhIjvkWxgB.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/cWfX0Pog0ZHgTKY3glhIjvkWxgB.jpg",
    release_date: "2026-01-16",
    vote_average: 5.1,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Action ", "Adventure", "Comedy"],
    streams: {
      "Server 1": "https://xprime.today/watch/1617536",
      "Server 2": "https://cinemaos.tech/player/1617536",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1617536/hindi?autoplay=false&back=true&server=0",
      "Server 4":
        "https://short.icu/fbGaNUQgw?thumbnail=https://media.themoviedb.org/t/p/w780/pWq3jl2WBlD17x1CkprNeCe2cGG.jpg",
      "Server 5": "https://www.cinezo.net/watch/movie/1617536",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1617536",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1617536",
    },
    overview:
      "So, Fuel Up, Gear Up, Level Up and Fasten your seat belts for the wildest and wackiest road trip of all time.",
  },
  {
    id: "1282440",
    title: "Happy Patel: Khatarnak Jasoos (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/vsCkxiY2c26C6y4RyTVkpdXIfCW.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/vsCkxiY2c26C6y4RyTVkpdXIfCW.jpg",
    release_date: "2026-01-23",
    vote_average: 5.1,
    duration: "2h 02m",
    media_type: 'movie',
    genres: ["Comedy ", "Action", "Romance"],
    streams: {
      "Server 1": "https://xprime.today/watch/1282440",
      "Server 2": "https://cinemaos.tech/player/1282440",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1282440/hindi?autoplay=false&back=true&server=0",
      "Server 4":
        "https://short.icu/mNw3SxUtx?thumbnail=https://media.themoviedb.org/t/p/w780/gsLYR8uALrt2p33iOpqReNW6XyQ.jpg",
      "Server 5": "https://www.cinezo.net/watch/movie/1282440",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1282440",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1282440",
    },
    overview:
      "Happy Patel, a chronically unsuccessful MI7 operative, is finally assigned a mission in Goa, where he uncovers his Indian roots and must rescue a high-profile scientist from crime lord Mama. Unaware of his Indian heritage and armed with a comically British accent, Happy’s blunders trigger a string of chaotic mishaps that could lead him to expose a criminal network.",
  },
  {
    id: "1599099",
    title: "Azad Bharat (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/zeUHs0NACraRyOPlUyuuBC0Iarz.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/zeUHs0NACraRyOPlUyuuBC0Iarz.jpg",
    release_date: "2026-01-16",
    vote_average: 5.1,
    duration: "2h 20m",
    media_type: 'movie',
    genres: ["Adventure", "Comedy", "Fantasy"],
    streams: {
      "Server 1": "https://xprime.today/watch/1599099",
      "Server 2": "https://cinemaos.tech/player/1599099",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1599099/hindi?autoplay=false&back=true&server=0",
      "Server 4":
        "https://short.icu/D2auhaVWv?thumbnail=https://media.themoviedb.org/t/p/w780/zmJqRGyI9SuZOPrGq0gZSiv2wMR.jpg",
      "Server 5": "https://www.cinezo.net/watch/movie/1599099",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1599099",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1599099",
    },
    overview:
      "Freedom fighter Neera Arya joins India's first women's army founded by Subhas Chandra Bose, highlighting untold stories from India's independence movement and themes of courage and patriotism.",
  },
  {
    id: "1382160",
    title: "45 (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/luDTygZ6uAwaknc2isXZcz8YMvE.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/luDTygZ6uAwaknc2isXZcz8YMvE.jpg",
    release_date: "2025-12-25",
    vote_average: 5.1,
    duration: "2h 24m",
    media_type: 'movie',
    genres: ["Action", "Drama", "Thriller"],
    streams: {
      "Server 1": "https://xprime.today/watch/1382160",
      "Server 2": "https://cinemaos.tech/player/1382160",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1382160/hindi?autoplay=false&back=true&server=0",
      "Server 4 - Kannada": "https://byseqekaho.com/e/eo0jjw0mwg9t",
      "Server 5 - Hindi": "https://byseqekaho.com/e/rfifotoan62n",
    },
    overview:
      "A captivating new project by Suraj Production and the Magical Composer’s Debut film, #45Themovie is set to redefine the cinema-watching experience with its unique narrative and compelling performances.",
  },
  {
    id: "1510339",
    title: "Mark (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/6LTDv6XHiHN0N77QIFg2tidVvhh.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/6LTDv6XHiHN0N77QIFg2tidVvhh.jpg",
    release_date: "2025-12-25",
    vote_average: 5.1,
    duration: "2h 24m",
    media_type: 'movie',
    genres: ["Action", "Drama", "Thriller"],
    streams: {
      "Server 1(Telugu)": "https://xprime.today/watch/1510339",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1510339/hindi?autoplay=false&back=true&server=0",
      "Server 4 (Kannada)": "https://byseqekaho.com/e/se2m96qhd0jh",
      "Server 5 (Hindi)": "https://byseqekaho.com/e/7g36yabhfauq",
    },
    overview:
      "Mark is suspended from his police duties for his unruly yet effective ways of operating, but when 18 children are abducted and found dead, races to catch the criminals. With only 18 hours left, he must confront powerful foes and use unconventional tactics to succeed.",
  },
  {
    id: "1457939",
    title: "Rahu Ketu (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/zjgWWOIsEqYNSa1fGRr82mBo3gv.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/zjgWWOIsEqYNSa1fGRr82mBo3gv.jpg",
    release_date: "2026-01-16",
    vote_average: 5.1,
    duration: "2h 20m",
    media_type: 'movie',
    genres: ["Adventure", "Comedy", "Fantasy"],
    streams: {
      "Server 1": "https://xprime.today/watch/1457939",
      "Server 2": "https://cinemaos.tech/player/1457939",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1457939/hindi?autoplay=false&back=true&server=0",
      "Server 4": "https://byseqekaho.com/e/mecoep0szpat",
      "Server 5": "https://www.cinezo.net/watch/movie/1457939",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1457939",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1599099",
    },
    overview:
      "Rahu Ketu (2026) In the magical world of writer Churu Lal Sharma, his unlucky creations Rahu and Ketu spring to life, causing hilarious chaos instead of fighting corruption. When the mischievous Meenu Taxi steals Churus mystical notebook, the bumbling duo are dragged into absurd adventures that land them in the middle of a drug mafia.",
  },
  {
    id: "1594670",
    title: "Psych Siddhartha (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/9UZrHOeryYvgVaEfUMY3hk1OWg0.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/rHFjswQM8tdAL8RYqRJDsJBCngY.jpg",
    release_date: "2026-01-01",
    vote_average: 8.1,
    duration: "2h 27m",
    media_type: 'movie',
    genres: ["Comedy", "Romance"],
    streams: {
      "Server 1": "https://xprime.today/watch/1594670",
      "Server 2": "https://cinemaos.tech/player/1594670",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1594670/hindi?autoplay=false&back=true&server=0",
      "Server 4": "https://www.cinezo.net/watch/movie/1594670",
      "Server 5": "https://vidsrc-embed.ru/embed/movie/1594670",
      "Server 6": "https://api.cinezo.net/embed/tmdb-movie-1594670",
    },
    overview:
      "Psych Siddhartha (2026) is a layered psychological drama that explores emotional collapse, fragile hope, and the enduring scars of unresolved trauma. At its center is Siddharth, a man battered by repeated personal losses that have left him isolated, financially strained, and emotionally exhausted. Life has reduced him to survival mode, where every attempt to move forward seems to be met with another setback.  ",
  },
  {
    id: "1196946",
    title: "Ikkis (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/8PWu0V10nMqG5SrA13wLRXTD2fH.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/wbhoYwvqgadchfMgUOfOp87QZDS.jpg",
    release_date: "2026-01-01",
    vote_average: 8.1,
    duration: "2h 27m",
    media_type: 'movie',
    genres: ["War", "History", "Biography"],
    streams: {
      "Server 1": "https://xprime.today/watch/1196946",
      "Server 2": "https://cinemaos.tech/player/1196946",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1196946/hindi?autoplay=false&back=true&server=0",
      "Server 4":
        "https://short.icu/_iVjlYQ_U?thumbnail=https://media.themoviedb.org/t/p/w780/wbhoYwvqgadchfMgUOfOp87QZDS.jpg",
      "Server 5": "https://www.cinezo.net/watch/movie/1196946",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1196946",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1196946",
    },
    overview:
      "Second Lieutenant and Indias youngest Param Vir Chakra recipient, Arun Khetarpal, gave his life fighting for his battalion and the country during the 1971 Battle of Basantar. Ikkis also takes a reflective look at the futility of war through the eyes of Khetarpals father, who visits his ancestral home in Sargodha and Alma Mater for reunion, which now happens to be in post-partition Pakistan, 30 years later.",
  },
  {
    id: "872585",
    title: "Oppenheimer",
    poster_path:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaB0.jpg",
    release_date: "2023-07-21",
    vote_average: 8.1,
    duration: "3h 0m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/872585",
      "Server 2": "https://cinemaos.tech/player/872585",
      "Server 3":
        "https://zxcstream.xyz/player/movie/872585/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/872585",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/872585",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-872585",
    },
    genres: ["Drama", "History", "Biography"],
    overview:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: "346698",
    title: "Barbie",
    poster_path:
      "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    release_date: "2023-07-21",
    vote_average: 7.2,
    duration: "1h 54m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/346698",
      "Server 2": "https://cinemaos.tech/player/346698",
      "Server 3":
        "https://zxcstream.xyz/player/movie/346698/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/346698",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/346698",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-346698",
    },
    genres: ["Comedy", "Adventure", "Fantasy"],
    overview:
      "Barbie and Ken are having the time of their lives in the colorful world of Barbie Land.",
  },
  {
    id: "569094",
    title: "Spider-Man: Across the Spider-Verse",
    poster_path:
      "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4hD5ri.jpg",
    release_date: "2023-06-02",
    vote_average: 8.7,
    duration: "2h 20m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/569094",
      "Server 2": "https://cinemaos.tech/player/569094",
      "Server 3":
        "https://zxcstream.xyz/player/movie/569094/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/569094",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/569094",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-569094",
    },
    genres: ["Animation", "Action", "Adventure"],
    overview:
      "Miles Morales returns for an epic adventure across the multiverse.",
  },
  {
    id: "447365",
    title: "Guardians of the Galaxy Vol. 3",
    poster_path:
      "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    release_date: "2023-05-05",
    vote_average: 8.0,
    duration: "2h 30m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/447365",
      "Server 2": "https://cinemaos.tech/player/447365",
      "Server 3":
        "https://zxcstream.xyz/player/movie/447365/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/447365",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/447365",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-447365",
    },
    genres: ["Action", "Adventure", "Comedy"],
    overview: "Peter Quill must rally his team to defend the universe.",
  },
  {
    id: "385687",
    title: "Fast X",
    poster_path:
      "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4hD5ri.jpg",
    release_date: "2023-05-19",
    vote_average: 7.2,
    duration: "2h 21m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/385687",
      "Server 2": "https://cinemaos.tech/player/385687",
      "Server 3":
        "https://zxcstream.xyz/player/movie/385687/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/385687",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/385687",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-385687",
    },
    genres: ["Action", "Crime", "Thriller"],
    overview: "Dom Toretto and his family are targeted by a vengeful son.",
  },
  {
    id: "603692",
    title: "John Wick: Chapter 4",
    poster_path:
      "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    release_date: "2023-03-24",
    vote_average: 7.8,
    duration: "2h 49m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/603692",
      "Server 2": "https://cinemaos.tech/player/603692",
      "Server 3":
        "https://zxcstream.xyz/player/movie/603692/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/603692",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/603692",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-603692",
    },
    genres: ["Action", "Crime", "Thriller"],
    overview: "John Wick uncovers a path to defeating The High Table.",
  },
  {
    id: "667538",
    title: "Transformers: Rise of the Beasts",
    poster_path:
      "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    release_date: "2023-06-09",
    vote_average: 7.3,
    duration: "2h 7m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/667538",
      "Server 2": "https://cinemaos.tech/player/667538",
      "Server 3":
        "https://zxcstream.xyz/player/movie/667538/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/667538",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/667538",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-667538",
    },
    genres: ["Action", "Adventure", "Sci-Fi"],
    overview: "Optimus Prime and the Autobots take on their biggest challenge.",
  },
  {
    id: "298618",
    title: "The Flash",
    poster_path:
      "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    release_date: "2023-06-16",
    vote_average: 6.9,
    duration: "2h 24m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/298618",
      "Server 2": "https://cinemaos.tech/player/298618",
      "Server 3":
        "https://zxcstream.xyz/player/movie/298618/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/298618",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/298618",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-298618",
    },
    genres: ["Action", "Adventure", "Fantasy"],
    overview: "Barry Allen uses his super speed to change the past.",
  },
  {
    id: "575264",
    title: "Mission: Impossible - Dead Reckoning Part One",
    poster_path:
      "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    release_date: "2023-07-14",
    vote_average: 7.7,
    duration: "2h 43m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/575264",
      "Server 2": "https://cinemaos.tech/player/575264",
      "Server 3":
        "https://zxcstream.xyz/player/movie/575264/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/575264",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/575264",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-575264",
    },
    genres: ["Action", "Adventure", "Thriller"],
    overview: "Ethan Hunt and his IMF team must track down a dangerous weapon.",
  },
  {
    id: "447277",
    title: "The Little Mermaid",
    poster_path:
      "https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/7pFwXl9QqgU7wQeQ5tCgxArqMFH.jpg",
    release_date: "2023-05-26",
    vote_average: 6.7,
    duration: "2h 15m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/447277",
      "Server 2": "https://cinemaos.tech/player/447277",
      "Server 3":
        "https://zxcstream.xyz/player/movie/447277/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/447277",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/447277",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-447277",
    },
    genres: ["Adventure", "Family", "Fantasy"],
    overview: "A young mermaid trades her voice for human legs.",
  },
  {
    id: "157336",
    title: "Interstellar",
    poster_path:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    release_date: "2014-11-07",
    vote_average: 8.4,
    duration: "2h 49m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/157336",
      "Server 2": "https://cinemaos.tech/player/157336",
      "Server 3":
        "https://zxcstream.xyz/player/movie/157336/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/157336",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/157336",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-157336",
    },
    genres: ["Adventure", "Drama", "Sci-Fi"],
    overview: "A team of explorers travel through a wormhole in space.",
  },
  {
    id: "27205",
    title: "Inception",
    poster_path:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    release_date: "2010-07-16",
    vote_average: 8.4,
    duration: "2h 28m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/27205",
      "Server 2": "https://cinemaos.tech/player/27205",
      "Server 3":
        "https://zxcstream.xyz/player/movie/27205/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/27205",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/27205",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-27205",
    },
    genres: ["Action", "Sci-Fi", "Thriller"],
    overview: "A thief who steals corporate secrets through dream-sharing.",
  },
  {
    id: "155",
    title: "The Dark Knight",
    poster_path:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg",
    release_date: "2008-07-18",
    vote_average: 8.5,
    duration: "2h 32m",
    media_type: 'movie',
    streams: {
      "Server 1": "https://xprime.today/watch/155",
      "Server 2": "https://cinemaos.tech/player/155",
      "Server 3":
        "https://zxcstream.xyz/player/movie/155/english?autoplay=false&back=true&server=0",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
      "Server 5 ": "https://www.cinezo.net/watch/movie/155",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/155",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-155",
    },
    genres: ["Action", "Crime", "Drama"],
    overview: "Batman faces the Joker in Gotham City.",
  },
  // ADD ALL YOUR OTHER MOVIES HERE
];

// LOCAL TV SHOWS - YOUR ACTUAL DATA
export const UNIQUE_TV_SHOWS: MediaItem[] = [
       {
    id: "mayasabha-s01-2026-multi-lang",
    title: "Mayasabha S01 (2026) Multi-Lang",
    poster_path: "https://media.themoviedb.org/t/p/w500/ddhOEoAqefgzcxlx5hIvkFpF9cw.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/nofMFwwxPMkv76NqrbvoAVwiH4J.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'tv',
    genres: ["War ", "Political", "Drama"],
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/Bc7L0bPOfyok",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/57tgagfdddcd",
    },
    overview: "Mayasabha is a period political drama set in Mid 70s Andhra Pradesh. Krishnama Naidu, an idealistic student leader and a charismatic MS Rami Reddy wade into the world of Andhra politics. As they turn thick friends, they strive to use politics as a means to achieve public good. But caste fault lines erupt, loyalties are tested and their bond is pushed to the brink. Will their friendship sustain the brutal ascent of power where there is place for only one at the summit?",
  },
  {
    id: "unfamiliar-s01-2026-multi-lang",
    title: "Unfamiliar S01 (2026) Multi-Lang",
    poster_path: "https://media.themoviedb.org/t/p/w500/fX0Kvvo6hj9feqS3JyFpVmscz2Y.jpg",
    backdrop_path: "https://media.themoviedb.org/t/p/w780/qDq3dG4ElRohih5fUGNQRLHuBaC.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'tv',
    genres: ["Crime ", "Action", "Drama"],
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/of0qQX1SdWpvo",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/ajssdlwajoj4/",
      "Server 3": "https://api.cinezo.net/embed/tmdb-tv-274776",
    },
    overview: "When the past catches up with two former spies, their biggest challenge isn't car chases, shootouts or fistfights — it's telling each other the truth.",
  },
  {
    id: "249766",
    title: "Daldal S01 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/wvAwkKeIs7bkb6EJAYRzpANhfxM.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/bd0usdz6dgmEE6HVhEhepR5r6MP.jpg",
    release_date: "2025-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1": "https://stmix.io/e/4OtUU7kOtUK87",
      "Server 2": "https://xprime.today/watch/249766/1/1",
      },
    genres: ["Drama", "Thriller", "Mystery"],
    overview:
      "Haunted by the guilt of her past and dealing with the demons of her present, a newly-appointed DCP, Rita Ferreira, must embark on an investigation of a series of murders that puts her on a collision course with a cold-blooded serial killer.",
  },
  {
    id: "91239",
    title: "Bridgerton S04 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/uXTg565ahu9RwonCX1V2Hex1NU6.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/6umsRLI7t0ydFwCl0JNEIO0q2LH.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://zxcstream.xyz/player/tv/91239/s=1/e=1/english?autoplay=false&back=true&server=0",
      "Server 2": "https://xprime.today/watch/91239/1/1",
      "Server 3 - HINDI": "https://stmix.io/e/hriMo9qTXqA9U",
      "Server 4": "https://api.cinezo.net/embed/tmdb-tv-91239/1/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/91239?season=1&episode=1",
    },
    genres: ["Crime", "Drama", "Mystery"],
    overview:
      "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
  },
  {
    id: "198178",
    title: "Wonder Man S01 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/6yy9nQlFt2l6UVWzrfhszFCaZ5C.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/3xdtP9D78ZFFBwIBXf3XWWQiqMB.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://zxcstream.xyz/player/tv/198178/s=1/e=1/english?autoplay=false&back=true&server=0",
      "Server 2": "https://xprime.today/watch/198178/1/1",
      "Server 3 ": "https://api.cinezo.net/embed/tmdb-tv-198178/1/1",
      "Server 4 ": "https://www.cinezo.net/watch/tv/198178?season=1&episode=1",
      "Server 5 - HINDI": "https://stmix.io/e/HJEtGuVS1yBo",   
    },
    genres: ["Comedy", "Drama", "Thriller"],
    overview:
      "Simon and Trevor, two actors at opposite ends of their careers, chase life-changing roles.",
  },
  {
    id: "254071",
    title: "Steal S01 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/6KmlaPhsohh3Ki9XJUq0jiUYbf3.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/6KmlaPhsohh3Ki9XJUq0jiUYbf3.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://zxcstream.xyz/player/tv/254071/s=1/e=1/english?autoplay=false&back=true&server=0",
      "Server 2": "https://xprime.today/watch/254071/1/1",
      "Server 3 - HINDI": "https://stmix.io/e/zd1Y3sArA3bs",
      "Server 4": "https://api.cinezo.net/embed/tmdb-tv-254071/1/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/254071?season=1&episode=1",
      "Server 6 - HINDI":
        "https://short.icu/kB0-DCujU?thumbnail=https://media.themoviedb.org/t/p/w780/cm17eZBEI0jAsuwlIrw9L7K5lY2.jpg",
    },
    genres: ["Crime", "Drama", "Mystery"],
    overview:
      "A typical day at Lochmill Capital is upended when armed thieves burst in and force Zara and her best friend Luke to execute their demands. In the aftermath, conflicted detective Rhys races against time to find out who stole £4 billion pounds of people's pensions and why.",
  },
  {
    id: "311632",
    title: "Space Gen: Chandrayaan S01 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/d6WIr1vycFCCdYewgRf8dpWxQQE.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/d6WIr1vycFCCdYewgRf8dpWxQQE.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1": "https://stmix.io/e/2zYH1fFQgKys",
      "Server 2": "https://xprime.today/watch/311632/1/1",
      "Server 3": "https://byseqekaho.com/e/yxv57pc9qtxs",
      "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-311632/1/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/311632?season=1&episode=1",
    },
    genres: ["Sci-Fi", "Drama", "Mystery"],
    overview:
      "Indian space engineers face mounting pressure to redeem themselves following the Chandrayaan 2 lunar mission's unexpected outcome.",
  },
  {
    id: "308482",
    title: 'Taskaree: The Smuggler"s Web S01 (2026)',
    poster_path:
      "https://image.tmdb.org/t/p/w500/25fKRXvQLBq4nXu9vjOVJcvCiiD.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/25fKRXvQLBq4nXu9vjOVJcvCiiD.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":"https://stmix.io/e/YJ80jBb6C9B5",
      "Server 2": "https://xprime.today/watch/308482/1/1",
      "Server 3": "https://byseqekaho.com/e/wrnmbynqqeyk",
      "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-308482/1/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/308482?season=1&episode=1",
    },
    genres: ["Crime", "Drama", "Mystery"],
    overview:
      "A dedicated customs officer and his team take on a notorious smuggler leading a powerful syndicate, but unexpected obstacles threaten their mission.",
  },
  {
    id: "297594",
    title: "Bindiya Ke Bahubali S02 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/eSJGKRff52Pg2SfOiIdC4IlMMQR.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/eSJGKRff52Pg2SfOiIdC4IlMMQR.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1": "https://stmix.io/e/PaMIpZTnAE7b",
      "Server 2": "https://xprime.today/watch/297594/2/1",
      "Server 3": "https://byseqekaho.com/e/hv81w9p30urb",
      "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-297594/2/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/297594?season=2&episode=1",
    },
    genres: ["Drama", "Crime", "Mystery"],
    overview:
      "With humour, absurdity and family cat and mouse at its center, this is a tale of family gangsters in a fictitious madhouse city, Bindiya. As the current Don is put behind bars, the gangster familys alliances shift, new love, friendships, and betrayals explode until Bindiya becomes a full-blown circus-where love is a deal, power is personal, and every one has a card and blood on their hands.",
  },
  {
    id: "311171",
    title: "Bhootiyapa (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/4NGdzyuffqhb1jMEvTfri3jn5Fj.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/4NGdzyuffqhb1jMEvTfri3jn5Fj.jpg",
    release_date: "2025-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://stmix.io/e/euvvLY1BD8F7",
      "Server 2": "https://xprime.today/watch/311171/1/1",
      "Server 3": "https://byseqekaho.com/e/f1i18ua20w0r",
      "Server 4": "https://short.icu/5ALJ-TlBZ?thumbnail=https://media.themoviedb.org/t/p/w780/eQJUKQMl0SvoHiYwAW2E0VoAwR2.jpg"
    },
    genres: ["Drama", "Crime", "Mystery"],
    overview:
      "Bhootiyapa revolves around a film crew documenting the untold stories of these ghosts, who, despite their spectral existence, have tales to tell about love, loss and laughter. Each ghost, from a different era, adds a layer of mystery and mirth to the story, revealing how life after death can be as vibrant and surprising as mortal life itself.",
  },
  {
    id: "243826",
    title: "Pharma (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/hQWT47GFQyvO1tFqx6IgCOvrrr8.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/hQWT47GFQyvO1tFqx6IgCOvrrr8.jpg",
    release_date: "2025-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
      "https://zxcstream.xyz/player/tv/243826/s=1/e=1/hindi?autoplay=false&back=true&server=0",
      "Server 2 - Only Malayalam": "https://xprime.today/watch/243826/1/1",
      "Server 3 - HINDI": "https://short.icu/PqYLFFeKU?thumbnail=https://media.themoviedb.org/t/p/w780/n1qDEYpr3pq7bJ9GGaF9zVNjdNq.jpg"
    },
    genres: ["Drama", "Crime", "Mystery"],
    overview:
      "A young medical representative struggles against the pharma game, masters it and eventually fights against it.",
  },
  {
    id: "61859",
    title: "The Night Manager S02 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/1MccRnw41qQjREuZkovqP2UX1i3.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/lJoaiZcYMc8RkmPLROcdS2WQxn9.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://zxcstream.xyz/player/tv/61859/s=1/e=1/english?autoplay=false&back=true&server=0",
      "Server 2": "https://xprime.today/watch/61859/2/1",
      "Server 3": "https://vidsrc-embed.ru/embed/tv/61859",
      "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-61859/2/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/61859?season=1&episode=1",
      "Server 6 - HINDI": "https://byseqekaho.com/e/p9vhhvpow8rk",
      "Server 7 - HINDI":
        "https://short.icu/ndrmOyAuX?thumbnail=https://media.themoviedb.org/t/p/w780/lJoaiZcYMc8RkmPLROcdS2WQxn9.jpg",
    },
    genres: ["Spy", "Crime", "Mystery"],
    overview:
      "Former British soldier Jonathan Pine navigates the shadowy recesses of Whitehall and Washington where an unholy alliance operates between the intelligence community and the secret arms trade. To infiltrate the inner circle of lethal arms dealer Richard Onslow Roper, Pine must himself become a criminal.",
  },
  {
    id: "259731",
    title: "His & Hers S01 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/cDSXLVQLkCSBIpBx3UW04TsfZ5c.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/n4hJLZmBG8kZccNn7bNgBDsVQ6a.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://zxcstream.xyz/player/tv/259731/s=1/e=1/english?autoplay=false&back=true&server=0",
      "Server 2": "https://xprime.today/watch/259731/1/1",
      "Server 3": "https://vidsrc-embed.ru/embed/tv/259731",
      "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-259731/1/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/259731?season=1&episode=1",
      "Server 6 - HINDI":
        "https://short.icu/tyiiqPGLF?thumbnail=https://media.themoviedb.org/t/p/w780/n4hJLZmBG8kZccNn7bNgBDsVQ6a.jpg",
    },
    genres: ["Drama", "Crime", "Mystery"],
    overview:
      "Two estranged spouses — one a detective, the other a news reporter — vie to solve a murder in which each believes the other is a prime suspect.",
  },
  {
    id: "100088",
    title: "The Last of Us",
    poster_path:
      "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    release_date: "2023-01-15",
    vote_average: 8.8,
    duration: "50m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://zxcstream.xyz/player/tv/100088/s=1/e=1/english?autoplay=false&back=true&server=0",
      "Server 2": "https://vidsrc-embed.ru/embed/tv/100088",
      "Server 3": "https://xprime.today/watch/100088/2/1",
      "Server 4": "https://api.cinezo.net/embed/tmdb-tv-100088/2/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/100088?season=2&episode=1",
      "Server 6 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
    },
    genres: ["Drama", "Action", "Sci-Fi"],
    overview: "After a global pandemic destroys civilization.",
  },
  {
    id: "94997",
    title: "House of the Dragon",
    poster_path:
      "https://image.tmdb.org/t/p/w500/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    release_date: "2022-08-21",
    vote_average: 8.5,
    duration: "55m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://www.zxcstream.xyz/player/tv/94997/2/1?autoplay=false&back=true&server=0",
      "Server 2": "https://vidsrc-embed.ru/embed/tv/94997",
      "Server 3": "https://xprime.today/watch/94997/2/1",
      "Server 4": "https://api.cinezo.net/embed/tmdb-tv-94997/2/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/94997?season=2&episode=1",
      "Server 6 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
    },
    genres: ["Drama", "Action", "Adventure"],
    overview:
      "The story of House Targaryen set 200 years before Game of Thrones.",
  },
  {
    id: "119051",
    title: "Wednesday",
    poster_path:
      "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/9G3mCR9qQ8U7Oi2f7nPmNpXMGFA.jpg",
    release_date: "2022-11-23",
    vote_average: 8.5,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://www.zxcstream.xyz/player/tv/119051/2/1?autoplay=false&back=true&server=0",
      "Server 2": "https://vidsrc-embed.ru/embed/tv/119051",
      "Server 3": "https://xprime.today/watch/119051/2/1",
      "Server 4": "https://api.cinezo.net/embed/tmdb-tv-119051/2/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/119051?season=2&episode=1",
      "Server 6 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
    },
    genres: ["Comedy", "Crime", "Fantasy"],
    overview: "Wednesday Addams attempts to master her psychic ability.",
  },
  {
    id: "1399",
    title: "Game of Thrones",
    poster_path:
      "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg",
    release_date: "2011-04-17",
    vote_average: 8.5,
    duration: "1h",
    media_type: 'tv',
    streams: {
      "Server 1": "https://vidsrc.cc/v2/embed/tv/1399",
      "Server 2":
        "https://zxcstream.xyz/player/tv/1399/s=1/e=1/english?autoplay=false&back=true&server=0",
      "Server 3":
        "https://apicinetaro.falex43350.workers.dev/tv/1399/1/1/english",
      "Server 4 - HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",  
    },
    genres: ["Drama", "Fantasy", "Adventure"],
    overview: "Nine noble families fight for control over Westeros.",
  },
  {
    id: "66732",
    title: "Stranger Things",
    poster_path:
      "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    release_date: "2016-07-15",
    vote_average: 8.7,
    duration: "50m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://www.zxcstream.xyz/player/tv/66732/5/1?autoplay=false&back=true&server=0",
      "Server 2": "https://vidsrc-embed.ru/embed/tv/66732",
      "Server 3": "https://xprime.today/watch/66732/5/1",
      "Server 4": "https://api.cinezo.net/embed/tmdb-tv-66732/5/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/66732?season=5&episode=1",
      "Server 6- HINDI":
        "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
    },
    genres: ["Drama", "Fantasy", "Horror"],
    overview: "When a young boy vanishes, a small town uncovers a mystery.",
  },
  {
    id: "71912",
    title: "The Witcher",
    poster_path:
      "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/7vBpX7e4Dp3dG2c5QZ6w4qyY6qy.jpg",
    release_date: "2019-12-20",
    vote_average: 8.2,
    duration: "1h",
    media_type: 'tv',
    genres: ["Action", "Adventure", "Drama"],
    streams: {
      "Server 1":
        "https://www.zxcstream.xyz/player/tv/71912/4/1?autoplay=false&back=true&server=0",
      "Server 2": "https://vidsrc-embed.ru/embed/tv/71912",
      "Server 3": "https://xprime.today/watch/71912/4/1",
      "Server 4": "https://api.cinezo.net/embed/tmdb-tv-71912/4/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/71912?season=4&episode=1",
      "Server 6 - HINDI": "https://www.youtube.com/embed/Y_X19YfQWZA?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=Y_X19YfQWZA",
    },
    overview: "Geralt of Rivia, a mutated monster-hunter for hire.",
  },
  // ADD ALL YOUR OTHER TV SHOWS HERE
];

// SPORTS
export const UNIQUE_SPORTS: MediaItem[] = [
  {
    id: "comming-soon",
    title: "Coming Soon: New Sports Content",
    poster_path: "https://www.shutterstock.com/image-vector/speedinspired-coming-soon-typography-dynamic-260nw-2654096517.jpg",
    backdrop_path: "https://www.shutterstock.com/shutterstock/videos/3646580559/thumb/1.jpg?ip=x480",
    release_date: getFixedMatchTime(6, 30), 
    vote_average: 9.2,
    duration: "Live",
    media_type: 'sports',
    genres: ["Sports", "Live Sports"],
    streams: {
      "Server 1": "",
      "Server 2": "",
    },
    overview: "Coming Soon: Server are getting ready to stream live sports content.",
  }
];

// LIVE TV - YOUR ACTUAL DATA
export const UNIQUE_TV_LIVE: MediaItem[] = [
        {
    id: "alzazeera-news-channel-hd",
    title: "Al Jazeera News Live HD",
    poster_path: "https://www.vhv.rs/dpng/d/492-4928236_al-jazeera-news-logo-hd-png-download.png",
    backdrop_path: "https://www.vhv.rs/dpng/d/492-4928236_al-jazeera-news-logo-hd-png-download.png",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Al Jazeera", "Live", "News"],
    streams: {
      "Server 1": "https://d1cy85syyhvqz5.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/aljazeeraLive/AJE/index.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "cnn-international-channel-hd",
    title: "CNN International Live HD",
    poster_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/960px-CNN_International_logo.svg.png",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/960px-CNN_International_logo.svg.png",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["CNN", "Live", "News"],
    streams: {
      "Server 1": "https://amg01918-cnnus-amg01918c1-vizio-us-1813.playouts.now.amagi.tv/playlist/amg01918-cnnus-cnnheadlines-vizious/playlist.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "abc-channel-hd",
    title: "ABC Live HD",
    poster_path: "https://i.pinimg.com/736x/16/3b/41/163b41fe4cc84461bfa46445bb7e8e04.jpg",
    backdrop_path: "https://i.pinimg.com/736x/16/3b/41/163b41fe4cc84461bfa46445bb7e8e04.jpg",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["ABC", "Live", "News"],
    streams: {
      "Server 1": "https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "euronews-channel-hd",
    title: "Euronews Live HD",
    poster_path: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Euronews_Logo_2025.svg",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Euronews_Logo_2025.svg",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Euronews", "Live", "News"],
    streams: {
      "Server 1": "https://amg00882-amg00882c2-lg-au-4259.playouts.now.amagi.tv/playlist.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "bbcnews-channel-hd",
    title: "BBC News Live HD",
    poster_path: "https://i.pinimg.com/736x/59/98/4d/59984d90139cb8e9ac6bbed0e849efc8.jpg",
    backdrop_path: "https://i.pinimg.com/736x/59/98/4d/59984d90139cb8e9ac6bbed0e849efc8.jpg",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["BBC News", "Live", "News"],
    streams: {
      "Server 1": "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "reuters-news-channel-hd",
    title: "Reuters News Live HD",
    poster_path: "https://i.pinimg.com/564x/25/03/11/250311255660f18f2d603fa7e415a82f.jpg",
    backdrop_path: "https://i.pinimg.com/564x/25/03/11/250311255660f18f2d603fa7e415a82f.jpg",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Reuters News", "Live", "News"],
    streams: {
      "Server 1": "https://amg00453-reuters-amg00453c1-vizio-us-2107.playouts.now.amagi.tv/playlist/amg00453-reuters-reuters-vizious/playlist.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "usa-today-news-channel-hd",
    title: "USA Today News Live HD",
    poster_path: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
    backdrop_path: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["USA Today News", "Live", "News"],
    streams: {
      "Server 1": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00731-gannettcoinc-usatodaynews-vizious/playlist.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "fox-weather-channel-hd",
    title: "Fox Weather Live HD",
    poster_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fox_Weather_logo.svg/500px-Fox_Weather_logo.svg.png",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fox_Weather_logo.svg/500px-Fox_Weather_logo.svg.png",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Fox Weather", "Live", "News"],
    streams: {
      "Server 1": "https://247wlive.foxweather.com/stream/index.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "go2travel-live-channel",
    title: "Go2Travel Live Channel",
    poster_path: "https://play-lh.googleusercontent.com/fAQewlj4O6OWRCReMV-ysG2Ip3i7Yz3TBxhFEeipV0BqK9nQk_siCt36ksBIZGmglGUt",
    backdrop_path: "https://play-lh.googleusercontent.com/fAQewlj4O6OWRCReMV-ysG2Ip3i7Yz3TBxhFEeipV0BqK9nQk_siCt36ksBIZGmglGUt",
    release_date: "2026-01-20",
    vote_average: 8.3,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Go2Travel", "Live", "Entertainment"],
    streams: {
      "Server 1": "https://go2thls.wns.live/hls/stream.m3u8"
     
    },
    overview: "Live comedy shows, stand-up specials, and funny content 24/7.",
  },
   {
    id: "crime-investigation-live-channel",
    title: "Crime + Investigation",
    poster_path: "/images/tv/investigationdiscovery.jpg",
    backdrop_path: "/images/tv/investigationdiscovery.jpg",
    release_date: "2026-01-20",
    vote_average: 8.3,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Drama", "Live", "Entertainment"],
    streams: {
      "Server 1": "https://fl31.moveonjoy.com/Crime_and_Investigation_Network/tracks-v1a1/mono.ts.m3u8",
      "Server 2": "https://amg00376-magellan-amg00376c12-samsung-au-1725.playouts.now.amagi.tv/ts-us-w2-n1/playlist/amg00376-magellantv-truecrimenowaunzin-samsungau/cb433e4f7b7b6fdccb993e6cd3f715a0d1076a8b5d32d03765f95cb52abc4013dce0ad92f24ef1684c8778873f5e32161e77b57dce7d01d9de71b8366d2211709188fa7ddd800278f298537f4de6286508ba1110d3224d218fa95223ad0998554953e400655372aab80af6294bd5f352c92074deb2dc653d635a419f435df5c30ff5aea3045add6fa6af1f4e873b47e5864498861bbb9d82539b469b77f0429d8fa2d886129f85c46aff53b330080b7224ccb246f9b1353771070b43fe441b047360e8aa87fb4a7cb5534248fdecb9c70f9d3deff9e805fd55c16db6409624822b8b04a2f347a3acc1bf08216be1ac5f10a4651e04ca7b1713c4fec8212c26674439bc7b594acc7fd1212a77b3f5c21785c41aac7b42efbb441222c99d499ad2e7cdbff0c57d952bcec8e38b7d6c7a235552c80df9da5ad2278b2cf38e0b770804048c8a45c883ee5b32494692cf0b874455ea8dcbcbf4260fe74c571ae469d25e454bc9376773ac6dda922e63842345d46169b5087bd00cacf81ff4a1daf70f74e08d900cac399dc060b8c10ba769334e11f3a37c2d22624990bf36436003802f82f4c5ee7005059687eef6d25c3502795a123b82ece37f8c9d824e3913d258326f641a75c45136087eace4ab482d8153dd9acf43dd2308337c976c284a/25/1920x1080_5500000/index.m3u8",
      "Server 3": "https://a-cdn.klowdtv.com/live3/law_720p/playlist.m3u8",
      "Server 4": "https://langleyproductions-cops-2-eu.rakuten.wurl.tv/playlist.m3u8",
      "Server 5": "https://daddyhd.com/stream/stream-332.php",
      "Server 6": "https://daddyhd.com/stream/stream-665.php",
    },
    overview: "Live comedy shows, stand-up specials, and funny content 24/7.",
  },
  {
    id: "hallmark-movies",
    title: "Hallmark Movies Mysteries",
    poster_path: "https://i.ebayimg.com/images/g/ePMAAOSwTgxnQ2mv/s-l1200.jpg",
    backdrop_path: "https://i.ebayimg.com/images/g/ePMAAOSwTgxnQ2mv/s-l1200.jpg",
    release_date: "2024-01-20",
    vote_average: 8.3,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Movies", "Live", "Entertainment"],
    streams: {
      "Server 1": "https://fl61.moveonjoy.com/HALLMARK_MOVIES_MYSTERIES/tracks-v1a1/mono.ts.m3u8"     
    },
    overview: "Live comedy shows, stand-up specials, and funny content 24/7.",
  },
  {
    id: "history-usa-channel",
    title: "History USA Channel",
    poster_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/250px-History_%282021%29.svg.png",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/250px-History_%282021%29.svg.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["History USA", "Educational", "Live"],
    streams: {
      "Server 1": "https://fl7.moveonjoy.com/history_channel/tracks-v1a1/mono.ts.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "bbc-earth-channel",
    title: "BBC Earth Channel",
    poster_path: "https://yt3.googleusercontent.com/EsHioubXC-qfNdbHyThN7rDTF7rfTzhl5A5u4hHuUAzslx9jgwtxl_2TN4RFqt3hA1jEwAGVgg=s900-c-k-c0x00ffffff-no-rj",
    backdrop_path: "https://yt3.googleusercontent.com/EsHioubXC-qfNdbHyThN7rDTF7rfTzhl5A5u4hHuUAzslx9jgwtxl_2TN4RFqt3hA1jEwAGVgg=s900-c-k-c0x00ffffff-no-rj",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["BBC Earth", "Educational", "Live"],
    streams: {
      "Server 1": "https://amg00793-amg00793c6-firetv-us-4067.playouts.now.amagi.tv/playlist.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "awe-channel",
    title: "AWE Channel",
    poster_path: "https://image.roku.com/developer_channels/prod/72cd4b2a026d9d68fadaae3b12227b2425bf28400a9fd8e679088d3b49c460d4.png",
    backdrop_path: "https://image.roku.com/developer_channels/prod/72cd4b2a026d9d68fadaae3b12227b2425bf28400a9fd8e679088d3b49c460d4.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["BBC Earth", "Educational", "Live"],
    streams: {
      "Server 1": "https://a-cdn.klowdtv.com/live1/awe_720p/chunks.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "law-and-crime-channel",
    title: "Law and Crime Channel",
    poster_path: "https://yt3.googleusercontent .com/CRP3YudPa55QypbDnIvuh3erLZTsn2HK8ESR-2fJFFiLJVf7US2CKQELCKK_UowmHA3wCjAdxg=s900-c-k-c0x00ffffff-no-rj",
    backdrop_path: "https://yt3.googleusercontent.com/CRP3YudPa55QypbDnIvuh3erLZTsn2HK8ESR-2fJFFiLJVf7US2CKQELCKK_UowmHA3wCjAdxg=s900-c-k-c0x00ffffff-no-rj",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Law and Crime", "Educational", "Live"],
    streams: {
      "Server 1": "https://a-cdn.klowdtv.com/live3/law_720p/playlist.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
{
    id: "crime-investigation-channel",
    title: "Crime + Investigation Channel",
    poster_path: "https://www.crimeandinvestigation.co.uk/themes/custom/crimeandinvestigation/images/social-cards/ci-homepage.jpg",
    backdrop_path: "https://www.crimeandinvestigation.co.uk/themes/custom/crimeandinvestigation/images/social-cards/ci-homepage.jpg",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Crime + Investigation", "Educational", "Live"],
    streams: {
      "Server 1": "https://fl31.moveonjoy.com/Crime_and_Investigation_Network/tracks-v1a1/mono.ts.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
{
    id: "true-crime-now-channel",
    title: "True Crime Now Channel",
    poster_path: "https://cdn.realscreen.com/wp/wp-content/uploads/2021/10/true-crime-now-logo-1.jpg",
    backdrop_path: "https://cdn.realscreen.com/wp/wp-content/uploads/2021/10/true-crime-now-logo-1.jpg",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["True Crime Now", "Educational", "Live"],
    streams: {
      "Server 1": "https://amg00376-magellan-amg00376c12-samsung-au-1725.playouts.now.amagi.tv/ts-us-w2-n1/playlist/amg00376-magellantv-truecrimenowaunzin-samsungau/cb433e4f7b7b6fdccb993e6cd3f715a0d1076a8b5d32d03765f95cb52abc4013dce0ad92f24ef1684c8778873f5e32161e77b57dce7d01d9de71b8366d2211709188fa7ddd800278f298537f4de6286508ba1110d3224d218fa95223ad0998554953e400655372aab80af6294bd5f352c92074deb2dc653d635a419f435df5c30ff5aea3045add6fa6af1f4e873b47e5864498861bbb9d82539b469b77f0429d8fa2d886129f85c46aff53b330080b7224ccb246f9b1353771070b43fe441b047360e8aa87fb4a7cb5534248fdecb9c70f9d3deff9e805fd55c16db6409624822b8b04a2f347a3acc1bf08216be1ac5f10a4651e04ca7b1713c4fec8212c26674439bc7b594acc7fd1212a77b3f5c21785c41aac7b42efbb441222c99d499ad2e7cdbff0c57d952bcec8e38b7d6c7a235552c80df9da5ad2278b2cf38e0b770804048c8a45c883ee5b32494692cf0b874455ea8dcbcbf4260fe74c571ae469d25e454bc9376773ac6dda922e63842345d46169b5087bd00cacf81ff4a1daf70f74e08d900cac399dc060b8c10ba769334e11f3a37c2d22624990bf36436003802f82f4c5ee7005059687eef6d25c3502795a123b82ece37f8c9d824e3913d258326f641a75c45136087eace4ab482d8153dd9acf43dd2308337c976c284a/25/1920x1080_5500000/index.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "investigation-discovery-channel",
    title: "Investigation Discovery Channel",
    poster_path: "https://variety.com/wp-content/uploads/2014/07/investigation-discovery-logo.jpg?w=1000&h=563&crop=1",
    backdrop_path: "https://variety.com/wp-content/uploads/2014/07/investigation-discovery-logo.jpg?w=1000&h=563&crop=1",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Investigation Discovery", "Educational", "Live"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-324.php",
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "amc-channel",
    title: "AMC Channel",
    poster_path: "https://play-lh.googleusercontent.com/g7K2KCxcNoOV4bgerqP5yDmRpBImqMGcV99Zvd9vYOQ-v6zDj9f_gyU0EaE5OM2yBrU=w600-h300-pc0xffffff-pd",
    backdrop_path: "https://play-lh.googleusercontent.com/g7K2KCxcNoOV4bgerqP5yDmRpBImqMGcV99Zvd9vYOQ-v6zDj9f_gyU0EaE5OM2yBrU=w600-h300-pc0xffffff-pd",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Investigation Discovery", "Educational", "Live"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-303.php",
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },  
{
    id: "adult-channel-01",
    title: "Adult Channel 01",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-501.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-02",
    title: "Adult Channel 02",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-502.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-03",
    title: "Adult Channel 03",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-503.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-04",
    title: "Adult Channel 04",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-504.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-05",
    title: "Adult Channel 05",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-505.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-06",
    title: "Adult Channel 06",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-506.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-07",
    title: "Adult Channel 07",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-507.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-08",
    title: "Adult Channel 08",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-508.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-09",
    title: "Adult Channel 09",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-509.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-10",
    title: "Adult Channel 10",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-510.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-11",
    title: "Adult Channel 11",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-511.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-12",
    title: "Adult Channel 12",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-512.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-13",
    title: "Adult Channel 13",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-513.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-14",
    title: "Adult Channel 14",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-514.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-15",
    title: "Adult Channel 15",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-515.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-16",
    title: "Adult Channel 16",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-516.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-17",
    title: "Adult Channel 17",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-517.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-18",
    title: "Adult Channel 18",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-518.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-19",
    title: "Adult Channel 19",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-519.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-20",
    title: "Adult Channel 20",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-520.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  // ADD ALL YOUR OTHER LIVE TV HERE
];

// GET ALL LOCAL ITEMS
const getAllLocalItems = (): MediaItem[] => {
  return [
    ...UNIQUE_MOVIES,
    ...UNIQUE_TV_SHOWS,
    ...UNIQUE_SPORTS,
    ...UNIQUE_TV_LIVE
  ];
};

// SIMPLE SEARCH FUNCTION THAT FUCKING WORKS
export const searchContent = async (query: string): Promise<MediaItem[]> => {
  console.log("🔍 SEARCH CALLED FOR:", query);
  
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const allResults: MediaItem[] = [];
  
  try {
    // 1. SEARCH LOCAL DATA
    const allLocalItems = getAllLocalItems();
    
    const localResults = allLocalItems.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm);
      const genreMatch = item.genres?.some(g => g.toLowerCase().includes(searchTerm));
      const overviewMatch = item.overview?.toLowerCase().includes(searchTerm);
      return titleMatch || genreMatch || overviewMatch;
    });
    
    console.log("📊 Local results:", localResults.length);
    allResults.push(...localResults);
    
    // 2. SEARCH TMDB API FOR MOVIES
    const searchQuery = encodeURIComponent(query);
    
    // Search movies
    try {
      const movieUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false&language=en-US`;
      const movieResponse = await fetch(movieUrl);
      
      if (movieResponse.ok) {
        const movieData = await movieResponse.json();
        
        if (movieData.results && movieData.results.length > 0) {
          const movieResults = movieData.results
            .filter((item: any) => item.poster_path)
            .map((item: any) => {
              // Check if already exists
              const exists = allResults.some(r => 
                r.id === `tmdb-movie-${item.id}` || 
                r.title.toLowerCase() === item.title.toLowerCase()
              );
              
              if (exists) return null;
              
              return {
                id: `tmdb-movie-${item.id}`,
                title: item.title || 'Untitled Movie',
                poster_path: `${IMAGE_BASE}${item.poster_path}`,
                backdrop_path: item.backdrop_path ? `${BACKDROP_BASE}${item.backdrop_path}` : '',
                release_date: item.release_date || '2024-01-01',
                vote_average: item.vote_average || 0,
                duration: '2h',
                media_type: 'movie' as const,
                genres: ['General'],
                streams: getSearchMovieStreams(item.id.toString()),
                overview: item.overview || 'No description available.'
              };
            })
            .filter((item: any) => item !== null);
          
          console.log("✅ Movies from API:", movieResults.length);
          allResults.push(...movieResults);
        }
      }
    } catch (error) {
      console.error("Movie API error:", error);
    }
    
    // Search TV shows
    try {
      const tvUrl = `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false&language=en-US`;
      const tvResponse = await fetch(tvUrl);
      
      if (tvResponse.ok) {
        const tvData = await tvResponse.json();
        
        if (tvData.results && tvData.results.length > 0) {
          const tvResults = tvData.results
            .filter((item: any) => item.poster_path)
            .map((item: any) => {
              // Check if already exists
              const exists = allResults.some(r => 
                r.id === `tmdb-tv-${item.id}` || 
                r.title.toLowerCase() === item.name.toLowerCase()
              );
              
              if (exists) return null;
              
              return {
                id: `tmdb-tv-${item.id}`,
                title: item.name || 'Untitled TV Show',
                poster_path: `${IMAGE_BASE}${item.poster_path}`,
                backdrop_path: item.backdrop_path ? `${BACKDROP_BASE}${item.backdrop_path}` : '',
                release_date: item.first_air_date || '2024-01-01',
                vote_average: item.vote_average || 0,
                duration: 'Series',
                media_type: 'tv' as const,
                genres: ['General'],
                streams: getSearchTVStreams(item.id.toString(), "1", "1"),
                overview: item.overview || 'No description available.'
              };
            })
            .filter((item: any) => item !== null);
          
          console.log("✅ TV shows from API:", tvResults.length);
          allResults.push(...tvResults);
        }
      }
    } catch (error) {
      console.error("TV API error:", error);
    }
    
    // 3. RETURN RESULTS
    console.log("🎯 Total results:", allResults.length);
    
    // Remove duplicates
    const uniqueResults = allResults.filter((item, index, self) =>
      index === self.findIndex((t) => t.id === item.id)
    );
    
    return uniqueResults;
    
  } catch (error) {
    console.error("Search failed:", error);
    
    // Fallback to local search
    const allLocalItems = getAllLocalItems();
    const localResults = allLocalItems.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm);
      const genreMatch = item.genres?.some(g => g.toLowerCase().includes(searchTerm));
      const overviewMatch = item.overview?.toLowerCase().includes(searchTerm);
      return titleMatch || genreMatch || overviewMatch;
    });
    
    return localResults;
  }
};

// Simple fetch functions
export const fetchMovies = async (): Promise<MediaItem[]> => {
  return UNIQUE_MOVIES;
};

export const fetchTVShows = async (): Promise<MediaItem[]> => {
  return UNIQUE_TV_SHOWS;
};

export const fetchSports = async (): Promise<MediaItem[]> => {
  return UNIQUE_SPORTS;
};

export const fetchTVLive = async (): Promise<MediaItem[]> => {
  return UNIQUE_TV_LIVE;
};

export const fetchById = async (id: string, type: string): Promise<MediaItem | null> => {
  // Check local data first
  let source: MediaItem[] = [];
  
  if (type === 'movie') source = UNIQUE_MOVIES;
  else if (type === 'tv') source = UNIQUE_TV_SHOWS;
  else if (type === 'sports') source = UNIQUE_SPORTS;
  else if (type === 'tv_live') source = UNIQUE_TV_LIVE;
  
  const localItem = source.find(i => i.id === id);
  if (localItem) return localItem;
  
  // Check all local items
  const allLocalItems = getAllLocalItems();
  const itemInAll = allLocalItems.find(i => i.id === id);
  if (itemInAll) return itemInAll;
  
  // If it's a TMDB item
  if (id.startsWith('tmdb-')) {
    const parts = id.split('-');
    const tmdbId = parts[2];
    const mediaTypeStr = parts[1];
    
    // FIX: Ensure media_type is one of the allowed values
    let mediaType: 'movie' | 'tv' | 'sports' | 'tv_live';
    if (mediaTypeStr === 'tv') {
      mediaType = 'tv';
    } else if (mediaTypeStr === 'sports') {
      mediaType = 'sports';
    } else if (mediaTypeStr === 'tv_live') {
      mediaType = 'tv_live';
    } else {
      mediaType = 'movie';
    }
    
    try {
      // Only fetch from TMDB for movie and tv types
      if (mediaType === 'movie' || mediaType === 'tv') {
        const url = `${BASE_URL}/${mediaType}/${tmdbId}?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(url);
        
        if (response.ok) {
          const data = await response.json();
          
          // Get streams
          let streams = {};
          if (mediaType === 'movie') {
            streams = getSearchMovieStreams(tmdbId);
          } else if (mediaType === 'tv') {
            streams = getSearchTVStreams(tmdbId, "1", "1");
          }
          
          return {
            id: id,
            title: data.title || data.name || 'Untitled',
            poster_path: data.poster_path ? `${IMAGE_BASE}${data.poster_path}` : '',
            backdrop_path: data.backdrop_path ? `${BACKDROP_BASE}${data.backdrop_path}` : '',
            release_date: data.release_date || data.first_air_date || '2024-01-01',
            vote_average: data.vote_average || 0,
            duration: mediaType === 'movie' ? '2h' : 'Series',
            media_type: mediaType,
            genres: data.genres?.map((g: any) => g.name) || ['General'],
            streams: streams,
            overview: data.overview || 'No description available.'
          };
        }
      }
    } catch (error) {
      console.error("Error fetching TMDB details:", error);
    }
  }
  
  return null;
};

// GET ALL LOCAL CONTENT
export const getAllContent = (): MediaItem[] => {
  return getAllLocalItems();
};

// GET ITEM BY ID AND TYPE
export const getContentByIdAndType = (id: string, type: string): MediaItem | null => {
  const allItems = getAllLocalItems();
  return allItems.find(item => item.id === id) || null;
};