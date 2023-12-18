ps:
	sudo docker compose -f docker-compose.local.yaml ps

run:
	sudo docker compose -f docker-compose.local.yaml up --build -d

stop:
	sudo docker compose -f docker-compose.local.yaml down -v

deploy:
	sudo docker compose -f docker-compose.production.yaml up --build -d

shutdown:
	sudo docker compose -f docker-compose.production.yaml down -v

migrate:
	sudo docker exec -it app-mentallize-app-1 bun db:push 