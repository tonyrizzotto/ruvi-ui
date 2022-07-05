FROM node:17-alpine as build
WORKDIR /app
COPY package*.json /app/
COPY ./scripts /app/
COPY ./server /app/

RUN npm install
RUN npm install --location=global npm@8.13.2
RUN npm install n --location=global
COPY ./ ./
RUN npm run build
RUN node -v


FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 8080
ENV HOST 0.0.0.0
RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
COPY --chown=node --from=build /app/build /usr/share/nginx/html
COPY --chown=node --from=build /app/scripts /usr/share/nginx/html/scripts
COPY --chown=node --from=build /app/server /usr/share/nginx/html/server
EXPOSE 8080

CMD ["./usr/share/nginx/html/scripts/startup.sh"]
# CMD [ "nginx", "-g", "daemon off;" ]