const pool = require ('../../db');
const queries = require('./queries');


//=====================================get all================================================================//
const getEmployee = (req, res ) => {
    pool.query(queries.getEmployee, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
//======================================create Employee================================================================//
const addEmployee = (req, res) => {                     
    const { id, last_name, first_name, is_active, date_of_birth} = req.body;

    pool.query(queries.addEmployee, [id, last_name, first_name, is_active, date_of_birth], (error, results) => {
        if (error) throw error;
        res.status(201).send( id);  
    }                                       
    );
};
//=======================================get one by id===============================================================//
const getEmployeeById = (req, res ) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getEmployeeById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
//=======================================updateEmployee===============================================================//

const updateEmployee = (req, res) => {
    const ID = parseInt (req.params.id);
    const {id, last_name, first_name, is_active, date_of_birth} = req.body;

    pool.query(queries.getEmployeeById, [ID], (error,results) => {
        const noEmployeeFound = !results.rows.length; 
        if(noEmployeeFound){
            res.send("Employee does not exist in db");
        }; 

        pool.query (queries.updateEmployee, [id, last_name, first_name, is_active, date_of_birth, ID], (error,results) =>{
            if (error) throw error;
            res.status(200).send("Employee updated successfully");
        });
    });
};  

//=======================================deleteEmployee===============================================================//
const removeEmployee = (req,res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getEmployeeById, [id], (error,results) => {
        const noEmployeeFound = !results.rows.length; 
        if(noEmployeeFound){
            res.send("Employee does not exist in db");
        };
        pool.query(queries.removeEmployee, [id], (error,results) => {
            if (error) throw error;
            res.status(200).send("employee deleted Successfully!");
        });
    });
};

//======================//



module.exports = { 
    getEmployee,
    addEmployee,
    getEmployeeById, 
    updateEmployee,
    removeEmployee,
  
    
};