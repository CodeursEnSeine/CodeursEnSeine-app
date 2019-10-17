import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, AspectRatioBox, Image, Flex, Stack, Heading, Button, Icon } from '@chakra-ui/core';
import logo from './logo.svg';
import routes from '../../routes';

const propTypes = {};
const defaultProps = {};

export const Topbar = (props) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const { isTopLevel, title } = (Object.values(routes).find(x => x.pathname === pathname) || {});

  return (
    <Flex
      backgroundColor="white"
      shadow="md"
      minH="3.6rem"
      {...props}
    >
      <Stack isInline px="4" py="2" align="center" spacing="4">
        {isTopLevel && (
          <AspectRatioBox w="2.2rem" ratio="1">
            <Image
              src={logo}
              rounded="md"
              overflow="hidden"
              backgroundColor="brand.700"
            />
          </AspectRatioBox>
        )}
        {!isTopLevel && (
          <Button
            aria-label="Back"
            variant="ghost"
            ml="-0.6rem"
            px="0"
            onClick={() => goBack()}
          >
            <Icon name="arrow-back" size="1.4rem" />
          </Button>
        )}
        <Heading size="sm">
          {!!title && (
            <>
              {title}
              <Box fontSize="0.7rem" color="gray.400">
                Codeurs en Seine &bull; #CODEURS2019
              </Box>
            </>
          )}
          <Box id="topbar-title" />
        </Heading>
      </Stack>
    </Flex>
  );
};

Topbar.propTypes = propTypes;
Topbar.defaultProps = defaultProps;
