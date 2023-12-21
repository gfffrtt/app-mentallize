FROM oven/bun:1 as base
FROM base AS deps

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

FROM base AS builder
COPY --from=node:18 /usr/local/bin/node /usr/local/bin/node

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV DATABASE_URL postgresql://root:root@localhost:5432/app-mentallize?schema=public
ENV JWT_SECRET qDTUQxBxh9lXRzB8zzXUSA==
ENV BASE_URL http://app.mentallize.com

RUN bun run db:generate
RUN bun run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000/tcp

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["bun", "run", "server.js"]