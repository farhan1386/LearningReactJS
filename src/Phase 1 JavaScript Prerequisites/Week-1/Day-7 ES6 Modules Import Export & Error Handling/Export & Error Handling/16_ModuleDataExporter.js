const ModuleDataExporter = (function() {
  const API_ENDPOINT = "https://core.hub";
  const calculateDelta = (x) => x * 1.18;
  const coreConfiguration = { timeout: 5000 };

  return {
    API_ENDPOINT,
    calculateDelta,
    default: coreConfiguration
  };
})();

const configurationNode = ModuleDataExporter.default;
const { API_ENDPOINT, calculateDelta } = ModuleDataExporter;

console.log(API_ENDPOINT);
console.log(calculateDelta(10));
console.log(configurationNode);
