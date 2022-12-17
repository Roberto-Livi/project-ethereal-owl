import React from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { professionOptions } from '../../helpers/users/professions';
import { updateProfileSearch } from '../../store/actions';
import { getUsers } from '../../helpers/users/users';


const ProfessionDropdown = () => {

 const dispatch = useDispatch();

 const handleOnChange = async (selection) => {
   const allUsers = await getUsers(selection.value);
   const items = [];
   allUsers.map((user) => {
     if (user.profession === selection.value) {
       items.push({
         header: user.codename,
         address: user.userAddress,
         meta: user.profession,
         description: user.description,
       });
     }
   });

   dispatch(updateProfileSearch(items));
 };


 return (
   <Dropdown
     placeholder="Select Profession"
     fluid
     search
     selection
     options={professionOptions}
     width={20}
     onChange={(e, selected) => handleOnChange(selected)}
     style={{ marginBottom: "20px" }}
   />
 );

}

export default ProfessionDropdown;