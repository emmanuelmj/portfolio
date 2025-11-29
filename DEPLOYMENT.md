# Deployment Guide

Follow these steps to host your portfolio on Vercel.

## 1. Push to GitHub

1.  **Create a New Repository** on GitHub:
    *   Go to [github.com/new](https://github.com/new).
    *   Name it `vertex-portfolio` (or similar).
    *   **Do not** initialize with README, .gitignore, or License (we already have them).
    *   Click **Create repository**.

2.  **Push Your Code**:
    *   Copy the URL of your new repository (e.g., `https://github.com/yourusername/vertex-portfolio.git`).
    *   Run the following commands in your terminal (replace `YOUR_REPO_URL` with the actual URL):

    ```bash
    git remote add origin YOUR_REPO_URL
    git branch -M main
    git push -u origin main
    ```

## 2. Deploy to Vercel

1.  **Sign Up / Log In** to [Vercel](https://vercel.com/).
2.  **Add New Project**:
    *   Click **Add New...** > **Project**.
    *   Select **Continue with GitHub**.
    *   Find your `vertex-portfolio` repository and click **Import**.
3.  **Configure Project**:
    *   **Framework Preset**: Vite (should be auto-detected).
    *   **Root Directory**: `./` (default).
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default).
    *   Click **Deploy**.

## 3. Verify Deployment

*   Wait for the build to complete.
*   Click the **Visit** button to see your live site.
*   Test the contact form (remember to update API keys in `src/components/Contact.jsx` if you haven't already).
