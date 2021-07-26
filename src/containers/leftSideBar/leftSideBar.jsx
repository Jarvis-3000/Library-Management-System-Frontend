import React, { useState, useEffect } from "react"

import { Grid, Typography } from "@material-ui/core"
import useStyles from "./styles"

function LeftSideBar() {
    const classes = useStyles()

    const [isExpanded, setIsExpanded] = useState(false)
    const [panel, setPanel] = useState('')
    const [toggleDisplay, setToggleDisplay] = useState({
        display: 'block',
    })
    const [toggleWidth, setToggleWidth] = useState({
        width: '270px'
    })

    const handleExpand = (newPanel) => {
        if (!isExpanded) {
            setPanel(newPanel)
            setIsExpanded(true)
        }
        else {
            if (panel !== newPanel) {
                setPanel(newPanel)
                setIsExpanded(true)
            }
            else {
                setPanel('')
                setIsExpanded(false)
            }
        }
    }

    const handleToggleDisplay = () => {
        if (toggleDisplay.display === 'none') {
            setToggleDisplay({
                display: 'block',
            })

            setToggleWidth({
                width: '280px'
            })
        }
        else {
            setToggleDisplay({
                display: 'none',
            })
            setToggleWidth({
                width: '80px'
            })
        }

    }


    return (
        <div className={classes.root} style={toggleWidth}>

            <Grid container direction="row" className={classes.container}>

                <Grid item container className={classes.itemContainer} style={{ marginBottom: '40px', background: '#D4D2D4', color: '#3C2047' }}>
                    <Grid item className={classes.item} style={toggleDisplay}>
                        <Typography variant="h4">
                            Library
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item} onClick={handleToggleDisplay}>
                        <span className="material-icons" style={{ fontSize: '40px' }}>
                            view_sidebar
                        </span>
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} >
                        <Grid item xs={2} >
                            <span class="material-icons">
                                dashboard
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            Dashboard
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} >
                        <Grid item xs={2} >
                            <span class="material-icons">
                                leaderboard
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            Top Books & Readers
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} onClick={() => handleExpand('books')}>
                        <Grid item xs={2} >
                            <span class="material-icons">
                                library_books
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            Books
                        </Grid>
                        <Grid item xs={1} style={toggleDisplay}>
                            {
                                (panel === 'books')
                                    ?
                                    <span class="material-icons">
                                        expand_less
                                    </span>
                                    :
                                    <span class="material-icons">
                                        expand_more
                                    </span>
                            }
                        </Grid>
                    </Grid>

                    <Grid item container className={classes.expandedContainer} style={{ display: (panel === 'books') ? 'block' : 'none' }}>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    add
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Add New Book
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    filter_list
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Book List
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    filter_list
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Category Wise Books
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} onClick={() => handleExpand('categories')}>
                        <Grid item xs={2} >
                            <span class="material-icons">
                                category
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            Categories
                        </Grid>
                        <Grid item xs={1} style={toggleDisplay}>
                            {
                                (panel === 'categories')
                                    ?
                                    <span class="material-icons">
                                        expand_less
                                    </span>
                                    :
                                    <span class="material-icons">
                                        expand_more
                                    </span>
                            }

                        </Grid>
                    </Grid>

                    <Grid item container className={classes.expandedContainer} style={{ display: (panel === 'categories') ? 'block' : 'none' }}>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    add
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Add category
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    filter_list
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Category List
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} onClick={() => handleExpand('members')}>
                        <Grid item xs={2} >
                            <span class="material-icons">
                                groups
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            Members
                        </Grid>
                        <Grid item xs={1} style={toggleDisplay}>
                            {
                                (panel === 'members')
                                    ?
                                    <span class="material-icons">
                                        expand_less
                                    </span>
                                    :
                                    <span class="material-icons">
                                        expand_more
                                    </span>
                            }

                        </Grid>
                    </Grid>

                    <Grid item container className={classes.expandedContainer} style={{ display: (panel === 'members') ? 'block' : 'none' }}>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    add
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Add New Memeber
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    filter_list
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Member List
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} onClick={() => handleExpand('issue')}>
                        <Grid item xs={2} >
                            <span class="material-icons">
                                library_add
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            Book Issue
                        </Grid>
                        <Grid item xs={1} style={toggleDisplay}>
                            {
                                (panel === 'issue')
                                    ?
                                    <span class="material-icons">
                                        expand_less
                                    </span>
                                    :
                                    <span class="material-icons">
                                        expand_more
                                    </span>
                            }

                        </Grid>
                    </Grid>

                    <Grid item container className={classes.expandedContainer} style={{ display: (panel === 'issue') ? 'block' : 'none' }}>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    touch_app
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Issue A Book
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    event_note
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Issued Books
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} onClick={() => handleExpand('list')}>
                        <Grid item xs={2} >
                            <span class="material-icons">
                                format_list_bulleted
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            My Book List
                            <span
                                style={
                                    {
                                        border: '2px solid',
                                        padding: '1px 7px',
                                        marginLeft: '10px',
                                        borderRadius: '5px',
                                    }}>
                                25
                            </span>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} onClick={() => handleExpand('dept')}>
                        <Grid item xs={2} >
                            <span class="material-icons">
                                adjust
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            Dept and Subject
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} onClick={() => handleExpand('manage')}>
                        <Grid item xs={2} >
                            <span class="material-icons">
                                manage_accounts
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            System Managers
                        </Grid>
                        <Grid item xs={1} style={toggleDisplay}>
                            {
                                (panel === 'manage')
                                    ?
                                    <span class="material-icons">
                                        expand_less
                                    </span>
                                    :
                                    <span class="material-icons">
                                        expand_more
                                    </span>
                            }

                        </Grid>
                    </Grid>

                    <Grid item container className={classes.expandedContainer} style={{ display: (panel === 'manage') ? 'block' : 'none' }}>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    add
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                Add New
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.expandedItemContainer}>
                            <Grid item xs={2}>
                                <span className="material-icons">
                                    groups
                                </span>
                            </Grid>
                            <Grid item xs style={toggleDisplay}>
                                System Runners
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} >
                    <Grid item container className={classes.item} onClick={() => handleExpand('settings')}>
                        <Grid item xs={2} >
                            <span class="material-icons">
                                settings
                            </span>
                        </Grid>
                        <Grid item xs style={toggleDisplay}>
                            General Settings
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>

        </div>
    )
}

export default LeftSideBar