# Best Practices for Maintaining a Quarto Website

This document outlines essential best practices for maintaining and scaling your Quarto website with integrated Reveal.js presentations.

## 1. Organizing Content and Slides

### Content Structure
```
project/
├── _quarto.yml           # Main configuration
├── index.qmd            # Homepage
├── about.qmd            # About page
├── presentations.qmd    # Presentations listing
├── slides/              # Presentation directory
│   ├── slides.qmd       # Main presentation
│   ├── presentation-2.qmd
│   └── assets/          # Slide-specific assets
├── assets/              # Global assets
│   ├── images/
│   └── data/
├── styles.css           # Global styles
├── modal.js            # Modal functionality
└── _site/              # Generated output (git-ignored)
```

### Slide Organization
- **One presentation per `.qmd` file** in the slides directory
- Use descriptive filenames: `data-visualization-2024.qmd`
- Keep slide assets in dedicated subdirectories
- Maintain consistent naming conventions

### Content Guidelines
- Write clear, concise slide titles
- Limit bullet points to 5-7 items per slide
- Use consistent formatting across presentations
- Include speaker notes for complex slides

## 2. Version Control with GitHub

### Repository Setup
```bash
# Initialize repository
git init
git add .
git commit -m "Initial Quarto website setup"

# Connect to GitHub
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

### Essential `.gitignore`
```gitignore
# Quarto output
_site/
/.quarto/

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Temporary files
*.tmp
*.log
```

### Branching Strategy
- **main**: Production-ready code
- **develop**: Integration branch for new features
- **feature/**: Individual feature branches
- **hotfix/**: Quick fixes for production issues

### Commit Best Practices
- Use conventional commit messages: `feat:`, `fix:`, `docs:`, `style:`
- Commit frequently with small, focused changes
- Test locally before pushing
- Use pull requests for code review

## 3. Updating `_quarto.yml` for New Pages

### Adding New Pages
```yaml
website:
  navbar:
    left:
      - href: index.qmd
        text: Home
      - href: about.qmd
        text: About
      - href: presentations.qmd
        text: Presentations
      - href: blog.qmd        # New page
        text: Blog
      - href: contact.qmd     # New page
        text: Contact
```

### Adding New Presentations
1. Create new `.qmd` file in slides directory
2. Update `presentations.qmd` with new entry
3. Ensure modal integration works
4. Test responsive design

### Configuration Management
- Keep environment-specific settings in separate files
- Use YAML anchors for repeated configurations
- Document all custom settings
- Validate YAML syntax before committing

## 4. Keeping CSS Modular

### File Organization
```
styles/
├── main.css           # Global styles
├── components/
│   ├── buttons.css    # Button styles
│   ├── cards.css      # Card components
│   ├── modal.css      # Modal styles
│   └── navbar.css     # Navigation styles
├── reveal/
│   ├── theme.css      # Reveal.js theme
│   └── custom.css     # Reveal.js customizations
└── utilities/
    ├── variables.css  # CSS custom properties
    └── responsive.css # Media queries
```

### CSS Best Practices
- Use CSS custom properties for consistent theming
- Follow BEM methodology for class naming
- Keep specificity low and avoid `!important`
- Use mobile-first responsive design
- Optimize for performance (minimize unused CSS)

### Theme Consistency
```css
:root {
  --primary-color: #0055cc;
  --primary-hover: #003d99;
  --font-family: 'Inter', sans-serif;
  --border-radius: 8px;
  --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

## 5. Testing Locally Before Deploy

### Development Workflow
```bash
# Start development server
quarto preview

# Build for production
quarto render

# Check for broken links
quarto check

# Validate HTML output
# Use tools like HTML5 validator
```

### Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Modal functionality works on all devices
- [ ] Presentations render properly
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] All links are functional
- [ ] Images load correctly
- [ ] Performance is acceptable

### Browser Testing
- Test in Chrome, Firefox, Safari, Edge
- Check mobile browsers (iOS Safari, Chrome Mobile)
- Verify keyboard navigation works
- Test with screen readers for accessibility

### Performance Optimization
- Optimize images (WebP format when possible)
- Minimize CSS and JavaScript
- Use CDN for external resources
- Enable compression on server

## 6. Deployment to GitHub Pages

### GitHub Pages Setup
1. Go to repository Settings → Pages
2. Select source: "Deploy from a branch"
3. Choose branch: `main` or `gh-pages`
4. Select folder: `/ (root)` or `/docs`

### Automated Deployment
Create `.github/workflows/quarto-publish.yml`:
```yaml
name: Render and Publish

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v4
        
      - name: Set up Quarto
        uses: quarto-dev/quarto-actions/setup@v2
        
      - name: Render and Publish
        uses: quarto-dev/quarto-actions/publish@v2
        with:
          target: gh-pages
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Deployment Checklist
- [ ] All assets are properly referenced
- [ ] Base URL is configured correctly
- [ ] HTTPS is enabled
- [ ] Custom domain is set up (if applicable)
- [ ] Analytics tracking is configured

## 7. Maintenance and Updates

### Regular Maintenance Tasks
- Update Quarto to latest version monthly
- Review and update dependencies
- Check for broken external links
- Update content and presentations
- Monitor site performance
- Review analytics data

### Content Updates
- Keep presentations current with latest data
- Update "About" section with new achievements
- Add new presentations to the collection
- Refresh homepage content periodically

### Technical Updates
- Monitor Quarto release notes
- Update Reveal.js when new versions are available
- Keep CSS and JavaScript dependencies current
- Test after each update

## 8. Troubleshooting Common Issues

### Build Errors
- Check YAML syntax in `_quarto.yml`
- Verify all referenced files exist
- Check for circular dependencies
- Review error logs carefully

### Modal Issues
- Ensure JavaScript loads after DOM
- Check iframe src paths
- Verify CSS z-index values
- Test across different browsers

### Responsive Design Problems
- Use browser developer tools
- Test on actual devices
- Check CSS media queries
- Validate viewport meta tag

### Performance Issues
- Optimize large images
- Minimize CSS/JS files
- Use browser caching
- Consider lazy loading for images

---

*This document should be updated as the project evolves and new best practices are discovered.*
