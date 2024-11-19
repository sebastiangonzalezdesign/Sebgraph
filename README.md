<!-- How to add a new project -->

-- Thumbnail --

1. Add the thumbnail information in data.jsx under the appropriate category.
2. Use the "protected" property to add password protection to the project.
3. Use the "showProject" property to control whether the project is visible. If you don’t want the project indexed by search engines, use <Helmet> to add the conditional noindex logic in each project file.
4. Add the new background color in abstracts/\_colors.scss, then in \_tokens.scss, and finally add the new class in utilities/\_cards.scss.

-- Project --

1. Duplicate an existing project file and rename it. Example: pages/projects/NewProject.jsx.
2. In components/RouterSite.jsx, import the newly created project file and set up the route to ensure it displays correctly when the thumbnail is clicked.
3. Edit the content of the new project file as needed.
