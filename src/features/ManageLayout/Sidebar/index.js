import { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
import {
    Avatar,
    Divider,
    Flex,
    Group,
    Image,
    Navbar,
    Paper,
    ScrollArea,
    Tabs,
    Text,
    Title,
    UnstyledButton,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconDots } from "@tabler/icons-react";
import { Navbartabs } from '../../../constants'

export const Sidebar = () => {

    const [active, setActive] = useState("Selling");

    const isSmallDevice = useMediaQuery('(max-width: 650px)')

    const NavbarItems = Navbartabs.map((item) => (
        <Fragment>
            <Paper className={item.label === active ? "mantine-navbar-items-active" : "mantine-navbar-items"} key={item?.label} onClick={() => setActive(item.label)} to={item.link} component="Link">
                <Flex justify='flex-start' align='center' w='100%' px='xs'>
                    <item.icon />
                    <Text px='md'>{item?.label}</Text>
                </Flex>
            </Paper>
            {item?.label === 'divider' && (<Divider color="white" variant="dotted" size='sm' my='sm' />)}
        </Fragment>
    ))

    return (

        <Fragment>
            {!isSmallDevice && <Flex direction="column" h="100vh">
                <Navbar
                    sx={{ overflow: "auto" }}
                    width={{ sm: 300 }}
                    p="md"

                >
                    <Navbar.Section display='flex' sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text
                            weight='500'
                            size="sm"
                            className='mantine-navbar-title'
                            color="dimmed"
                            mb="xs"
                        >
                            GoldSmith
                        </Text>
                        <Image src='public/assets/images/gold.png' width='20px' />
                    </Navbar.Section>
                    <ScrollArea>
                        <Navbar.Section my='xs'>
                            <Tabs defaultValue='selling' color="cyan">
                                <Tabs.List display="flex" sx={{ justifyContent: "space-around", }}>
                                    <Tabs.Tab value="selling" w='50%'>Selling</Tabs.Tab>
                                    <Tabs.Tab value="livestreaming" w='50%' >Livestreaming</Tabs.Tab>
                                </Tabs.List>
                                <ScrollArea>
                                    <Tabs.Panel value="selling">
                                        <Navbar.Section my='xl' >{NavbarItems}</Navbar.Section>
                                    </Tabs.Panel>
                                    <Tabs.Panel value="livestreaming">
                                        <Navbar.Section>{ }</Navbar.Section>
                                    </Tabs.Panel>
                                </ScrollArea>
                            </Tabs>
                        </Navbar.Section>
                    </ScrollArea>

                    <UnstyledButton variant="sidebarProfile">
                        <Group>
                            <Avatar src="assets/images/profile.png" size="lg" />
                            <div style={{ flex: 1 }}>
                                <Title size="sm">K Fisher</Title>
                                <Text size="sm" weight='500'>
                                    {"View Profile"}
                                </Text>
                            </div>
                            <IconDots color="green" stroke='1.5' />
                        </Group>
                    </UnstyledButton>
                </Navbar>
            </Flex >}
        </Fragment>
    );
}
