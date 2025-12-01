"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBusinesses = exports.createBusiness = void 0;
const BusinessService = __importStar(require("../services/business.service"));
const createBusiness = async (req, res) => {
    try {
        const created = await BusinessService.addBusiness(req.body);
        return res.status(201).json(created);
    }
    catch (err) {
        console.error("createBusiness error:", err);
        return res
            .status(err?.status || 500)
            .json({ message: err?.message || "Failed to create business" });
    }
};
exports.createBusiness = createBusiness;
const getBusinesses = async (_req, res) => {
    try {
        const list = await BusinessService.listBusinesses();
        return res.json(list);
    }
    catch (err) {
        console.error("getBusinesses error:", err);
        return res
            .status(500)
            .json({ message: err?.message || "Failed to load businesses" });
    }
};
exports.getBusinesses = getBusinesses;
