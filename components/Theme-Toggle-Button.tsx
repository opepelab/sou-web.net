import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <div className="toggle">
      <IconButton
        aria-label="Toggle theme"
        size="sm"
        colorScheme={useColorModeValue("purple", "orange")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      />
    </div>
  );
};

export default ThemeToggleButton;
