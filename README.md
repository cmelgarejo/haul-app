# HAUL assignment - NestJS + NextJS + MongoDB ⚡️

I have created this demo not just using the XML provided in the description but also
converting the XML to JSON and using the JSON as the source of data for the frontend.

## Features

- [x] NestJS
- [x] NextJS
- [x] MongoDB
- [x] Docker (for MongoDB)
- [x] Deployment in [Railway](https://railway.app/)

## Demo

Here you go: [link](https://haul-app.cmelgarejo.dev/)

## Swagger

Swagger is available at the following URL: [link](https://haul-app.cmelgarejo.dev/docs)
(also in the `/docs` on the local development environment)

## pre-requisites

- [pnpm](https://pnpm.io/installation)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- [Docker](https://docs.docker.com/get-docker/)

## Development

### Running the apps

Copy `apps/web/.env.example` to `apps/web/.env.local` file inside the `web` making sure to
set the `NEXT_PUBLIC_API_HOST` variable to the NestJS server URL:

```env
NEXT_PUBLIC_API_HOST=http://localhost:4000
```

First, start the MongoDB server using Docker:

```bash
docker-compose up -d
```

Then, start using pnpm from now on, initialize all the packages:

```bash
pnpm install
```

Then, start the dev servers

```bash
pnpm dev
```

## Seeding the db

Make sure the dockerized mongo is running, also note the `.env.example` file in the root directory, it should
contain the following:

```env
MONGO_URL="mongodb://root:haul-app@localhost:27018/haul-app?authSource=admin"
```

Copy the file and rename it to `.env` and make sure the `MONGO_URL` is pointing to the correct port.

If you ran the source as is, this should be the ports specified in the `docker-compose.yml` file.

Run the following command to seed the database with the XML data:

```bash
pnpm seed
```

It will use the script contained in `mongo-init/seed.js` and use the XML provided in the source,
convert it to JSON and insert all data into the corresponding collections.
