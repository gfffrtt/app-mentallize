ps:
	sudo docker compose -f docker-compose.development.yaml ps

run:
	sudo docker compose -f docker-compose.development.yaml up --build -d

stop:
	sudo docker compose -f docker-compose.development.yaml down -v

deploy:
	sudo docker compose -f docker-compose.production.yaml up --build -d

shutdown:
	sudo docker compose -f docker-compose.production.yaml down -v

generate:
	sudo docker exec -it app-mentallize-app-1 bun db:generate

migrate:
	sudo docker exec -it app-mentallize-app-1 bun db:push

logs:
	sudo docker compose -f docker-compose.development.yaml logs app

studio:
	sudo docker exec -it app-mentallize-app-1 bunx prisma studio
