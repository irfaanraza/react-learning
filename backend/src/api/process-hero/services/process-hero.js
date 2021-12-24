'use strict';

/**
 * process-hero service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-hero.process-hero');
