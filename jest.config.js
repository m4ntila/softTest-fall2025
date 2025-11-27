module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text", "clover"],
  coveragePathIgnorePatterns: ["/node_modules/", "/src/.internal/"]
};
