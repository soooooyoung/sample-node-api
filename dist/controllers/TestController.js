var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JsonController, HttpCode, Get, Body, Res, Req, } from "routing-controllers";
import { Inject, Service } from "typedi";
import { TestService } from "../services/TestService";
let TestController = class TestController {
    constructor() {
        this.testService = new TestService();
        // @HttpCode(201)
        // @Post("upload/account/:type")
        // public async uploadTax(
        //   @Body() data: any,
        //   @Param("type") type: any,
        //   @Req()
        //   req: Request,
        //   @Res() res: Response
        // ) {
        //   try {
        //   } catch (e) {
        //     //   logError(e);
        //     return e;
        //   }
        // }
    }
    /**
     * 파일 조회
     */
    fetch(data, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("test");
                this.testService.test();
                return res.status(200).json({
                    status: "ff",
                });
            }
            catch (e) {
                //   logError(e);
                // TODO: error handler
                return e;
            }
        });
    }
};
__decorate([
    Inject(),
    __metadata("design:type", TestService)
], TestController.prototype, "testService", void 0);
__decorate([
    HttpCode(200),
    Get("/"),
    __param(0, Body()),
    __param(1, Req()),
    __param(2, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "fetch", null);
TestController = __decorate([
    Service(),
    JsonController("/test")
], TestController);
export { TestController };
//# sourceMappingURL=TestController.js.map