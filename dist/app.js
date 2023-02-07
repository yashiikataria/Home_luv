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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 2000;
app.use('/public', express_1.default.static('public'));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let value;
    let data;
    if (req.query.category) {
        value = yield fetch(`https://stage-api.homluv.com/api/nlc/category?pagesize=${req.query.pagesize}&page=${req.query.pgNo}&category=${req.query.category}&ctr=5`);
    }
    else if (req.query.search) {
        value = yield fetch(`https://stage-api.homluv.com/api/nlc/articles?pagesize=${req.query.pagesize}&page=${req.query.pgNo}&search=${req.query.search}&ctr=12`);
    }
    else if (req.query.tile) {
        value = yield fetch(`https://stage-api.homluv.com/api/nlc/detail?title=${req.query.tile}`);
    }
    else {
        value = yield fetch(`https://stage-api.homluv.com/api/nlc/articles?pagesize=${req.query.pagesize}&page=${req.query.pgNo}&ctr=14`);
    }
    data = yield value.json();
    res.send(data);
}));
app.get('/allarticles', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendFile(path_1.default.join(__dirname, '../src/main.html'));
}));
app.listen(port, () => {
    console.log(`Connected succesfully on port ${port}`);
});
