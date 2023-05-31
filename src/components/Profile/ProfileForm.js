import React from 'react';
import classes from './Profile.module.css';
import { Link } from 'react-router-dom';

function ProfileForm() {
  return (
    <Link to='/'>
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
     
    </form>
    </Link>
  )
}

export default ProfileForm;
