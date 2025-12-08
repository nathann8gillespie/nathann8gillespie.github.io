// Configuration module - Shared data across all pages
const SiteConfig = {
    useFiles: true,
    
    // Navigation structure
    pages: [
        { name: "Home", path: "home" },
        { name: "Mission", path: "mission" },
        { name: "About Us", path: "about" },
        { 
            name: "Sections", 
            path: "sections",
            submenu: [
                { name: "Social Media", path: "sections/social-media" },
                { name: "Medical", path: "sections/medical" },
                { name: "Problems in America", path: "sections/problems-in-america" }
            ]
        }
    ],
    
    // Header/Title content
    header: {
        title: "Advocacy 1028",
        subtitle: "Empowering Voices for Change"
    },

    // Footer content
    footer: {
        organizationName: "Followers of Bergen",
        tagline: "Advocating for positive change through awareness and action"
    },
    
    // About page - Author bios organized by section
    authors: [
        {
            sectionTitle: "Website Creation",
            bios: [
                {
                    name: "Nathan Gillespie",
                    bio: `
                        Nathan Gillespie is a student with experience in website 
                        development and a strong interest in clear, accessible 
                        communication. He believes that effective advocacy starts 
                        with design that helps audiences easily understand each issue. 
                        Nathan hopes his work encourages people to explore, learn, 
                        and take action across the topics the site presents.`
                },
                {
                    name: "Jiro Basabas",
                    bio: `
                        Jiro Basabas is a second-year student at the University of 
                        Nevada, Reno and he is passionate about pushing college 
                        students to have a voice and wants students to lead for 
                        change no matter what background. He hopes to be a helping 
                        hand when students want a door to open when they are 
                        advocating for their own passionate opinions.`
                },
                {
                    name: "Kyla Thackwell",
                    bio: `
                        Kyla Thackwell is a first-year student and she is passionate 
                        about finding different resources for those in her community. 
                        She hopes she can give support to those in her community, and 
                        help those who need support.`
                },
                {
                    name: "Shawon Razzak",
                    bio: `
                        Shawon Razzak is an electrical engineering major who has taken 
                        his experience and expertise in engineering design towards his 
                        passion for helping college students in being able to advocate 
                        for causes they strongly believe in and pursue the changes they 
                        want to make for the world by lending his knowledge of design 
                        towards developing the website. He believes that to make your 
                        stance known, you must present in a way that will catch the 
                        attention of those your trying to share your viewpoints and 
                        knowledge of. He hopes that his contribution will bring a spark 
                        of change to the world no matter how and where it comes from.`
                }
            ]
        },
        {
            sectionTitle: "Social Media",
            bios: [
                {
                    name: "NA",
                    bio: "No author bios for this section."
                }
            ]
        },
        {
            sectionTitle: "Medical",
            bios: [
                {
                    name: "NA",
                    bio: "No author bios for this section."
                }
            ]
        },
        {
            sectionTitle: "Problems in America",
            bios: [
                {
                    name: "NA",
                    bio: "No author bios for this section."
                }
            ]
        }
    ]
};
