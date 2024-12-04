const apexHost = location.host.startsWith("www.")
  ? location.host.slice(4)
  : location.host;

self.__uv$config = {
  bare: [
    `/bare1/`,
    `/bare2/`,
    `/bare3/`
  ],
    prefix: '/service/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
