FROM bitnami/minideb:bullseye as bun-base

WORKDIR /work/
RUN chown 1001 /work \
    && chmod "g+rwX" /work \
    && chown 1001:root /work
COPY --chown=1001:root dist/bun /work/
COPY --chown=1001:root src /work/src
COPY --chown=1001:root node_modules /work/node_modules

EXPOSE 3000
USER 1001

CMD ["./bun","src/index.js" ]


