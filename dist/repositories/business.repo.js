"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBusiness = exports.getBusinesses = void 0;
const Business_1 = __importDefault(require("../models/Business"));
const getBusinesses = async () => Business_1.default.find();
exports.getBusinesses = getBusinesses;
const createBusiness = async (data) => {
    return Business_1.default.create(data);
};
exports.createBusiness = createBusiness;
