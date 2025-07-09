type envVars = {
    [key: string as `ENV_${string}`]: string; 
};


let obj: envVars = {
    ENV_var_1: "env1",
    var2: "env2",
    ENV_API_URL: "https://api.example.com",
    ENV_MODE: "production",
}