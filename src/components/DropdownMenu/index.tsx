import { useEffect, useState } from "react";
import { TextField, MenuItem } from "@mui/material";

interface DropdownMenuProps {
  handleFilter: (option: string) => void,
  options: string[],
  defaultValue?: string
}

const DropdownMenu = ({ handleFilter, options }: DropdownMenuProps) => {
  const [option, setOption] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value as string)
  }

  useEffect(() => {
    !option && setOption(options[0])
    handleFilter(option)
  }, [option])

  return (
    <TextField
      label="select"
      select
      onChange={handleChange}
      value={option}
      sx={{
        width: 200,
        marginBottom: 2
      }}
    >
      {options.map((opt: string) => (
        <MenuItem
          value={opt}
          key={opt}
        >
          {opt}
        </MenuItem>
      ))
      }
    </TextField>

  );
};

export default DropdownMenu;
