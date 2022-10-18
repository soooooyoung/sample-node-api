export const env = {
    isDevelopment: process.env.NODE_ENV === "development",
    isProduction: process.env.NODE_ENV === "production",
    isTest: process.env.NODE_ENV === "test",
    app: {
        port: Number(process.env.PORT) || 9000,
    },
};
//# sourceMappingURL=env.js.map