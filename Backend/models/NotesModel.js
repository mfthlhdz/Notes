import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Notes = db.define('notes',{
    title: DataTypes.STRING,
    datetime: DataTypes.STRING,
    note: DataTypes.STRING
},{
    freezeTableName:true
});

export default Notes;

(async()=>{
    await db.sync();
})();