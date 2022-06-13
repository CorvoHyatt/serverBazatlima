"use strict";
exports.__esModule = true;
exports["default"] = {
    database: {
        host: 'localhost',
        user: process.env.HOSTUSER || 'root',
        password: process.env.HOSTPASS || '',
        database: (process.env.HOSTPREFDB || '') + 'bazatlima',
        dateStrings: true
    }
};
