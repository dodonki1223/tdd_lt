ARG NODE_VERSION
FROM node:$NODE_VERSION as builder

WORKDIR /usr/src

COPY package.json yarn.lock ./

# see: https://yarnpkg.com/getting-started/migration#step-by-step
ARG YARN_VERSION
RUN yarn set version $YARN_VERSION \
 && echo nodeLinker: \"node-modules\" >> .yarnrc.yml \
 && yarn

COPY .dockerdev/Apkfile /tmp/Apkfile

RUN apk add --no-cache \
    $(cat /tmp/Apkfile | xargs) \
 && rm -rf /tmp/*

CMD [ "node"]
