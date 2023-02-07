"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_model_1 = require("../models/data.model");
function ModelMapping(data) {
    let middleWareResponse = [];
    data.map((item) => {
        let mappedData = new data_model_1.Model(item);
        middleWareResponse.push(mappedData);
    });
    return middleWareResponse;
}
exports.default = ModelMapping;
