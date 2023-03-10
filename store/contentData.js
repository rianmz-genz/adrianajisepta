const contentData = {
  bannerSection: {
    label: "Hi Everyone, I am",
    title: "Adrian Aji Septa",
    description:
      "A passionate Frontend Developer. I love programming and build clean and modern website.",
    downloadButtonCaption: "Download CV",
    exploreMoreButtonCaption: "Explore More",
  },
  aboutSection: {
    label: "About Me",
    title: "Who am I?",
    description:
      "My name is Adrian Aji Septa. I am 18 years old. I am a fresh graduate from SMK N 1 Purwokerto majoring in Software Engineering and is currently studying at Amikom Purwokerto University. I love programming since I first learn it, especially in Frontend Dev. I like to create a clean, modern and of course fast performance website. Honestly, I am lacking of experience but I will learn and work harder to improve my skill and try to gain more experience over time.",
  },
  skillSection: {
    label: "Skills",
    title: "What I am capable of?",
  },
  projectSection: {
    label: "Projects",
    title: "What I have made?",
    projects: [
      {
        title: "Chat N' Rechat",
        description: "Simple Companies that provide about fake Chat App develop by me.",
        preview: {
          url: "/images/projects/chatnrechat.png",
          lowresUrl: "/images/projects/chatnrechat.png",
          originalWidth: 1920,
          originalHeight: 1080,
        },
        techs: ["NextJs", "TailwindCSS", "Typescript"],
        category: ["Competition Project"],
        demoUrl: "https://chatnrechat.vercel.app/",
        repoUrl: "https://github.com/rianmz-genz/chatnrechat",
      },
            {
        title: "Epictetus News",
        description:
          "News website with modern design develop by me.",
        preview: {
          url: "/images/projects/epictetus.png",
          lowresUrl: "/images/projects/epictetus.png",
          originalWidth: 1175,
          originalHeight: 660,
        },
        techs: ["NextJs", "TailwindCSS", "Typescript"],
        category: ["UI Design Implementation"],
        demoUrl: "https://epictetusnews.vercel.app",
        repoUrl: "https://github.com/rianmz-genz/epictetus",
      },
            {
        title: "LKP MANDIRI",
        description: "Simple Companies that provide course services develop by me.",
        preview: {
          url: "/images/projects/lkpmandiri.png",
          lowresUrl: "/images/projects/lkpmandiri.png",
          originalWidth: 1920,
          originalHeight: 1080,
        },
        techs: ["NextJs", "TailwindCSS", "Typescript"],
        category: ["Competition Project"],
        demoUrl: "https://lkpmandiri.vercel.app/",
        repoUrl: "https://github.com/rianmz-genz/lkpmandiri",
      },
      {
        title: "Collosal",
        description: "Simple Companies that provide about technology develop by me.",
        preview: {
          url: "/images/projects/collosal.png",
          lowresUrl: "/images/projects/collosal.png",
          originalWidth: 1920,
          originalHeight: 1080,
        },
        techs: ["NextJs", "TailwindCSS", "Typescript"],
        category: ["Competition Project"],
        demoUrl: "https://thecollosal.vercel.app/",
        repoUrl: "https://github.com/rianmz-genz/collosal",
      },
            {
        title: "The Zeitplan",
        description: "Simple Companies that provide about planning app develop by me.",
        preview: {
          url: "/images/projects/zeitplan.png",
          lowresUrl: "/images/projects/zeitplan.png",
          originalWidth: 1920,
          originalHeight: 1080,
        },
        techs: ["NextJs", "TailwindCSS", "Typescript"],
        category: ["Competition Project"],
        demoUrl: "https://thezeitplan.vercel.app/",
        repoUrl: "https://github.com/rianmz-genz/thezeitplan",
      },
                  {
        title: "Topenida",
        description: "Simple Travel tour website with modern design",
        preview: {
          url: "/images/projects/topenida.png",
          lowresUrl: "/images/projects/topenida.png",
          originalWidth: 1920,
          originalHeight: 1080,
        },
        techs: ["NextJs", "TailwindCSS", "Typescript"],
        category: ["Competition Project"],
        demoUrl: "https://topenida.vercel.app/",
        repoUrl: "https://github.com/rianmz-genz/topenida",
      },
       {
        title: "Soemovies",
        description:
          "Website for search and get information of many movie source by TheMoveDb API.",
        preview: {
          url: "/images/projects/soemoviesupdate.png",
          lowresUrl: "/images/projects/soemoviesupdate.png",
          originalWidth: 1224,
          originalHeight: 764,
        },
        techs: ["ReactJS", "Tailwind CSS", "Infinite Scroll"],
        category: ["Dicoding Submission", "UI Design Implementation"],
        demoUrl: "https://soemovies.vercel.app",
        repoUrl: "https://github.com/rianmz-genz/soemovies",
      },
      {
        title: "SoeFinder",
        description:
          "Website for search and download image source by Pixabay API.",
        preview: {
          url: "/images/projects/soefinder.png",
          lowresUrl: "/images/projects/soefinder.png",
          originalWidth: 1903,
          originalHeight: 1080,
        },
        techs: ["Next JS", "Tailwind CSS", "Infinite Scroll"],
        category: ["UI Design Implementation"],
        demoUrl: "https://soefinder.vercel.app/",
        repoUrl: "https://github.com/rianmz-genz/soeimage",
      },
      {
        title: "Soestyle",
        description:
          "E - Commerce website build with vannila js who have cart feature and localstorage implementation",
        preview: {
          url: "/images/projects/soestyle.png",
          lowresUrl: "/images/projects/soestyle.png",
          originalWidth: 873,
          originalHeight: 1172,
        },
        techs: ["HTML", "CSS", "Vannila Js", "Local Storage"],
        demoUrl: "https://soestyle.vercel.app/",
        repoUrl: "https://github.com/rianmz-genz/Soestyle",
      },
      {
        title: "Typetasks",
        description:
          "Todolist app draggable task to completed tasks.",
        preview: {
          url: "/images/projects/type.png",
          lowresUrl: "/images/projects/type.png",
          originalWidth: 873,
          originalHeight: 1172,
        },
        techs: ["ReactJs", "TailwindCSS", "Typescript"],
        demoUrl: "https://typetasks.vercel.app/",
        repoUrl: "https://github.com/rianmz-genz/todolistTsx",
      },
      {
        title: "Artoku",
        description:
          "A website who can manage your money for buy your wishlist. ",
        preview: {
          url: "/images/projects/artoku.png",
          lowresUrl: "/images/projects/artoku.png",
          originalWidth: 1920,
          originalHeight: 1050,
        },
        techs: ["HTML", "CSS", "Vanilla JS", "Local Storage"],
        category: ["Freelance Project"],
        demoUrl: "https://rianmz-genz.github.io/artoku",
      },
      {
        title: "Ampu Kreatif Studio",
        description:
          "A company profile for a company Creative Media, Software Development, IT Consultant, and Training.",
        preview: {
          url: "/images/projects/ampustudio.png",
          lowresUrl: "/images/projects/ampustudio.png",
          originalWidth: 1905,
          originalHeight: 1080,
        },
        techs: ["ReactJs", "Tailwind CSS"],
        category: ["Freelance Project"],
        demoUrl: "https://ampukreatifstudio.com/",
      },
      {
        title: "Todolist",
        description: "Simple Todolist App.",
        preview: {
          url: "/images/projects/todolist.png",
          lowresUrl: "/images/projects/todolist.png",
          originalWidth: 1364,
          originalHeight: 758,
        },
        techs: ["ReactJs", "Tailwind CSS"],
        category: ["Competition Project"],
        demoUrl: "https://rianmz-genz.github.io/ReactTodo",
        repoUrl: "https://github.com/rianmz-genz/ReactTodo",
      },
      
    ],
  },
  contactSection: {
    label: "Contacts",
    title: "Let's Create A Miracle With Me",
    email: "workadrianseptaaji@gmail.com",
    discord: "https://discordapp.com/users/1016572190923165747",
    facebook: "https://instagram.com/vastroboy?igshid=YmMyMTA2M2Y=",
    github: "https://github.com/rianmz-genz",
    linkedin: "https://www.linkedin.com/in/adrian-aji-04a508246/",
  },
};
export default contentData;
