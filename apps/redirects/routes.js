const redirects = [
  // --- Profiles --- //

  // Github
  {
    routeRegex: /^\/(github|codes?|repos?|repositories)(?:\/.*)?$/i,
    redirectUrl: 'https://github.com/levilindsey',
  },
  // Facebook
  {
    routeRegex: /^\/(facebook)(?:\/.*)?$/i,
    redirectUrl: 'https://facebook.com/levislindsey',
  },
  // Twitter
  {
    routeRegex: /^\/(twitter)(?:\/.*)?$/i,
    redirectUrl: 'https://twitter.com/levisl',
  },
  // LinkedIn
  {
    routeRegex: /^\/(linkedin)(?:\/.*)?$/i,
    redirectUrl: 'https://linkedin.com/in/levi-lindsey',
  },
  // Youtube
  {
    routeRegex: /^\/(youtube)(?:\/.*)?$/i,
    redirectUrl: 'https://www.youtube.com/playlist?list=PLIuJN99AFOPSF3p4f0siFo22XiMXqijQU',
  },
  // SoundCloud
  {
    routeRegex: /^\/(sound-?cloud)(?:\/.*)?$/i,
    redirectUrl: 'https://soundcloud.com/levilindsey/sets/chiptunes',
  },
  // itch.io
  {
    routeRegex: /^\/(itch(\.?io)?)(?:\/.*)?$/i,
    redirectUrl: 'https://levilindsey.itch.io/',
  },
  // Ludum Dare
  {
    routeRegex: /^\/(ludum-?dare|ld(jam)?|(game-?)?jam)(?:\/.*)?$/i,
    redirectUrl: 'https://ldjam.com/users/ukulelefury/games',
  },
  // Devlog
  {
    routeRegex: /^\/(blog|devlog|log)(?:\/.*)?$/i,
    redirectUrl: 'https://devlog.levi.dev',
  },
  // Resume
  {
    routeRegex: /^\/(resume|cv|experience)(?:\/.*)?$/i,
    redirectUrl: 'https://docs.google.com/document/d/1RKgxLzazYLZiIJq_sJpmKtBDtCvaEdlgs_rUBd-ZZyk/preview#',
  },

  // --- Special content --- //

  // Game-dev tutorials
  {
    routeRegex: /^\/((game(-?dev)?)-?(tutorials?|guides?|deep-?dives?))(?:\/.*)?$/i,
    redirectUrl: 'https://devlog.levi.dev/2022/04/game-dev-guides-and-deep-dives.html',
  },
  // AI movement tutorial
  {
    routeRegex: /^\/((platform(er)?|(platform(er)?-?)?ai)-?(movement|series|pathfinding|tutorial)?)(?:\/.*)?$/i,
    redirectUrl: 'https://devlog.levi.dev/2021/09/building-platformer-ai-from-low-level.html',
  },
  // Gameplay showreel
  {
    routeRegex: /^\/((game(play)?)?-?show-?reel)(?:\/.*)?$/i,
    redirectUrl: 'https://levi.dev#showreel',
    // redirectUrl: 'https://www.youtube.com/watch?v=VKTejiouFJk',
  },
  // Octobit pictures
  {
    routeRegex: /^\/(octobit(-?(20)?21)?|art|pixel-?art|pixels?)(?:\/.*)?$/i,
    redirectUrl: 'https://levi.dev/#octobit-2021',
  },
  // Octobit Twitter posts
  {
    routeRegex: /^\/(octobit(-?2021)?-?twitter)(?:\/.*)?$/i,
    redirectUrl: 'https://twitter.com/search?q=(%23Octobit%20OR%20%23Octobit2021)%20(from%3Alevisl)&src=typed_query',
  },
  // Octobit timelapses
  {
    routeRegex: /^\/(octobit(-?2021)?-?time-?lapses?)(?:\/.*)?$/i,
    redirectUrl: 'https://www.youtube.com/playlist?list=PLIuJN99AFOPR6PIdddURuBwMQeWC4VeH5',
  },
  // Octobit composite video
  {
    routeRegex: /^\/(octobit(-?2021)?-?video)(?:\/.*)?$/i,
    redirectUrl: 'https://www.youtube.com/watch?v=eZ1hoM2edDM',
  },
  // Music
  {
    routeRegex: /^\/(music|songs?|sounds?|audio|chip-?tunes?|compositions?|performances?|acappella)(?:\/.*)?$/i,
    redirectUrl: 'https://levi.dev/#music',
  },

  // --- Frameworks and games --- //

  // Surfacer
  {
    routeRegex: /^\/(surfacer?)(?:\/.*)?$/i,
    redirectUrl: 'https://github.com/SnoringCatGames/surfacer',
  },
  // Scaffolder
  {
    routeRegex: /^\/(scaff?old(er)?)(?:\/.*)?$/i,
    redirectUrl: 'https://github.com/SnoringCatGames/scaffolder',
  },
  // SurfaceTiler
  {
    routeRegex: /^\/((surface-?)?tile[rs]?)(?:\/.*)?$/i,
    redirectUrl: 'https://github.com/SnoringCatGames/surface_tiler',
  },
  // Squirrel Away
  {
    routeRegex: /^\/(squirrel|squirrels|squirrel-away|squirrel_away|exampler)(?:\/.*)?$/i,
    redirectUrl: 'https://snoringcatgames.github.io/exampler',
  },
  // Dandelions
  {
    routeRegex: /^\/(dandelions|dandelion|baby)(?:\/.*)?$/i,
    redirectUrl: 'https://levilindsey.github.io/dandelions',
  },
  // Momma Duck
  {
    routeRegex: /^\/(momma-duck|momma_duck|mama-duck|mamma-duck|mama|momma|mamma|duck|duckling|ducks|ducklings)(?:\/.*)?$/i,
    redirectUrl: 'https://snoringcatgames.github.io/momma_duck',
    // redirectUrl: 'https://levilindsey.itch.io/momma-duck',
  },
  // TODO: Move this out into a separate redirect configuration file, in the same style as Inner-Tube Climber
  //       (so I can redirect depending on the User Agent).
  // Meteor Power
  {
    routeRegex: /^\/(meteor(-?power)?)(?:\/.*)?$/i,
    redirectUrl: 'https://snoringcatgames.github.io/meteor_power/',
  },

  // --- Game jams --- //

  // GMTK21
  {
    routeRegex: /^\/(gmtk-2021|gmtk-21|gmtk2021|gmtk21)(?:\/.*)?$/i,
    redirectUrl: 'https://levilindsey.github.io/gmtk-2021',
  },
  // GGJ21
  {
    routeRegex: /^\/(ooboloo|(ggj|global-?game-?jam)-?(2021|21))(?:\/.*)?$/i,
    redirectUrl: 'https://levilindsey.itch.io/ooboloo',
  },
  // GGJ22
  {
    routeRegex: /^\/((tale-?of-?)?two-?sides|(ggj|global-?game-?jam)-?(2022|22)?)(?:\/.*)?$/i,
    redirectUrl: 'https://voithos.itch.io/tale-of-two-sides',
    // redirectUrl: 'https://voithos.github.io/global-game-jam-2022',
  },
  // Ludum Dare 47
  {
    routeRegex: /^\/(ld47|ludum-?dare-?47|stuck-in-an-inner-tube|tube-climber)(?:\/.*)?$/i,
    redirectUrl: 'https://levilindsey.itch.io/stuck-in-an-inner-tube',
  },
  // Ludum Dare 48 | The Before Times
  {
    routeRegex: /^\/(ld48|ludum-?dare-?48|before-times|the-before-times|beforetimes|thebeforetimes)(?:\/.*)?$/i,
    redirectUrl: 'https://levilindsey.itch.io/the-before-times',
  },
  // Ludum Dare 49 | The Eye of Glower-On
  {
    routeRegex: /^\/(ld49|ludum-?dare-?49|(the-?)?eye-?of-?glower-?on|mount-?oh-?no|eye)(?:\/.*)?$/i,
    redirectUrl: 'https://snoringcatgames.github.io/eye_of_glower_on/',
    // redirectUrl: 'https://levilindsey.itch.io/the-eye-of-glower-on',
  },
  // Ludum Dare 50
  {
    routeRegex: /^\/(ld50|ludum-?dare-?50)(?:\/.*)?$/i,
    redirectUrl: 'https://levilindsey.github.io/ludum-dare-50/',
  },
];

// Attaches the route handlers for this app.
exports.attachRoutes = (server, appPath, config) => {
  for (const redirect of redirects) {
    server.get(redirect.routeRegex, handleRequest.bind(null, redirect.redirectUrl));
  }

  // ---  --- //

  // Handles a request for this app.
  function handleRequest(redirectUrl, req, res, next) {
    // Check whether this request was directed to the portfolio.
    if (config.portfolioDomains.indexOf(req.hostname) < 0) {
      next();
      return;
    }

    const dirs = req.path.split('/');

    if (dirs[2] === '' || dirs.length === 2) {
      res.redirect(redirectUrl);
    } else {
      next();
    }
  }
};
