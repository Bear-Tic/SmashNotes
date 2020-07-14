import React from 'react';
import {
  Flex, List, ListItem, Text, useTheme, Box, PseudoBox,
} from '@chakra-ui/core';
import { Icon } from 'components';
import {
  Link as RouterLink,
  useRouteMatch,
} from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const MenuCorner = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" {...props}>
    <path fillRule="evenodd" d="M19.989,0.137V0.04c0,0.032-0.001,0.064-0.001,0.096c-0.052,10.976-8.965,19.858-19.953,19.858l9.989,9.989L29.93,10.078  L19.989,0.137z" />
  </svg>
);

export const Navbar = () => {
  const theme = useTheme();
  const home = !!useRouteMatch('/dashboard');
  const profile = !!useRouteMatch('/profile');

  return (
    <Flex alignItems="center" bg="brand.500" width="7rem" color="lightWhite" direction="column" justifyContent="space-between">
      <Flex w="100%" direction="column">
        <Flex as={RouterLink} to="/dashboard" p={4} mb={4} w="100%" justifyContent="center" h={20}>
          <Text fontSize="md" fontWeight="800">SmashNotes</Text>
        </Flex>
        <Flex w="100%">
          <List w="100%">
            <ListItem h={24} maxW="100%">
              <PseudoBox
                as={RouterLink}
                display="flex"
                to="/dashboard"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                color={home ? 'brand.500' : 'lightWhite'}
                bg={home ? 'brand.50' : 'brand.500'}
                h={20}
                position="relative"
                borderRadius={home ? '10rem 0 0 10rem' : 'none'}
                ml={2}
                _hover={{
                  color: home ? 'brand.500' : theme.colors.brand[200],
                }}
                focus={{
                  color: home ? 'brand.500' : theme.colors.brand[200],
                }}
                transition="color 0.3s ease"
              >
                <Icon w={6} h={6} icon={FaBell} mb={2} mr={2} />
                <Text fontSize="xs" mr={2}>Dashboard</Text>
                <MenuCorner
                  style={{
                    fill: theme.colors.brand[50],
                    opacity: home ? '1' : '0',
                    pointerEvents: 'none',
                    position: 'absolute',
                    right: '-2px',
                    bottom: '97%',
                  }}
                />
                <MenuCorner
                  style={{
                    fill: theme.colors.brand[50],
                    opacity: home ? '1' : '0',
                    pointerEvents: 'none',
                    position: 'absolute',
                    right: '-2px',
                    top: '97%',
                    transform: 'rotate(-90deg)',
                  }}
                />
              </PseudoBox>
            </ListItem>
          </List>
        </Flex>
      </Flex>
      <Box w="100%" h={24} mb={4}>
        <PseudoBox
          as={RouterLink}
          display="flex"
          to="/profile"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color={profile ? 'brand.500' : 'brand.50'}
          bg={profile ? 'brand.50' : 'brand.500'}
          h={20}
          position="relative"
          borderRadius={profile ? '10rem 0 0 10rem' : 'none'}
          ml={2}
          _hover={{
            color: profile ? 'brand.500' : theme.colors.brand[200],
          }}
          focus={{
            color: profile ? 'brand.500' : theme.colors.brand[200],
          }}
          transition="color 0.3s ease"
        >
          <Icon size={6} icon={FaUserCircle} mb={2} />
          <Text fontSize="xs">Profil</Text>
          <MenuCorner
            style={{
              fill: theme.colors.brand[50],
              opacity: profile ? '1' : '0',
              pointerEvents: 'none',
              position: 'absolute',
              right: '-2px',
              bottom: '97%',
            }}
          />
          <MenuCorner
            style={{
              fill: theme.colors.brand[50],
              opacity: profile ? '1' : '0',
              pointerEvents: 'none',
              position: 'absolute',
              right: '-2px',
              top: '97%',
              transform: 'rotate(-90deg)',
            }}
          />
        </PseudoBox>
      </Box>
    </Flex>
  );
};
