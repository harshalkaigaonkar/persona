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
    
  ],
};
