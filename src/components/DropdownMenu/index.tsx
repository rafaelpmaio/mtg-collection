import { useEffect, useState } from "react";
import { useHandleSelectorFilter } from "state/hooks/customHooks/useHandleSelectorFilter";
import { TextField, MenuItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import selectOptions from "assets/selectOptions.json"


const defaultOption = selectOptions[0].options[0];

const DropdownMenu = () => {
  const [option, setOption] = useState<string>(defaultOption)
  const [pathOptions, setPathOptions] = useState<{ pathname: string, [key: string]: any }>()

  const handleFilter = useHandleSelectorFilter();
  const pathname = useLocation().pathname.split("/")[1];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value as string)
  }

  useEffect(() => {
    setPathOptions(selectOptions.find(option => option.pathname === pathname))
    handleFilter(option)
  }, [handleFilter, pathname]);

  return (
    <TextField
      label="select"
      select
      onChange={handleChange}
      defaultValue={defaultOption}
      sx={{
        width: 200
      }}
    >
      {pathOptions
        && pathOptions.options.map((option: string) => (
          <MenuItem
            value={option}
          >
            {option}
          </MenuItem>
        ))
      }
    </TextField>

  );
};

export default DropdownMenu;
