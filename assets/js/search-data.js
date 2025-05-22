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
            window.location.href = "/projects/";
          },
        },{id: "nav-robots",
          title: "robots",
          description: "A growing collection of the robots in our lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/robots/";
          },
        },{id: "projects-a1",
          title: 'A1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/a1/";
            },},{id: "projects-adam",
          title: 'Adam',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/adam/";
            },},{id: "projects-aliengo",
          title: 'Aliengo',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/aliengo/";
            },},{id: "projects-aloha-v1",
          title: 'Aloha V1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/aloha/";
            },},{id: "projects-b2",
          title: 'B2',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/b2/";
            },},{id: "projects-franka",
          title: 'Franka',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/franka/";
            },},{id: "projects-g1",
          title: 'G1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/g1/";
            },},{id: "projects-go1",
          title: 'Go1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/go1/";
            },},{id: "projects-go2",
          title: 'Go2',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/go2/";
            },},{id: "projects-husky",
          title: 'Husky',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/husky/";
            },},{id: "projects-laikago",
          title: 'Laikago',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/laikago/";
            },},{id: "projects-rc-car",
          title: 'RC Car',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/rccar/";
            },},{id: "projects-spot",
          title: 'Spot',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/spot/";
            },},{id: "projects-tron1",
          title: 'TRON1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/tron1/";
            },},{id: "projects-ur5",
          title: 'UR5',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/ur5/";
            },},{id: "projects-yumi",
          title: 'Yumi',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/robots/yumi/";
            },},{
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
