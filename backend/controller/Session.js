//const mongoose = require('mongoose');
const Session = require('../model/session');
//const userModel = require('../model/userModel');
//const mentorModel = require('../model/mentorModel');

exports.addsession = async (req, res) => {
    try {
      const { title, description, price, category, ratingandreview, imagelink} = req.body;
  
      console.log('Received request to add session.');
  
      
      console.log('Creating a new session object...');
      const session = new mentor({
        id,
        title,
        category,
        price,
        imagelink,
        ratingandreview,
        description
      });
  
      
      console.log('Saving the session to the database...');
      await session.save();
  
      
      console.log('sesssion added successfully!');
      res.status(201).json({ message: 'session added successfully!', session });
    } catch (error) {
      // If any error occurs, log the error and send an error response
      console.error('Error adding product:', error);
      res.status(500).json({ message: 'Oops! Something went wrong while adding the session.', error });
    }
  };
  
  




exports.getsession = async (req, res) => {
    try {
      const sessionId = req.Session.id; // Treat the id as a string
      console.log('Searching for session with id:', sessionId);
  
      const sessionList = await mentor.find(); // Fetch all mentors
      if (!sessionList.length) {
        console.log('sesssion list is empty.');
        return res.status(404).json({ message: 'session list is empty' });
      }
  
     
      const session = sessionList.find(session => Session.id === sessionId);
      if (!session) {
        console.log('session not found.');
        return res.status(404).json({ message: 'session not found' });
      }
  
      console.log('session found:', session);
      res.json(session);
    } catch (error) {
      console.error('Error finding session:', error);
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  
  
  exports.getallsession = async (req, res) => {
    console.log('Received request to get session');
    try {
      console.log('Fetching sessions from the database...');
      const sessions = await mentor.find();
      console.log('sessions fetched successfully:', sessions);
      console.log(`Total number of sessions fetched: ${sessions.length}`);
      res.json(sessions);
    } catch (error) {
      console.error('Error fetching sessions:', error);
      res.status(500).json({ message: 'Server error', error });
    }
  };
 