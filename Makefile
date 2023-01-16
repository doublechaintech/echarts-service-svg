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

test:
	curl -d @test/sample-chart.json http://localhost:3000/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b
	open http://localhost:3000/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b

