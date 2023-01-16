all:
	ls
build:
	bun bun src/comp.js 
docker:
	docker build --no-cache -f docker/Dockerfile -t doublechaintech/echarts-server-svg  .
rundocker:
	docker run -d --name echarts-server-svg  -p 4000:3000 doublechaintech/echarts-server-svg 
run:
	bun run nodemon
