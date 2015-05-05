import fs from 'mz/fs';

const CONFIG_PATH = '/etc/flummox-playground/config.json';

export default fs.existsSync(CONFIG_PATH) ? require(CONFIG_PATH) : {};
