iall:
	ls
build:
	bun bun src/comp.js 
docker:
	docker build --no-cache -f docker/Dockerfile -t doublechaintech/echarts-service-svg  .
rundocker:
	docker run -d --name echarts-service-svg  -p 5000:3000 doublechaintech/echarts-service-svg 
run:
	bun run nodemon
node:
	bun build --entrypoints src/index.js --outdir ./code --target bun
test:
	curl -d @test/sample-chart.json http://localhost:3000/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b
	open http://localhost:3000/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b



