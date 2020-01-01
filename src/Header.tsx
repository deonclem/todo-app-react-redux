import React, { useState } from "react";
import {
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem
} from "@chakra-ui/core";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };
  const frFlag = (
    <span role="img" aria-label="fr-flag">
      🇫🇷
    </span>
  );
  const enFlag = (
    <span role="img" aria-label="en-flag">
      🇬🇧
    </span>
  );
  return (
    <Flex justifyContent="end">
      <Menu>
        <MenuButton as={Button}>{lang === "fr" ? frFlag : enFlag}</MenuButton>
        <MenuList>
          <MenuItem onClick={() => changeLanguage("en")}>{enFlag}</MenuItem>
          <MenuItem onClick={() => changeLanguage("fr")}>{frFlag}</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
