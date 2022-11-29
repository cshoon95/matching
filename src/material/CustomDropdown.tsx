import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DropdownOptionsType } from "../types/store";

function CustomDropdown(options: DropdownOptionsType) {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{options.title}</InputLabel>
                <Select
                labelId={options.id}
                id={options.id}
                value={options.titleEn}
                label={options.title}
                onChange={options.onChange((event: SelectChangeEvent) => {})}
                >
                    {options.items.map((item: {code: string, label: string}, index: number) => {
                        return <MenuItem key={item.code + '-' + index}value={item.code}>{item.label}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default CustomDropdown;
