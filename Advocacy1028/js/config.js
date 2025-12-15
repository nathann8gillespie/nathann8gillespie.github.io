// Configuration module - Shared data across all pages
const SiteConfig = {
    useFiles: true,
    
    
    // Header/Title content
    header: {
        title: "Advocacy 1028",
        subtitle: "Empowering Voices for Change"
    },

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
        },
        { name: "Donate", path: "donate" }
    ],

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
                    name: "Monica M.N.",
                    bio: `
                        Monica M.N. is a second year student who has seen and experienced 
                        the usage of social media and how it has affected her and the 
                        people around her. She chose this topic after she saw how her 
                        family and friends have acted throughout the months/years and 
                        how the phone has become the problem for low-communication status 
                        between them. Monica hopes that her writing can be an eye-opener 
                        for students/teenagers/parents and see how it has been affecting 
                        them and how they can change their day-to-day habits.`
                },
                {
                    name: "Ava S.",
                    bio: `
                        Ava S is a second year college student who often sees how social 
                        media has affected relationships around her and even some of her 
                        own. She chose this topic after seeing how many comparisons social 
                        media can cause and wants to show that if used correctly social 
                        media does not have to ruin relationships. Ava hopes her writing 
                        can show that social media doesn’t have to be a harmful tool and 
                        modern relationships can still be the same as traditional 
                        relationships as long as people allow them to be.`
                },
                {
                    name: "Jade K.",
                    bio: `
                        Jade K is a second year student at UNR. After watching Jimmy Kimmel 
                        Live! show get taken off air for a political opinion they wanted to 
                        advocate for the change of censorship. They believe that censorship 
                        is an issue on social media and it affects most users whether they 
                        think about it or not.`
                }
            ]
        },
        {
            sectionTitle: "Medical",
            bios: [
                {
                    name: "Belle Sehgal",
                    bio: `
                        Belle Sehgal is a first year at the University of Nevada, Reno and 
                        she has been looking into the research on Alzheimer’s Disease. A 
                        few years ago, her grandmother passed away from the disease without 
                        any known preventable strategies for the disease. Belle Sehgal seeks 
                        to inform scientists what the current problem is with the research 
                        being conducted on Alzheimer’s and why it is taking so long to find 
                        a cure.`
                },
                {
                    name: "Karam Ali",
                    bio: `
                        Karam Ali is a first year UNR student who cares about how everyday 
                        clinic and urgent care visits affect long term antibiotic resistance. 
                        He was interested in how often “just in case” antibiotic prescriptions 
                        were given for common respiratory infections. Karam hopes his advocacy 
                        will help listeners understand the antibiotic resistance issue and how 
                        to help advocate for changing it.`
                },
                {
                    name: "Ryan Stevens",
                    bio: `
                        Ryan Stevens is a second year student at UNR who witnessed and 
                        experienced the mental stress caused by the changing atmosphere of a 
                        challenging environment for adolescences’ development in an academic 
                        sphere. He’s interested in promoting change in lessening the stigmas 
                        toward seeking mental help and changing the practices of therapeutic 
                        services and awareness campaigns to better support growth in lessening 
                        cause factors with mental support to lessen the high mental decline today.`
                },
                {
                    name: "Kendra Solomon",
                    bio: `
                        Kendra Solomon is a first year student at the University of Nevada, 
                        Reno who has witnessed and cares about the negative effect that solely 
                        police responding to calls that deal with mental health can have. 
                        She's interested in finding ways these negative outcomes can be lessened 
                        or even fully prevented.`
                },
                {
                    name: "Enola Bishara",
                    bio: `
                        Enola Bishara is a first year student at the University of Nevada, 
                        Reno who cares deeply about women's health and reproductive rights in 
                        the medical field. Her interest in this topic grew after witnessing a 
                        family member face difficulties during her process with her abortion. 
                        She hopes to advocate for a better understanding of women's health in 
                        reproduction; finding better ways for the medical field and laws to 
                        support women.`
                }
            ]
        },
        {
            sectionTitle: "Problems in America",
            bios: [
                {
                    name: "NA",
                    bio: `
                        Adrian O. is a second year student who is actively studying computer 
                        science at the University of Nevada reno, they chose with the mindset 
                        to advocate and protest change in a country that constantly pressures 
                        every inhabitant.`
                },
                {
                    name: "NA",
                    bio: `
                        Tearlynn B. is a first-year college student who is passionate about 
                        improving gun safety measures. She chose this topic after her little 
                        siblings’ schools experienced gun-related issues. She hopes to encourage 
                        communities and leaders to take action in preventing future tragedies.`
                },
                {
                    name: "NA",
                    bio: `
                        Matthew Sutton is a first year student who studies computer science at 
                        the University of Nevada, Reno. He chose his topic of right to repair 
                        since he enjoys modifying software and believes in the power of 
                        consumers over businesses. Matthew hopes that his research can 
                        inspire others to advocate for right to repair legislation and 
                        other policies that support consumers.`
                },
                {
                    name: "Allison N. Fuentes",
                    bio: `
                        Allison N. Fuentes is a second-year student at the University of Nevada, 
                        Reno, who is passionate about advocating for diversity, equity, and 
                        inclusion initiatives in the workplace for all Americans. She finds these 
                        issues very relevant due to her personal experiences with her brother, who 
                        has Down Syndrome. She finds it crucial for the DEI initiatives to be 
                        implemented in the workplace, as it helps promote fairness for historically 
                        marginalized groups in the workplace.`
                },
                {
                    name: "Death Penalty",
                    bio: `Author of Death Penalty has no bio available.`
                }// ,
                // {
                //     name: "Mining",
                //     bio: `--- GET MINING BIO ---`
                // }
            ]
        }
    ]
};
