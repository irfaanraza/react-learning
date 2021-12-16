'use strict';

/**
 * whoweare service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whoweare.whoweare');
