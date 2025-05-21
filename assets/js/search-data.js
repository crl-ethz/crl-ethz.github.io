// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-available-projects",
          title: "available projects",
          description: "We list available projects related to our robotic research topics in our lab. If you are looking for a project more related to computer graphics, please check https://crl.ethz.ch/StudentProject/index.html.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-robots",
          title: "robots",
          description: "A growing collection of the robots in our lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-a1",
          title: 'A1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/a1/";
            },},{id: "projects-adam",
          title: 'Adam',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adam/";
            },},{id: "projects-aliengo",
          title: 'Aliengo',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aliengo/";
            },},{id: "projects-b2",
          title: 'B2',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/b2/";
            },},{id: "projects-g1",
          title: 'G1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/g1/";
            },},{id: "projects-go1",
          title: 'Go1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/go1/";
            },},{id: "projects-go2",
          title: 'Go2',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/go2/";
            },},{id: "projects-laikago",
          title: 'Laikago',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/laikago/";
            },},{id: "projects-spot",
          title: 'Spot',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spot/";
            },},{id: "projects-tron1",
          title: 'TRON1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tron1/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/103164288", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/crl_ethz", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@crl_ethz", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
