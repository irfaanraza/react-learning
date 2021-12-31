'use strict';

/**
 * process-whowepost service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-whowepost.process-whowepost');
