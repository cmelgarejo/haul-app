# ⚡️ HAUL assignment - NestJS + NextJS

## pre-requisites

- [pnpm](https://pnpm.io/installation)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)

## Running the app

```bash
# development
pnpm run dev
# or
npm run dev # also works
```

## Development

### Running the apps

Copy `apps/web/.env.example` to `apps/web/.env.local` file inside the `web` making sure to
set the `NEXT_PUBLIC_NESTJS_SERVER` variable to the NestJS server URL:

```env
NEXT_PUBLIC_NESTJS_SERVER=http://localhost:4000
```

Then install the dependencies:

```bash
pnpm install
pnpm dev       # starts local server for both backend (NestJS app) and frontend (NextJS app)
```
