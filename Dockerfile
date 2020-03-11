
FROM node:12.16.1

RUN mkdir '/presentation'

WORKDIR /presentation

COPY ./*.json /presentation/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

COPY ./src /presentation/src

