"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetcher_repository_1 = __importDefault(require("../repositories/fetcher.repository"));
const constants_1 = require("../utils/constants");
const getMainController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, search, title } = req.query;
    let response;
    try {
        if (category) {
            response = yield (0, fetcher_repository_1.default)(constants_1.url + `category?pagesize=${req.query.pagesize}&page=${req.query.page}&category=${category}&ctr=5`);
        }
        else if (search) {
            response = yield (0, fetcher_repository_1.default)(constants_1.url + `articles?pagesize=${req.query.pagsize}&page=${req.query.pgNo}&search=${search}&ctr=12`);
        }
        else if (title) {
            response = yield (0, fetcher_repository_1.default)(constants_1.url + `detail?title=${title}`);
        }
        else {
            response = yield (0, fetcher_repository_1.default)(constants_1.url + `articles?pagesize=${req.query.pagesize}&page=${req.query.pgNo}&ctr=14`);
        }
        res.status(200).send(response);
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = getMainController;
