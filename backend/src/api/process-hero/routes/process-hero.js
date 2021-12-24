'use strict';

/**
 * process-hero router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::process-hero.process-hero');
