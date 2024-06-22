import { useEffect, useState } from "react";
import { useHandleSelectorFilter } from "state/hooks/customHooks/useHandleSelectorFilter";
import { TextField, MenuItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import optionsArr from "assets/optionsArr.json"



const DropdownMenu = () => {
  const [pathOptions, setPathOptions] = useState<{ pathname: string, options: string[] }>()
  const [option, setOption] = useState<string>("")

  const handleFilter = useHandleSelectorFilter();
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
    // if (option !== "") handleFilter(option)
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
