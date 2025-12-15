// Configuration module - Shared data across all pages
const SiteConfig = {
    useFiles: true,
    baseUrl: '/Advocacy1028', // Base URL for GitHub Pages deployment
    
    
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
        { name: "Sources", path: "sources" },
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
                    name: "Adrian O.",
                    bio: `
                        Adrian O. is a second year student who is actively studying computer 
                        science at the University of Nevada reno, they chose with the mindset 
                        to advocate and protest change in a country that constantly pressures 
                        every inhabitant.`
                },
                {
                    name: "Tearlynn B.",
                    bio: `
                        Tearlynn B. is a first-year college student who is passionate about 
                        improving gun safety measures. She chose this topic after her little 
                        siblings’ schools experienced gun-related issues. She hopes to encourage 
                        communities and leaders to take action in preventing future tragedies.`
                },
                {
                    name: "Matthew Sutton",
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
                    name: "Yulisa R.",
                    bio: `
                        Yulisa R. is a sophomore student who is pursuing a career in nursing at the 
                        University of Nevada, Reno. They chose the topic of the death penalty to 
                        advocate for change in society to help others understand it on a deeper 
                        level. In a recent case, America is going through a known individual where 
                        a 20-year-old is in the process of being considered for being put on death 
                        row. She’s hoping to help others find alternative ways for those who are put 
                        on death row, especially at a young age. Fun fact: Yulisa loves to sleep a ton! 
                        #shelivingthedream`
                },
                {
                    name: "Joe Celsi",
                    bio: `
                        Joe Celsi is a sophomore at the University of Nevada Reno studying geology. He 
                        chose this topic as its not only relevent ot his major but, he believes that 
                        mining domestically in America saves the consumers money and that mining doesn't 
                        have to cause environmental harm. He hopes others will recognize that and support 
                        America in being self-reliable while also having concern for the environment. `
                }
            ]
        }
    ],
    
    // Sources - MLA Citations organized by section
    sources: [
        {
            sectionTitle: "Social Media:",
            citations: [
                'HISTORY.com Editors. “Donald Trump.” <em>History.com</em>, A&E Television Networks, <a href="https://www.history.com/articles/donald-trump" target="_blank" rel="noopener">https://www.history.com/articles/donald-trump</a>.',
                'LateNighter Staff. “Jimmy Kimmel Live! Cancels Thursday Night Episode Without Explanation.” <em>LateNighter</em>, <a href="https://latenighter.com/news/jimmy-kimmel-live-cancels-thursday-night-episode-without-explanation/" target="_blank" rel="noopener">https://latenighter.com/news/jimmy-kimmel-live-cancels-thursday-night-episode-without-explanation/</a>.',
                'American Civil Liberties Union. “What Is Censorship?” <em>ACLU</em>, <a href="https://www.aclu.org/documents/what-censorship" target="_blank" rel="noopener">https://www.aclu.org/documents/what-censorship</a>.',
                'Roberts, Margaret E. “Resilience to Online Censorship.” <em>Annual Review of Political Science</em>, vol. 23, 2020, <a href="https://doi.org/10.1146/annurev-polisci-050718-032837" target="_blank" rel="noopener">https://doi.org/10.1146/annurev-polisci-050718-032837</a>.'
            ]

        },
        {
            sectionTitle: "Medical:",
            citations: [
                'Altmann, Brooke, et al. “Effects of Diagnostic Labels on Perceptions of Marginal Cases of Mental Ill-Health.” <em>PLOS Mental Health</em>, vol. 1, no. 3, Aug. 2024, <a href="https://doi.org/10.1371/journal.pmen.0000096" target="_blank" rel="noopener">https://doi.org/10.1371/journal.pmen.0000096</a>.',
                'Chen, M., J. J. Maleski, and D. R. Sawmiller. “Scientific Truth or False Hope? Understanding Alzheimer’s Disease from an Aging Perspective.” <em>Journal of Alzheimer’s Disease</em>, vol. 24, no. 1, 2011, pp. 3–10, <a href="https://doi.org/10.3233/JAD-2010-101638" target="_blank" rel="noopener">https://doi.org/10.3233/JAD-2010-101638</a>.',
                'Deltombe, Nahomi, and Florian Bachmann. “How the BetterHelp Scandal Changed Our Perspective on Influencer Responsibility.” <em>Maastricht University Blog</em>, 8 Feb. 2021, <a href="https://www.maastrichtuniversity.nl/blog/2021/02/how-betterhelp-scandal-changed-our-perspective-influencer-responsibility" target="_blank" rel="noopener">https://www.maastrichtuniversity.nl/blog/2021/02/how-betterhelp-scandal-changed-our-perspective-influencer-responsibility</a>.',
                'Ellis, Danielle. “Social Identification and Mental Health.” <em>News-Medical.net</em>, 30 June 2022, <a href="https://www.news-medical.net/health/Social-Identification-and-Mental-Health.aspx" target="_blank" rel="noopener">https://www.news-medical.net/health/Social-Identification-and-Mental-Health.aspx</a>.',
                'Foulkes, Lucy. “The Problem with Mental Health Awareness.” <em>The British Journal of Psychiatry</em>, vol. 225, no. 2, Aug. 2024, pp. 337–38, <a href="https://doi.org/10.1192/bjp.2024.106" target="_blank" rel="noopener">https://doi.org/10.1192/bjp.2024.106</a>.',
                'Gulliver, Amelia, Kathleen M. Griffiths, and Helen Christensen. “Perceived Barriers and Facilitators to Mental Health Help-Seeking in Young People: A Systematic Review.” <em>BMC Psychiatry</em>, vol. 10, no. 1, 2010, Article 113, <a href="https://link.springer.com/article/10.1186/1471-244x-10-113" target="_blank" rel="noopener">https://link.springer.com/article/10.1186/1471-244x-10-113</a>.',
                'Hallsworth, Michael, et al. “Provision of Social Norm Feedback to High Prescribers of Antibiotics in General Practice: A Pragmatic National Randomised Controlled Trial.” <em>The Lancet</em>, vol. 387, no. 10029, 2016, pp. 1743–1752, <a href="https://doi.org/10.1016/S0140-6736(16)00215-4" target="_blank" rel="noopener">https://doi.org/10.1016/S0140-6736(16)00215-4</a>.',
                'Harris, Adam M., et al. “Appropriate Antibiotic Use for Acute Respiratory Tract Infection in Adults.” <em>Annals of Internal Medicine</em>, vol. 164, no. 6, 2016, pp. 425–434, <a href="https://doi.org/10.7326/M15-1840" target="_blank" rel="noopener">https://doi.org/10.7326/M15-1840</a>.',
                'Kohli, Neelesh, and Kavita Dua. “Stress among Youth: Causes and Its Management in Recent Times.” <em>International Journal of Science and Research</em>, <a href="https://doi.org/10.21275/SR22714172859" target="_blank" rel="noopener">https://doi.org/10.21275/SR22714172859</a>.',
                'Lepreezy. “It’s 1940s and You’re Listening to Vintage Jazz on a Cozy Rainy Night.” <em>YouTube</em>, 31 Mar. 2025, <a href="https://www.youtube.com/watch?v=K110MtP_Mis" target="_blank" rel="noopener">https://www.youtube.com/watch?v=K110MtP_Mis</a>. Accessed 7 Dec. 2025.',
                'Maccioni, R. B., and G. Perry. <em>Current Hypotheses and Research Milestones in Alzheimer’s Disease</em>. Springer, 2009, <a href="https://unr.primo.exlibrisgroup.com/permalink/01UNR_INST/bjoav5/alma991000060979706781" target="_blank" rel="noopener">https://unr.primo.exlibrisgroup.com/permalink/01UNR_INST/bjoav5/alma991000060979706781</a>.',
                'McGorry, Patrick, et al. “The Youth Mental Health Crisis: Analysis and Solutions.” <em>Frontiers in Psychiatry</em>, vol. 15, Jan. 2025, <a href="https://doi.org/10.3389/fpsyt.2024.1517533" target="_blank" rel="noopener">https://doi.org/10.3389/fpsyt.2024.1517533</a>.',
                'Meeker, Daniella, et al. “Effect of Behavioral Interventions on Inappropriate Antibiotic Prescribing Among Primary Care Practices.” <em>JAMA</em>, vol. 315, no. 6, 2016, pp. 562–570, <a href="https://doi.org/10.1001/jama.2016.0275" target="_blank" rel="noopener">https://doi.org/10.1001/jama.2016.0275</a>.',
                'Moeseneder, Laura, Patrick Figlioli, and Franz Caspar. “Confronting Patients: Therapists’ Model of a Responsiveness-Based Approach.” <em>Journal of Contemporary Psychotherapy</em>, vol. 48, no. 2, 2018, pp. 61–67, <a href="https://doi.org/10.1007/s10879-017-9371-x" target="_blank" rel="noopener">https://doi.org/10.1007/s10879-017-9371-x</a>.',
                'Mullane, K., and M. Williams. “Alzheimer’s Disease beyond Amyloid.” <em>Biochemical Pharmacology</em>, vol. 177, 2020, Article 113945, <a href="https://doi.org/10.1016/j.bcp.2020.113945" target="_blank" rel="noopener">https://doi.org/10.1016/j.bcp.2020.113945</a>.',
                'Music Library – Royalty Free Music. “This FUNKY Track Will Make Your Videos Go VIRAL.” <em>YouTube</em>, 13 Nov. 2025, <a href="https://www.youtube.com/watch?v=kXECerram3Y&list=PL2x9gUoF1KPIKlVyDR4O1hQu0tCW4CXri" target="_blank" rel="noopener">https://www.youtube.com/watch?v=kXECerram3Y</a>. Accessed 7 Dec. 2025.',
                'NAMI. “Why Labels Can Be Harmful When You Have Mental Illness.” <em>NAMI</em>, 20 Oct. 2021, <a href="https://www.nami.org/bipolar-and-related-disorders/why-labels-can-be-harmful-when-you-have-mental-illness/" target="_blank" rel="noopener">https://www.nami.org/bipolar-and-related-disorders/why-labels-can-be-harmful-when-you-have-mental-illness/</a>.',
                'Spurling, Geoffrey K. P., et al. “Immediate versus Delayed versus No Antibiotics for Respiratory Infections.” <em>Cochrane Database of Systematic Reviews</em>, 2023, Article CD004417, <a href="https://doi.org/10.1002/14651858.CD004417.pub6" target="_blank" rel="noopener">https://doi.org/10.1002/14651858.CD004417.pub6</a>.'
            ]
        },
        {
            sectionTitle: "Problems in America:",
            citations: [
                'Blue Checkmark. <em>iStockphoto</em>, <a href="https://www.istockphoto.com/illustrations/blue-checkmark" target="_blank" rel="noopener">https://www.istockphoto.com/illustrations/blue-checkmark</a>. Accessed 14 Dec. 2025.',
                'Christ, Ginger. “1 in 5 Companies Say They’ve Slashed DEI Since Trump’s Election.” <em>ESG Dive</em>, 30 July 2025, <a href="https://www.esgdive.com/news/1-in-5-companies-slashed-dei-since-trump-election/756318/" target="_blank" rel="noopener">https://www.esgdive.com/news/1-in-5-companies-slashed-dei-since-trump-election/756318/</a>.',
                '“DEI and Accessibility Explained.” <em>ACLU of Arkansas</em>, <a href="https://www.acluarkansas.org/news/dei-and-accessibility-explained/" target="_blank" rel="noopener">https://www.acluarkansas.org/news/dei-and-accessibility-explained/</a>. Accessed 14 Dec. 2025.',
                'Hand Cursor. <em>Flaticon</em>, <a href="https://www.flaticon.com/free-icon/hand-cursor_6001707" target="_blank" rel="noopener">https://www.flaticon.com/free-icon/hand-cursor_6001707</a>. Accessed 14 Dec. 2025.',
                '“Increasing Student Success in STEM.” <em>Change: The Magazine of Higher Learning</em>, 2017, <a href="https://doi.org/10.1080/00091383.2017.1357097" target="_blank" rel="noopener">https://doi.org/10.1080/00091383.2017.1357097</a>. Accessed 14 Dec. 2025.',
                'Open Book with a Blue Cover. <em>iStockphoto</em>, <a href="https://www.istockphoto.com/illustrations/open-book-with-a-blue-cover" target="_blank" rel="noopener">https://www.istockphoto.com/illustrations/open-book-with-a-blue-cover</a>. Accessed 14 Dec. 2025.',
                '“Supreme Court: Affirmative Action, Diversity, Equity, Inclusion, and Belonging.” <em>Forbes</em>, <a href="https://imageio.forbes.com/specials-images/imageserve/64a1f3caf05060c01cb4ddd4/" target="_blank" rel="noopener">https://imageio.forbes.com/specials-images/imageserve/64a1f3caf05060c01cb4ddd4/</a>. Accessed 14 Dec. 2025.'
            ]
        }
    ]
};
