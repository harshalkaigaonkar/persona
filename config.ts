import { UFrameType, UTileType } from "@/app/types";

export default {
  name: 'Harshal Kaigaonkar',
  profile_img: '/Harshal.jpg',
  about:
    'Web fanatic 🧑‍💻 . Music aficionado 🎼 . Audiophile 🎧 . Unapologetic introvert 😮 . Incurable coffee fan ☕️ . General beer enthusiast 🍺 .',
  frames: [
    {
      frameType: UFrameType.FULLFRAME,
      data: [
        {
          frameType: UFrameType.HALFWIDTHFRAMEWITHROW,
          data: [{
            frameType: UFrameType.FULLFRAME,
            data: {
              tileType: UTileType.MAINTILE,
              data: {
                header: 'Fplay',
                cta: {
                  url: {
                    link: 'https://dub.sh/fplay',
                    external: true,
                  },
                  content: 'Github',
                },
                desc: 'listen music in a group realtime. ✨✨ \n just create a group, queue up some songs and jam.',
                tags: [
                  {
                    tag_content: 'Music 🎵',
                  },
                  {
                    tag_content: 'Realtime',
                  },
                  {
                    tag_content: 'React ⚛️',
                  },
                  {
                    tag_content: 'Next.js',
                  },
                ],
                links: [
                  {
                    url: {
                      link: 'https://dub.sh/fplay',
                      external: true,
                      icon: 'github',
                    },
                    content: 'Github',
                  },
                  {
                    url: {
                      link: 'https://www.figma.com/file/OAxCz90B9EPk3dyXltd00w/Fplay?type=design&t=HjVLzVAZa3RssMtv-6',
                      external: true,
                      icon: 'figma',
                    },
                    content: 'Figma',
                  },
                ],
                media_link: '/projects/fplay-cover.png',
              }}
          },],
        },
        {
          frameType: UFrameType.HALFWIDTHFRAMEWITHCOL,
          data: [
            {
              frameType: UFrameType.HALFHEIGHTFRAMEWITHROW,
              data: {
                tileType: UTileType.SOCIALTILE,
                data: {
                    header: 'Twitter',
                    cta: {
                      url: {
                        link: 'https://dub.sh/donotopen',
                        external: true,
                      },
                      content: 'Say hi 👋',
                    },
                    desc: '21 | here for reading twts | frontend @wearezuddl',
                    links: [
                      {
                        url: {
                          link: 'https://dub.sh/donotopen',
                          external: true,
                          icon: 'twitter',
                        },
                        content: '@Hkking31',
                      },
                    ],
                },
              }
            },
            {
            frameType: UFrameType.HALFHEIGHTFRAMEWITHROW,
            data: {
              tileType: UTileType.SOCIALTILE,
              data: {
                header: 'Github',
                cta: {
                  url: {
                    link: 'https://dub.sh/hk-gh',
                    external: true,
                  },
                  content: 'Check my code 🚀',
                },
                desc: 'krte kuch.',
                links: [
                  {
                    url: {
                      link: 'https://dub.sh/hk-gh',
                      external: true,
                      icon: 'github',
                    },
                    content: '@harshalkaigaonkar',
                  },
                ],
              }}
            },
          ] 
        }
      ]
    },
    {
      frameType: UFrameType.FULLFRAME,
      data: [
        {
          frameType: UFrameType.HALFWIDTHFRAMEWITHROW,
          data: [
            {
            frameType: UFrameType.HALFHEIGHTFRAMEWITHROW,
            data: {
              tileType: UTileType.SOCIALTILE,
              data: {
                header: 'Email',
                cta: {
                  url: {
                    link: 'https://dub.sh/hk-mail',
                    external: true,
                  },
                  content: 'Shoot a mail',
                },
                desc: "Drop me an email if you like what you see! I'm currently open to meet some of the best ui developers.",
                links: [
                  {
                    url: {
                      link: 'https://dub.sh/hk-mail',
                      external: true,
                      icon: 'mail',
                    },
                    content: 'harshalkaigaonkar31@gmail.com',
                  },
                ],
            }}
          },
        ],
        },
        {
          frameType: UFrameType.HALFWIDTHFRAMEWITHROW,
          data: [
            {
            frameType: UFrameType.FULLFRAME,
            data: {
              tileType: UTileType.LISTTILE,
              data: {
                header: 'Experience',
                desc: 'mostly internships ✌️',
                cta: {
                  url: {
                    link: "https://www.linkedin.com/in/harshal-kaigaonkar/#experience",
                    external: true
                  },
                  content: "View on LI"
                },
                list_array: [
                  {
                    icon_media_link: '/companies/zuddl-logo.png',
                    header: "Frontend Engineering Intern",
                    company: {
                      name: "Zuddl",
                      companyWebsiteUrl: "https://zuddl.com",
                    },
                    duration :{
                      from: "Jul 2023",
                      to: "Now"
                    }
                  },
                  {
                    icon_media_link: '/companies/gx-logo.svg',
                    header: "Frontend Engineering Intern",
                    company: {
                      name: "GrowthX",
                      companyWebsiteUrl: "https://growthx.club",
                    },
                    duration :{
                      from: "Mar 2023",
                      to: "Jun 2023"
                    }
                  },
                  {
                    icon_media_link: '/companies/quinn-logo.webp',
                    header: "Software Engineering Intern",
                    company: {
                      name: "Quinn",
                      companyWebsiteUrl: "https://quinn.live",
                    },
                    duration :{
                      from: "Jul 2022",
                      to: "Sep 2022"
                    }
                  },
                  {
                    icon_media_link: '/companies/symbl-logo.webp',
                    header: "Frontend Engineering Intern",
                    company: {
                      name: "Symbl.ai",
                      companyWebsiteUrl: "https://symbl.ai",
                    },
                    duration :{
                      from: "Feb 2022",
                      to: "Apr 2022"
                    }
                  }
                  // {
                  //   icon_media_link: '/projects/fplay-cover.png',
                  //   header: "Full Stack Intern",
                  //   company: {
                  //     name: "Prybox Technologies",
                  //     companyWebsiteUrl: "https://pryboxapp.com",
                  //   },
                  //   duration :{
                  //     from: "Dec 2021",
                  //     to: "Aug 2021"
                  //   }
                  // },
                ]
              }}
          },
        ],
        },
      ]
    },
  ],
};
