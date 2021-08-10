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
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const cheerio_1 = require("cheerio");
const ROOT_DOMAIN = `https://www.mylovenovel.com/`;
const getNovelDetail = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const html = yield axios_1.default.get(url).then((r) => r.data);
    const $ = cheerio_1.default.load(html);
    const novel = {
        url,
        title: $(".detail h1").text(),
        imageUrl: $(".bookimg img").attr("src"),
        genre: "",
        status: "",
        newest: {
            title: "",
            date: "",
        },
        description: "",
    };
    return novel;
});
const MyLoveNovel = {
    getNovelDetail,
};
exports.default = MyLoveNovel;
