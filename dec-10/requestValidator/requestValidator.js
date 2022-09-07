function requestValidator(request) {
  const { method, uri, message } = request;
  // eslint-disable-next-line no-useless-escape
  const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  if (!uri.match(regex)) {
    throw new Error('Invalid request header: Invalid URI');
  }
  if (method !== 'GET') {
    throw new Error('Invalid request header: Invalid Method');
  }
  if (message === undefined) {
    throw new Error('Invalid request header: Invalid Message');
  }
  return request;
}

export { requestValidator };
