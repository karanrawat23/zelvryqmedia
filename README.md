# ZELVRYQ — Digital Marketing, Branding & Technology Agency

A premium dark-themed agency website built with [Lovable](https://lovable.dev).

## Build with Lovable

Open the project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Connect to GitHub for VS Code

1. In the Lovable editor, open the **Plus (+)** menu in the chat input (bottom left).
2. Select **GitHub → Connect project**.
3. Authorize the Lovable GitHub app.
4. Choose the GitHub account or organization where the repository should be created.
5. Click **Create Repository** — Lovable will push the current codebase there.

Once the repository exists, you can open it in VS Code:

```sh
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
code .
```

## Local Development

Requires **Node.js** and **npm** — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
npm i
npm run dev
```

The dev server will start at `http://localhost:8080`.

### Project structure notes

- Content is data-driven from `src/data/site.ts`, `src/data/services.ts`, and `src/data/content.ts`.
- Brand colors, fonts, and animations are defined in `src/styles.css`.
- Placeholder values (email, social links, demo case studies, etc.) should be replaced in `src/data/site.ts` and `src/data/content.ts` before launch.

## Built with

- TanStack Start
- TypeScript
- React 19
- Tailwind CSS
- shadcn/ui
