import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Picker() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'information security', value: 'information security'},
    {label: 'web development', value: 'web development'},
    {label: 'Mobile development', value: 'Mobile development'},
    {label: 'operating system', value: 'operating system'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}

      placeholder="Show Your Courses"
      placeholderStyle={{
      fontSize:17
      }}

      dropDownDirection="BOTTOM"
     
    />
  );
}