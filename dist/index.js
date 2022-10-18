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
import "reflect-metadata";
import * as dotenv from "dotenv";
import { TestServer } from "./server";
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv.config();
        const server = new TestServer();
        yield server.startServer();
    });
}
start().catch((err) => {
    //   logError(
    //     `SERVER SETUP ERROR
    //         ${err.message}`
    //   );
    console.log(err.message);
    process.exit(-1);
});
//# sourceMappingURL=index.js.map