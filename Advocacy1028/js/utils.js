// Path utilities module - Calculate relative paths dynamically
const PathUtils = {
    /**
     * Calculate the root path based on current page depth
     * @param {number} depth - How many levels deep the current page is (0 = root, 1 = one level deep, etc.)
     * @returns {string} - The relative path to root
     */
    getRoot: function(depth) {
        if (depth === 0) return '.';
        return '../'.repeat(depth);
    },
    
    /**
     * Build a link based on current page depth
     * @param {string} targetPath - The target path (e.g., "home", "sections/social-media")
     * @param {number} currentDepth - Current page depth
     * @param {boolean} includeFile - Whether to include index.html
     * @returns {string} - The complete relative link
     */
    buildLink: function(targetPath, currentDepth, includeFile = true) {
        const root = this.getRoot(currentDepth);
        const file = includeFile ? '/index.html' : '';
        // Avoid double slashes when root is '.'
        if (root === '.') {
            return `${targetPath}${file}`;
        }
        return `${root}/${targetPath}${file}`;
    },
    
    /**
     * Get the path to a resource (CSS, JS, etc.) from current depth
     * @param {string} resourcePath - The resource path from root
     * @param {number} currentDepth - Current page depth
     * @returns {string} - The relative path to the resource
     */
    getResourcePath: function(resourcePath, currentDepth) {
        const root = this.getRoot(currentDepth);
        // Avoid double slashes when root is '.'
        if (root === '.') {
            return resourcePath;
        }
        return `${root}/${resourcePath}`;
    }
};
