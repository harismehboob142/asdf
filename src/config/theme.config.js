import { MantineTheme, MantineThemeOverride } from "@mantine/core";
export const theme = {
    colorScheme: "light",
    colors: {
        green: [
            "#80D766",
            "#3EAA1E",
            "#3EAA1E",
            "#3EAA1E",
            "#3EAA1E",
            "#3EAA1E",
            "#3EAA1E",
            "#3EAA1E",
            "#3EAA1E",
            "#3EAA1E",
        ],
        dark: [
            "#747B87",
            "#888888",
            "#23262F",
            "#5C5F66",
            "#373A40",
            "#2C2E33",
            "#000000",
            "#23262F",
            "#141517",
            // "#101113",
            "#9CA3AF",
        ],
        blue: ["#3496CD"],
    },
    breakpoints: {
        xs: "30em",
        sm: "48em",
        md: "64em",
        lg: "74em",
        xl: "90em",
    },
    primaryColor: "green",

    globalStyles: (theme) => ({
        a: {
            color: theme.colors.green[0],
            textDecoration: "none",
        },
    }),

    components: {
        Title: {
            styles: (theme) => ({
                root: {
                    color: "black",
                    textUnderlineOffset: 15,
                    textDecorationThickness: 1,
                    textDecorationColor: theme.colors.green,
                    "& .mantine-logo-title": {
                        // [theme.fn.largerThan("sm")]: {
                        fontSize: "50px !important",
                        //  },
                    },
                },
            }),
        },
        Input: {
            variants: {
                unstyled: (theme) => ({
                    root: {
                        border: "1px solid black",
                    },
                }),
            },
        },
        TextInput: {
            styles: (theme) => ({
                root: {
                    ".mantine-TextInput-input": {
                        backgroundColor: "transparent",
                        color: "white",
                        height: "40px",
                        borderRadius: 6,
                        marginTop: 10,
                        marginBottom: 10,
                        border: "1.5px solid #747B87",
                        padding: "10px 12px",
                        fontSize: "14px",

                        // "::placeholder": {
                        //   color: "white",
                        // },
                    },
                    ".mantine-TextInput-label": {
                        color: "white",
                        fontSize: "17.5px",
                    },
                    ".mantine-TextInput-icon": {
                        color: "white",
                    },
                    ".mantine-TextInput-rightSection": {
                        color: "green",
                        backgroundColor: "black",
                        padding: "5px",
                        // height: "30px",
                        width: "46px",
                        border: `2px solid ${theme.colors.green[1]}`,
                        borderRadius: 4,
                    },
                },
            }),
        },
        Textarea: {
            styles: (theme) => ({
                root: {
                    ".mantine-Textarea-input": {
                        color: "white",
                        border: "1px solid #747B87",
                        // fontSize: "16px",
                    },
                },
            }),
        },

        NativeSelect: {
            styles: (theme) => ({
                root: {
                    ".mantine-NativeSelect-input": {
                        color: "white",
                        border: "1px solid #747B87",
                        fontSize: "16px",
                    },
                },
            }),
        },
        Select: {
            variants: {
                unstyled: (theme) => ({
                    root: {
                        backgroundColor: "transparent",
                        color: "white",
                        border: "1.5px solid #747B87",
                        borderRadius: "7px",
                        padding: "0px 0px 0px 10px",
                        "::placeholder": {},
                    },
                    // }),
                }),
            },
        },
        Avatar: {
            styles: (theme) => ({
                root: {
                    ".mantine-Avatar-image": {
                        border: "3px solid green",
                        borderRadius: "100px",
                    },
                },
            }),
        },

        Text: {
            variants: {
                green: (theme) => ({
                    root: {
                        // background: "green",
                        color: "#3EAA1E",
                        fontWeight: 400,
                        fontSize: "14px",
                        font: "Lato",
                        lineHeight: "20px",
                    },
                }),
                white: (theme) => ({
                    root: {
                        color: "#ffff",
                        fontWeight: 500,
                        fontSize: "16px",
                        letterSpacing: "0.3px",
                        lineHeight: "26px",
                        fontFamily: "Lato",
                    },
                }),
                default: (theme) => ({
                    root: {
                        color: "#9CA3AF",
                        fontWeight: 400,
                        fontSize: "14px",
                        font: "Lato",
                        lineHeight: "20px",
                    },
                }),
                red: (theme) => ({
                    root: {
                        color: "#CB281C",
                        fontWeight: 400,
                        fontSize: "14px",
                        font: "Lato",
                        lineHeight: "20px",
                    },
                }),
            },

            styles: (theme) => ({
                root: {
                    "&.mantine-navbar-title": {
                        textTransform: "uppercase",
                        fontSize: "26px",
                        color: "black",
                        fontWeight: 600,
                        fontFamily: "Gothic A1",
                        lineHeight: "32px",
                    },
                    // color: "white",
                    letterSpacing: `0.02rem`,
                    "&.mantine-sidebar-menu": {
                        ...theme.fn.focusStyles(),
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        fontSize: theme.fontSizes.sm,
                        borderRadius: theme.radius.sm,
                        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                        fontWeight: 700,
                        "&:hover": {
                            backgroundColor:
                                theme.colorScheme === "dark"
                                    ? theme.colors.dark[6]
                                    : theme.colors.gray[0],
                        },
                        "&.active, &.active:hover": {
                            backgroundColor: theme.colors.gray,
                            color: theme.colors.blue[8],
                            borderRadius: 12,
                            "& .mantine-Image-root": {
                                color: theme.colors.blue[8],
                            },
                        },
                    },
                },
            }),
        },
        Card: {
            variants: {
                transparent: (theme) => ({
                    root: {
                        backgroundColor: "transparent",
                        minWidth: "18em",
                    },
                }),
            },
        },
        Button: {
            variants: {
                outline: (theme) => ({
                    root: {
                        color: "white",
                    },
                }),
            },
        },
        UnstyledButton: {
            variants: {
                sidebarProfile: (theme) => ({
                    root: {
                        border: '1px solid gray',
                        borderRadius: '20px',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        display: "block",
                        backgroundColor: "white",
                        padding: theme.spacing.md,
                        color: "black",
                    },
                }),
            },
        },
        Navbar: {
            styles: (theme) => ({
                root: {
                    border: '1px solid gray',
                    position: "relative",
                    backgroundColor: "white",
                    color: "black",
                    height: "100dvh",
                    borderTopRightRadius: 24,
                    borderBottomRightRadius: 24,
                },
            }),
        },

        Paper: {
            styles: (theme) => ({
                root: {
                    "&.mantine-navbar-items": {
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        fontSize: "14px",
                        color: "black",
                        backgroundColor: "transparent",
                        padding: `${theme.spacing.xs} 0px`,
                        borderRadius: theme.radius.sm,
                        fontWeight: 700,
                        fontFamily: "Nunito Sans Variable",
                        lineHeight: "16.24px",
                        innerHeight: "16px",
                        outerHeight: "16px",

                        "&:hover": {
                            backgroundColor: "gray",
                            color: "white",

                            // color: "#3496CD",
                        },
                    },
                    "&.mantine-navbar-items-active": {
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        fontSize: "14px",
                        color: "white",
                        backgroundColor: "gray",
                        padding: `${theme.spacing.xs} 0px`,
                        borderRadius: theme.radius.sm,
                        fontWeight: 700,
                        fontFamily: "Nunito Sans Variable",
                        lineHeight: "16.24px",
                        innerHeight: "16px",
                        outerHeight: "16px",

                        "&:hover": {
                            backgroundColor: "gray",
                            color: "white",

                            // color: "#3496CD",
                        },
                    },
                },
            }),
        },
    },
};
