"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AuthService = exports.AuthService = class AuthService {
    constructor(UserService, userModel) {
        this.UserService = UserService;
        this.userModel = userModel;
    }
    async login(createUserdto) {
        const userExist = await this.UserService.findUserByEmail(createUserdto.email);
        if (!userExist) {
            throw common_1.NotFoundException;
        }
        let checkPass = await bcrypt.compare(createUserdto.password, userExist.password);
        if (!checkPass) {
            throw Error('Invalid password!');
        }
        let userData = userExist;
        let auth_token = await JWT.sign(userData.toJSON(), 'SECRETkey@123');
        return await this.userModel.findByIdAndUpdate(userExist._id, { auth_token: auth_token }, { new: true });
    }
    async logout(createUserdto) {
        await this.userModel.findOneAndUpdate({ auth_token: createUserdto.auth_token }, { auth_token: null });
        return true;
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [user_service_1.UserService,
        mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map