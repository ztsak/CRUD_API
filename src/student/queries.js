const getEmployee = "SELECT * FROM Employee" ;
const getEmployeeById = " SELECT * FROM Employee WHERE ID = $1 ";
const addEmployee = "INSERT INTO Employee (ID, LAST_NAME, FIRST_NAME, IS_ACTIVE, DATE_OF_BIRTH) VALUES ($1, $2, $3, $4, $5) ";
const updateEmployee= "UPDATE Employee SET ID = $1 , LAST_NAME = $2 , FIRST_NAME = $3 , IS_ACTIVE = $4 , DATE_OF_BIRTH = $5 WHERE ID = $6 ";
const removeEmployee = "DELETE FROM Employee WHERE ID = $1 ";

module.exports = {
    getEmployee,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    removeEmployee,
};
