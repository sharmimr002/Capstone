import React, {useState} from 'react';
import Layout from './Layout';

const CreateUser=()=>{
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); // admin, technician, customer, etc.
  const [status, setStatus] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
}

    const newUser = {
      firstName,
      lastName,
      email,
      username,
      phone,
      password,
      role,
      status
    };
    return(
<div>
        <Layout />
        <div className='container'>
        <form action="" className='inputs' onSubmit={handleSubmit}>
            <div className='input'>
              <input required type='text' name='firstName' placeholder='First Name' 
              onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='input'>
              <input required type='text' name='lastName' placeholder='Last Name' 
              onChange={(e) => setLastName(e.target.value)}/>
            </div>
            {/* {errors.email===""?null:<span id='redError'>{errors.email}</span>} */}
            <div className='input'>
              <input required type='password' name='password' placeholder='Password' 
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='input'>
              <input required type='password' name='confirmPassword' placeholder='Confirm Password' />
            </div>
        <select value={role} onChange={(e) => setRole(e.target.value)} required className='input'>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="technician">Technician</option>
          <option value="customer">Customer</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} required className='input'>
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <div className='submit-container'>
        <button type="submit">Create User</button></div>
            </form>
            </div>
    </div>
    );
    
}


export default CreateUser;