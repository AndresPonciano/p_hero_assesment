import React, { Component } from 'react';
import { connect } from 'react-redux';

const dummydata = {
    "kind": "youtube#searchListResponse",
    "etag": "aLNiHXrH-RN6cAfrekQIZkx_ynM",
    "nextPageToken": "CBkQAA",
    "regionCode": "US",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 25
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "Xwcuqrm6z0v5ntJhVNl5aJToCgo",
        "id": {
          "kind": "youtube#video",
          "videoId": "fBYvHHT8fdE"
        },
        "snippet": {
          "publishedAt": "2020-03-27T07:24:28Z",
          "channelId": "UCAmhbG40GSFEJEa-6Yj8zAQ",
          "title": "♥Cute Puppies Doing Funny Things 2020♥ #3 Cutest Dogs",
          "description": "Cute Puppies Doing Funny Things 2020♥ #3 Cutest Dogs Thanks For Watching ! Please Like Share & Comment If You Like This Video ! Subscribe CUTE ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/fBYvHHT8fdE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/fBYvHHT8fdE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/fBYvHHT8fdE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Cute Babies and Pets TV",
          "liveBroadcastContent": "none",
          "publishTime": "2020-03-27T07:24:28Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "2swci1AX0EzZh148ipHm6aM9oMk",
        "id": {
          "kind": "youtube#video",
          "videoId": "wtH-hdOF1uA"
        },
        "snippet": {
          "publishedAt": "2020-02-08T15:32:50Z",
          "channelId": "UC8hC-augAnujJeprhjI0YkA",
          "title": "Baby Dogs - Cute and Funny Dog Videos Compilation #20 | Aww Animals",
          "description": "Watching funny baby dogs is the hardest try not to laugh challenge. Baby dogs are amazing creature because they are the cutest and most funny. This is the ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/wtH-hdOF1uA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/wtH-hdOF1uA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/wtH-hdOF1uA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Aww Animals",
          "liveBroadcastContent": "none",
          "publishTime": "2020-02-08T15:32:50Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "mkCtfVOVSXkT9smhoOhZz1twfQY",
        "id": {
          "kind": "youtube#video",
          "videoId": "BkD2nN5275c"
        },
        "snippet": {
          "publishedAt": "2020-02-19T20:53:36Z",
          "channelId": "UC09IvZwjpunzrdHH1EHok-w",
          "title": "🤣 Funniest 🐶 Dogs and 😻 Cats - Awesome Funny Pet Animals Videos 😇",
          "description": "Enjoy new funniest and very cute compilation of the week about try not laugh funny animals' life video. But some cats in this video will actually surprise you!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/BkD2nN5275c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/BkD2nN5275c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/BkD2nN5275c/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Funny Animals' Life",
          "liveBroadcastContent": "none",
          "publishTime": "2020-02-19T20:53:36Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "WjhIHIBmmj75eEFgM3Tsa-sEmuY",
        "id": {
          "kind": "youtube#video",
          "videoId": "lyelxGIydeQ"
        },
        "snippet": {
          "publishedAt": "2020-01-13T14:07:51Z",
          "channelId": "UCvznoyf6e8T1NRHLkfxwG9Q",
          "title": "Cute Dogs and Babies are Best Friends - Dogs Babysitting Babies Video",
          "description": "Video: Cute Dogs and Babies are Best Friends - Dogs Babysitting Babies Video ☞ Link video: https://youtu.be/lyelxGIydeQ Thanks for watching! Wait to see ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lyelxGIydeQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lyelxGIydeQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lyelxGIydeQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Baby Awesome",
          "liveBroadcastContent": "none",
          "publishTime": "2020-01-13T14:07:51Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "X-rv_p3xZ8Ywgrfz13TaUuJwO2k",
        "id": {
          "kind": "youtube#video",
          "videoId": "AcL0MeVZIxM"
        },
        "snippet": {
          "publishedAt": "2018-03-21T19:00:01Z",
          "channelId": "UCYK1TyKyMxyDQU8c6zF8ltg",
          "title": "Try Not To Laugh At This Ultimate Funny Dog Video Compilation | Funny Pet Videos",
          "description": "Brand new weekly theme compilation where we challenge you to Try Not To Laugh at these Funny Dogs. Funny Pet Videos brings you the best cute animal ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AcL0MeVZIxM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AcL0MeVZIxM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AcL0MeVZIxM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Funny Pet Videos",
          "liveBroadcastContent": "none",
          "publishTime": "2018-03-21T19:00:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "62jtO9nvSOccESwhqQjjPLbMI60",
        "id": {
          "kind": "youtube#video",
          "videoId": "9rzhF3L3K64"
        },
        "snippet": {
          "publishedAt": "2020-06-17T16:00:08Z",
          "channelId": "UCkrKW1_u0O8qSc3xsLoRHew",
          "title": "Hide N Seek From K9 Police Dogs!",
          "description": "Played Hide and Seek Against K9 Police Dogs! Text Us! (1-951-524-7847) @Capron Funk @Corey Funk Check Them Out: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9rzhF3L3K64/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9rzhF3L3K64/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9rzhF3L3K64/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Funk Bros",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-17T16:00:08Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "6xsY7pOFn8xliPedrHMVm-nm0dA",
        "id": {
          "kind": "youtube#video",
          "videoId": "NwlwJjelgzs"
        },
        "snippet": {
          "publishedAt": "2018-03-30T11:30:00Z",
          "channelId": "UCKy3MG7_If9KlVuvw3rPMfw",
          "title": "Get ready for LAUGHING SUPER HARD - Best FUNNY DOG videos",
          "description": "Dogs and puppies are super funny and hilarious, they make us laugh all the time! The hardest TRY NOT TO LAUGH challenge in the World! Just look how all ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/NwlwJjelgzs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/NwlwJjelgzs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/NwlwJjelgzs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Tiger Productions",
          "liveBroadcastContent": "none",
          "publishTime": "2018-03-30T11:30:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "AkySKbJ1QaBA_4g4mGSWe82v8SE",
        "id": {
          "kind": "youtube#video",
          "videoId": "nFrb-C6I6Ps"
        },
        "snippet": {
          "publishedAt": "2020-01-30T07:00:06Z",
          "channelId": "UCRpNVpZoW56rOsV-6wFK3lg",
          "title": "10 Most Powerful Dogs in the World",
          "description": "There Are Several Types Of Dogs That Are Very Powerful, Possess Incredible Strength And Have Very Strong Bite Force. These Powerful Dogs Are Highly ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nFrb-C6I6Ps/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nFrb-C6I6Ps/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nFrb-C6I6Ps/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "4 Ever Green",
          "liveBroadcastContent": "none",
          "publishTime": "2020-01-30T07:00:06Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "z8-WDxGBnFMuX5qfDVwZ0Y2ddKo",
        "id": {
          "kind": "youtube#video",
          "videoId": "Xoq10XJDDdQ"
        },
        "snippet": {
          "publishedAt": "2020-02-27T16:16:01Z",
          "channelId": "UC8hC-augAnujJeprhjI0YkA",
          "title": "Baby Dogs - Cute and Funny Dog Videos Compilation #24 | Aww Animals",
          "description": "Watching funny baby dogs is the hardest try not to laugh challenge. Baby dogs are amazing pets because they are the cutest and most funny. This is the cutest ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Xoq10XJDDdQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Xoq10XJDDdQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Xoq10XJDDdQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Aww Animals",
          "liveBroadcastContent": "none",
          "publishTime": "2020-02-27T16:16:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "zLE2dmMysDh96AWK47lPgpKx1rM",
        "id": {
          "kind": "youtube#video",
          "videoId": "kHHMWNjp2KQ"
        },
        "snippet": {
          "publishedAt": "2019-10-15T17:15:45Z",
          "channelId": "UCfGLwxYDLZOj_eJOcMboY_A",
          "title": "These 10 Dogs Are Most Dangerous",
          "description": "Check out more awesome videos : https://www.youtube.com/user/CopyMafia?sub_confirmation=1 Facebook : ViralBe.Official Instagram : ViralBe.Official There ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/kHHMWNjp2KQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/kHHMWNjp2KQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/kHHMWNjp2KQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "ViralBe",
          "liveBroadcastContent": "none",
          "publishTime": "2019-10-15T17:15:45Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "34CirZesNsjRkg7L01LBTKOdOWw",
        "id": {
          "kind": "youtube#video",
          "videoId": "-N71NvaNRbs"
        },
        "snippet": {
          "publishedAt": "2020-04-12T12:23:16Z",
          "channelId": "UCM-EDqedWJWywnc0neeaW9A",
          "title": "Video - Dogs Trying Hard to Met | German Shepherd training",
          "description": "COVID-19 lockdowns hit this extreme poor family hard!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-N71NvaNRbs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-N71NvaNRbs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-N71NvaNRbs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "BEST SHOOTS Official",
          "liveBroadcastContent": "none",
          "publishTime": "2020-04-12T12:23:16Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "_Ybn-wTs4yeZUg_AwqRr57OP16w",
        "id": {
          "kind": "youtube#video",
          "videoId": "X2lIovmNsUY"
        },
        "snippet": {
          "publishedAt": "2019-11-04T19:12:51Z",
          "channelId": "UC8hC-augAnujJeprhjI0YkA",
          "title": "Baby Dogs - Cute and Funny Dog Videos Compilation #3 | Aww Animals",
          "description": "Baby dogs are amazing creature because they are the cutest and most funny. You will fail to try not to laugh when you are watching funny baby dogs. This is the ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/X2lIovmNsUY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/X2lIovmNsUY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/X2lIovmNsUY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Aww Animals",
          "liveBroadcastContent": "none",
          "publishTime": "2019-11-04T19:12:51Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "gsXVH4ZjLH1IcuSsuVbMcEAwjJ8",
        "id": {
          "kind": "youtube#video",
          "videoId": "pv2IS5oWCxk"
        },
        "snippet": {
          "publishedAt": "2020-06-17T20:00:17Z",
          "channelId": "UCINb0wqPz-A0dV9nARjJlOQ",
          "title": "Dog Living In The Shelter Since 2015 Keeps Getting Returned | The Dodo Adopt Me!",
          "description": "Inga, a boxer mix, has lived in the shelter since 2015. She has been adopted and returned many times, but is still looking for that perfect adopter. She needs a ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pv2IS5oWCxk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pv2IS5oWCxk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pv2IS5oWCxk/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "The Dodo",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-17T20:00:17Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "reZmtG9Paccte1E4VPeMRPGnMmA",
        "id": {
          "kind": "youtube#video",
          "videoId": "rZVpo5HbDf8"
        },
        "snippet": {
          "publishedAt": "2018-09-20T17:04:55Z",
          "channelId": "UCz35G-z-ZB5rTma2yka7G8A",
          "title": "Ep 8: WIENER DOG PRISON BREAK - Funny Dogs Escaping Jail!",
          "description": "In this video, Crusoe and Oakley the miniature #dachshunds get locked up in jail for a misdewiener crime and then have to find a way to bust themselves out in ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rZVpo5HbDf8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rZVpo5HbDf8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rZVpo5HbDf8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Crusoe the Dachshund",
          "liveBroadcastContent": "none",
          "publishTime": "2018-09-20T17:04:55Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "VxX1c7r3ph4uNrnADT0gOh30FAU",
        "id": {
          "kind": "youtube#video",
          "videoId": "iOxiw6Smvgk"
        },
        "snippet": {
          "publishedAt": "2017-09-22T12:49:36Z",
          "channelId": "UCq5hgY37WAryZCwmehDyCaQ",
          "title": "Dogs Protecting Their Owners - Dogs that are better than guns! [ Dog Training ]",
          "description": "Bravecto #anipetshop.com ✈✈✈Shop Pet Medicines : https://anipetshop.com ©BUY NOW : Bravecto, Nexgard, Heartgard, Revolution,..... ▻Worldwide FREE ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/iOxiw6Smvgk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/iOxiw6Smvgk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/iOxiw6Smvgk/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Funny Videos",
          "liveBroadcastContent": "none",
          "publishTime": "2017-09-22T12:49:36Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "vUNy0cxkmGjnRI1hPv9FqsWgOjY",
        "id": {
          "kind": "youtube#video",
          "videoId": "TKoCWh2yneM"
        },
        "snippet": {
          "publishedAt": "2020-05-27T13:51:29Z",
          "channelId": "UCGisihUQxb3_gE7Qzffyp4g",
          "title": "Making 100 RocketPop Pupsicles for Homeless Dogs! 🚀🐶",
          "description": "Wait until you see their reaction when they realize the doggy popsicles are for them! And check out our sponsor of this video Smartypaws. They make ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/TKoCWh2yneM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/TKoCWh2yneM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/TKoCWh2yneM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Rocky Kanaka",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-27T13:51:29Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Hr2nOeF4MCARrcFe0GKFbpVjZIs",
        "id": {
          "kind": "youtube#channel",
          "channelId": "UCVzHhZ37zqc8AWLjYfmzf7g"
        },
        "snippet": {
          "publishedAt": "2014-09-08T20:42:32Z",
          "channelId": "UCVzHhZ37zqc8AWLjYfmzf7g",
          "title": "Dog$",
          "description": "Mithrain Twitch Channel : http://twitch.tv/mithrain Benim Twitchim : https://www.twitch.tv/yigitdogs.",
          "thumbnails": {
            "default": {
              "url": "https://yt3.ggpht.com/-EpaZySiNMwY/AAAAAAAAAAI/AAAAAAAAAAA/j64b1GY5Jqs/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
            },
            "medium": {
              "url": "https://yt3.ggpht.com/-EpaZySiNMwY/AAAAAAAAAAI/AAAAAAAAAAA/j64b1GY5Jqs/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
            },
            "high": {
              "url": "https://yt3.ggpht.com/-EpaZySiNMwY/AAAAAAAAAAI/AAAAAAAAAAA/j64b1GY5Jqs/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
            }
          },
          "channelTitle": "Dog$",
          "liveBroadcastContent": "upcoming",
          "publishTime": "2014-09-08T20:42:32Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "YEk_aihyYuI1WP8JoDOSZT06xI4",
        "id": {
          "kind": "youtube#video",
          "videoId": "v2iF1q4Ba7Y"
        },
        "snippet": {
          "publishedAt": "2020-06-17T07:28:21Z",
          "channelId": "UC5BMQOsAB8hKUyHu9KI6yig",
          "title": "Thunder doesn’t allow them to go to work [Dogs are incredible/ENG/2020.06.17]",
          "description": "Click the \"Caption\" button to activate subtitle! ▷ Dogs are incredible Ep.30 | 개는 훌륭하다 - Showtime : Wed 06:15 (Seoul, UTC+9) ▷Full Episodes Music Bank ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/v2iF1q4Ba7Y/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/v2iF1q4Ba7Y/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/v2iF1q4Ba7Y/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "KBS World",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-17T07:28:21Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "2aToqLp-X53EMthZdTeoAgh2biw",
        "id": {
          "kind": "youtube#video",
          "videoId": "ebsS9tEi5zc"
        },
        "snippet": {
          "publishedAt": "2019-08-20T10:45:01Z",
          "channelId": "UCsmxCQDcT9Tb6WchlS5Of0Q",
          "title": "Rescue Abandoned Puppies Building Mud House Dog And Fish Pond For Red Fish",
          "description": "Rescue Abandoned Puppies Building Mud House Dog And Fish Pond For Red Fish. In my place have a lots of puppies abandoned every where, so i decide to ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ebsS9tEi5zc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ebsS9tEi5zc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ebsS9tEi5zc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Wilderness TV",
          "liveBroadcastContent": "none",
          "publishTime": "2019-08-20T10:45:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "qMRduqPy0RU6S2P6205X6xwg7k4",
        "id": {
          "kind": "youtube#video",
          "videoId": "5lbEiYEZ6yw"
        },
        "snippet": {
          "publishedAt": "2020-06-13T17:15:00Z",
          "channelId": "UCKCKzDbSsAYMGp2BccEaRUw",
          "title": "Dogs Spiral Out of Control and Attack Each Other on Walks | It&#39;s Me or The Dog",
          "description": "These two dogs get wild on walks, attacking all dogs they lay eyes on and even attacking each other! Can Victoria help teach their owner how to handle these ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/5lbEiYEZ6yw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/5lbEiYEZ6yw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/5lbEiYEZ6yw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "It's Me or the Dog",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-13T17:15:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "dA6uCWH4BW2IczLjfXFT2RaLb9k",
        "id": {
          "kind": "youtube#video",
          "videoId": "MfqZwbNXOJ0"
        },
        "snippet": {
          "publishedAt": "2019-04-20T16:00:02Z",
          "channelId": "UCKCKzDbSsAYMGp2BccEaRUw",
          "title": "The Demon Husky: Diesel | Full Episode | It&#39;s Me or The Dog",
          "description": "Diesel the husky is a dog with a dark side, he's a perfect dog when his 'dad' Jordan is around, but when left with Becky he will hump, jump and bite anyone he ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MfqZwbNXOJ0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MfqZwbNXOJ0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MfqZwbNXOJ0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "It's Me or the Dog",
          "liveBroadcastContent": "none",
          "publishTime": "2019-04-20T16:00:02Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "9DkFHbdt5DqdiHZIfpVLyx4eweo",
        "id": {
          "kind": "youtube#video",
          "videoId": "LA6MJqYvjSg"
        },
        "snippet": {
          "publishedAt": "2019-02-12T15:11:30Z",
          "channelId": "UC4kyYTypYb3mQ6ZL25kly6g",
          "title": "Anguished mother dog wails for wounded baby. Sweetest reunion!",
          "description": "Please make a donation to help rescue street animals in India: http://www.animalaidunlimited.org/donate.html This happy-ending story began as one of the ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LA6MJqYvjSg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LA6MJqYvjSg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LA6MJqYvjSg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Animal Aid Unlimited, India",
          "liveBroadcastContent": "none",
          "publishTime": "2019-02-12T15:11:30Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "B8e8fR5jGfOUdY_XQwo2idBwvEw",
        "id": {
          "kind": "youtube#video",
          "videoId": "3dcli9i_pvA"
        },
        "snippet": {
          "publishedAt": "2019-04-26T21:40:19Z",
          "channelId": "UC09IvZwjpunzrdHH1EHok-w",
          "title": "🤣 Funniest 🐶 Dogs and 😻 Cats - Awesome Funny Pet Animals Life Videos 😇",
          "description": "Enjoy new funniest and very cute compilation of the week about try not laugh funny animals' life video. Cats are surely the most popular pets and awesome ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3dcli9i_pvA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3dcli9i_pvA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3dcli9i_pvA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Funny Animals' Life",
          "liveBroadcastContent": "none",
          "publishTime": "2019-04-26T21:40:19Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "oQFgWlR8cm2eBKzIh_B1HWmcv70",
        "id": {
          "kind": "youtube#video",
          "videoId": "W2B3xWM2RAA"
        },
        "snippet": {
          "publishedAt": "2020-06-16T16:15:00Z",
          "channelId": "UCMc9phNA46hHb-sES-K0xAQ",
          "title": "DOGS BEING STUPID FOR 13 MINUTES STRAIGHT",
          "description": "RobertIDK has already watched Kids Being Stupid For 18 Minutes Straight. He then watched Parents Being Stupid For 17 Minutes Straight. BUT NOW IT IS TIME ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/W2B3xWM2RAA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/W2B3xWM2RAA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/W2B3xWM2RAA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "RobertIDK",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-16T16:15:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "4KWMGw9pyZkrAqmMa9YZcSllTBo",
        "id": {
          "kind": "youtube#video",
          "videoId": "j9T1ZgCI4ec"
        },
        "snippet": {
          "publishedAt": "2020-06-16T12:00:15Z",
          "channelId": "UCZjpAMIiwyNv5GGzrOI2NRQ",
          "title": "Funniest and Cutest Pug Dog Videos Compilation 2020 - Cutest Puppy #1",
          "description": "Watch more of the cutest dogs! https://youtube.com/playlist?list=PLEHXbiPZyhGiwC0KIwOWCQ7fZXCEKK0se Subscribe to Puppy Lovers if you love puppies ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/j9T1ZgCI4ec/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/j9T1ZgCI4ec/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/j9T1ZgCI4ec/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Puppy Lovers",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-16T12:00:15Z"
        }
      }
    ]
  }

const dummydata2 = {"items": []};

class SearchList extends Component {
    constructor(props) {
        super(props);

        this.show = this.show.bind(this);
    }

    show () {
        console.log(dummydata2.items);
        // console.log(this.props.videos[0]);
        // console.log(typeof(this.props.videos[0]));
    }

    renderVideo(videoData) {

        console.log(videoData);

        return(
            <div>
                <h1>---</h1>
                <h1>{videoData.snippet.title}</h1>
                <h1>---</h1>
            </div>
        )
    }

    render() {

        return(
            <>
            <h1>hmm idk yet</h1>
            <button onClick={this.show}>hello</button>

            <div>
                {/* {dummydata2.items.map(this.renderVideo)} */}
            {this.props.videos.items.map(this.renderVideo)}

            <iframe src='https://www.youtube.com/embed/fBYvHHT8fdE'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            />
            </div>
            </>
        )
    }
}

function mapStateToProps( {videos} ) {
    return { videos };
}

export default connect(mapStateToProps)(SearchList);