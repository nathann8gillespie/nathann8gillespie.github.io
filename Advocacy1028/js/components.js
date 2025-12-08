// UI Components module - Reusable component generators
const UIComponents = {
    /**
     * Create and render the header
     * @param {Object} headerConfig - Header configuration from SiteConfig
     */
    createHeader: function(headerConfig) {
        const header = document.querySelector("header");
        if (!header) return;
        
        const titleHTML = `
            <div id="pageTitle">
                <h1 bordered>${headerConfig.title}</h1>
                <br>
                <h2 bordered>${headerConfig.subtitle}</h2>
            </div>
        `;
        
        header.innerHTML = titleHTML;
    },
    
    /**
     * Create and render the navigation bar
     * @param {Array} pages - Pages configuration from SiteConfig
     * @param {number} currentDepth - Current page depth for path calculation
     * @param {boolean} useFiles - Whether to include index.html in links
     */
    createNavBar: function(pages, currentDepth, useFiles = true) {
        const nav = document.querySelector("nav");
        if (!nav) return;
        
        const ul = document.createElement("ul");
        
        pages.forEach((page, index) => {
            // Add separator before all items except the first
            if (index > 0) {
                const separatorLi = document.createElement("li");
                separatorLi.classList.add("separator");
                separatorLi.textContent = "|";
                ul.appendChild(separatorLi);
            }
            
            // Create main menu item
            const li = document.createElement("li");
            const a = document.createElement("a");
            
            // Build link using PathUtils
            if (page.submenu) {
                a.href = "#";
            } else {
                a.href = PathUtils.buildLink(page.path, currentDepth, useFiles);
            }
            
            a.textContent = page.name;
            li.appendChild(a);
            
            // If this page has a submenu, create a nested <ul>
            if (page.submenu && page.submenu.length > 0) {
                li.classList.add("has-dropdown");
                const subUl = document.createElement("ul");
                subUl.classList.add("dropdown");
                
                page.submenu.forEach((subPage) => {
                    const subLi = document.createElement("li");
                    const subA = document.createElement("a");
                    subA.href = PathUtils.buildLink(subPage.path, currentDepth, useFiles);
                    subA.textContent = subPage.name;
                    subLi.appendChild(subA);
                    subUl.appendChild(subLi);
                });
                
                li.appendChild(subUl);
            }
            
            ul.appendChild(li);
        });
        
        nav.appendChild(ul);
    },
    
    /**
     * Create and render the footer
     * @param {Object} footerConfig - Footer configuration from SiteConfig
     */
    createFooter: function(footerConfig) {
        const footer = document.querySelector("footer");
        if (!footer) return;
        
        const footerHTML = `
            <p>© ${new Date().getFullYear()} ${footerConfig.organizationName}</p>
            <p>${footerConfig.tagline}</p>
        `;
        
        footer.innerHTML = footerHTML;
    },
    
    /**
     * Create and render the About page author bios
     * @param {Array} authors - Authors configuration from SiteConfig
     */
    createAuthorBios: function(authors) {
        const biosContainer = document.querySelector("bios");
        if (!biosContainer) return;
        
        biosContainer.innerHTML = ""; // Clear existing content
        
        authors.forEach((section, sectionIndex) => {
            // Add section title
            const sectionTitle = document.createElement("h2");
            sectionTitle.textContent = section.sectionTitle;
            biosContainer.appendChild(sectionTitle);
            biosContainer.appendChild(document.createElement("br"));
            
            // Add bios for this section
            const biosDiv = document.createElement("p");
            section.bios.forEach((author, bioIndex) => {
                biosDiv.innerHTML += author.bio;
                // Add spacing between bios, but not after the last one
                if (bioIndex < section.bios.length - 1) {
                    biosDiv.innerHTML += "<br><br>";
                }
            });
            biosContainer.appendChild(biosDiv);
            
            // Add spacing between sections, but not after the last one
            if (sectionIndex < authors.length - 1) {
                biosContainer.appendChild(document.createElement("br"));
            }
        });
    },
    
    /**
     * Initialize all UI components at once
     * @param {number} currentDepth - Current page depth
     */
    initializeAll: function(currentDepth) {
        this.createHeader(SiteConfig.header);
        this.createNavBar(SiteConfig.pages, currentDepth, SiteConfig.useFiles);
        this.createFooter(SiteConfig.footer);
    }
};
