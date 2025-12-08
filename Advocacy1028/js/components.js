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
            © ${new Date().getFullYear()} ${footerConfig.organizationName}<br>
            ${footerConfig.university} · ${footerConfig.department} <br>
            Contact: 
                <a href="mailto:${footerConfig.email}?subject=${footerConfig.emailSubject}">
                    ${footerConfig.email}
                </a>
        `;
        
        const p = document.createElement("p");
        p.innerHTML = footerHTML;
        footer.appendChild(p);
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
