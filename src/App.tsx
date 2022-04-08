import { useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { data } from "./utils/data";
import { useArrayData } from "./utils/hooks/useArrayData";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenDropdown = () => setOpen(!open);
  const [dropdownValues,,handleSelectItem,removeItem] = useArrayData([]);
  return (
    <div>
     <Dropdown
         options={data}
         value={dropdownValues}
         isOpened={open}
         onSelectItem={handleSelectItem}
         handleOpenDropdown={handleOpenDropdown}
         removeItem={removeItem}
      />
    </div>
  );
}

export default App;
