const parseConfigData = (jsonString) => {
  try {
    const config = JSON.parse(jsonString);
    
    if (!config.version) {
      throw new TypeError("Missing version property tag.");
    }
    
    console.log("Config loaded safely:", config);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Error breaking code: Invalid JSON formatting text.");
    } else if (error instanceof TypeError) {
      console.error(`Validation error caught: ${error.message}`);
    } else {
      console.error(`General error caught: ${error.message}`);
    }
  } finally {
    console.log("Data parsing scan operation completed.");
  }
};

parseConfigData('{"version": "1.0.0", "theme": "dark"}');
parseConfigData('{"theme": "light"}');
parseConfigData("{ broken_string }");
