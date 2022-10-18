var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as express from "express";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import { Container } from "typedi";
import { useContainer, useExpressServer } from "routing-controllers";
import { routingControllerOptions } from "./configs/RoutingConfig";
export class TestServer {
    constructor() {
        this.PORT = Number(process.env.PORT) || 9000;
        this.app = express();
        this.setConfig();
    }
    /**
     * Start server.
     */
    startServer() {
        return __awaiter(this, void 0, void 0, function* () {
            useContainer(Container);
            console.log("routing", routingControllerOptions);
            useExpressServer(this.app, routingControllerOptions);
            return new Promise((resolve, reject) => {
                this.app
                    .listen(this.PORT, () => {
                    console.log(`SERVER START ON PORT : ${this.PORT}`);
                    return resolve();
                })
                    .on("error", (e) => {
                    console.log("SERVER START ERROR : ", e);
                    return reject(e);
                });
            });
        });
    }
    /**
     * set express app config
     */
    setConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use(compression());
            this.app.use(bodyParser.json({ limit: "50mb" }));
            this.app.use(bodyParser.urlencoded({
                limit: "50mb",
                extended: true,
                parameterLimit: 100000,
            }));
        });
    }
}
//# sourceMappingURL=server.js.map