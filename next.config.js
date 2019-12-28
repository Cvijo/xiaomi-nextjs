const fetch = require('isomorphic-unfetch');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/products': { page: '/products' }
    };
    const res = await fetch('https://offers.xiaomipedia.com/api/v1/products?api_key=ali7w4fhopq34ifn93784fg');
    const data = await res.json();

    data.forEach(product => {
      paths[`/products/${product.id}`] = { page: '/products/[id]', query: { id: product.id } };
    });

    return paths;
  }
};