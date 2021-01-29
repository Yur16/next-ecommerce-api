'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) => {
    console.log('Starting populate...')
    
    const options = {
      sort: "popularity",
      page: "1",
      ...ctx.query,
    };

    await strapi.services.game.populate(options)

    ctx.send("Finished populating")
  }
};
