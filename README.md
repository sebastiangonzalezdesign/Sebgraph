<!-- How to add a new project -->

# Thumbnail

1. Add the thumbnail information in data.jsx under the appropriate category.
2. Use the "protected" property to add password protection to the project if required.
3. Use the "showProject" property to control whether the project is visible. If you don’t want the project indexed by search engines, use the SEO component and update `seoConfig` to set `robots: 'noindex, nofollow'` for that project.
4. Add the new background color in abstracts/\_colors.scss, then in \_tokens.scss, and finally add the new class in utilities/\_cards.scss.

# Project

1. Duplicate an existing project file and rename it. Example: pages/projects/NewProject.tsx.
2. In components/RouterSite.tsx, import the newly created project file and set up the route to ensure it displays correctly when the thumbnail is clicked.
3. Edit the content of the new project file as needed.
4. After making changes, rebuild your project and upload the updated build and files to your hosting provider to deploy the new project.

# Password Protection Functions

This folder contains Firebase Functions that manage password protection for projects in the portfolio.

## Changing the Portfolio Password

1. Copy the example file: `cp hash-password.example.js hash-password.js`
2. Edit `hash-password.js` and replace the placeholder with your desired password
3. Run the script: `node hash-password.js`
4. Copy the generated hash
5. Update the hash in Firebase Firestore:
    - Collection: `settings`
    - Document: `access`
    - Field: `passwordHash`
6. Test the new password on your site

**Important: Never commit hash-password.js to Git**

## How it works

1. When a user enters a password on the password page, it's sent to a Firebase Function
2. The function retrieves the stored hash from Firestore
3. The entered password is compared with the stored hash using bcrypt
4. If the comparison succeeds, access is granted to protected projects
5. For security, the actual password is never stored anywhere, only a secure hash

## Environment Setup

This project requires Firebase configuration. Copy the `.env.example` file to `.env` and update with your Firebase credentials:

```bash
cp .env.example .env
# Then edit .env with your Firebase configuration
```
