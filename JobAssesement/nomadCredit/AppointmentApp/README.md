# Nomad take-home challenge
 
 
* **Ask:**
 
     * _"Prototype a web application for scheduling an appointment"_
 
* **Input:**
 
   *  "Given a [dataset](./lib/tasks/coaches.csv) that contains the active coaches and their weekly schedule of their available hours, Output the following User Stories:"
 
         
* **Output:**
        
    * As a User, I want to see which coaches I can schedule with.
    
    * As a User, I want to see what 30 minute timeslots are available to schedule with a particular coach.
 
    
    * As a User, I want to book an appointment with a coach at one of their available times.
 
               
* **Requirements:**
 
     * You can't do it all. We respect your time, and expect that you will have to make choices and tradeoffs for what is in scope for your deliverable.
     
     * Quality over quantity: We’d like to see your solution whether it’s working or not. Clean, well written & concise code is more important than a working solution.
 
     
     * Don't worry about authentication. Assume a non-authenticated experience to keep things simple.
 
     * Stack.
        * Ruby
        * Rails 
        * Bootstrap
     * Database (optional)
        * Postgres
 
* **Documentation** 
 
  * System Requirements: what platform/service should your solution be deployed too
  * Build/Run Instructions
  * Challenges or Issues you encountered. If you were able to overcome them, how you did it. If you didn’t overcome them, why do you think that is.
  * Extra Credit: Please mention anything you’d like to showcase that is beyond the scope of this challenge 
 
* **Delivery Options (one of the following):**
 
  * Link to public GitHub repo
  * File Share Link (Google Drive, Dropbox, etc.)
  * Zipped & Emailed
 
### Local Setup
 
* `bundle install`
* `bundle exec rails db:setup`
* `bundle exec rails import:all_data:from_csv`
 
### Run App Locally
 
* `bundle exec rails s`
* `http://localhost:3000/`
