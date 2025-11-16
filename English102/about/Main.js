var pages = [
    { name: "Home", link: "../" },
    { name: "Mission", link: "../mission/" },
    { name: "About Us", link: "../about/" },
    { 
        name: "Sections", 
        link: "#",
        submenu: [
            { name: "Social Media", link: "../sections/social-media/index.html" },
            { name: "Medical", link: "../sections/medical/index.html" },
            { name: "Problems in America", link: "../sections/problems-in-america/index.html" }
        ]
    }
];
var footerHTML = `
        © ${new Date().getFullYear()} Followers of Bergen<br>
        University of Nevada · College of Liberal Arts <br>
        Contact: 
            <a href="
                mailto:mailto:nathangillespie@unr.edu
            ?subject=English%20102.1028%20Class%20Project%20Inquiry"
        >
            nathangillespie@unr.edu
        </a>
    `;

var titleHTML = `
    <div id="pageTitle">
        <h1 bordered>English 102.1028</h1>
        <br>
        <h2 bordered>Class Project</h2>
    </div>
`;

function createHeader() {
    document.querySelector("header").innerHTML = titleHTML;
}
function createNavBar() {
    var nav = document.querySelector("nav");
    var ul = document.createElement("ul");
    
    pages.forEach(function(page, index) {
        // Add separator before all items except the first
        if (index > 0) {
            var separatorLi = document.createElement("li");
            separatorLi.classList.add("separator");
            separatorLi.textContent = "|";
            ul.appendChild(separatorLi);
        }
        
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = page.link;
        a.textContent = page.name;
        li.appendChild(a);
        
        // If this page has a submenu, create a nested <ul>
        if (page.submenu && page.submenu.length > 0) {
            li.classList.add("has-dropdown");
            var subUl = document.createElement("ul");
            subUl.classList.add("dropdown");
            
            page.submenu.forEach(function(subPage) {
                var subLi = document.createElement("li");
                var subA = document.createElement("a");
                subA.href = subPage.link;
                subA.textContent = subPage.name;
                subLi.appendChild(subA);
                subUl.appendChild(subLi);
            });
            
            li.appendChild(subUl);
        }
        
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
}
function createFooter() {
    var footer = document.querySelector("footer");
    var p = document.createElement("p");
    p.innerHTML = footerHTML;
    footer.appendChild(p);
}

createHeader();
createNavBar();
createFooter();