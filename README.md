# Status Page

Open-source status page to keep track of your favorite url.

<details>
  <summary>Screenshot</summary>

  ![Screenshot 2025-06-05 at 16-18-21 ](https://github.com/user-attachments/assets/d45199c0-891d-4010-9410-b6d9781db075)

</details>

## Tech Stack

- **Framework**: [Nuxt](https://nuxt.com/)
- **UI Library**: [nuxt/ui](https://ui.nuxt.com/)
- **Content**: [nuxt/content](https://content.nuxt.com/)

## Getting Started

Make sure to install the dependencies with [pnpm](https://pnpm.io/installation#using-corepack)

### 1. Clone the Repo

Start by cloning this repo to your local machine and navigating into the directory.

```bash
git clone https://github.com/roiLeo/open-status
cd open-status
```

### 2. Install Dependencies

Then, install the project dependencies:

```bash
pnpm install
```

### 3. Set Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

### 4. Setup new endpoint

Create a new yaml file inside `/content/urls`
(e.g. wikipedia.yaml)

```yaml
url: "https://www.wikipedia.org/"
title: "Wikipedia"
description: "The Free Encyclopedia"
```

### 5. Run health-check

In order to scan endpoints, run the following commands:

```bash
sh .script/health-check.sh
```

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FroiLeo%2Fopen-status) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/roiLeo/open-status)

Checkout the [deployment documentation](https://nuxt.com//guide/deploy/presets) for more information.
