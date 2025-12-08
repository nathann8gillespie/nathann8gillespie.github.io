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
    
    // Footer content
    footer: {
        organizationName: "Followers of Bergen",
        university: "University of Nevada",
        department: "College of Liberal Arts",
        email: "nathangillespie@unr.edu",
        emailSubject: "English%20102.1028%20Class%20Project%20Inquiry"
    },
    
    // Header/Title content
    header: {
        title: "English 102.1028",
        subtitle: "Class Project"
    }
};
