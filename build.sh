env https_proxy=http://192.168.1.250:1087 git pull
docker build --no-cache -f docker/Dockerfile -t doublechaintech/echarts-server-svg  .
docker rm -f echarts-server-svg
docker run -d --name echarts-server-svg -p 3000:3000 doublechaintech/echarts-server-svg



