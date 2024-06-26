import { useEffect, useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import optionsArr from "assets/optionsArr.json"

interface DropdownMenuProps {
  handleFilter: (option: string) => void
}

const DropdownMenu = ({ handleFilter }: DropdownMenuProps) => {
  const [pathOptions, setPathOptions] = useState<{ pathname: string, options: string[] } | null>(null)
  const [option, setOption] = useState<string>("")

  const pathname = useLocation().pathname.split("/")[1];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value as string)
  }

  console.log("renderizou o DDMenu novamente")

  useEffect(() => {
    console.log("entrou aqui no useEffect do DDMenu")
    const newOptions = optionsArr.find(option => option.pathname === pathname);
    if (newOptions) {
      setPathOptions(newOptions);
      if (newOptions.options[0] !== option) setOption(newOptions.options[0])
    }
  }, [pathname]);

  useEffect(() => {
    console.log("entrou aqui no useEffect 2 do DDMenu")
    if (option !== "") handleFilter(option)
  }, [option])

  return (
    <TextField
      label="select"
      select
      onChange={handleChange}
      value={option}
      sx={{
        width: 200
      }}
    >
      {pathOptions
        && pathOptions.options.map((opt: string) => (
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
