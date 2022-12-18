// <=================================================>
// IMPORTS
import del from "del";
import config from "../config";
// <=================================================>

// <=================================================>
// DELETE THE BUILD FOLDER
const clean = () => del(config.dest.root);

export default clean;
// <=================================================>
