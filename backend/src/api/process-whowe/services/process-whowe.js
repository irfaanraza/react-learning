'use strict';

/**
 * process-whowe service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-whowe.process-whowe');
