export function getStrapiMedia(url) {
  if (url.startsWith("/")) {
    return process.env.strapiBaseUri ? `${process.env.strapiBaseUri}${url}` : `http://127.0.0.1:1337${url}`;
  }
  return process.env.strapiBaseUri ? `${process.env.strapiBaseUri}/${url}` : `http://127.0.0.1:1337/${url}`;;
}
