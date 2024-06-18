import { useEffect, useState } from "react";
import { useHandleSelectorFilter } from "state/hooks/customHooks/useHandleSelectorFilter";
import { TextField, MenuItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getDropdownOptions } from "utils/getDropdownOptions";


const DropdownMenu = () => {
  const [option, setOption] = useState<string>("")

  var optionsArr: string[] = [];
  const pathname = useLocation().pathname;

  const handleFilter = useHandleSelectorFilter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value as string)
  }

  useEffect(() => {
    optionsArr = getDropdownOptions(pathname)

    !option
      ? handleFilter(optionsArr[0])
      : handleFilter(option)
  }, [handleFilter, pathname ]);

  return (
    <TextField
      label="select"
      select
      onChange={handleChange}
      sx={{
        width: 200
      }}
    >
      {optionsArr.map((option) => (
        <MenuItem
          value={option}
        >
          {option}
        </MenuItem>
      ))}
    </TextField>

  );
};

export default DropdownMenu;
