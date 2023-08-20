const { UTileType } = require('@/app/types');

const data = {
  name: 'Harshal Kaigaonkar',
  profile_img: '/Harshal.jpg',
  about:
    'Web fanatic 🧑‍💻. Music aficionado 🎼. Audiophile 🎧. Unapologetic introvert 😮. Incurable coffee fan ☕️. General beer enthusiast 🍺.',
  sections: [
    {
      type: UTileType.MAINTILE,
      data: {
        header: 'Fplay',
        cta: {
          url: {
            link: 'https://dub.sh/fplay',
            external: true,
          },
          content: 'Github',
        },
        desc: 'listen music in a group realtime. ✨✨ \n Users can create a group, queue up the songs they want to play in a room and jam. \n fun part! this is happening all in realtime sync.',
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
      },
    },
    {
      type: UTileType.SOCIALTILE,
      data: {
        header: 'Twitter',
        cta: {
          url: {
            link: 'https://dub.sh/donotopen',
            external: true,
          },
          content: 'Say hi',
        },
        desc: '21 | frontend @wearezuddl',
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
    },
  ],
};
module.exports = data;
