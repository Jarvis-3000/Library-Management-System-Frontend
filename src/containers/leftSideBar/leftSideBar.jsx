import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 280,
        backgroundColor: '#354875',
        color: 'white',
    },

    item: {
        cursor: 'pointer',
    },

    itemText: {
        marginLeft: '0px'
    },

    icon: {
        color: 'white',
        fontSize: 'medium',
    },

    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function LeftSideBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List className={classes.root}>

            <ListItem className={classes.item}>
                <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem className={classes.item}>
                <ListItemText primary="Top Books & Readers" />
            </ListItem>

            {/* Expandable Lists */}

            {
                //Books Expandable List
                <>
                    <ListItem onClick={handleClick} className={classes.item}>
                        <ListItemText primary="Books" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>


                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                </>
            }

            {
                //Books Expandable List
                <>
                    <ListItem onClick={handleClick} className={classes.item}>
                        <ListItemText primary="Books" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>


                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                </>
            }


            {
                //Books Expandable List
                <>
                    <ListItem onClick={handleClick} className={classes.item}>
                        <ListItemText primary="Books" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>


                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                </>
            }


            {
                //Books Expandable List
                <>
                    <ListItem onClick={handleClick} className={classes.item}>
                        <ListItemText primary="Books" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>


                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                </>
            }


            {
                //Books Expandable List
                <>
                    <ListItem onClick={handleClick} className={classes.item}>
                        <ListItemText primary="Books" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>


                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                </>
            }

        </List>
    );
}

export default LeftSideBar