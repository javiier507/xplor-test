'use client';

import { useSession, signOut } from 'next-auth/react';
import NextLink from 'next/link';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Link,
} from '@chakra-ui/react';
import { FiHome, FiMenu, FiChevronDown, FiList } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface LinkItemProps {
    name: string;
    href: string;
    icon: IconType;
}

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: React.ReactNode;
}

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', href: '/', icon: FiHome },
    { name: 'Transactions', href: '/transactions', icon: FiList },
    { name: 'Kiosks', href: '/kiosks', icon: FiList },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={'blue.700'}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={'white'}>
                    Kaas
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} name={link.name} href={link.href} icon={link.icon} />
            ))}
        </Box>
    );
};

const NavItem = ({ name, href, icon }: LinkItemProps) => {
    return (
        <Link
            as={NextLink}
            href={href}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                color={'white'}
                _hover={{
                    bg: 'blue.600',
                }}
            >
                {icon && <Icon mr="4" fontSize="16" as={icon} />}
                {name}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const { data: session } = useSession();
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}
        >
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
                color={'white'}
            >
                Kaas
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <Flex alignItems={'center'}>
                    <Menu id="navbar" isLazy>
                        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                                    <Text fontSize="sm">{session?.user?.name || 'User'}</Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                        >
                            <MenuItem>Profile</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export default function AdminPanelLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
}
