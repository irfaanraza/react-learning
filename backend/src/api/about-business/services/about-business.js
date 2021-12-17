'use strict';

/**
 * about-business service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-business.about-business');
