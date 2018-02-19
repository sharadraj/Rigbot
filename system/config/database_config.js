var node_env = process.env.NODE_ENV;
var config = {};
const MONGODB_LOCAL = "mongodb://localhost:27017/rigbot";

if(node_env === "prod") {
    config = {
        "DBURL" : MONGODB_PROD,
    };
} else if(node_env === "staging"){
    config = {
        "DBURL": MONGODB_STAGE,
    };
} else if(node_env == "dev"){
    config = {
        "DBURL": MONGODB_DEV,
    };
} else {
    config = {
        "DBURL" : MONGODB_LOCAL,
    };
}

module.exports = config;

