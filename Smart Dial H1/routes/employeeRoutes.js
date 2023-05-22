const express = require('express');
const router = express.Router();
const Employee = require('../model/employee');

router.post('/employee', async (req, res) => {
    try {
      const employee = new Employee(req.body);
      await employee.save();
      res.status(201).json(employee);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.get("/employee", async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  router.delete('/employee/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the employee by ID and remove it
      const deletedEmployee = await Employee.findByIdAndRemove(id);
  
      if (!deletedEmployee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
  
      return res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
      console.error('Error deleting employee:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
module.exports = router;


